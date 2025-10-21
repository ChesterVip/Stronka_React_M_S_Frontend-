import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from '@/components/ui/AnimatedSection'
import GitTimeline from '@/components/ui/GitTimeline'
import ProtectedSection from '@/components/ProtectedSection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import SEO, { pageConfigs } from '@/components/SEO'

const ExperiencePage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()

  const experienceData = [
    {
      id: 'current-swiss',
      title: t.experience_data.current_swiss.title,
      period: t.experience_data.current_swiss.period,
      company: t.experience_data.current_swiss.company,
      location: t.experience_data.current_swiss.location,
      description: t.experience_data.current_swiss.description,
      achievements: t.experience_data.current_swiss.achievements,
      current: true,
      icon: 'fa-truck',
      color: 'blue',
      branch: 'szwajcaria' as const
    },
    {
      id: 'business-owner',
      title: t.experience_data.business_owner.title,
      period: t.experience_data.business_owner.period,
      company: t.experience_data.business_owner.company,
      location: t.experience_data.business_owner.location,
      description: t.experience_data.business_owner.description,
      achievements: t.experience_data.business_owner.achievements,
      current: false,
      icon: 'fa-building',
      color: 'gold',
      branch: 'polska' as const
    },
    {
      id: 'fg-falke',
      title: t.experience_data.fg_falke.title,
      period: t.experience_data.fg_falke.period,
      company: t.experience_data.fg_falke.company,
      location: t.experience_data.fg_falke.location,
      description: t.experience_data.fg_falke.description,
      achievements: t.experience_data.fg_falke.achievements,
      current: false,
      icon: 'fa-lightbulb',
      color: 'purple',
      branch: 'polska' as const
    },
    {
      id: 'early-driver',
      title: t.experience_data.early_driver.title,
      period: t.experience_data.early_driver.period,
      company: t.experience_data.early_driver.company,
      location: t.experience_data.early_driver.location,
      description: t.experience_data.early_driver.description,
      achievements: t.experience_data.early_driver.achievements,
      current: false,
      icon: 'fa-road',
      color: 'green',
      branch: 'main' as const
    }
  ]

  return (
    <>
      <SEO {...pageConfigs.experience} />
      <ProtectedSection sectionKey="nav_experience">
        <div className="min-h-screen py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {t.experience_title}
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
                  {t.experience_subtitle}
                </p>
                
                {/* Summary Card */}
                <Card variant="gradient" className="max-w-4xl mx-auto">
                  <CardHeader>
                    <CardTitle className="text-2xl text-center text-gold-400 flex items-center justify-center">
                      <i className="fas fa-user-tie mr-3" />
                      {t.experience_development_path}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 text-lg leading-relaxed text-center">
                      {t.experience_summary}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </AnimatedSection>

            {/* Git Timeline */}
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-white text-center mb-8 flex items-center justify-center">
                  <i className="fas fa-code-branch mr-3 text-gold-400" />
                  {t.git_timeline_title}
                </h2>
                <GitTimeline items={experienceData} />
              </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection animation="slide-up" delay={400} threshold={0.3}>
              <div className="text-center mt-20 py-16 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-2xl border border-gold-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.experience_cta_title}
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  {t.experience_cta_subtitle}
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
                    rightIcon={<i className="fas fa-briefcase" />}
                    size="lg"
                  >
                    {t.experience_see_services}
                  </Button>
                </div>
              </div>
            </AnimatedSection>

          </div>
        </div>
      </ProtectedSection>
    </>
  )
}

export default ExperiencePage
