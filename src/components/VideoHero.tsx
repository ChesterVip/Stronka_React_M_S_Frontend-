import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

interface VideoHeroProps {
  videoSrc: string
  posterSrc?: string
  onVideoEnd?: () => void
}

const VideoHero = ({ videoSrc, posterSrc, onVideoEnd }: VideoHeroProps) => {
  const { t } = useLanguage()
  const [isExpanded, setIsExpanded] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isBuffering, setIsBuffering] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const [showTypingText, setShowTypingText] = useState(true)
  const [typedText, setTypedText] = useState('')
  const [isScrolling, setIsScrolling] = useState(false)
  const [hasAutoPlayed, setHasAutoPlayed] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Scroll detection for collapsing video
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && !isCollapsed) {
        setIsScrolling(true)
        setIsExpanded(false)
        // Pause video when scrolling
        if (videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause()
        }
      } else if (window.scrollY <= 50 && isScrolling) {
        setIsScrolling(false)
        // Resume video when back at top
        if (videoRef.current && videoRef.current.paused && isPlaying) {
          videoRef.current.play()
        }
        // Re-expand video when back at top
        if (!isCollapsed) {
          setIsExpanded(true)
        }
      }

      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Set new timeout to detect scroll end
      scrollTimeoutRef.current = setTimeout(() => {
        if (window.scrollY > 50) {
          setIsCollapsed(true)
          onVideoEnd?.()
        }
      }, 1000) // Collapse after 1 second of no scrolling
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [isCollapsed, isScrolling, isPlaying, onVideoEnd])

  // Typing effect for "Hello..." text
  useEffect(() => {
    if (!showTypingText) return

    const text = "Hello..."
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setTypedText(text.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
        // Hide text after 3 seconds
        setTimeout(() => {
          setShowTypingText(false)
        }, 3000)
      }
    }, 100) // Typing speed

    return () => clearInterval(typingInterval)
  }, [showTypingText])

  // Lazy loading setup
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !shouldLoad) {
            setShouldLoad(true)
          }
        })
      },
      { threshold: 0.1 }
    )

    observerRef.current.observe(container)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [shouldLoad])

  // Video event handlers
  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad) return

    const handlePlay = () => {
      setIsPlaying(true)
      setIsLoading(false)
      setIsBuffering(false)
    }

    const handleEnded = () => {
      console.log('Video ended - hiding video...', {
        isPlaying,
        isCollapsed,
        isExpanded,
        hasAutoPlayed
      })
      setIsPlaying(false)
      setIsCollapsed(true)
      setIsHidden(true)
      onVideoEnd?.()
    }

    const handleLoadedData = () => {
      setIsLoading(false)
      // Set playback rate to 0.7x
      video.playbackRate = 0.7
    }

    const handleWaiting = () => {
      setIsBuffering(true)
    }

    const handleCanPlay = () => {
      setIsBuffering(false)
    }

    const handleError = () => {
      setHasError(true)
      setIsLoading(false)
    }

    const handleLoadStart = () => {
      setIsLoading(true)
    }

    video.addEventListener('play', handlePlay)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('waiting', handleWaiting)
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('error', handleError)
    video.addEventListener('loadstart', handleLoadStart)

    return () => {
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('waiting', handleWaiting)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('error', handleError)
      video.removeEventListener('loadstart', handleLoadStart)
    }
  }, [shouldLoad, onVideoEnd])

  // Auto-expand and play when loaded
  useEffect(() => {
    if (shouldLoad && !isLoading && !hasError && !showTypingText && !hasAutoPlayed) {
      const timer = setTimeout(() => {
        setIsExpanded(true)
        // Auto-play after expansion
        setTimeout(() => {
          videoRef.current?.play()
          setHasAutoPlayed(true)
        }, 500)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [shouldLoad, isLoading, hasError, showTypingText, hasAutoPlayed])

  const handleSkip = () => {
    console.log('Skip button clicked - hiding video...')
    setIsCollapsed(true)
    setIsHidden(true)
    onVideoEnd?.()
  }

  const handleRetry = () => {
    setHasError(false)
    setIsLoading(true)
    setShouldLoad(true)
  }

  return (
    <>
      {!isHidden && (
        <div 
          ref={containerRef}
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-1000 ease-in-out ${
            isExpanded ? 'h-screen' : 'h-16'
          } ${isCollapsed ? 'h-16' : ''}`}
        >
          {/* Placeholder before lazy loading */}
          {!shouldLoad && (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <i className="fas fa-play text-black text-2xl" />
                </div>
                <p className="text-white text-lg">Loading video...</p>
              </div>
            </div>
          )}

          {/* Video container */}
          {shouldLoad && (
            <div className="relative w-full h-full overflow-hidden">
              {/* Video element */}
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                poster={posterSrc}
                preload="metadata"
                muted
                playsInline
              >
                <source src={videoSrc} type="video/mp4" />
                {t.video_not_supported || 'Twoja przeglądarka nie obsługuje odtwarzania wideo.'}
              </video>

              {/* Typing text overlay */}
              {showTypingText && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <div className="text-center">
                    <div className="text-white text-6xl font-mono font-bold mb-4 drop-shadow-2xl">
                      {typedText}
                      <span className="animate-pulse text-gold-400">|</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Loading overlay */}
              {isLoading && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-center">
                    <LoadingSpinner />
                    <p className="text-white mt-4 text-lg">
                      {t.video_loading || 'Ładowanie wideo...'}
                    </p>
                  </div>
                </div>
              )}

              {/* Buffering overlay */}
              {isBuffering && (
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="text-center">
                    <LoadingSpinner />
                    <p className="text-white mt-4 text-lg">
                      {t.video_buffering || 'Buforowanie...'}
                    </p>
                  </div>
                </div>
              )}

              {/* Error overlay */}
              {hasError && (
                <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-exclamation-triangle text-red-500 text-6xl mb-4" />
                    <p className="text-white text-xl mb-4">
                      {t.video_error || 'Błąd ładowania wideo'}
                    </p>
                    <button
                      onClick={handleRetry}
                      className="bg-gold-500 hover:bg-gold-400 text-black px-6 py-3 rounded-lg font-semibold transition-colors"
                    >
                      {t.video_retry || 'Spróbuj ponownie'}
                    </button>
                  </div>
                </div>
              )}

              {/* Collapsed navigation bar */}
              {isCollapsed && (
                <div className="absolute top-0 left-0 w-full h-16 bg-black bg-opacity-90 backdrop-blur-sm flex items-center justify-between px-6">
                  {/* Logo/Title */}
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                      <i className="fas fa-play text-black text-sm" />
                    </div>
                    <span className="text-white font-semibold text-lg">
                      {t.hero_title || 'Mariusz Sokołowski'}
                    </span>
                  </div>
                </div>
              )}

              {/* Skip button */}
              {!isCollapsed && (
                <div className="absolute top-4 right-4">
                  <button
                    onClick={handleSkip}
                    className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg hover:bg-opacity-75 transition-all"
                  >
                    {t.video_skip || 'Pomiń'}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default VideoHero