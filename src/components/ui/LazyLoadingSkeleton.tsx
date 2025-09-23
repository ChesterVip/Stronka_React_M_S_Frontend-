import { useState, useEffect } from 'react'
import { cn } from '@/utils/cn'

interface LazyLoadingSkeletonProps {
  type: 'page' | 'card' | 'list' | 'form' | 'hero' | 'nav' | 'custom'
  animate?: boolean
  showShimmer?: boolean
  rows?: number
  className?: string
}

const LazyLoadingSkeleton = ({ 
  type, 
  animate = true, 
  showShimmer = true,
  rows = 3,
  className 
}: LazyLoadingSkeletonProps) => {
  const [shimmerPhase, setShimmerPhase] = useState(0)

  useEffect(() => {
    if (!showShimmer) return

    const interval = setInterval(() => {
      setShimmerPhase(prev => (prev + 1) % 3)
    }, 1000)

    return () => clearInterval(interval)
  }, [showShimmer])

  const baseClasses = cn(
    "bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800",
    animate && "animate-pulse",
    showShimmer && "bg-[length:200%_100%] animate-shimmer",
    className
  )

  const SkeletonElement = ({ 
    width = "100%", 
    height = "1rem", 
    className: elementClassName,
    variant = "default"
  }: {
    width?: string
    height?: string
    className?: string
    variant?: 'default' | 'circle' | 'rounded'
  }) => {
    const variantClasses = {
      default: "rounded-md",
      circle: "rounded-full",
      rounded: "rounded-lg"
    }

    return (
      <div
        className={cn(
          baseClasses,
          variantClasses[variant],
          elementClassName
        )}
        style={{ 
          width, 
          height,
          opacity: showShimmer ? 0.7 + (shimmerPhase * 0.1) : 0.7
        }}
      />
    )
  }

  const renderPageSkeleton = () => (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation Skeleton */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <SkeletonElement width="40px" height="40px" variant="circle" />
            <div className="hidden md:flex space-x-6">
              {[...Array(6)].map((_, i) => (
                <SkeletonElement key={i} width="80px" height="20px" />
              ))}
            </div>
            <div className="flex space-x-2">
              <SkeletonElement width="60px" height="32px" variant="rounded" />
              <SkeletonElement width="60px" height="32px" variant="rounded" />
            </div>
          </div>
        </div>
      </div>

      {/* Hero Skeleton */}
      <div className="pt-16 min-h-screen flex items-center justify-center tech-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Title */}
            <div className="space-y-4">
              <SkeletonElement width="400px" height="3rem" className="mx-auto" />
              <SkeletonElement width="600px" height="2.5rem" className="mx-auto" />
            </div>
            
            {/* Subtitle */}
            <SkeletonElement width="80%" height="1.5rem" className="mx-auto" />
            
            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3">
              {[...Array(5)].map((_, i) => (
                <SkeletonElement 
                  key={i} 
                  width="120px" 
                  height="32px" 
                  variant="rounded" 
                />
              ))}
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <SkeletonElement width="180px" height="48px" variant="rounded" />
              <SkeletonElement width="160px" height="48px" variant="rounded" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderCardSkeleton = () => (
    <div className="card-hover p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <SkeletonElement width="48px" height="48px" variant="circle" />
        <div className="flex-1 space-y-2">
          <SkeletonElement width="60%" height="1.25rem" />
          <SkeletonElement width="40%" height="1rem" />
        </div>
      </div>
      <div className="space-y-2">
        {[...Array(rows)].map((_, i) => (
          <SkeletonElement 
            key={i}
            width={i === rows - 1 ? "70%" : "100%"} 
            height="1rem" 
          />
        ))}
      </div>
      <div className="flex space-x-2 pt-2">
        <SkeletonElement width="100px" height="32px" variant="rounded" />
        <SkeletonElement width="80px" height="32px" variant="rounded" />
      </div>
    </div>
  )

  const renderListSkeleton = () => (
    <div className="space-y-4">
      {[...Array(rows)].map((_, i) => (
        <div key={i} className="flex items-center space-x-4 p-4 card-hover">
          <SkeletonElement width="40px" height="40px" variant="circle" />
          <div className="flex-1 space-y-2">
            <SkeletonElement width="70%" height="1rem" />
            <SkeletonElement width="50%" height="0.875rem" />
          </div>
          <SkeletonElement width="24px" height="24px" />
        </div>
      ))}
    </div>
  )

  const renderFormSkeleton = () => (
    <div className="max-w-2xl mx-auto space-y-6 p-6">
      <SkeletonElement width="60%" height="2rem" className="mb-8" />
      
      {[...Array(4)].map((_, i) => (
        <div key={i} className="space-y-2">
          <SkeletonElement width="30%" height="1rem" />
          <SkeletonElement width="100%" height="3rem" variant="rounded" />
        </div>
      ))}
      
      <div className="space-y-2">
        <SkeletonElement width="20%" height="1rem" />
        <SkeletonElement width="100%" height="120px" variant="rounded" />
      </div>
      
      <SkeletonElement width="150px" height="48px" variant="rounded" className="mt-8" />
    </div>
  )

  const renderHeroSkeleton = () => (
    <div className="min-h-screen flex items-center justify-center tech-grid">
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <SkeletonElement width="500px" height="4rem" className="mx-auto" />
          <SkeletonElement width="300px" height="2rem" className="mx-auto" />
        </div>
        <SkeletonElement width="600px" height="1.5rem" className="mx-auto" />
        <div className="flex justify-center gap-4">
          <SkeletonElement width="160px" height="48px" variant="rounded" />
          <SkeletonElement width="140px" height="48px" variant="rounded" />
        </div>
      </div>
    </div>
  )

  const skeletonTypes = {
    page: renderPageSkeleton,
    card: renderCardSkeleton,
    list: renderListSkeleton,
    form: renderFormSkeleton,
    hero: renderHeroSkeleton,
    nav: () => (
      <div className="flex items-center justify-between p-4">
        <SkeletonElement width="100px" height="32px" />
        <div className="flex space-x-4">
          {[...Array(5)].map((_, i) => (
            <SkeletonElement key={i} width="80px" height="20px" />
          ))}
        </div>
      </div>
    ),
    custom: () => <SkeletonElement />
  }

  return (
    <div className={cn("animate-fade-in", className)}>
      {skeletonTypes[type]()}
    </div>
  )
}

// Add custom CSS for shimmer effect
const shimmerStyles = `
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.animate-shimmer {
  animation: shimmer 2s infinite linear;
}
`

// Inject styles
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = shimmerStyles
  document.head.appendChild(style)
}

export default LazyLoadingSkeleton