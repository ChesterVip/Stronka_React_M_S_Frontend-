import { useState } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import SEO, { pageConfigs } from '@/components/SEO'

const ServicesPage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const serviceCategories = [
    {
      id: 'transport',
      title: t.services_categories.transport.title,
      icon: 'fa-truck',
      color: 'from-blue-500/20 to-blue-600/20',
      services: [
        {
          title: t.services_categories.transport.services.poland_switzerland.title,
          description: t.services_categories.transport.services.poland_switzerland.description,
          icon: 'fa-route',
          features: t.services_categories.transport.services.poland_switzerland.features
        },
        {
          title: t.services_categories.transport.services.europe.title,
          description: t.services_categories.transport.services.europe.description,
          icon: 'fa-map-marked-alt',
          features: t.services_categories.transport.services.europe.features
        },
        {
          title: t.services_categories.transport.services.ce_cargo.title,
          description: t.services_categories.transport.services.ce_cargo.description,
          icon: 'fa-shipping-fast',
          features: t.services_categories.transport.services.ce_cargo.features
        }
      ]
    },
    {
      id: 'logistics',
      title: t.services_categories.logistics.title,
      icon: 'fa-chart-line',
      color: 'from-green-500/20 to-green-600/20',
      services: [
        {
          title: t.services_categories.logistics.services.route_planning.title,
          description: t.services_categories.logistics.services.route_planning.description,
          icon: 'fa-route',
          features: t.services_categories.logistics.services.route_planning.features
        },
        {
          title: t.services_categories.logistics.services.process_analysis.title,
          description: t.services_categories.logistics.services.process_analysis.description,
          icon: 'fa-search',
          features: t.services_categories.logistics.services.process_analysis.features
        },
        {
          title: t.services_categories.logistics.services.consulting.title,
          description: t.services_categories.logistics.services.consulting.description,
          icon: 'fa-users-cog',
          features: t.services_categories.logistics.services.consulting.features
        }
      ]
    },
    {
      id: 'finance',
      title: t.services_categories.finance.title,
      icon: 'fa-calculator',
      color: 'from-gold-500/20 to-gold-600/20',
      services: [
        {
          title: t.services_categories.finance.services.cost_optimization.title,
          description: t.services_categories.finance.services.cost_optimization.description,
          icon: 'fa-chart-pie',
          features: t.services_categories.finance.services.cost_optimization.features
        },
        {
          title: t.services_categories.finance.services.profitability.title,
          description: t.services_categories.finance.services.profitability.description,
          icon: 'fa-analytics',
          features: t.services_categories.finance.services.profitability.features
        },
        {
          title: t.services_categories.finance.services.budget_planning.title,
          description: t.services_categories.finance.services.budget_planning.description,
          icon: 'fa-piggy-bank',
          features: t.services_categories.finance.services.budget_planning.features
        }
      ]
    },
    {
      id: 'tech',
      title: t.services_categories.tech.title,
      icon: 'fa-laptop-code',
      color: 'from-purple-500/20 to-purple-600/20',
      services: [
        {
          title: t.services_categories.tech.services.web_development.title,
          description: t.services_categories.tech.services.web_development.description,
          icon: 'fa-globe',
          features: t.services_categories.tech.services.web_development.features
        },
        {
          title: t.services_categories.tech.services.automation.title,
          description: t.services_categories.tech.services.automation.description,
          icon: 'fa-robot',
          features: t.services_categories.tech.services.automation.features
        },
        {
          title: t.services_categories.tech.services.ai_integration.title,
          description: t.services_categories.tech.services.ai_integration.description,
          icon: 'fa-brain',
          features: t.services_categories.tech.services.ai_integration.features
        }
      ]
    }
  ]

  const pricingPlans = [
    {
      name: 'Basic',
      price: '199',
      period: 'za projekt',
      description: 'Idealne dla małych firm',
      features: [
        'Konsultacja wstępna',
        'Analiza podstawowa',
        'Raport z rekomendacjami',
        'Support email'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '499',
      period: 'za projekt',
      description: 'Dla średnich przedsiębiorstw',
      features: [
        'Wszystko z Basic',
        'Implementacja rozwiązań',
        'Szkolenie zespołu',
        'Support 30 dni',
        'Monitoring efektów'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Oferta',
      period: 'indywidualna',
      description: 'Dla dużych organizacji',
      features: [
        'Wszystko z Professional',
        'Dedykowany projekt manager',
        'Integracje zaawansowane',
        'Support 24/7',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  return (
    <>
      <SEO {...pageConfigs.services} />
      <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <AnimatedSection animation="slide-up" delay={100}>
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {t.services_title}
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {t.services_subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Service Categories */}
        <div className="mb-20">
          {serviceCategories.map((category, categoryIndex) => (
            <AnimatedSection 
              key={category.id}
              animation="slide-up" 
              delay={200 + categoryIndex * 100}
              threshold={0.3}
            >
              <div className="mb-16">
                {/* Category Header */}
                <div className="text-center mb-12">
                  <div className={`inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r ${category.color} border border-current/20 mb-4`}>
                    <i className={`fas ${category.icon} text-2xl mr-3`} />
                    <h2 className="text-2xl font-bold text-white">{category.title}</h2>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <Card
                      key={serviceIndex}
                      variant="gradient"
                      hover="lift"
                      className="group cursor-pointer relative overflow-hidden"
                      onMouseEnter={() => setHoveredService(categoryIndex * 3 + serviceIndex)}
                      onMouseLeave={() => setHoveredService(null)}
                      onClick={() => navigate('/contact', { state: { service: service.title } })}
                    >
                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 to-gold-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <CardHeader className="relative z-10">
                        <div className="flex items-center space-x-4 mb-4">
                          <div className="w-12 h-12 bg-gold-500/20 rounded-full flex items-center justify-center group-hover:bg-gold-500/30 transition-colors duration-300">
                            <i className={`fas ${service.icon} text-gold-400 text-xl group-hover:scale-110 transition-transform duration-300`} />
                          </div>
                          <CardTitle className="text-xl group-hover:text-gold-400 transition-colors duration-300">
                            {service.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-gray-300 text-lg leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>

                      <CardContent className="relative z-10">
                        <ul className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-300">
                              <i className="fas fa-check text-green-400 text-sm mr-3" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-6">
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full group-hover:border-gold-500 group-hover:text-gold-400 transition-colors duration-300"
                          >
                            {t.services_learn_more}
                            <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Pricing Section */}
        <AnimatedSection animation="slide-up" threshold={0.3}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              {t.services_pricing_title}
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t.services_pricing_subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <AnimatedSection
              key={index}
              animation="slide-up"
              delay={100 + index * 100}
              threshold={0.3}
            >
              <Card
                variant={plan.popular ? "neon" : "default"}
                hover="lift"
                className={`text-center relative overflow-hidden ${
                  plan.popular ? 'border-gold-500/50 shadow-lg shadow-gold-500/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gold-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      {t.services_most_popular}
                    </span>
                  </div>
                )}
                
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-gold-400">{plan.price}</span>
                    {plan.price !== 'Oferta' && <span className="text-gray-400"> PLN</span>}
                    <div className="text-gray-400 text-sm">{plan.period}</div>
                  </div>
                  <CardDescription className="text-gray-300">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <i className="fas fa-check text-green-400 text-sm mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    variant={plan.popular ? "gold" : "outline"}
                    className="w-full"
                    onClick={() => navigate('/contact', { state: { plan: plan.name } })}
                  >
                    {plan.price === 'Oferta' ? t.services_contact_us : t.services_choose_plan}
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Section */}
        <AnimatedSection animation="slide-up" threshold={0.3}>
          <div className="text-center py-16 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-2xl border border-gold-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t.services_cta_title}
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              {t.services_cta_subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/contact')}
                leftIcon={<i className="fas fa-paper-plane" />}
                size="lg"
              >
                {t.services_cta_contact}
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/about')}
                rightIcon={<i className="fas fa-user" />}
                size="lg"
              >
                {t.services_cta_about}
              </Button>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
    </>
  )
}

export default ServicesPage