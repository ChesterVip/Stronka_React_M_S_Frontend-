import { useCallback, useEffect, useMemo, useState } from 'react'
import { apiFetch } from '@/utils/api'
import { gatherClientMetadata } from '@/utils/clientMetadata'

type AuthStoragePayload = {
  token: string
  expiresAt: string
  email: string
}

type VerifyResponse = {
  accessToken: string
  expiresAt: string
  user: {
    id: string
    email: string
    firstName?: string
    lastName?: string
  }
}

type RequestCodePayload = {
  email: string
  refreshUrl?: string
  firstName?: string
  lastName?: string
  phone?: string
  company?: string
  preferredLanguage?: string
}

type RequestCodeResponse = {
  message: string
  codeSent: boolean
  existingTokenValid: boolean
  validUntil?: string
  resentExistingToken?: boolean
}

const STORAGE_KEY = 'ms-auth'

const isExpired = (dateIso: string | null) => {
  if (!dateIso) return true
  return new Date(dateIso).getTime() <= Date.now()
}

const readFromStorage = (): AuthStoragePayload | null => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return null
    }
    const parsed = JSON.parse(raw) as AuthStoragePayload
    if (!parsed.token || !parsed.expiresAt || isExpired(parsed.expiresAt)) {
      window.localStorage.removeItem(STORAGE_KEY)
      return null
    }
    return parsed
  } catch {
    window.localStorage.removeItem(STORAGE_KEY)
    return null
  }
}

export const useOneTimeAuth = () => {
  const [token, setToken] = useState<string | null>(null)
  const [email, setEmail] = useState<string | null>(null)
  const [expiresAt, setExpiresAt] = useState<string | null>(null)
  const [status, setStatus] = useState<'idle' | 'loading' | 'error' | 'success'>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const persistAuth = useCallback((payload: AuthStoragePayload) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload))
    setToken(payload.token)
    setEmail(payload.email)
    setExpiresAt(payload.expiresAt)
  }, [])

  const clearAuth = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY)
    setToken(null)
    setEmail(null)
    setExpiresAt(null)
  }, [])

  const logout = useCallback(() => {
    clearAuth()
    setStatus('idle')
    setErrorMessage(null)
  }, [clearAuth])

  useEffect(() => {
    const stored = readFromStorage()
    if (stored) {
      setToken(stored.token)
      setEmail(stored.email)
      setExpiresAt(stored.expiresAt)
    }
  }, [])

  useEffect(() => {
    if (!token || !expiresAt) {
      return
    }

    const diff = new Date(expiresAt).getTime() - Date.now()
    if (diff <= 0) {
      logout()
      return
    }

    const timerId = window.setTimeout(() => {
      logout()
    }, diff)

    return () => window.clearTimeout(timerId)
  }, [token, expiresAt, logout])

  const requestCode = useCallback(
    async (payload: RequestCodePayload): Promise<RequestCodeResponse> => {
      setStatus('loading')
      setErrorMessage(null)
      try {
        const metadata = gatherClientMetadata()
        const sanitize = (value?: string | null) => {
          if (!value) {
            return undefined
          }
          const trimmed = value.trim()
          return trimmed.length > 0 ? trimmed : undefined
        }
        const refreshUrl =
          payload.refreshUrl ??
          (typeof window !== 'undefined' && window.location ? window.location.href : undefined)
        const sanitizedRefreshUrl = sanitize(refreshUrl)
        const normalizedPhone = sanitize(payload.phone)?.replace(/\s+/g, ' ')

        const bodyPayload = {
          email: payload.email.trim(),
          refreshUrl: sanitizedRefreshUrl,
          firstName: sanitize(payload.firstName),
          lastName: sanitize(payload.lastName),
          phone: normalizedPhone,
          company: sanitize(payload.company),
          language: sanitize(payload.preferredLanguage) ?? metadata.language,
          country: metadata.country,
          deviceType: metadata.deviceType,
          browserName: metadata.browserName,
          browserVersion: metadata.browserVersion,
          osName: metadata.osName,
          osVersion: metadata.osVersion
        }

        const response = await apiFetch<RequestCodeResponse>('/auth/request-code', {
          method: 'POST',
          body: JSON.stringify(bodyPayload)
        })

        setStatus('success')

        return response
      } catch (error) {
        setStatus('error')
        setErrorMessage(error instanceof Error ? error.message : 'Nie udało się wysłać kodu.')
        throw error
      }
    },
    []
  )

  const verifyCode = useCallback(async (userEmail: string, code: string) => {
    setStatus('loading')
    setErrorMessage(null)
    try {
      const result = await apiFetch<VerifyResponse>('/auth/verify', {
        method: 'POST',
        body: JSON.stringify({ email: userEmail, code })
      })

      persistAuth({
        token: result.accessToken,
        email: result.user.email,
        expiresAt: result.expiresAt
      })

      setStatus('success')
      return result
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Nie udało się zweryfikować kodu.')
      throw error
    }
  }, [persistAuth])

  const isAuthenticated = useMemo(() => {
    if (!token || !expiresAt) {
      return false
    }
    return !isExpired(expiresAt)
  }, [token, expiresAt])

  return {
    token,
    email,
    expiresAt,
    status,
    errorMessage,
    isAuthenticated,
    requestCode,
    verifyCode,
    logout,
    resetStatus: () => {
      setStatus('idle')
      setErrorMessage(null)
    }
  }
}
