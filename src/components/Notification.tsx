import { useEffect } from 'react'
import { useNotificationStore, NotificationType } from '@/hooks/useNotification'
import { cn } from '@/utils/cn'

const Notification = () => {
  const { notifications, removeNotification } = useNotificationStore()

  const getNotificationStyles = (type: NotificationType) => {
    const baseStyles = "relative flex items-start p-4 mb-3 rounded-lg shadow-lg backdrop-blur-sm border transform transition-all duration-300 ease-in-out"
    
    switch (type) {
      case 'success':
        return cn(baseStyles, "bg-green-900/80 border-green-500/50 text-green-100")
      case 'error':
        return cn(baseStyles, "bg-red-900/80 border-red-500/50 text-red-100")
      case 'warning':
        return cn(baseStyles, "bg-yellow-900/80 border-yellow-500/50 text-yellow-100")
      case 'info':
      default:
        return cn(baseStyles, "bg-blue-900/80 border-blue-500/50 text-blue-100")
    }
  }

  const getIcon = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return 'fa-check-circle'
      case 'error':
        return 'fa-exclamation-circle'
      case 'warning':
        return 'fa-exclamation-triangle'
      case 'info':
      default:
        return 'fa-info-circle'
    }
  }

  const getIconColor = (type: NotificationType) => {
    switch (type) {
      case 'success':
        return 'text-green-400'
      case 'error':
        return 'text-red-400'
      case 'warning':
        return 'text-yellow-400'
      case 'info':
      default:
        return 'text-blue-400'
    }
  }

  if (notifications.length === 0) return null

  return (
    <div className="fixed top-4 right-4 z-[9999] max-w-sm w-full space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={getNotificationStyles(notification.type)}
          style={{
            animation: 'slideInRight 0.3s ease-out'
          }}
        >
          {/* Progress bar for timed notifications */}
          {notification.duration && notification.duration > 0 && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/20 rounded-b-lg overflow-hidden">
              <div 
                className="h-full bg-current opacity-50"
                style={{
                  animation: `progressBar ${notification.duration}ms linear`
                }}
              />
            </div>
          )}
          
          {/* Icon */}
          <div className="flex-shrink-0 mr-3 mt-0.5">
            <i className={cn('fas', getIcon(notification.type), getIconColor(notification.type), 'text-lg')} />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            {notification.title && (
              <h4 className="font-semibold text-sm mb-1">
                {notification.title}
              </h4>
            )}
            <p className="text-sm leading-relaxed">
              {notification.message}
            </p>
            
            {/* Action button */}
            {notification.action && (
              <button
                onClick={notification.action.onClick}
                className="mt-2 text-xs font-medium underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-current focus:ring-opacity-50 rounded"
              >
                {notification.action.label}
              </button>
            )}
          </div>
          
          {/* Close button */}
          <button
            onClick={() => removeNotification(notification.id)}
            className="flex-shrink-0 ml-2 text-current/70 hover:text-current focus:outline-none focus:ring-2 focus:ring-current focus:ring-opacity-50 rounded p-1"
            aria-label="Zamknij powiadomienie"
          >
            <i className="fas fa-times text-sm" />
          </button>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes progressBar {
          from {
            width: 100%;
          }
          to {
            width: 0%;
          }
        }
      `}</style>
    </div>
  )
}

export default Notification