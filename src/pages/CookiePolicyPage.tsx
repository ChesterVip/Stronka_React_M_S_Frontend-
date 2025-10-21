import { useLanguage } from '@/hooks/useLanguage'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card'
import SEO from '@/components/SEO'

const CookiePolicyPage = () => {
  const { t } = useLanguage()

  return (
    <>
      <SEO 
        title={t.cookie_policy_title}
        description={t.cookie_policy_subtitle}
        keywords={["cookies", "polityka cookies", "privacy", "prywatność", "mariusz-sokolowski.ch"]}
      />
      
      <div className="min-h-screen bg-black text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <AnimatedSection animation="slide-up" delay={100}>
            <div className="text-center mb-12">
              <div className="flex items-center justify-center mb-4">
                <i className="fas fa-cookie-bite text-4xl text-gold-500 mr-4"></i>
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gold-500 to-gold-300 bg-clip-text text-transparent">
                  {t.cookie_policy_title}
                </h1>
              </div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t.cookie_policy_subtitle}
              </p>
            </div>
          </AnimatedSection>

          {/* What are cookies */}
          <AnimatedSection animation="slide-up" delay={200}>
            <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <i className="fas fa-question-circle text-blue-400"></i>
                  {t.cookie_what_are}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {t.cookie_what_are_desc}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Types of cookies */}
          <AnimatedSection animation="slide-up" delay={300}>
            <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <i className="fas fa-list-ul text-green-400"></i>
                  {t.cookie_types}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                
                {/* Essential Cookies */}
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    <i className="fas fa-exclamation-triangle text-red-400 mr-2"></i>
                    {t.cookie_essential}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t.cookie_essential_desc}
                  </p>
                </div>

                {/* Analytics Cookies */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    <i className="fas fa-chart-line text-blue-400 mr-2"></i>
                    {t.cookie_analytics}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t.cookie_analytics_desc}
                  </p>
                </div>

                {/* Functional Cookies */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    <i className="fas fa-cogs text-purple-400 mr-2"></i>
                    {t.cookie_functional}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t.cookie_functional_desc}
                  </p>
                </div>

                {/* Third Party Cookies */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    <i className="fas fa-external-link-alt text-orange-400 mr-2"></i>
                    {t.cookie_third_party}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {t.cookie_third_party_desc}
                  </p>
                </div>

              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Cookie Management */}
          <AnimatedSection animation="slide-up" delay={400}>
            <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <i className="fas fa-sliders-h text-yellow-400"></i>
                  {t.cookie_manage}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {t.cookie_manage_desc}
                </p>
                
                <div className="bg-gray-800/50 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-white mb-2">
                    <i className="fas fa-browser text-cyan-400 mr-2"></i>
                    {t.cookie_browser_settings}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {t.cookie_browser_settings_desc}
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact */}
          <AnimatedSection animation="slide-up" delay={500}>
            <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700 mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-white">
                  <i className="fas fa-envelope text-gold-400"></i>
                  {t.cookie_contact}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 leading-relaxed">
                  {t.cookie_contact_desc}
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Last Updated */}
          <AnimatedSection animation="slide-up" delay={600}>
            <div className="text-center py-8 border-t border-gray-700">
              <p className="text-gray-400">
                {t.cookie_last_updated}: <span className="text-gold-400 font-medium">{t.cookie_last_updated_date}</span>
              </p>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </>
  )
}

export default CookiePolicyPage
