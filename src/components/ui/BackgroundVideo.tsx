import { useState, useEffect, useRef } from 'react'

interface BackgroundVideoProps {
  desktopSrc: string
  mobileSrc?: string
  poster?: string
  className?: string
  overlay?: boolean
  overlayOpacity?: number
}

/**
 * Responsywny komponent video tła z adaptacyjnym ładowaniem
 * - Na mobile: ładuje niższą jakość lub nie ładuje wcale
 * - Na desktop: ładuje pełną jakość z lazy loading
 * - Optymalizuje wydajność przez preload i intersection observer
 */
const BackgroundVideo = ({
  desktopSrc,
  mobileSrc,
  poster,
  className = '',
  overlay = true,
  overlayOpacity = 0.6
}: BackgroundVideoProps) => {
  const [shouldLoad, setShouldLoad] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Detekcja urządzenia mobilnego
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      setIsMobile(mobile)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Intersection Observer dla lazy loading
  useEffect(() => {
    if (!containerRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoad) {
            setShouldLoad(true)
          }
        })
      },
      { threshold: 0.1, rootMargin: '50px' }
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [shouldLoad])

  // Obsługa ładowania video
  useEffect(() => {
    if (!shouldLoad || !videoRef.current) return

    const video = videoRef.current
    
    const handleCanPlay = () => {
      setIsLoaded(true)
      video.play().catch((err) => {
        console.warn('Autoplay prevented:', err)
      })
    }

    video.addEventListener('canplaythrough', handleCanPlay)
    video.load()

    return () => {
      video.removeEventListener('canplaythrough', handleCanPlay)
    }
  }, [shouldLoad])

  const videoSrc = isMobile && mobileSrc ? mobileSrc : desktopSrc

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden ${className}`}
    >
      {/* Poster image jako fallback */}
      {poster && !isLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}

      {/* Video element */}
      {shouldLoad && !isMobile && (
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={poster}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}

      {/* Gradient overlay */}
      {overlay && (
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"
          style={{ opacity: overlayOpacity }}
        />
      )}

      {/* Loading skeleton dla desktop */}
      {!isMobile && shouldLoad && !isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 animate-pulse" />
      )}
    </div>
  )
}

export default BackgroundVideo
