import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Timeline from '@/components/ui/Timeline'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import SEO, { pageConfigs } from '@/components/SEO'

const ExperiencePage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [activeView, setActiveView] = useState<'timeline' | 'skills' | 'projects'>('timeline')

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
      color: 'blue'
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
      color: 'gold'
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
      color: 'purple'
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
      color: 'green'
    }
  ]

  const skillsData = [
    {
      category: 'Transport & Logistyka',
      skills: [
        { name: 'Planowanie tras', level: 95 },
        { name: 'Zarządzanie flotą', level: 90 },
        { name: 'Optymalizacja kosztów', level: 88 },
        { name: 'Obsługa ADR', level: 85 },
        { name: 'GPS/Telemetria', level: 92 }
      ]
    },
    {
      category: 'Biznes & Zarządzanie',
      skills: [
        { name: 'Zarządzanie firmą', level: 90 },
        { name: 'Budowanie relacji', level: 95 },
        { name: 'Negocjacje', level: 88 },
        { name: 'Controlling finansowy', level: 82 },
        { name: 'Leadership', level: 85 }
      ]
    },
    {
      category: 'Technologie',
      skills: [
        { name: 'Web Development', level: 80 },
        { name: 'React/TypeScript', level: 75 },
        { name: 'Automatyzacja procesów (n8n, Make)', level: 78 },
        { name: 'Analiza danych', level: 70 },
        { name: 'AI Tools', level: 72 }
      ]
    },
    {
      category: 'Języki',
      skills: [
        { name: 'Polski', level: 100 },
        { name: 'Niemiecki', level: 85 },
        { name: 'Angielski', level: 80 }
      ]
    }
  ]

  const projectHighlights = [
    {
      title: 'Optymalizacja tras transportowych',
      description: 'Implementacja systemu AI do planowania optymalnych tras',
      impact: '25% redukcja kosztów paliwa',
      icon: 'fa-route'
    },
    {
      title: 'Digitalizacja procesów',
      description: 'Przejście z dokumentacji papierowej na cyfrową',
      impact: '60% szybsza obsługa zleceń',
      icon: 'fa-digital-tachograph'
    },
    {
      title: 'Program mentoringowy',
      description: 'Szkolenie nowych kierowców w zakresie bezpieczeństwa',
      impact: '90% retention rate',
      icon: 'fa-chalkboard-teacher'
    }
  ]

  const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">{skill}</span>
        <span className="text-sm text-gold-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  )

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection animation="slide-up" delay={100}>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.experience_title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t.experience_subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* View Selector */}
        <AnimatedSection animation="slide-up" delay={200}>
          <div className="flex flex-wrap justify-center mb-12 border-b border-gold-500/20">
            {[
              { key: 'timeline', label: t.experience_tab_timeline, icon: 'fa-history' },
              { key: 'skills', label: t.experience_tab_skills, icon: 'fa-star' },
              { key: 'projects', label: t.experience_tab_projects, icon: 'fa-project-diagram' }
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveView(tab.key as any)}
                className={`px-6 py-3 mx-2 mb-4 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeView === tab.key
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

        {/* Content */}
        <div className="min-h-[600px]">
          
          {/* Timeline View */}
          {activeView === 'timeline' && (
            <AnimatedSection animation="fade-in" key="timeline">
              <Timeline items={experienceData} />
            </AnimatedSection>
          )}

          {/* Skills View */}
          {activeView === 'skills' && (
            <AnimatedSection animation="fade-in" key="skills">
              <div className="grid md:grid-cols-2 gap-8">
                {skillsData.map((category, index) => (
                  <Card key={category.category} variant="gradient" hover="glow">
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center">
                        <i className="fas fa-cogs text-gold-400 mr-3" />
                        {category.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {category.skills.map((skill) => (
                        <SkillBar 
                          key={skill.name} 
                          skill={skill.name} 
                          level={skill.level} 
                        />
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          )}

          {/* Projects View */}
          {activeView === 'projects' && (
            <AnimatedSection animation="fade-in" key="projects">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectHighlights.map((project, index) => (
                  <Card 
                    key={index}
                    variant="neon"
                    hover="lift"
                    className="group text-center"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-16 h-16 mx-auto bg-gold-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-500/30 transition-colors duration-300">
                        <i className={`fas ${project.icon} text-gold-400 text-2xl group-hover:scale-110 transition-transform duration-300`} />
                      </div>
                      <CardTitle className="text-xl group-hover:text-gold-400 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </CardDescription>
                      <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
                        <i className="fas fa-chart-line mr-2" />
                        {project.impact}
                      </div>
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
  )
}

export default ExperiencePage