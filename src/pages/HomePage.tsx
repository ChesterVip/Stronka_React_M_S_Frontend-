import { useEffect, useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '@/hooks/useLanguage'
import { useTypingEffect } from '@/hooks/useTypingEffect'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import BackgroundVideo from '@/components/ui/BackgroundVideo'
import SEO, { pageConfigs } from '@/components/SEO'

const HomePage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [mounted, setMounted] = useState(false)

  const roles = [
    t.hero_tags.transport,
    t.hero_tags.education,
    t.hero_tags.finance,
    t.hero_tags.tech,
    t.hero_tags.experience
  ]

  const { displayedText } = useTypingEffect(roles, {
    typeSpeed: 100,
    deleteSpeed: 50,
    pauseDuration: 2000,
    loop: true
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <SEO {...pageConfigs.home} />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Video - adaptacyjne ładowanie */}
        <BackgroundVideo
          desktopSrc="https://www.swizzonic.ch/img/SloMo_SwizzonicIntroLoopV3.mp4"
          poster="https://www.swizzonic.ch/img/poster.jpg"
          overlay={true}
          overlayOpacity={0.7}
          className="z-0"
        />
        
        {/* Additional animated effects */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fade-in" delay={200}>
            {/* Main Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-white mb-2">{t.hero_title}</span>
              <span className="block text-gradient min-h-[1.2em]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {t.hero_subtitle}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {Object.values(t.hero_tags).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-4 py-2 rounded-full border border-gold-500/30 
                           bg-gold-500/10 text-gold-300 text-sm font-medium
                           hover:border-gold-500/50 hover:bg-gold-500/20 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <i className="fas fa-star mr-2 text-xs" />
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                leftIcon={<i className="fas fa-paper-plane" />}
                size="lg"
              >
                {t.contact_btn}
              </Button>
              
              <Button
                variant="outline"
                onClick={() => navigate('/services')}
                rightIcon={<i className="fas fa-arrow-right" />}
                size="lg"
              >
                {t.services_btn}
              </Button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <i className="fas fa-chevron-down text-gold-400 text-2xl opacity-70" />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Quick Overview Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="slide-up" threshold={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                {t.homepage_overview_title}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t.about_subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useMemo(() => [
              {
                icon: 'fa-truck',
                title: t.homepage_services.transport,
                description: t.homepage_services.transport_desc,
                link: '/services'
              },
              {
                icon: 'fa-chart-line',
                title: t.homepage_services.logistics,
                description: t.homepage_services.logistics_desc,
                link: '/experience'
              },
              {
                icon: 'fa-graduation-cap',
                title: t.homepage_services.education,
                description: t.homepage_services.education_desc,
                link: '/education'
              },
              {
                icon: 'fa-laptop-code',
                title: t.homepage_services.technologies,
                description: t.homepage_services.technologies_desc,
                link: '/tech'
              },
              {
                icon: 'fa-handshake',
                title: t.homepage_services.experience,
                description: t.homepage_services.experience_desc,
                link: '/experience'
              },
              {
                icon: 'fa-envelope',
                title: t.homepage_services.contact,
                description: t.homepage_services.contact_desc,
                link: '/contact'
              }
            ], [t]).map((item, index) => (
              <AnimatedSection
                key={index}
                animation="slide-up"
                delay={index * 100}
                threshold={0.3}
              >
                <Card 
                  className="cursor-pointer group"
                  onClick={() => navigate(item.link)}
                >
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto bg-gold-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-500/30 transition-colors duration-300">
                      <i className={`fas ${item.icon} text-gold-400 text-2xl group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <CardTitle className="text-xl group-hover:text-gold-400 transition-colors duration-300">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
    </>
  )
}

export default HomePage