import { ReactNode, useRef, HTMLAttributes } from 'react'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { cn } from '@/utils/cn'

interface AnimatedSectionProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  animation?: 'fade-in' | 'slide-up' | 'slide-down' | 'slide-left' | 'slide-right' | 'scale-up' | 'rotate-in'
  delay?: number
  duration?: number
  threshold?: number
  triggerOnce?: boolean
  as?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main'
}

const AnimatedSection = ({ 
  children, 
  animation = 'fade-in',
  delay = 0,
  duration = 600,
  threshold = 0.1,
  triggerOnce = true,
  as: Component = 'div',
  className,
  ...props 
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useScrollAnimation(ref, { threshold, triggerOnce })

  const getAnimationClasses = () => {
    const baseClasses = "transition-all ease-out"
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-in':
          return cn(baseClasses, "opacity-0")
        case 'slide-up':
          return cn(baseClasses, "opacity-0 translate-y-8")
        case 'slide-down':
          return cn(baseClasses, "opacity-0 -translate-y-8")
        case 'slide-left':
          return cn(baseClasses, "opacity-0 translate-x-8")
        case 'slide-right':
          return cn(baseClasses, "opacity-0 -translate-x-8")
        case 'scale-up':
          return cn(baseClasses, "opacity-0 scale-95")
        case 'rotate-in':
          return cn(baseClasses, "opacity-0 rotate-3 scale-95")
        default:
          return cn(baseClasses, "opacity-0")
      }
    }

    return cn(baseClasses, "opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0")
  }

  return (
    <Component
      ref={ref}
      className={cn(getAnimationClasses(), className)}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`
      }}
      {...props}
    >
      {children}
    </Component>
  )
}

export default AnimatedSection