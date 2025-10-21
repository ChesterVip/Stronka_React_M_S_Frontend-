import { useState, useEffect } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  functional: boolean
}

const CookieConsentBanner = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true, can't be disabled
    analytics: false,
    functional: false
  })
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const allPreferences = {
      necessary: true,
      analytics: true,
      functional: true
    }
    localStorage.setItem('cookie-consent', JSON.stringify(allPreferences))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
  }

  const handleAcceptNecessary = () => {
    const necessaryOnly = {
      necessary: true,
      analytics: false,
      functional: false
    }
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    setShowSuccess(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 2000)
  }

  const handlePreferenceChange = (type: keyof CookiePreferences) => {
    if (type === 'necessary') return // Can't disable necessary cookies
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }))
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/90 backdrop-blur-sm border-t border-gold-500/20">
      <div className="max-w-4xl mx-auto">
        {!showSettings ? (
          // Main banner
          <Card className="bg-gradient-to-br from-gray-900 to-black border-gold-500/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <i className="fas fa-cookie-bite text-2xl text-gold-400"></i>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {t.cookie_banner_title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {t.cookie_banner_description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={handleAcceptAll}
                      className="bg-gold-500 hover:bg-gold-400 text-black"
                    >
                      <i className="fas fa-check mr-2"></i>
                      {t.cookie_banner_accept_all}
                    </Button>
                    <Button
                      variant="secondary"
                      size="sm"
                      onClick={handleAcceptNecessary}
                    >
                      <i className="fas fa-shield-alt mr-2"></i>
                      {t.cookie_banner_accept_necessary}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowSettings(true)}
                    >
                      <i className="fas fa-cog mr-2"></i>
                      {t.cookie_banner_customize}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigate('/cookies')}
                    >
                      <i className="fas fa-info-circle mr-2"></i>
                      {t.cookie_banner_more_info}
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          // Settings panel
          <Card className="bg-gradient-to-br from-gray-900 to-black border-gold-500/30">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-white">
                <i className="fas fa-cog text-gold-400"></i>
                {t.cookie_banner_settings}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">{t.cookie_banner_necessary_cookies}</h4>
                  <p className="text-sm text-gray-400">Wymagane do funkcjonowania strony</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="w-4 h-4 text-gold-500 bg-gray-700 border-gray-600 rounded focus:ring-gold-500"
                  />
                  <span className="ml-2 text-sm text-gray-400">Zawsze włączone</span>
                </div>
              </div>

              {/* Analytics Cookies */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">{t.cookie_banner_analytics_cookies}</h4>
                  <p className="text-sm text-gray-400">Pomagają analizować ruch na stronie</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => handlePreferenceChange('analytics')}
                  className="w-4 h-4 text-gold-500 bg-gray-700 border-gray-600 rounded focus:ring-gold-500"
                />
              </div>

              {/* Functional Cookies */}
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg">
                <div>
                  <h4 className="font-medium text-white">{t.cookie_banner_functional_cookies}</h4>
                  <p className="text-sm text-gray-400">Zapamiętują Twoje preferencje</p>
                </div>
                <input
                  type="checkbox"
                  checked={preferences.functional}
                  onChange={() => handlePreferenceChange('functional')}
                  className="w-4 h-4 text-gold-500 bg-gray-700 border-gray-600 rounded focus:ring-gold-500"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <Button
                  variant="primary"
                  size="sm"
                  onClick={handleSavePreferences}
                  className="bg-gold-500 hover:bg-gold-400 text-black"
                >
                  <i className="fas fa-save mr-2"></i>
                  {t.cookie_banner_save_preferences}
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => setShowSettings(false)}
                >
                  <i className="fas fa-arrow-left mr-2"></i>
                  Wróć
                </Button>
              </div>

              {showSuccess && (
                <div className="mt-4 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-green-400">
                    <i className="fas fa-check-circle"></i>
                    <span className="text-sm">{t.cookie_banner_preferences_saved}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}

export default CookieConsentBanner
