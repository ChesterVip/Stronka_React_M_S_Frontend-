import { useEffect, useState } from 'react'
import { cn } from '@/utils/cn'

interface ProgressRingProps {
  progress: number
  size?: number
  strokeWidth?: number
  className?: string
  showPercentage?: boolean
  color?: 'gold' | 'blue' | 'green' | 'red'
  animated?: boolean
}

const ProgressRing = ({
  progress,
  size = 120,
  strokeWidth = 8,
  className,
  showPercentage = true,
  color = 'gold',
  animated = true
}: ProgressRingProps) => {
  const [currentProgress, setCurrentProgress] = useState(0)
  
  const radius = (size - strokeWidth) / 2
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (currentProgress / 100) * circumference

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setCurrentProgress(progress)
      }, 100)
      return () => clearTimeout(timer)
    } else {
      setCurrentProgress(progress)
    }
  }, [progress, animated])

  const colorClasses = {
    gold: 'stroke-gold-400',
    blue: 'stroke-blue-400',
    green: 'stroke-green-400',
    red: 'stroke-red-400'
  }

  const textColorClasses = {
    gold: 'text-gold-400',
    blue: 'text-blue-400',
    green: 'text-green-400',
    red: 'text-red-400'
  }

  return (
    <div className={cn("relative", className)} style={{ width: size, height: size }}>
      <svg width={size} height={size} className="transform -rotate-90">
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className="text-gray-700"
        />
        
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="none"
          className={cn(colorClasses[color], "transition-all duration-1000 ease-out")}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: offset,
            strokeLinecap: 'round'
          }}
        />
      </svg>
      
      {/* Percentage text */}
      {showPercentage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={cn("text-sm font-bold", textColorClasses[color])}>
            {Math.round(currentProgress)}%
          </span>
        </div>
      )}
    </div>
  )
}

export default ProgressRing