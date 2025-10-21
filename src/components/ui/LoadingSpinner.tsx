import { HTMLAttributes } from 'react'
import { cn } from '@/utils/cn'

type SpinnerSize = 'sm' | 'md' | 'lg' | 'xl'
type SpinnerColor = 'gold' | 'white' | 'gray' | 'blue' | 'green' | 'red'

interface SpinnerOptions {
  size?: SpinnerSize
  color?: SpinnerColor
  spinnerClassName?: string
}

// Temporary implementation until class-variance-authority is installed
const spinnerVariants = ({
  size = 'md',
  color = 'gold',
  spinnerClassName,
}: SpinnerOptions = {}) => {
  const baseClasses =
    'animate-spin rounded-full border-2 border-current border-t-transparent'
  const sizeClasses: Record<SpinnerSize, string> = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12',
  }
  const colorClasses: Record<SpinnerColor, string> = {
    gold: 'text-gold-500',
    white: 'text-white',
    gray: 'text-gray-400',
    blue: 'text-blue-500',
    green: 'text-green-500',
    red: 'text-red-500',
  }

  return cn(baseClasses, sizeClasses[size], colorClasses[color], spinnerClassName)
}

interface LoadingSpinnerProps
  extends Omit<HTMLAttributes<HTMLDivElement>, 'color'>,
    SpinnerOptions {
  label?: string
}

const LoadingSpinner = ({
  size,
  color,
  label,
  className,
  spinnerClassName,
  ...props
}: LoadingSpinnerProps) => {
  return (
    <div
      className={cn('flex flex-col items-center justify-center', className)}
      {...props}
    >
      <div
        className={spinnerVariants({ size, color, spinnerClassName })}
        role="status"
        aria-label={label || 'Ładowanie...'}
      />
      {label && (
        <p className="mt-2 text-sm text-gray-400 animate-pulse">{label}</p>
      )}
    </div>
  )
}

// Page loading overlay
export const PageLoader = ({ message = "Ładowanie..." }: { message?: string }) => (
  <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="text-center">
      <LoadingSpinner size="xl" color="gold" />
      <p className="mt-4 text-lg text-white">{message}</p>
    </div>
  </div>
)

// Inline loader for components
export const InlineLoader = ({ size = "sm" }: { size?: "sm" | "md" | "lg" }) => (
  <div className="flex items-center justify-center py-4">
    <LoadingSpinner size={size} />
  </div>
)

export default LoadingSpinner
