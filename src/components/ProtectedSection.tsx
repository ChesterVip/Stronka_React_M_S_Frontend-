import { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@/components/ui/Button'
import { useLanguage } from '@/hooks/useLanguage'
import { useAuthModal } from '@/context/AuthModalContext'

type SectionNavKey = 'nav_experience' | 'nav_education' | 'nav_tech'

interface ProtectedSectionProps {
  sectionKey: SectionNavKey
  children: ReactNode
}

const ProtectedSection = ({ sectionKey, children }: ProtectedSectionProps) => {
  const { auth, openAuthModal } = useAuthModal()
  const { isAuthenticated, email: authenticatedEmail } = auth
  const { t } = useLanguage()
  const navigate = useNavigate()

  if (isAuthenticated) {
    return <>{children}</>
  }

  const sectionLabel = t[sectionKey]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-black px-4 py-20">
      <div className="mx-auto flex max-w-6xl flex-col-reverse items-center gap-16 lg:flex-row lg:items-stretch">
        <div className="w-full max-w-xl">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 shadow-xl backdrop-blur">
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300">
                <i className="fas fa-unlock-alt text-xl"></i>
              </div>
              <div>
                <h1 className="text-3xl font-semibold text-white">{sectionLabel}</h1>
                <p className="text-sm text-slate-300">
                  {t.restricted_description_prefix} {sectionLabel} {t.restricted_description_suffix}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-slate-300">
                {t.restricted_hint}
              </p>
              <p className="text-xs text-slate-400">
                {t.restricted_cta_details}
              </p>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="primary"
                  className="flex-1"
                  onClick={() =>
                    openAuthModal({
                      sectionLabel,
                      prefillEmail: authenticatedEmail ?? undefined
                    })
                  }
                >
                  <i className="fas fa-unlock mr-2"></i>
                  {t.restricted_button}
                </Button>
                <Button
                  variant="secondary"
                  className="flex-1"
                  onClick={() => navigate('/')}
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  {t.restricted_back}
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-slate-900/80 p-10 text-left shadow-xl backdrop-blur">
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl"></div>
          <div className="flex items-center gap-4 text-emerald-300">
            <i className="fas fa-lock text-4xl"></i>
            <div>
              <p className="font-mono text-sm uppercase tracking-wide text-emerald-200/80">
                {t.restricted_title}
              </p>
              <h2 className="text-2xl font-bold text-white">{sectionLabel}</h2>
            </div>
          </div>

          <div className="mt-6 space-y-4 text-sm text-slate-200">
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
                    <div className="flex items-center gap-3 text-emerald-100">
                      <i className="fas fa-user-shield"></i>
                      <span>{t.restricted_title}</span>
                    </div>
                    <p className="mt-2 text-xs text-emerald-200/80">
                      {t.restricted_login_section_intro}{' '}
                      <span className="font-semibold text-white">{sectionLabel}</span>
                    </p>
                 </div>

                <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <i className="fas fa-check-circle text-emerald-400"></i>
                <span>{t.restricted_benefit_insights}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check-circle text-emerald-400"></i>
                <span>{t.restricted_benefit_materials}</span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-check-circle text-emerald-400"></i>
                <span>{t.restricted_benefit_direct}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProtectedSection
