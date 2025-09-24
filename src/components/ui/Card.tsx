import { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

// Temporary implementation until class-variance-authority is installed
const cardVariants = (props: any) => {
  const baseClasses = "rounded-xl transition-all duration-300"
  const variantClasses = {
    default: "bg-gray-900/50 backdrop-blur-sm border border-gold-500/20 hover:border-gold-500/40",
    gradient: "bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-sm border border-gold-500/30",
    glass: "bg-white/5 backdrop-blur-lg border border-white/10",
    solid: "bg-gray-900 border border-gray-700",
    neon: "border border-gold-500/30 shadow-lg hover:border-gold-500/50 neon-border"
  }
  const sizeClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-12"
  }
  const hoverClasses = {
    none: "",
    lift: "hover-lift",
    glow: "hover:shadow-lg hover:shadow-gold-500/20"
  }
  
  return cn(
    baseClasses,
    variantClasses[props.variant as keyof typeof variantClasses] || variantClasses.default,
    sizeClasses[props.size as keyof typeof sizeClasses] || sizeClasses.md,
    hoverClasses[props.hover as keyof typeof hoverClasses] || hoverClasses.lift,
    props.className
  )
}

export interface CardProps 
  extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  variant?: 'default' | 'gradient' | 'glass' | 'solid' | 'neon'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  hover?: 'none' | 'lift' | 'glow'
}

const Card = ({ className, variant, size, hover, children, ...props }: CardProps) => {
  return (
    <div
      className={cardVariants({ variant, size, hover, className })}
      {...props}
    >
      {children}
    </div>
  )
}

// Card sub-components
const CardHeader = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mb-4", className)} {...props}>
    {children}
  </div>
)

const CardTitle = ({ className, children, ...props }: HTMLAttributes<HTMLHeadingElement>) => (
  <h3 className={cn("text-xl font-bold text-white mb-2", className)} {...props}>
    {children}
  </h3>
)

const CardDescription = ({ className, children, ...props }: HTMLAttributes<HTMLParagraphElement>) => (
  <p className={cn("text-gray-300", className)} {...props}>
    {children}
  </p>
)

const CardContent = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn(className)} {...props}>
    {children}
  </div>
)

const CardFooter = ({ className, children, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-6 flex items-center gap-4", className)} {...props}>
    {children}
  </div>
)

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter }