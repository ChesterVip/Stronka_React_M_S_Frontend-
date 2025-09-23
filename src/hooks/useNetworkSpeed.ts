import { useState, useEffect } from 'react'

type NetworkSpeed = 'slow' | 'medium' | 'fast'

interface NetworkInfo {
  speed: NetworkSpeed
  effectiveType?: string
  downlink?: number
  rtt?: number
  saveData?: boolean
}

export const useNetworkSpeed = (): NetworkSpeed => {
  const [networkSpeed, setNetworkSpeed] = useState<NetworkSpeed>('medium')

  useEffect(() => {
    const updateNetworkSpeed = () => {
      // Check if Network Information API is available
      const nav = navigator as any
      
      if ('connection' in nav || 'mozConnection' in nav || 'webkitConnection' in nav) {
        const connection = nav.connection || nav.mozConnection || nav.webkitConnection
        
        if (connection) {
          const effectiveType = connection.effectiveType
          const downlink = connection.downlink
          const rtt = connection.rtt
          
          // Determine speed based on multiple factors
          if (effectiveType === 'slow-2g' || effectiveType === '2g' || rtt > 1000 || downlink < 0.5) {
            setNetworkSpeed('slow')
          } else if (effectiveType === '4g' && downlink > 5 && rtt < 200) {
            setNetworkSpeed('fast')
          } else {
            setNetworkSpeed('medium')
          }
          
          console.log('Network Info:', {
            effectiveType,
            downlink: `${downlink} Mbps`,
            rtt: `${rtt}ms`,
            speed: networkSpeed
          })
        }
      } else {
        // Fallback: Simple connection test
        const startTime = performance.now()
        
        fetch('/favicon.ico', { cache: 'no-store' })
          .then(() => {
            const loadTime = performance.now() - startTime
            
            if (loadTime > 1000) {
              setNetworkSpeed('slow')
            } else if (loadTime < 200) {
              setNetworkSpeed('fast')
            } else {
              setNetworkSpeed('medium')
            }
          })
          .catch(() => {
            // If fetch fails, assume slow connection
            setNetworkSpeed('slow')
          })
      }
    }

    // Initial check
    updateNetworkSpeed()

    // Listen for connection changes
    const nav = navigator as any
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection
    
    if (connection) {
      connection.addEventListener('change', updateNetworkSpeed)
      
      return () => {
        connection.removeEventListener('change', updateNetworkSpeed)
      }
    }
  }, [])

  return networkSpeed
}

export const useNetworkInfo = (): NetworkInfo => {
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({ speed: 'medium' })

  useEffect(() => {
    const updateNetworkInfo = () => {
      const nav = navigator as any
      const connection = nav.connection || nav.mozConnection || nav.webkitConnection
      
      if (connection) {
        const info: NetworkInfo = {
          speed: 'medium',
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData
        }

        // Determine speed
        if (info.effectiveType === 'slow-2g' || info.effectiveType === '2g' || 
            (info.rtt && info.rtt > 1000) || (info.downlink && info.downlink < 0.5)) {
          info.speed = 'slow'
        } else if (info.effectiveType === '4g' && 
                   (info.downlink && info.downlink > 5) && 
                   (info.rtt && info.rtt < 200)) {
          info.speed = 'fast'
        }

        setNetworkInfo(info)
      }
    }

    updateNetworkInfo()

    const nav = navigator as any
    const connection = nav.connection || nav.mozConnection || nav.webkitConnection
    
    if (connection) {
      connection.addEventListener('change', updateNetworkInfo)
      return () => connection.removeEventListener('change', updateNetworkInfo)
    }
  }, [])

  return networkInfo
}

// Helper hook for data-saving mode
export const useDataSaver = () => {
  const networkInfo = useNetworkInfo()
  
  return {
    isDataSaverMode: networkInfo.saveData || networkInfo.speed === 'slow',
    shouldReduceAnimations: networkInfo.speed === 'slow',
    shouldReduceImages: networkInfo.saveData || networkInfo.speed === 'slow',
    preferLowQuality: networkInfo.speed === 'slow'
  }
}