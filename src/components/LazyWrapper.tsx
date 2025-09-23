import { ReactNode, Suspense, useState, useEffect } from 'react'
import { useNetworkSpeed } from '@/hooks/useNetworkSpeed'
import LazyLoadingSkeleton from '@/components/ui/LazyLoadingSkeleton'

interface LazyWrapperProps {
  children: ReactNode
  fallback?: ReactNode
  minLoadTime?: number
  skeletonType?: 'page' | 'card' | 'list' | 'form' | 'custom'
  customSkeleton?: ReactNode
}

const LazyWrapper = ({ 
  children, 
  fallback,
  minLoadTime = 800,
  skeletonType = 'page',
  customSkeleton
}: LazyWrapperProps) => {
  const [showContent, setShowContent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const networkSpeed = useNetworkSpeed()
  
  useEffect(() => {
    // Adaptive loading time based on network speed
    const adaptiveLoadTime = networkSpeed === 'slow' ? minLoadTime * 1.5 :
                            networkSpeed === 'fast' ? minLoadTime * 0.7 :
                            minLoadTime

    const timer = setTimeout(() => {
      setShowContent(true)
      // Small delay for smooth transition
      setTimeout(() => setIsLoading(false), 150)
    }, adaptiveLoadTime)

    return () => clearTimeout(timer)
  }, [minLoadTime, networkSpeed])

  const getDefaultFallback = () => {
    if (customSkeleton) return customSkeleton
    
    return (
      <div className="min-h-screen">
        <LazyLoadingSkeleton 
          type={skeletonType}
          animate={true}
          showShimmer={true}
        />
      </div>
    )
  }

  return (
    <Suspense fallback={fallback || getDefaultFallback()}>
      <div 
        className={`transition-all duration-300 ease-out ${
          showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
        style={{
          filter: isLoading ? 'blur(1px)' : 'none'
        }}
      >
        {children}
      </div>
    </Suspense>
  )
}

export default LazyWrapper