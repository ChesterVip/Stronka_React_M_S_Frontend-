import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useScrollDirection } from '@/hooks/useScrollAnimation'
import Notification from '@/components/Notification'
import PageTransition from '@/components/PageTransition'
import { cn } from '@/utils/cn'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const scrollDirection = useScrollDirection()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const navigationItems = [
    { key: 'nav_start', path: '/', icon: 'fa-home' },
    { key: 'nav_about', path: '/about', icon: 'fa-user' },
    { key: 'nav_services', path: '/services', icon: 'fa-briefcase' },
    { key: 'nav_experience', path: '/experience', icon: 'fa-road' },
    { key: 'nav_education', path: '/education', icon: 'fa-graduation-cap' },
    { key: 'nav_tech', path: '/tech', icon: 'fa-laptop-code' },
    { key: 'nav_contact', path: '/contact', icon: 'fa-envelope' }
  ]

  const isActiveRoute = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    return location.pathname.startsWith(path) && path !== '/'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-black/80 backdrop-blur-lg border-b border-gold-500/20 shadow-lg" 
          : "bg-transparent",
        scrollDirection === 'down' && scrolled ? "-translate-y-full" : "translate-y-0"
      )}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => navigate('/')}
              className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-300 flex items-center space-x-2"
            >
              <i className="fas fa-code text-gold-400"></i>
              <span>MS</span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigationItems.map(({ key, path, icon }) => (
                  <button
                    key={key}
                    onClick={() => navigate(path)}
                    className={cn(
                      "nav-link px-3 py-2 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2",
                      isActiveRoute(path)
                        ? "text-gold-400 bg-gold-500/10"
                        : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                    )}
                  >
                    <i className={cn("fas", icon, "text-sm")} />
                    <span>{t[key as keyof typeof t]}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Language Buttons */}
              <div className="flex space-x-2">
                <button
                  onClick={() => setLanguage('pl')}
                  className={cn(
                    "lang-btn px-3 py-1 rounded text-sm font-medium transition-all duration-300",
                    language === 'pl' ? 'active' : ''
                  )}
                  aria-label="Przełącz na polski"
                >
                  🇵🇱 PL
                </button>
                <button
                  onClick={() => setLanguage('de')}
                  className={cn(
                    "lang-btn px-3 py-1 rounded text-sm font-medium transition-all duration-300",
                    language === 'de' ? 'active' : ''
                  )}
                  aria-label="Auf Deutsch umschalten"
                >
                  🇩🇪 DE
                </button>
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-400 hover:text-white focus:outline-none focus:text-white p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-300"
                  aria-label="Toggle mobile menu"
                >
                  <i className={cn(
                    "fas transition-transform duration-300",
                    isOpen ? "fa-times rotate-90" : "fa-bars"
                  )} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn(
          "md:hidden transition-all duration-300 overflow-hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-black/90 backdrop-blur-lg border-t border-gold-500/20">
            {navigationItems.map(({ key, path, icon }) => (
              <button
                key={key}
                onClick={() => navigate(path)}
                className={cn(
                  "w-full text-left px-3 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-3",
                  isActiveRoute(path)
                    ? "text-gold-400 bg-gold-500/10"
                    : "text-gray-300 hover:text-white hover:bg-gray-800/50"
                )}
              >
                <i className={cn("fas", icon, "w-5 text-center")} />
                <span>{t[key as keyof typeof t]}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        <PageTransition>
          <Outlet />
        </PageTransition>
      </main>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-8 border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <i className="fas fa-code text-gold-400"></i>
                <span className="text-xl font-bold text-gradient">Mariusz Sokołowski</span>
              </div>
              <p className="text-gray-400">
                {t.contact_description} | {t.contact_role}
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t.footer_quick_links}</h4>
              <div className="space-y-2">
                {navigationItems.slice(0, 4).map(({ key, path }) => (
                  <button
                    key={key}
                    onClick={() => navigate(path)}
                    className="block text-gray-400 hover:text-gold-400 transition-colors duration-300"
                  >
                    {t[key as keyof typeof t]}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">{t.find_online}</h4>
              <div className="flex space-x-4">
                {[
                  { icon: 'fa-envelope', href: 'mailto:contact@mariusz-sokolowski.com' },
                  { icon: 'fa-linkedin', href: '#' },
                  { icon: 'fa-github', href: '#' },
                  { icon: 'fa-whatsapp', href: '#' }
                ].map(({ icon, href }, index) => (
                  <a
                    key={index}
                    href={href}
                    className="w-10 h-10 bg-gradient-to-br from-gold-500 to-gold-700 hover:from-gold-400 hover:to-gold-600 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={cn("fas", icon, "text-black")} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>{t.footer_copyright}</p>
          </div>
        </div>
      </footer>

      {/* Global Notifications */}
      <Notification />
    </div>
  )
}

export default Layout