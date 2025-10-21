import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { useNavigate } from 'react-router-dom'
import SEO, { pageConfigs } from '@/components/SEO'

const AboutPage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'story' | 'achievements' | 'values'>('story')

  const achievements = [
    {
      icon: 'fa-building',
      title: t.about_achievements.business,
      description: t.about_achievement_business_desc
    },
    {
      icon: 'fa-map-marked-alt',
      title: t.about_achievements.swiss_exp,
      description: t.about_achievement_swiss_desc
    },
    {
      icon: 'fa-graduation-cap',
      title: t.about_achievements.engineer,
      description: t.about_achievement_engineer_desc
    },
    {
      icon: 'fa-chart-line',
      title: t.about_achievements.master,
      description: t.about_achievement_master_desc
    },
    {
      icon: 'fa-code',
      title: t.about_achievements.webdev,
      description: t.about_achievement_webdev_desc
    }
  ]

  const values = [
    {
      icon: 'fa-handshake',
      title: t.about_value_professionalism,
      description: t.about_value_professionalism_desc
    },
    {
      icon: 'fa-lightbulb',
      title: t.about_value_innovation,
      description: t.about_value_innovation_desc
    },
    {
      icon: 'fa-target',
      title: t.about_value_precision,
      description: t.about_value_precision_desc
    },
    {
      icon: 'fa-users',
      title: t.about_value_partnership,
      description: t.about_value_partnership_desc
    }
  ]

  const stats = [
    { number: '5+', label: t.about_stat_years_switzerland, icon: 'fa-calendar-alt' },
    { number: '1000+', label: t.about_stat_daily_km, icon: 'fa-road' },
    { number: '3', label: t.about_stat_languages, icon: 'fa-globe' },
    { number: '10+', label: t.about_stat_it_projects, icon: 'fa-laptop-code' }
  ]

  return (
    <>
      <SEO {...pageConfigs.about} />
      <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <AnimatedSection animation="slide-up" delay={100}>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.about_title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t.about_subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Stats Section */}
        <AnimatedSection animation="slide-up" delay={200} threshold={0.3}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat, index) => (
              <Card key={index} variant="glass" className="text-center">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <i className={`fas ${stat.icon} text-gold-400 text-3xl`} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>

        {/* Tab Navigation */}
        <AnimatedSection animation="slide-up" delay={300}>
          <div className="flex flex-wrap justify-center mb-12 border-b border-gold-500/20">
            {[
              { key: 'story', label: t.about_tab_story, icon: 'fa-book' },
              { key: 'achievements', label: t.about_tab_achievements, icon: 'fa-trophy' },
              { key: 'values', label: t.about_tab_values, icon: 'fa-heart' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`px-6 py-3 mx-2 mb-4 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === tab.key
                    ? 'text-gold-400 bg-gold-500/10 border-b-2 border-gold-500'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                <i className={`fas ${tab.icon}`} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          
          {/* Story Tab */}
          {activeTab === 'story' && (
            <AnimatedSection animation="fade-in" key="story">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  
                  {/* Entrepreneur */}
                  <Card variant="gradient" hover="glow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                          <i className="fas fa-briefcase text-gold-400 text-xl" />
                        </div>
                        <CardTitle className="text-xl">{t.about_entrepreneur}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg leading-relaxed">
                        {t.about_entrepreneur_desc}
                      </CardDescription>
                    </CardContent>
                  </Card>

                  {/* International */}
                  <Card variant="gradient" hover="glow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                          <i className="fas fa-globe text-gold-400 text-xl" />
                        </div>
                        <CardTitle className="text-xl">{t.about_international}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg leading-relaxed">
                        {t.about_international_desc}
                      </CardDescription>
                    </CardContent>
                  </Card>

                </div>

                <div className="space-y-8">
                  
                  {/* Development */}
                  <Card variant="gradient" hover="glow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                          <i className="fas fa-chart-line text-gold-400 text-xl" />
                        </div>
                        <CardTitle className="text-xl">{t.about_development}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg leading-relaxed">
                        {t.about_development_desc}
                      </CardDescription>
                    </CardContent>
                  </Card>

                  {/* Tech Enthusiast */}
                  <Card variant="gradient" hover="glow">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center">
                          <i className="fas fa-rocket text-gold-400 text-xl" />
                        </div>
                        <CardTitle className="text-xl">{t.about_tech_enthusiast}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg leading-relaxed">
                        {t.about_tech_enthusiast_desc}
                      </CardDescription>
                    </CardContent>
                  </Card>

                </div>
              </div>
            </AnimatedSection>
          )}

          {/* Achievements Tab */}
          {activeTab === 'achievements' && (
            <AnimatedSection animation="fade-in" key="achievements">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <Card 
                    key={index}
                    variant="neon"
                    hover="lift"
                    className="group cursor-pointer"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 mx-auto bg-gold-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-500/30 transition-colors duration-300">
                        <i className={`fas ${achievement.icon} text-gold-400 text-2xl group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <CardTitle className="text-lg group-hover:text-gold-400 transition-colors duration-300">
                        {achievement.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center leading-relaxed">
                        {achievement.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Values Tab */}
          {activeTab === 'values' && (
            <AnimatedSection animation="fade-in" key="values">
              <div className="grid md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card 
                    key={index}
                    variant="glass"
                    hover="glow"
                    className="group"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-xl flex items-center justify-center group-hover:from-gold-500/30 group-hover:to-gold-600/30 transition-colors duration-300">
                          <i className={`fas ${value.icon} text-gold-400 text-xl group-hover:scale-110 transition-transform duration-300`} />
                        </div>
                        <CardTitle className="text-xl group-hover:text-gold-400 transition-colors duration-300">
                          {value.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-lg leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          )}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="slide-up" delay={400} threshold={0.3}>
          <div className="text-center mt-20 py-16 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-2xl border border-gold-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.about_cta_title}
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.about_cta_subtitle}
            </p>
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
          </div>
        </AnimatedSection>

      </div>
      </div>
    </>
  )
}

export default AboutPage