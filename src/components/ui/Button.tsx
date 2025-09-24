import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

// Temporary implementation until class-variance-authority is installed
const buttonVariants = (props: any) => {
  const baseClasses = "inline-flex items-center justify-center rounded-xl font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105"
  const variantClasses = {
    gold: "bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-black shadow-lg hover:shadow-xl",
    primary: "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white shadow-lg hover:shadow-xl",
    outline: "border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-black",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-800/50",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    secondary: "bg-gray-800 text-white hover:bg-gray-700"
  }
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-12 py-5 text-xl"
  }
  
  return cn(
    baseClasses,
    variantClasses[props.variant as keyof typeof variantClasses] || variantClasses.gold,
    sizeClasses[props.size as keyof typeof sizeClasses] || sizeClasses.md,
    props.className
  )
}

export interface ButtonProps 
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  loading?: boolean
  variant?: 'gold' | 'outline' | 'ghost' | 'destructive' | 'secondary' | 'primary'
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const Button = ({ 
  className, 
  variant, 
  size, 
  children, 
  leftIcon, 
  rightIcon, 
  loading, 
  disabled,
  ...props 
}: ButtonProps) => {
  return (
    <button
      className={buttonVariants({ variant, size, className })}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <div className="spinner mr-2" />
      )}
      {!loading && leftIcon && (
        <span className="mr-2">{leftIcon}</span>
      )}
      {children}
      {!loading && rightIcon && (
        <span className="ml-2">{rightIcon}</span>
      )}
    </button>
  )
}

export default Button