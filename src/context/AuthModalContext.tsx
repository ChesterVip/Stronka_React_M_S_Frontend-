import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react'
import { useOneTimeAuth } from '@/hooks/useOneTimeAuth'

export type AuthModalOptions = {
  sectionLabel?: string
  prefillEmail?: string
  onSuccess?: () => void
}

type AuthModalContextValue = {
  isOpen: boolean
  openAuthModal: (options?: AuthModalOptions) => void
  closeAuthModal: () => void
  options?: AuthModalOptions
  auth: ReturnType<typeof useOneTimeAuth>
}

const AuthModalContext = createContext<AuthModalContextValue | undefined>(undefined)

type AuthModalProviderProps = {
  children: ReactNode
  auth: ReturnType<typeof useOneTimeAuth>
}

export const AuthModalProvider = ({ children, auth }: AuthModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [options, setOptions] = useState<AuthModalOptions | undefined>()

  const openAuthModal = useCallback(
    (opts?: AuthModalOptions) => {
      auth.resetStatus()
      setOptions(opts)
      setIsOpen(true)
    },
    [auth]
  )

  const closeAuthModal = useCallback(() => {
    setIsOpen(false)
    setOptions(undefined)
    auth.resetStatus()
  }, [auth])

  const value = useMemo<AuthModalContextValue>(
    () => ({
      isOpen,
      openAuthModal,
      closeAuthModal,
      options,
      auth
    }),
    [isOpen, openAuthModal, closeAuthModal, options, auth]
  )

  return <AuthModalContext.Provider value={value}>{children}</AuthModalContext.Provider>
}

export const useAuthModal = () => {
  const context = useContext(AuthModalContext)
  if (!context) {
    throw new Error('useAuthModal must be used within AuthModalProvider')
  }
  return context
}
