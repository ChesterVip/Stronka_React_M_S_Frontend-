import { Component, ReactNode } from 'react'
import Button from '@/components/ui/Button'

interface Props {
  children: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
  errorInfo?: React.ErrorInfo
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    this.setState({
      error,
      errorInfo
    })

    // Log error to monitoring service (e.g., Sentry)
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Icon */}
            <div className="mb-8">
              <div className="mx-auto w-24 h-24 bg-red-500/20 rounded-full flex items-center justify-center">
                <i className="fas fa-exclamation-triangle text-red-400 text-4xl" />
              </div>
            </div>

            {/* Error Message */}
            <h1 className="text-4xl font-bold text-white mb-4">
              Ups! Coś poszło nie tak
            </h1>
            
            <p className="text-gray-300 text-lg mb-8">
              Przepraszamy za niedogodności. Wystąpił nieoczekiwany błąd podczas ładowania tej strony.
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => window.location.reload()}
                leftIcon={<i className="fas fa-redo" />}
              >
                Odśwież stronę
              </Button>
              
              <Button
                variant="outline"
                onClick={() => window.location.href = '/'}
                leftIcon={<i className="fas fa-home" />}
              >
                Powróć do strony głównej
              </Button>
            </div>

            {/* Error Details (Development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left bg-gray-900/50 border border-red-500/20 rounded-lg p-4">
                <summary className="cursor-pointer text-red-400 font-semibold mb-2">
                  Szczegóły błędu (tylko w rozwoju)
                </summary>
                <pre className="text-red-300 text-sm overflow-auto">
                  {this.state.error.toString()}
                  {this.state.errorInfo?.componentStack}
                </pre>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary