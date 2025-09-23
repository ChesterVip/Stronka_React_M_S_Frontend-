import { ReactNode, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDataSaver } from '@/hooks/useNetworkSpeed'

interface PageTransitionProps {
  children: ReactNode
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation()
  const [isVisible, setIsVisible] = useState(true)
  const [key, setKey] = useState(location.pathname)
  const { shouldReduceAnimations } = useDataSaver()

  useEffect(() => {
    if (location.pathname !== key) {
      // Page is changing
      setIsVisible(false)
      
      const timer = setTimeout(() => {
        setKey(location.pathname)
        setIsVisible(true)
      }, shouldReduceAnimations ? 100 : 150)

      return () => clearTimeout(timer)
    }
  }, [location.pathname, key, shouldReduceAnimations])

  return (
    <div 
      className={`transition-all duration-300 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-4'
      }`}
      key={key}
    >
      {children}
    </div>
  )
}

export default PageTransition