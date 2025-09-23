import { z } from 'zod'

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Imię musi zawierać minimum 2 znaki')
    .max(100, 'Imię nie może przekraczać 100 znaków')
    .regex(
      /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻäöüßÄÖÜ\s\-'\.]+$/,
      'Imię może zawierać tylko litery, spacje, myślniki i apostrofy'
    ),
  email: z
    .string()
    .email('Nieprawidłowy format adresu email')
    .max(100, 'Email nie może przekraczać 100 znaków'),
  subject: z
    .string()
    .min(1, 'Wybierz temat wiadomości'),
  message: z
    .string()
    .min(10, 'Wiadomość musi zawierać minimum 10 znaków')
    .max(2000, 'Wiadomość nie może przekraczać 2000 znaków')
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Email validation
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 100
}

// Input sanitization
export const sanitizeInput = (input: string): string => {
  if (!input) return ''
  
  return input
    .toString()
    .trim()
    .substring(0, 1000) // Limit length
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/<[^>]*>?/gm, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: URLs
    .replace(/on\w+\s*=\s*["'][^"']*["']/gi, '') // Remove inline event handlers
}

// Suspicious content detection
export const containsSuspiciousContent = (text: string): boolean => {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /vbscript:/i,
    /onload=/i,
    /onerror=/i,
    /onclick=/i,
    /eval\(/i,
    /document\.write/i,
    /innerHTML/i,
    /\bexec\(/i,
    /\bphp\b/i,
    /\bselect\b.*\bfrom\b/i,
    /\bunion\b.*\bselect\b/i,
    /\bdrop\b.*\btable\b/i
  ]
  
  return suspiciousPatterns.some(pattern => pattern.test(text))
}

// Generate form token for additional security
export const generateFormToken = (): string => {
  const timestamp = Date.now()
  const random = Math.random().toString(36).substring(2)
  return btoa(`${timestamp}-${random}`).substring(0, 16)
}

// Password strength validation (for future use)
export const validatePasswordStrength = (password: string) => {
  const minLength = 8
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumbers = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  
  const score = [
    password.length >= minLength,
    hasUppercase,
    hasLowercase,
    hasNumbers,
    hasSpecialChar
  ].filter(Boolean).length
  
  return {
    score,
    isValid: score >= 4,
    feedback: {
      minLength: password.length >= minLength,
      hasUppercase,
      hasLowercase,
      hasNumbers,
      hasSpecialChar
    }
  }
}

// Phone number validation (international format)
export const isValidPhoneNumber = (phone: string): boolean => {
  // Basic international phone validation
  const phoneRegex = /^\+?[1-9]\d{1,14}$/
  return phoneRegex.test(phone.replace(/\s|-/g, ''))
}

// URL validation
export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

// Rate limiting helper
export const createRateLimit = (maxRequests: number, windowMs: number) => {
  const requests = new Map<string, number[]>()
  
  return (identifier: string): boolean => {
    const now = Date.now()
    const userRequests = requests.get(identifier) || []
    
    // Remove old requests outside the window
    const validRequests = userRequests.filter(time => now - time < windowMs)
    
    if (validRequests.length >= maxRequests) {
      return false // Rate limit exceeded
    }
    
    validRequests.push(now)
    requests.set(identifier, validRequests)
    return true // Request allowed
  }
}