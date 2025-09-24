import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const NotFoundPage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()
  const [countdown, setCountdown] = useState(10)
  const [isAutoRedirecting, setIsAutoRedirecting] = useState(false)

  // Auto redirect countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(timer)
          setIsAutoRedirecting(true)
          navigate('/')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [navigate])

  const handleRedirect = (path: string) => {
    setIsAutoRedirecting(true)
    navigate(path)
  }

  const popularPages = [
    {
      path: '/',
      name: 'Strona główna',
      description: 'Powrót do głównej strony portfolio',
      icon: 'fa-home',
      color: 'text-blue-400'
    },
    {
      path: '/about',
      name: 'O mnie',
      description: 'Poznaj mnie i moją historię',
      icon: 'fa-user',
      color: 'text-green-400'
    },
    {
      path: '/services',
      name: 'Usługi',
      description: 'Zobacz co mogę dla Ciebie zrobić',
      icon: 'fa-briefcase',
      color: 'text-purple-400'
    },
    {
      path: '/experience',
      name: 'Doświadczenie',
      description: 'Moja kariera i projekty',
      icon: 'fa-building',
      color: 'text-yellow-400'
    },
    {
      path: '/education',
      name: 'Edukacja',
      description: 'Wykształcenie i certyfikaty',
      icon: 'fa-graduation-cap',
      color: 'text-indigo-400'
    },
    {
      path: '/tech',
      name: 'Projekty Tech',
      description: 'Portfolio projektów technologicznych',
      icon: 'fa-code',
      color: 'text-red-400'
    },
    {
      path: '/contact',
      name: 'Kontakt',
      description: 'Skontaktuj się ze mną',
      icon: 'fa-envelope',
      color: 'text-pink-400'
    }
  ]

  const errorTypes = [
    {
      code: '404',
      title: 'Strona nie została znaleziona',
      description: 'Strona którą próbujesz odwiedzić nie istnieje lub została przeniesiona.',
      suggestions: [
        'Sprawdź czy adres URL jest poprawny',
        'Użyj menu nawigacji aby znaleźć właściwą stronę',
        'Skorzystaj z listy popularnych stron poniżej',
        'Wróć do strony głównej i zacznij od nowa'
      ]
    }
  ]

  const currentError = errorTypes[0] // For now, always 404

  const getRandomTechTip = () => {
    const tips = [
      "💡 Tip: Kod HTTP 404 został nazwany na cześć pokoju 404 w CERN, gdzie znajdował się pierwszy serwer WWW!",
      "🚀 Czy wiesz, że React Router używa History API do zarządzania routingiem bez przeładowywania strony?",
      "⚡ TypeScript + React to potężna kombinacja dla tworzenia skalowanych aplikacji!",
      "🎨 Tailwind CSS pozwala na szybkie prototypowanie i konsystentny design system!",
      "🔧 Vite to nowoczesny bundler, który jest znacznie szybszy od Webpack w trybie deweloperskim!",
      "📱 Progressive Web Apps mogą działać offline i być instalowane jak natywne aplikacje!"
    ]
    return tips[Math.floor(Math.random() * tips.length)]
  }

  const [techTip] = useState(getRandomTechTip())

  const troubleshootingSteps = [
    {
      icon: 'fa-search',
      title: 'Sprawdź URL',
      description: 'Upewnij się, że adres jest wpisany poprawnie'
    },
    {
      icon: 'fa-refresh',
      title: 'Odśwież stronę',
      description: 'Czasami pomocne jest odświeżenie przeglądarki'
    },
    {
      icon: 'fa-arrow-left',
      title: 'Wróć o krok',
      description: 'Użyj przycisku "Wstecz" w przeglądarce'
    },
    {
      icon: 'fa-home',
      title: 'Idź do domu',
      description: 'Wróć na stronę główną i zacznij od nowa'
    }
  ]

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-8">
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Main Error Display */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-12">
            {/* Animated 404 */}
            <div className="relative mb-8">
              <div className="text-9xl md:text-[200px] font-bold text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 bg-clip-text animate-pulse">
                404
              </div>
              <div className="absolute inset-0 text-9xl md:text-[200px] font-bold text-red-500/20 blur-sm">
                404
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
              Ups! Coś poszło nie tak
            </h1>
            
            <p className="text-xl text-gray-300 mb-2">
              {currentError.description}
            </p>
            
            <div className="flex items-center justify-center gap-2 text-lg">
              <span className="text-gray-400">Przekierowanie za:</span>
              <span className="text-red-400 font-bold text-2xl font-mono">
                {isAutoRedirecting ? '0' : countdown}
              </span>
              <span className="text-gray-400">sekund</span>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Error Details */}
          <div className="lg:col-span-2 space-y-6">
            {/* Current Path Info */}
            <AnimatedSection delay={0.2}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-red-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <i className="fas fa-exclamation-triangle text-red-400"></i>
                    Szczegóły błędu
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-red-500/10 rounded-lg border border-red-500/30">
                    <div className="flex items-center gap-3 mb-2">
                      <i className="fas fa-link text-red-400"></i>
                      <span className="text-red-400 font-medium">Próbowana ścieżka:</span>
                    </div>
                    <code className="text-white bg-black px-3 py-2 rounded text-sm block">
                      {window.location.origin}{location.pathname}
                    </code>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-medium text-white">Możliwe przyczyny:</h3>
                    <ul className="space-y-2">
                      {currentError.suggestions.map((suggestion, index) => (
                        <li key={index} className="flex items-start gap-3 text-gray-300">
                          <i className="fas fa-chevron-right text-red-400 mt-1"></i>
                          {suggestion}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Troubleshooting Steps */}
            <AnimatedSection delay={0.3}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <i className="fas fa-wrench text-yellow-400"></i>
                    Co możesz zrobić?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {troubleshootingSteps.map((step, index) => (
                      <div
                        key={index}
                        className="p-4 bg-gray-800/50 rounded-lg border border-gray-600 hover:border-yellow-500/50 transition-all"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 bg-yellow-500/20 rounded-lg">
                            <i className={`fas ${step.icon} text-yellow-400`}></i>
                          </div>
                          <h4 className="font-medium text-white">{step.title}</h4>
                        </div>
                        <p className="text-sm text-gray-300">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Tech Tip */}
            <AnimatedSection delay={0.4}>
              <Card className="bg-gradient-to-br from-purple-900/50 to-black border-purple-500/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <i className="fas fa-lightbulb text-purple-400"></i>
                    Ciekawostka techniczna
                  </CardTitle>
                  <CardDescription className="text-purple-300">
                    Skoro tu już jesteś, to się czegoś dowiedz! 😄
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{techTip}</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Quick Actions & Popular Pages */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <AnimatedSection delay={0.3}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <i className="fas fa-bolt text-blue-400"></i>
                    Szybkie akcje
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="primary"
                    size="lg"
                    onClick={() => handleRedirect('/')}
                    disabled={isAutoRedirecting}
                    className="w-full"
                  >
                    <i className="fas fa-home mr-2"></i>
                    Idź do strony głównej
                  </Button>
                  
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.history.back()}
                    disabled={isAutoRedirecting}
                    className="w-full"
                  >
                    <i className="fas fa-arrow-left mr-2"></i>
                    Wróć do poprzedniej strony
                  </Button>
                  
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.location.reload()}
                    disabled={isAutoRedirecting}
                    className="w-full"
                  >
                    <i className="fas fa-refresh mr-2"></i>
                    Odśwież stronę
                  </Button>

                  {/* Stop Auto-Redirect */}
                  {countdown > 0 && !isAutoRedirecting && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setCountdown(0)}
                      className="w-full text-red-400 hover:text-red-300"
                    >
                      <i className="fas fa-stop mr-2"></i>
                      Zatrzymaj automatyczne przekierowanie
                    </Button>
                  )}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Popular Pages */}
            <AnimatedSection delay={0.4}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <i className="fas fa-star text-yellow-400"></i>
                    Popularne strony
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    Sprawdź te sekcje mojego portfolio
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  {popularPages.map((page) => (
                    <button
                      key={page.path}
                      onClick={() => handleRedirect(page.path)}
                      disabled={isAutoRedirecting}
                      className="w-full p-3 text-left bg-gray-800/50 hover:bg-gray-800/70 rounded-lg border border-gray-700 hover:border-gray-600 transition-all group disabled:opacity-50"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                          <i className={`fas ${page.icon} ${page.color}`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-white group-hover:text-gray-200 truncate">
                            {page.name}
                          </div>
                          <div className="text-sm text-gray-400 truncate">
                            {page.description}
                          </div>
                        </div>
                        <i className="fas fa-chevron-right text-gray-500 group-hover:text-gray-400"></i>
                      </div>
                    </button>
                  ))}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Info */}
            <AnimatedSection delay={0.5}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <i className="fas fa-life-ring text-green-400"></i>
                    {t.notfound_need_help}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-gray-300">
                    {t.notfound_contact_description}
                  </p>
                  
                  <div className="space-y-2">
                    <a 
                      href="mailto:mariusz@msokolowski.dev"
                      className="flex items-center gap-3 p-2 text-blue-400 hover:text-blue-300 hover:bg-blue-500/10 rounded-lg transition-all"
                    >
                      <i className="fas fa-envelope"></i>
                      <span>mariusz@msokolowski.dev</span>
                    </a>
                    
                    <a 
                      href="/contact"
                      onClick={(e) => {
                        e.preventDefault()
                        handleRedirect('/contact')
                      }}
                      className="flex items-center gap-3 p-2 text-green-400 hover:text-green-300 hover:bg-green-500/10 rounded-lg transition-all"
                    >
                      <i className="fas fa-paper-plane"></i>
                      <span>{t.notfound_contact_form}</span>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Loading State Overlay */}
        {isAutoRedirecting && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center">
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 text-center">
              <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white text-lg">Przekierowywanie...</p>
              <p className="text-gray-400 text-sm">Zaraz zostaniesz przeniesiony</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NotFoundPage