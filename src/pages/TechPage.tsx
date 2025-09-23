import { useState, useMemo } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ProgressRing from '@/components/ui/ProgressRing'

interface TechProject {
  id: string
  title: string
  category: 'web' | 'ai' | 'mobile' | 'automation' | 'blockchain'
  status: 'completed' | 'in-progress' | 'planned'
  progress: number
  description: string
  longDescription: string
  technologies: string[]
  features: string[]
  links?: {
    demo?: string
    github?: string
    docs?: string
  }
  icon: string
  color: 'gold' | 'blue' | 'green' | 'red'
  complexity: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  timeline: string
  achievements?: string[]
  images?: string[]
}

const TechPage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [selectedProject, setSelectedProject] = useState<TechProject | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const techProjects: TechProject[] = [
    {
      id: 'corporate-website',
      title: 'Corporate Website - React Migration',
      category: 'web',
      status: 'in-progress',
      progress: 85,
      description: 'Migracja strony korporacyjnej z HTML/JS na React z TypeScript, SSR i zaawansowanym lazy loading.',
      longDescription: 'Kompleksowa migracja wielojęzycznej strony korporacyjnej na nowoczesną architekturę React z TypeScript. Implementacja Vite SSR, React Router z lazy loading, network-adaptive loading animations w stylu YouTube/Messenger, oraz maksymalna modularność komponentów.',
      technologies: ['React', 'TypeScript', 'Vite', 'React Router', 'Tailwind CSS', 'SSR'],
      features: [
        'Network-adaptive lazy loading',
        'YouTube-style skeleton animations',
        'Multilingual system with React Context',
        'Component modularity and reusability',
        'Advanced routing with code splitting',
        'Form security with validation',
        'Responsive design patterns'
      ],
      links: {
        github: '#',
        docs: '#'
      },
      icon: 'fa-react',
      color: 'blue',
      complexity: 'advanced',
      timeline: '2024 - Current',
      achievements: [
        'Implemented advanced lazy loading system',
        'Created 20+ reusable components',
        'Built network-adaptive animations',
        'Established modular architecture'
      ]
    },
    {
      id: 'translation-system',
      title: 'Advanced Translation System',
      category: 'web',
      status: 'completed',
      progress: 100,
      description: '6-poziomowy system tłumaczeń z 1500+ parami tłumaczeniowymi i automatyczną detekcją języka.',
      longDescription: 'Zaawansowany system tłumaczeń dla aplikacji webowych z wielopoziomową architekturą. Obejmuje automatyczne wykrywanie treści, inteligentne mapowanie tekstów, oraz system fallback dla 100% pokrycia tłumaczeniowego.',
      technologies: ['JavaScript', 'DOM API', 'Regex', 'LocalStorage', 'Web APIs'],
      features: [
        '6 warstw tłumaczeń',
        '1500+ par tłumaczeniowych',
        'Automatyczne wykrywanie DOM',
        'Inteligentne pattern matching',
        'System fallback dla pełnego pokrycia',
        'Debugging i logging system'
      ],
      links: {
        demo: '#',
        github: '#'
      },
      icon: 'fa-language',
      color: 'green',
      complexity: 'intermediate',
      timeline: '2024',
      achievements: [
        'Osiągnięto 100% pokrycie tłumaczeniowe',
        'Zaimplementowano 6 warstw translacji',
        'Stworzono system automatycznej detekcji'
      ]
    },
    {
      id: 'logistics-ai',
      title: 'AI-Powered Logistics Optimizer',
      category: 'ai',
      status: 'planned',
      progress: 25,
      description: 'System AI do optymalizacji tras logistycznych z machine learning i predykcją kosztów.',
      longDescription: 'Zaawansowany system wykorzystujący sztuczną inteligencję do optymalizacji procesów logistycznych. Implementacja algorytmów machine learning do predykcji tras, kosztów i czasów dostaw z integracją z systemami GPS i danymi ruchu.',
      technologies: ['Python', 'TensorFlow', 'APIs', 'GPS Integration', 'Machine Learning'],
      features: [
        'Optymalizacja tras w czasie rzeczywistym',
        'Predykcja kosztów transportu',
        'Integration z GPS i mapami',
        'Machine learning predictions',
        'Cost-benefit analysis',
        'Real-time traffic adaptation'
      ],
      icon: 'fa-route',
      color: 'blue',
      complexity: 'expert',
      timeline: '2025 - Planned',
      achievements: [
        'Research phase completed',
        'Architecture design in progress'
      ]
    },
    {
      id: 'crypto-portfolio',
      title: 'Crypto Portfolio Tracker',
      category: 'blockchain',
      status: 'completed',
      progress: 100,
      description: 'Aplikacja do śledzenia portfolio kryptowalut z real-time danymi i analizą zysków/strat.',
      longDescription: 'Kompleksowa aplikacja do zarządzania portfolio kryptowalut z integracją z popularnymi giełdami. Real-time tracking cen, analiza zysków/strat, alerty cenowe, oraz zaawansowane wykresy i statystyki.',
      technologies: ['React', 'Node.js', 'WebSocket', 'Chart.js', 'Crypto APIs'],
      features: [
        'Real-time price tracking',
        'Portfolio performance analysis',
        'Profit/Loss calculations',
        'Price alerts and notifications',
        'Multi-exchange integration',
        'Advanced charting system'
      ],
      links: {
        demo: '#',
        github: '#'
      },
      icon: 'fa-bitcoin',
      color: 'gold',
      complexity: 'advanced',
      timeline: '2023',
      achievements: [
        'Integrated 5+ major exchanges',
        'Implemented real-time data streaming',
        'Built advanced analytics dashboard'
      ]
    },
    {
      id: 'mobile-finance-app',
      title: 'Mobile Finance Management',
      category: 'mobile',
      status: 'in-progress',
      progress: 60,
      description: 'Aplikacja mobilna do zarządzania finansami osobistymi z AI-powered insights.',
      longDescription: 'Natywna aplikacja mobilna do kompleksowego zarządzania finansami osobistymi. Wykorzystuje AI do analizy wydatków, sugerowania oszczędności i prognozowania budżetu. Integracja z bankami przez Open Banking API.',
      technologies: ['React Native', 'TypeScript', 'AI/ML', 'Open Banking API', 'SQLite'],
      features: [
        'AI-powered expense categorization',
        'Automated savings suggestions',
        'Budget forecasting',
        'Bank integration via Open Banking',
        'Secure biometric authentication',
        'Advanced spending analytics'
      ],
      icon: 'fa-mobile-alt',
      color: 'green',
      complexity: 'advanced',
      timeline: '2024 - In Progress',
      achievements: [
        'Core functionality implemented',
        'AI categorization system working',
        'Bank API integration completed'
      ]
    },
    {
      id: 'automation-suite',
      title: 'Business Process Automation',
      category: 'automation',
      status: 'completed',
      progress: 100,
      description: 'Zestaw narzędzi automatyzujących procesy biznesowe z integracją z popularnymi platformami.',
      longDescription: 'Kompleksowy pakiet narzędzi do automatyzacji procesów biznesowych. Integracje z CRM, ERP, e-mail marketing, social media i systemami księgowymi. Workflow builder z drag-and-drop interface.',
      technologies: ['Node.js', 'Python', 'Webhooks', 'API Integration', 'Docker'],
      features: [
        'Visual workflow builder',
        'Multi-platform integrations',
        'Automated reporting',
        'Email and SMS notifications',
        'Data synchronization',
        'Custom trigger system'
      ],
      links: {
        demo: '#',
        docs: '#'
      },
      icon: 'fa-cogs',
      color: 'red',
      complexity: 'intermediate',
      timeline: '2023',
      achievements: [
        'Automated 50+ business processes',
        'Reduced manual work by 80%',
        'Integrated 15+ popular platforms'
      ]
    }
  ]

  const categories = [
    { id: 'all', name: 'Wszystkie', icon: 'fa-th' },
    { id: 'web', name: 'Web Development', icon: 'fa-globe' },
    { id: 'ai', name: 'AI & ML', icon: 'fa-brain' },
    { id: 'mobile', name: 'Mobile Apps', icon: 'fa-mobile-alt' },
    { id: 'automation', name: 'Automatyzacja', icon: 'fa-robot' },
    { id: 'blockchain', name: 'Blockchain', icon: 'fa-link' }
  ]

  const filteredProjects = useMemo(() => {
    return activeCategory === 'all' 
      ? techProjects 
      : techProjects.filter(project => project.category === activeCategory)
  }, [activeCategory, techProjects])


  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500/20 text-green-400 border-green-500/30'
      case 'in-progress': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
      case 'planned': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const getComplexityColor = (complexity: string) => {
    switch (complexity) {
      case 'beginner': return 'text-green-400'
      case 'intermediate': return 'text-yellow-400'
      case 'advanced': return 'text-orange-400'
      case 'expert': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-code text-4xl text-yellow-500 mr-4"></i>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 bg-clip-text text-transparent">
                {t.tech_page_title}
              </h1>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.tech_page_subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Controls Section */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
                >
                  <i className={`fas ${category.icon}`}></i>
                  {category.name}
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">{t.tech_view_label}</span>
              <div className="flex rounded-lg bg-gray-800 p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1 rounded-md text-sm transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-yellow-500 text-black' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <i className="fas fa-th mr-1"></i>
                  {t.tech_view_grid}
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-1 rounded-md text-sm transition-all ${
                    viewMode === 'list' 
                      ? 'bg-yellow-500 text-black' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <i className="fas fa-list mr-1"></i>
                  {t.tech_view_list}
                </button>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Projects Grid/List */}
        <AnimatedSection delay={0.3}>
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
            : 'space-y-4'
          }>
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group transition-all duration-300 ${
                  viewMode === 'list' ? 'w-full' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-full bg-gray-900 border border-gray-700 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/20 rounded-lg p-6">
                  <div className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-lg bg-${project.color}-500/20 border border-${project.color}-500/30`}>
                          <i className={`fas ${project.icon} text-xl text-${project.color}-400`}></i>
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-xs px-2 py-1 rounded-full border ${getStatusBadgeColor(project.status)}`}>
                              {project.status === 'completed' && t.tech_status_completed}
                              {project.status === 'in-progress' && t.tech_status_in_progress}
                              {project.status === 'planned' && t.tech_status_planned}
                            </span>
                            <span className={`text-xs ${getComplexityColor(project.complexity)}`}>
                              {project.complexity === 'beginner' && t.tech_complexity_beginner}
                              {project.complexity === 'intermediate' && t.tech_complexity_intermediate}
                              {project.complexity === 'advanced' && t.tech_complexity_advanced}
                              {project.complexity === 'expert' && t.tech_complexity_expert}
                            </span>
                          </div>
                        </div>
                      </div>
                      <ProgressRing 
                        progress={project.progress} 
                        size={60} 
                        strokeWidth={4}
                        color={project.color}
                      />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Timeline */}
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <i className="fas fa-calendar-alt"></i>
                      <span>{project.timeline}</span>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-2">
                      <div className="text-sm font-medium text-gray-300">Technologie:</div>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-gray-700 text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="text-xs px-2 py-1 bg-gray-700 text-gray-400 rounded-full">
                            +{project.technologies.length - 4} więcej
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 pt-4">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="w-full bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-black px-4 py-2 text-sm rounded-lg font-bold transition-all duration-300"
                      >
                        <i className="fas fa-eye mr-2"></i>
                        {t.tech_see_details}
                      </button>
                      
                      {project.links && (
                        <div className="flex gap-2">
                          {project.links.demo && (
                            <button className="flex-1 bg-gray-800 text-white hover:bg-gray-700 px-3 py-1 text-sm rounded-lg transition-colors">
                              <i className="fas fa-external-link-alt mr-1"></i>
                              {t.tech_demo}
                            </button>
                          )}
                          {project.links.github && (
                            <button className="flex-1 bg-gray-800 text-white hover:bg-gray-700 px-3 py-1 text-sm rounded-lg transition-colors">
                              <i className="fab fa-github mr-1"></i>
                              {t.tech_code}
                            </button>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Back Navigation */}
        <AnimatedSection delay={0.4}>
          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors"
            >
              <i className="fas fa-arrow-left"></i>
              {t.tech_back_to_home}
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900 border-b border-gray-700 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-${selectedProject.color}-500/20 border border-${selectedProject.color}-500/30`}>
                  <i className={`fas ${selectedProject.icon} text-xl text-${selectedProject.color}-400`}></i>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
                  <p className="text-gray-400">{selectedProject.timeline}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white bg-transparent hover:bg-gray-800 px-3 py-1 rounded-lg transition-colors"
              >
                <i className="fas fa-times text-xl"></i>
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Status and Progress */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className={`px-3 py-1 rounded-full border text-sm ${getStatusBadgeColor(selectedProject.status)}`}>
                    {selectedProject.status === 'completed' && t.tech_status_completed}
                    {selectedProject.status === 'in-progress' && t.tech_status_in_progress}
                    {selectedProject.status === 'planned' && t.tech_status_planned}
                  </span>
                  <span className={`text-sm ${getComplexityColor(selectedProject.complexity)}`}>
                    {t.tech_complexity_level} {selectedProject.complexity === 'beginner' && t.tech_complexity_beginner}
                    {selectedProject.complexity === 'intermediate' && t.tech_complexity_intermediate}
                    {selectedProject.complexity === 'advanced' && t.tech_complexity_advanced}
                    {selectedProject.complexity === 'expert' && t.tech_complexity_expert}
                  </span>
                </div>
                <ProgressRing 
                  progress={selectedProject.progress} 
                  size={80} 
                  strokeWidth={6}
                  color={selectedProject.color}
                />
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">{t.tech_project_description}</h3>
                <p className="text-gray-300 leading-relaxed">{selectedProject.longDescription}</p>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">{t.tech_technologies_used}</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 bg-${selectedProject.color}-500/20 text-${selectedProject.color}-400 border border-${selectedProject.color}-500/30 rounded-full text-sm`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-3">{t.tech_key_features}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <i className="fas fa-check-circle text-green-400"></i>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              {selectedProject.achievements && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">{t.tech_achievements}</h3>
                  <div className="space-y-2">
                    {selectedProject.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <i className="fas fa-trophy text-yellow-400"></i>
                        <span className="text-gray-300">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Links */}
              {selectedProject.links && (
                <div className="flex gap-4 pt-4 border-t border-gray-700">
                  {selectedProject.links.demo && (
                    <button className="flex-1 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-black px-6 py-3 rounded-lg font-bold transition-all duration-300">
                      <i className="fas fa-external-link-alt mr-2"></i>
                      {t.tech_see_demo}
                    </button>
                  )}
                  {selectedProject.links.github && (
                    <button className="flex-1 bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors">
                      <i className="fab fa-github mr-2"></i>
                      {t.tech_source_code}
                    </button>
                  )}
                  {selectedProject.links.docs && (
                    <button className="flex-1 bg-gray-800 text-white hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors">
                      <i className="fas fa-book mr-2"></i>
                      {t.tech_documentation}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default TechPage