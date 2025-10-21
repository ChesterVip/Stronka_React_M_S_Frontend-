import { useState, useEffect } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ProgressRing from '@/components/ui/ProgressRing'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import ProtectedSection from '@/components/ProtectedSection'
import SEO, { pageConfigs } from '@/components/SEO'

const EducationPage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<'formal' | 'certifications' | 'skills' | 'continuous'>('formal')
  const [animatedStats, setAnimatedStats] = useState<{[key: string]: number}>({})

  // Animation for counting stats
  useEffect(() => {
    const stats = t.education_learning_stats
    const animationDuration = 2000 // 2 seconds
    const steps = 60 // 60 steps for smooth animation
    
    stats.forEach((stat, index) => {
      const numericValue = parseInt(stat.value.replace('+', ''))
      if (!isNaN(numericValue)) {
        const stepValue = numericValue / steps
        const delay = index * 200 // stagger animations
        let currentStep = 0
        
        const timer = setTimeout(() => {
          const interval = setInterval(() => {
            currentStep++
            const currentValue = Math.min(Math.floor(stepValue * currentStep), numericValue)
            
            setAnimatedStats(prev => ({
              ...prev,
              [stat.label]: currentValue
            }))
            
            if (currentStep >= steps) {
              clearInterval(interval)
            }
          }, animationDuration / steps)
        }, delay)
        
        return () => clearTimeout(timer)
      }
    })
  }, [t.education_learning_stats])

  const formalEducation = [
    {
      id: 'master',
      title: t.education_data.master.title,
      institution: t.education_data.master.institution,
      period: t.education_data.master.period,
      status: t.education_data.master.status,
      progress: 95,
      description: t.education_data.master.description,
      subjects: t.education_data.master.subjects,
      icon: 'fa-university',
      color: 'gold' as const
    },
    {
      id: 'engineer',
      title: t.education_data.engineer.title,
      institution: t.education_data.engineer.institution,
      period: t.education_data.engineer.period,
      status: t.education_data.engineer.status,
      progress: 100,
      description: t.education_data.engineer.description,
      subjects: t.education_data.engineer.subjects,
      icon: 'fa-cogs',
      color: 'blue' as const
    }
  ]

  const certifications = t.education_certifications

  const technicalSkills = t.education_technical_skills

  const continuousLearning = [
    {
      title: t.education_continuous_learning.online_courses.title,
      items: t.education_continuous_learning.online_courses.items
    },
    {
      title: t.education_continuous_learning.conferences.title,
      items: t.education_continuous_learning.conferences.items
    },
    {
      title: t.education_continuous_learning.projects.title,
      items: t.education_continuous_learning.projects.items
    },
    {
      title: t.education_continuous_learning.personal.title,
      items: t.education_continuous_learning.personal.items
    }
  ]

  const learningStats = t.education_learning_stats.map(stat => ({
    ...stat,
    displayValue: stat.value.includes('+') 
      ? `${animatedStats[stat.label] || 0}+`
      : (animatedStats[stat.label] || 0).toString()
  }))

  return (
    <>
      <SEO {...pageConfigs.education} />
      <ProtectedSection sectionKey="nav_education">
        <div className="min-h-screen py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                  {t.education_title}
                </h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  {t.education_cta_subtitle}
                </p>
              </div>
            </AnimatedSection>

            {/* Learning Stats */}
            <AnimatedSection animation="slide-up" delay={200} threshold={0.3}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                {learningStats.map((stat) => (
                  <Card key={stat.label} variant="glass" className="text-center">
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <i className={`fas ${stat.icon} text-gold-400 text-3xl`} />
                      </div>
                      <div className="text-3xl font-bold text-white mb-2">{stat.displayValue}</div>
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
                  { key: 'formal', label: t.education_tab_formal, icon: 'fa-university' },
                  { key: 'certifications', label: t.education_tab_certifications, icon: 'fa-certificate' },
                  { key: 'skills', label: t.education_tab_skills, icon: 'fa-cogs' },
                  { key: 'continuous', label: t.education_tab_continuous, icon: 'fa-infinity' }
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
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                ))}
              </div>
            </AnimatedSection>

            {/* Tab Content */}
            <div className="min-h-[600px]">
              
              {/* Formal Education */}
              {activeTab === 'formal' && (
                <AnimatedSection animation="fade-in" key="formal">
                  <div className="space-y-12">
                    {formalEducation.map((edu) => (
                      <Card key={edu.id} variant="gradient" hover="glow" className="overflow-hidden">
                        <div className="grid lg:grid-cols-3 gap-6">
                          
                          {/* Progress Ring */}
                          <div className="flex items-center justify-center p-6">
                            <div className="text-center">
                              <ProgressRing 
                                progress={edu.progress} 
                                size={140}
                                color={edu.color}
                                animated={true}
                              />
                              <p className="text-sm text-gray-400 mt-4">{edu.status}</p>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="lg:col-span-2 p-6">
                            <CardHeader className="p-0 mb-4">
                              <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                                  <i className={`fas ${edu.icon} text-gold-400 text-xl`} />
                                </div>
                                <div className="flex-1">
                                  <CardTitle className="text-xl mb-2">{edu.title}</CardTitle>
                                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-sm text-gray-400">
                                    <span className="flex items-center">
                                      <i className="fas fa-university mr-2" />
                                      {edu.institution}
                                    </span>
                                    <span className="flex items-center">
                                      <i className="fas fa-calendar mr-2" />
                                      {edu.period}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </CardHeader>

                            <CardContent className="p-0">
                              <CardDescription className="text-gray-300 mb-6 leading-relaxed">
                                {edu.description}
                              </CardDescription>

                              <div>
                                <h4 className="text-lg font-semibold text-white mb-3">
                                  {t.ui_key_subjects_title}
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                  {edu.subjects.map((subject, subjectIndex) => (
                                    <span 
                                      key={subjectIndex}
                                      className="px-3 py-1 bg-gold-500/10 text-gold-400 rounded-full text-sm border border-gold-500/20"
                                    >
                                      {subject}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </CardContent>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {/* Certifications */}
              {activeTab === 'certifications' && (
                <AnimatedSection animation="fade-in" key="certifications">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                      <Card 
                        key={cert.name}
                        variant="neon"
                        hover="lift"
                        className="group"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <CardHeader className="text-center">
                          <div className="w-16 h-16 mx-auto bg-gold-500/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-gold-500/30 transition-colors duration-300">
                            <i className={`fas ${cert.icon} text-gold-400 text-2xl group-hover:scale-110 transition-transform duration-300`} />
                          </div>
                          <CardTitle className="text-lg group-hover:text-gold-400 transition-colors duration-300">
                            {cert.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="text-center">
                          <p className="text-gray-400 mb-2">{cert.issuer}</p>
                          <p className="text-sm text-gray-500 mb-4">{cert.date}</p>
                          {cert.valid && (
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-500/20 text-green-400 border border-green-500/30">
                              <i className="fas fa-check-circle mr-2" />
                              {t.education_cert_valid}
                            </span>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {/* Technical Skills */}
              {activeTab === 'skills' && (
                <AnimatedSection animation="fade-in" key="skills">
                  <div className="grid md:grid-cols-2 gap-8">
                    {technicalSkills.map((category, categoryIndex) => (
                      <Card key={categoryIndex} variant="gradient" hover="glow">
                        <CardHeader>
                          <CardTitle className="text-xl flex items-center">
                            <i className="fas fa-star text-gold-400 mr-3" />
                            {category.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className="mb-4">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-gray-300">{skill.name}</span>
                                <span className="text-sm text-gold-400">{skill.level}%</span>
                              </div>
                              <div className="skill-bar">
                                <div 
                                  className="skill-progress transition-all duration-1000 ease-out"
                                  style={{ 
                                    width: `${skill.level}%`,
                                    animationDelay: `${skillIndex * 100}ms`
                                  }}
                                />
                              </div>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AnimatedSection>
              )}

              {/* Continuous Learning */}
              {activeTab === 'continuous' && (
                <AnimatedSection animation="fade-in" key="continuous">
                  <div className="space-y-8">
                    {continuousLearning.map((section, sectionIndex) => (
                      <Card key={sectionIndex} variant="glass" hover="glow">
                        <CardHeader>
                          <CardTitle className="text-xl flex items-center">
                            <i className="fas fa-lightbulb text-gold-400 mr-3" />
                            {section.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            {section.items.map((item, itemIndex) => (
                              <div key={itemIndex} className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                                <i className="fas fa-chevron-right text-gold-400 text-sm mr-3" />
                                <span>{item}</span>
                              </div>
                            ))}
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
                  {t.education_cta_title}
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  {t.education_subtitle}
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
                    onClick={() => navigate('/experience')}
                    rightIcon={<i className="fas fa-briefcase" />}
                    size="lg"
                  >
                    {t.education_see_experience}
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

export default EducationPage
