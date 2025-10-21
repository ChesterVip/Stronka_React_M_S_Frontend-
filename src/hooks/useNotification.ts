// Temporary implementation until zustand is installed
import { useState, useCallback } from 'react'

export type NotificationType = 'success' | 'error' | 'warning' | 'info'

export interface Notification {
  id: string
  type: NotificationType
  title?: string
  message: string
  duration?: number
  action?: {
    label: string
    onClick: () => void
  }
}

// interface NotificationStore {
//   notifications: Notification[]
//   addNotification: (notification: Omit<Notification, 'id'>) => void
//   removeNotification: (id: string) => void
//   clearAll: () => void
// }

// Temporary implementation until zustand is installed
let globalNotifications: Notification[] = []
let listeners: Set<() => void> = new Set()

const notifyListeners = () => {
  listeners.forEach(listener => listener())
}

export const useNotificationStore = () => {
  const [notifications, setNotifications] = useState<Notification[]>(globalNotifications)
  
  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newNotification: Notification = {
      ...notification,
      id,
      duration: notification.duration ?? 5000
    }
    
    globalNotifications = [...globalNotifications, newNotification]
    setNotifications(globalNotifications)
    notifyListeners()
    
    // Auto remove after duration
    if (newNotification.duration && newNotification.duration > 0) {
      setTimeout(() => {
        removeNotification(id)
      }, newNotification.duration)
    }
  }, [])
  
  const removeNotification = useCallback((id: string) => {
    globalNotifications = globalNotifications.filter(n => n.id !== id)
    setNotifications(globalNotifications)
    notifyListeners()
  }, [])
  
  const clearAll = useCallback(() => {
    globalNotifications = []
    setNotifications([])
    notifyListeners()
  }, [])
  
  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll
  }
}

export const useNotification = () => {
  const { addNotification, removeNotification, clearAll } = useNotificationStore()
  
  const showSuccess = (message: string, title?: string, options?: Partial<Notification>) => {
    addNotification({ type: 'success', message, title, ...options })
  }
  
  const showError = (message: string, title?: string, options?: Partial<Notification>) => {
    addNotification({ type: 'error', message, title, ...options })
  }
  
  const showWarning = (message: string, title?: string, options?: Partial<Notification>) => {
    addNotification({ type: 'warning', message, title, ...options })
  }
  
  const showInfo = (message: string, title?: string, options?: Partial<Notification>) => {
    addNotification({ type: 'info', message, title, ...options })
  }
  
  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
    removeNotification,
    clearAll
  }
}