import { FormEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import Button from '@/components/ui/Button'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { useAuthModal } from '@/context/AuthModalContext'

const PHONE_REGEX = /^[\d+\s()-]{5,20}$/
const LAST_EMAIL_STORAGE_KEY = 'ms-auth-last-email'

const sanitizeEmail = (value?: string | null): string => {
  if (!value) {
    return ''
  }
  return value.trim()
}

const SecureLoginModal = () => {
  const { t, language } = useLanguage()
  const { isOpen, closeAuthModal, options, auth } = useAuthModal()
  const {
    status: authStatus,
    errorMessage: authError,
    requestCode,
    verifyCode,
    resetStatus,
    email: authenticatedEmail,
    isAuthenticated
  } = auth

  const [loginStep, setLoginStep] = useState<'request' | 'verify'>('request')
  const [requestMode, setRequestMode] = useState<'new' | 'existing'>('new')
  const [loginEmail, setLoginEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phone, setPhone] = useState('')
  const [company, setCompany] = useState('')
  const [requestedEmail, setRequestedEmail] = useState('')
  const [suggestedEmail, setSuggestedEmail] = useState('')
  const [emailInitialized, setEmailInitialized] = useState(false)
  const [loginCode, setLoginCode] = useState('')
  const [loginFeedback, setLoginFeedback] = useState<string | null>(null)
  const [contextLabel, setContextLabel] = useState<string | null>(null)
  const wasOpenRef = useRef(false)

  const fallbackEmail = useMemo(() => {
    const candidates = [
      requestedEmail,
      options?.prefillEmail,
      authenticatedEmail,
      suggestedEmail
    ]

    for (const candidate of candidates) {
      const sanitized = sanitizeEmail(candidate)
      if (sanitized) {
        return sanitized
      }
    }

    return ''
  }, [requestedEmail, options, authenticatedEmail, suggestedEmail])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    try {
      const stored = window.localStorage.getItem(LAST_EMAIL_STORAGE_KEY)
      const sanitized = sanitizeEmail(stored ?? '')
      if (sanitized) {
        setSuggestedEmail(sanitized)
      }
    } catch {
      // Ignorujemy błędy dostępu do localStorage (np. tryb prywatny)
    }
  }, [])

  const formatDateTime = useCallback(
    (iso?: string | null) => {
      if (!iso) {
        return null
      }
      try {
        const locale = language === 'de' ? 'de-CH' : 'pl-PL'
        return new Intl.DateTimeFormat(locale, {
          dateStyle: 'short',
          timeStyle: 'short'
        }).format(new Date(iso))
      } catch {
        return new Date(iso).toLocaleString()
      }
    },
    [language]
  )

  const rememberEmail = useCallback((value: string) => {
    const sanitized = sanitizeEmail(value)
    if (!sanitized) {
      return sanitized
    }

    setRequestedEmail(sanitized)
    setSuggestedEmail(sanitized)

    try {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(LAST_EMAIL_STORAGE_KEY, sanitized)
      }
    } catch {
      // Ignorujemy błędy magazynu
    }

    return sanitized
  }, [])

  const handleClose = () => {
    closeAuthModal()
    setLoginFeedback(null)
    setLoginCode('')
    setRequestMode('new')
    setFirstName('')
    setLastName('')
    setPhone('')
    setCompany('')
    setRequestedEmail('')
    setLoginEmail('')
    setEmailInitialized(false)
    wasOpenRef.current = false
  }

  useEffect(() => {
    if (!isOpen) {
      wasOpenRef.current = false
      return
    }

    if (wasOpenRef.current) {
      return
    }

    wasOpenRef.current = true

    setLoginStep('request')
    setLoginFeedback(null)
    setLoginCode('')
    setFirstName('')
    setLastName('')
    setPhone('')
    setCompany('')
    setContextLabel(options?.sectionLabel ?? null)

    const presetEmail =
      sanitizeEmail(options?.prefillEmail) ||
      sanitizeEmail(authenticatedEmail) ||
      suggestedEmail

    setRequestedEmail(presetEmail)
    setRequestMode(presetEmail ? 'existing' : 'new')
    setEmailInitialized(false)

    resetStatus()
  }, [isOpen, options, authenticatedEmail, resetStatus, suggestedEmail])

  useEffect(() => {
    if (isOpen && isAuthenticated) {
      handleClose()
    }
  }, [isOpen, isAuthenticated])

  useEffect(() => {
    if (!isOpen) {
      return
    }
    setContextLabel(options?.sectionLabel ?? null)
  }, [isOpen, options])

  useEffect(() => {
    if (!isOpen) {
      setEmailInitialized(false)
      return
    }

    if (!emailInitialized && fallbackEmail) {
      setLoginEmail((current) => {
        const sanitizedCurrent = sanitizeEmail(current)
        if (sanitizedCurrent) {
          return current
        }
        return fallbackEmail
      })
      setEmailInitialized(true)
    }
  }, [isOpen, fallbackEmail, emailInitialized])

  const handleRequestCodeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const email = loginEmail.trim() || fallbackEmail

    if (!email) {
      setLoginFeedback(t.restricted_login_missing_email)
      return
    }

    const currentUrl =
      typeof window !== 'undefined' && window.location ? window.location.href : undefined
    const trimmedFirstName = firstName.trim()
    const trimmedLastName = lastName.trim()
    const trimmedCompany = company.trim()
    const trimmedPhone = phone.trim()
    const normalizedPhone = trimmedPhone ? trimmedPhone.replace(/\s+/g, ' ') : ''
    const isNewUserFlow = requestMode === 'new'

    if (isNewUserFlow) {
      if (trimmedFirstName.length < 2 || trimmedLastName.length < 2) {
        setLoginFeedback(t.restricted_login_missing_details)
        return
      }

      if (normalizedPhone && !PHONE_REGEX.test(normalizedPhone)) {
        setLoginFeedback(t.restricted_login_phone_invalid)
        return
      }
    }

    setLoginFeedback(null)

    const normalizedEmail = rememberEmail(email) || email
    setLoginEmail(normalizedEmail)
    const emailForApi = normalizedEmail.toLowerCase()

    try {
      const response = await requestCode({
        email: emailForApi,
        refreshUrl: currentUrl,
        firstName: isNewUserFlow ? trimmedFirstName : undefined,
        lastName: isNewUserFlow ? trimmedLastName : undefined,
        company: isNewUserFlow && trimmedCompany ? trimmedCompany : undefined,
        phone: isNewUserFlow && normalizedPhone ? normalizedPhone : undefined,
        preferredLanguage: language
      })
      const formattedDate = formatDateTime(response.validUntil)

      if (response.existingTokenValid) {
        setLoginStep('verify')
        setLoginCode('')
        setLoginFeedback(
          formattedDate
            ? t.restricted_login_existing_token.replace('{date}', formattedDate)
            : t.restricted_login_existing_token_no_date
        )
      } else if (response.codeSent) {
        setLoginStep('verify')
        setLoginCode('')
        setLoginFeedback(
          formattedDate
            ? t.restricted_login_code_sent_with_expiry.replace('{date}', formattedDate)
            : t.restricted_login_code_sent
        )
      } else {
        setLoginFeedback(t.restricted_login_generic_error)
      }
      setRequestMode('existing')
      if (isNewUserFlow) {
        setFirstName('')
        setLastName('')
        setPhone('')
        setCompany('')
      }
    } catch (error) {
      const message = error instanceof Error ? error.message : ''
      if (message.includes('Nie można utworzyć konta')) {
        setRequestMode('new')
        setLoginStep('request')
        setLoginFeedback(t.restricted_login_new_user_required)
        return
      }

      setLoginFeedback(message || t.restricted_login_generic_error)
    }
  }

  const handleVerifyCodeSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const email = loginEmail.trim() || fallbackEmail
    const code = loginCode.trim()

    if (!email || !code) {
      setLoginFeedback(t.restricted_login_code_missing)
      return
    }

    try {
      const normalizedEmail = rememberEmail(email) || email
      setLoginEmail(normalizedEmail)
      await verifyCode(normalizedEmail.toLowerCase(), code)
      setLoginFeedback(null)
      options?.onSuccess?.()
      handleClose()
    } catch (error) {
      setLoginFeedback(
        error instanceof Error ? error.message : t.restricted_login_verify_error
      )
    }
  }

  const handleResendCode = async () => {
    const email = loginEmail.trim() || fallbackEmail

    if (!email) {
      setLoginFeedback(t.restricted_login_missing_email)
      return
    }

    const normalizedEmail = rememberEmail(email) || email
    setLoginEmail(normalizedEmail)

    try {
      const response = await requestCode({
        email: normalizedEmail.toLowerCase(),
        preferredLanguage: language
      })
      const formattedDate = formatDateTime(response.validUntil)
      setLoginFeedback(
        formattedDate
          ? t.restricted_login_code_sent_with_expiry.replace('{date}', formattedDate)
          : t.restricted_login_code_resent
      )
      setRequestMode('existing')
    } catch (error) {
      setLoginFeedback(
        error instanceof Error ? error.message : t.restricted_login_generic_error
      )
    }
  }

  const sectionInfo = useMemo(() => {
    if (!contextLabel) {
      return null
    }
    return (
      <div className="mb-4 rounded-lg border border-blue-500/20 bg-blue-500/10 p-3 text-sm text-blue-100">
        <i className="fas fa-folder-open mr-2"></i>
        {t.restricted_login_section_intro}{' '}
        <span className="font-semibold text-white">{contextLabel}</span>
      </div>
    )
  }, [contextLabel, t])

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4 py-10 backdrop-blur-sm overscroll-contain sm:py-16">
      <div className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-gray-700 bg-gray-900/95 p-6 shadow-2xl touch-pan-y">
        <button
          type="button"
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
          aria-label={t.restricted_close_label}
        >
          <i className="fas fa-times"></i>
        </button>

        <h2 className="mb-2 text-2xl font-bold text-white">{t.restricted_title}</h2>
        <p className="mb-4 text-sm text-gray-400">
          {loginStep === 'request'
            ? requestMode === 'new'
              ? t.restricted_login_new_request_hint
              : t.restricted_login_request_hint
            : t.restricted_login_verify_hint}
        </p>
        {sectionInfo}

        {loginStep === 'request' && (
          <div className="mb-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
              {t.restricted_login_mode_label}
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={() => setRequestMode('new')}
                aria-pressed={requestMode === 'new'}
                className={`flex-1 rounded-lg border px-4 py-3 text-left text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  requestMode === 'new'
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-600 bg-gray-800 text-gray-200 hover:border-blue-500 hover:text-white'
                }`}
              >
                <span className="block">{t.restricted_login_new_option}</span>
              </button>
              <button
                type="button"
                onClick={() => setRequestMode('existing')}
                aria-pressed={requestMode === 'existing'}
                className={`flex-1 rounded-lg border px-4 py-3 text-left text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  requestMode === 'existing'
                    ? 'border-blue-500 bg-blue-500/20 text-white'
                    : 'border-gray-600 bg-gray-800 text-gray-200 hover:border-blue-500 hover:text-white'
                }`}
              >
                <span className="block">{t.restricted_login_existing_option}</span>
              </button>
            </div>
            <p className="mt-2 text-xs text-gray-500">
              {requestMode === 'new'
                ? t.restricted_login_new_mode_hint
                : t.restricted_login_existing_mode_hint}
            </p>
          </div>
        )}

        {loginStep === 'request' ? (
          <form onSubmit={handleRequestCodeSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                {t.restricted_login_email_label}
              </label>
              <input
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
                type="email"
                required
                maxLength={100}
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={t.restricted_login_email_placeholder}
              />
            </div>

            {requestMode === 'new' && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    {t.restricted_login_first_name_label}
                  </label>
                  <input
                    value={firstName}
                    onChange={(event) => setFirstName(event.target.value)}
                    type="text"
                    minLength={2}
                    maxLength={50}
                    required
                    autoComplete="given-name"
                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t.restricted_login_first_name_placeholder}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    {t.restricted_login_last_name_label}
                  </label>
                  <input
                    value={lastName}
                    onChange={(event) => setLastName(event.target.value)}
                    type="text"
                    minLength={2}
                    maxLength={50}
                    required
                    autoComplete="family-name"
                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t.restricted_login_last_name_placeholder}
                  />
                </div>
              </div>
            )}

            {requestMode === 'new' && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    {t.restricted_login_phone_label}
                  </label>
                  <input
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    type="tel"
                    maxLength={20}
                    autoComplete="tel"
                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t.restricted_login_phone_placeholder}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    {t.restricted_login_company_label}
                  </label>
                  <input
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    type="text"
                    maxLength={100}
                    autoComplete="organization"
                    className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={t.restricted_login_company_placeholder}
                  />
                </div>
              </div>
            )}

            <p className="text-xs text-gray-500">
              {requestMode === 'new' ? t.restricted_login_new_hint : t.restricted_login_email_hint}
            </p>
            <Button type="submit" variant="primary" loading={authStatus === 'loading'}>
              {t.restricted_form_send_code}
            </Button>
          </form>
        ) : (
          <form onSubmit={handleVerifyCodeSubmit} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">
                {t.restricted_login_email_label}
              </label>
              <input
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
                type="email"
                required
                maxLength={100}
                autoComplete="email"
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={fallbackEmail || t.restricted_login_email_placeholder}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">{t.restricted_form_code_label}</label>
              <input
                value={loginCode}
                onChange={(event) => setLoginCode(event.target.value.replace(/[^0-9]/g, ''))}
                type="text"
                inputMode="numeric"
                autoComplete="one-time-code"
                maxLength={8}
                required
                className="w-full rounded-lg border border-gray-600 bg-gray-800 px-4 py-3 text-white tracking-widest focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="123456"
              />
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex flex-1 flex-col gap-2 sm:flex-row">
                <Button
                  type="submit"
                  variant="primary"
                  loading={authStatus === 'loading'}
                  className="sm:flex-1"
                >
                  {t.restricted_form_login}
                </Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={handleResendCode}
                  disabled={authStatus === 'loading'}
                  className="sm:flex-1"
                >
                  {t.restricted_form_resend}
                </Button>
              </div>
              <button
                type="button"
                onClick={() => {
                  setLoginStep('request')
                  setLoginFeedback(null)
                  resetStatus()
                }}
                className="text-sm text-gray-400 transition-colors hover:text-gray-200"
              >
                {t.restricted_form_change_email}
              </button>
            </div>
          </form>
        )}

        {authStatus === 'loading' && (
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-300">
            <LoadingSpinner />
            <span>{t.restricted_form_processing}</span>
          </div>
        )}

        {(loginFeedback || authError) && (
          <p
            className={`mt-4 text-sm ${
              authStatus === 'error' ? 'text-red-400' : 'text-emerald-400'
            }`}
          >
            {loginFeedback ?? authError}
          </p>
        )}
      </div>
    </div>
  )
}

export default SecureLoginModal
