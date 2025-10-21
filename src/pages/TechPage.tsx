import { useState, useMemo } from 'react'
import { useLanguage } from '@/hooks/useLanguage'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from '@/components/ui/AnimatedSection'
import ProtectedSection from '@/components/ProtectedSection'
import SEO, { pageConfigs } from '@/components/SEO'

interface Technology {
  name: string
  icon: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'ai'
  color: string
}

interface GitHubProject {
  id: string
  name: string
  description: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  language: string
  stars: number
  forks: number
  lastUpdated: string
  topics: string[]
}

const TechPage = () => {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const [selectedTechs, setSelectedTechs] = useState<string[]>([])

  const technologies: Technology[] = [
    // Frontend
    { name: 'React', icon: 'fab fa-react', level: 'expert', category: 'frontend', color: 'text-blue-400' },
    { name: 'TypeScript', icon: 'fab fa-js-square', level: 'advanced', category: 'frontend', color: 'text-blue-500' },
    { name: 'JavaScript', icon: 'fab fa-js-square', level: 'expert', category: 'frontend', color: 'text-yellow-400' },
    { name: 'Vite', icon: 'fas fa-bolt', level: 'advanced', category: 'frontend', color: 'text-purple-400' },
    { name: 'Tailwind CSS', icon: 'fas fa-palette', level: 'advanced', category: 'frontend', color: 'text-cyan-400' },
    
    // Backend
    { name: 'NestJS', icon: 'fas fa-server', level: 'advanced', category: 'backend', color: 'text-red-400' },
    { name: 'Spring Boot', icon: 'fab fa-java', level: 'intermediate', category: 'backend', color: 'text-green-500' },
    { name: 'Java', icon: 'fab fa-java', level: 'intermediate', category: 'backend', color: 'text-orange-500' },
    { name: 'REST API', icon: 'fas fa-plug', level: 'expert', category: 'backend', color: 'text-green-400' },
    { name: 'Node.js', icon: 'fab fa-node-js', level: 'advanced', category: 'backend', color: 'text-green-600' },
    
    // Database
    { name: 'PostgreSQL', icon: 'fas fa-database', level: 'intermediate', category: 'database', color: 'text-blue-600' },
    { name: 'MongoDB', icon: 'fas fa-leaf', level: 'intermediate', category: 'database', color: 'text-green-500' },
    { name: 'SQL', icon: 'fas fa-table', level: 'advanced', category: 'database', color: 'text-blue-500' },
    { name: 'Hibernate', icon: 'fas fa-layer-group', level: 'intermediate', category: 'database', color: 'text-purple-500' },
    
    // Tools & Others
    { name: 'Git', icon: 'fab fa-git-alt', level: 'expert', category: 'tools', color: 'text-orange-500' },
    { name: 'Tomcat', icon: 'fas fa-cat', level: 'intermediate', category: 'tools', color: 'text-red-500' },
    { name: 'AI Tools', icon: 'fas fa-brain', level: 'advanced', category: 'ai', color: 'text-purple-400' },
    { name: 'Docker', icon: 'fab fa-docker', level: 'intermediate', category: 'tools', color: 'text-blue-500' },
  ]

  const githubProjects: GitHubProject[] = [
    {
      id: 'mariusz-sokolowski-ch',
      name: 'mariusz-sokolowski.ch',
      description: 'Strona portfolio z zaawansowanym systemem logowania, wielojęzycznością i Git-style timeline doświadczenia. Implementacja automatycznej rejestracji użytkowników i systemu OTP.',
      technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Tailwind CSS', 'Vite'],
      githubUrl: 'https://github.com/mariusz-sokolowski/mariusz-sokolowski.ch',
      language: 'TypeScript',
      stars: 12,
      forks: 3,
      lastUpdated: '2024-12-19',
      topics: ['react', 'nestjs', 'portfolio', 'authentication', 'multilingual']
    },
    {
      id: 'transport-logistics-ai',
      name: 'Transport Logistics AI',
      description: 'System AI do optymalizacji tras transportowych z integracją GPS i predykcją kosztów. Wykorzystuje machine learning do analizy danych logistycznych.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'REST API'],
      githubUrl: 'https://github.com/mariusz-sokolowski/transport-logistics-ai',
      language: 'Python',
      stars: 8,
      forks: 2,
      lastUpdated: '2024-11-15',
      topics: ['ai', 'machine-learning', 'logistics', 'optimization', 'python']
    },
    {
      id: 'crypto-portfolio-tracker',
      name: 'Crypto Portfolio Tracker',
      description: 'Aplikacja do śledzenia portfolio kryptowalut z real-time danymi z giełd. Implementacja WebSocket do aktualizacji cen i analizy zysków/strat.',
      technologies: ['React', 'Node.js', 'WebSocket', 'MongoDB', 'Chart.js'],
      githubUrl: 'https://github.com/mariusz-sokolowski/crypto-portfolio-tracker',
      language: 'JavaScript',
      stars: 15,
      forks: 5,
      lastUpdated: '2024-10-20',
      topics: ['cryptocurrency', 'portfolio', 'websocket', 'charts', 'finance']
    },
    {
      id: 'business-automation-suite',
      name: 'Business Automation Suite',
      description: 'Zestaw narzędzi do automatyzacji procesów biznesowych z integracją CRM, ERP i systemów księgowymi. Workflow builder z drag-and-drop interface.',
      technologies: ['Node.js', 'Python', 'Webhooks', 'REST API', 'Docker'],
      githubUrl: 'https://github.com/mariusz-sokolowski/business-automation-suite',
      language: 'JavaScript',
      stars: 6,
      forks: 1,
      lastUpdated: '2024-09-10',
      topics: ['automation', 'business', 'workflow', 'integration', 'productivity']
    },
    {
      id: 'mobile-finance-app',
      name: 'Mobile Finance Management',
      description: 'Aplikacja mobilna do zarządzania finansami osobistymi z AI-powered insights. Integracja z bankami przez Open Banking API i analiza wydatków.',
      technologies: ['React Native', 'TypeScript', 'AI Tools', 'SQLite', 'Open Banking API'],
      githubUrl: 'https://github.com/mariusz-sokolowski/mobile-finance-app',
      language: 'TypeScript',
      stars: 9,
      forks: 2,
      lastUpdated: '2024-08-25',
      topics: ['mobile', 'finance', 'ai', 'banking', 'react-native']
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'expert': return 'text-red-400'
      case 'advanced': return 'text-orange-400'
      case 'intermediate': return 'text-yellow-400'
      case 'beginner': return 'text-green-400'
      default: return 'text-gray-400'
    }
  }

  const getLevelText = (level: string) => {
    switch (level) {
      case 'expert': return t.tech_skill_expert
      case 'advanced': return t.tech_skill_advanced
      case 'intermediate': return t.tech_skill_intermediate
      case 'beginner': return t.tech_skill_beginner
      default: return level
    }
  }

  // Filter projects based on selected technologies
  const filteredProjects = useMemo(() => {
    if (selectedTechs.length === 0) return githubProjects
    return githubProjects.filter(project => 
      selectedTechs.some(selectedTech => 
        project.technologies.some(tech => 
          tech.toLowerCase().includes(selectedTech.toLowerCase())
        )
      )
    )
  }, [selectedTechs])

  // Toggle technology selection
  const toggleTech = (techName: string) => {
    setSelectedTechs(prev => 
      prev.includes(techName) 
        ? prev.filter(tech => tech !== techName)
        : [...prev, techName]
    )
  }

  return (
    <>
      <SEO {...pageConfigs.tech} />
      <ProtectedSection sectionKey="nav_tech">
        <div className="min-h-screen py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="text-center mb-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        {t.tech_page_title}
                      </h1>
                <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                      {t.tech_page_subtitle}
                    </p>
                  </div>
                </AnimatedSection>
        
            {/* Technologies Section */}
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="mb-16">
                <h2 className="text-3xl font-bold text-white text-center mb-4">
                  {t.tech_technologies_title}
                </h2>
                <p className="text-gray-300 text-center mb-8">
                  {t.tech_technologies_subtitle}
                </p>
                
                {/* Technologies Grid - Smaller Icons */}
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
                  {technologies.map((tech, index) => (
                        <button
                      key={tech.name}
                      onClick={() => toggleTech(tech.name)}
                      className={`flex flex-col items-center p-3 rounded-lg transition-all duration-300 hover:scale-105 ${
                        selectedTechs.includes(tech.name)
                          ? 'bg-gold-500/20 border-2 border-gold-500'
                          : 'bg-gray-900/50 border border-gold-500/20 hover:border-gold-500/40'
                      }`}
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {/* Tech Icon - Smaller */}
                      <div className="w-8 h-8 flex items-center justify-center mb-2">
                        <i className={`${tech.icon} text-lg ${tech.color} ${
                          selectedTechs.includes(tech.name) ? 'text-gold-400' : ''
                        } transition-colors duration-300`} />
                      </div>
                      
                      {/* Tech Name */}
                      <span className={`text-xs text-center font-medium ${
                        selectedTechs.includes(tech.name) ? 'text-gold-400' : 'text-white'
                      } transition-colors duration-300`}>
                        {tech.name}
                      </span>
                      
                      {/* Skill Level */}
                      <span className={`text-xs ${getLevelColor(tech.level)} mt-1`}>
                        {getLevelText(tech.level)}
                      </span>
                        </button>
                      ))}
                    </div>
        
                {/* Clear Filter Button */}
                {selectedTechs.length > 0 && (
                  <div className="text-center mt-6">
                        <button
                      onClick={() => setSelectedTechs([])}
                      className="px-4 py-2 bg-gray-800 text-white hover:bg-gray-700 rounded-lg transition-colors text-sm"
                    >
                      <i className="fas fa-times mr-2" />
                      {t.tech_clear_filters} ({selectedTechs.length})
                        </button>
                      </div>
                )}
                  </div>
                </AnimatedSection>
        
            {/* Projects Section */}
            <AnimatedSection animation="slide-up" delay={300}>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-white text-center mb-4">
                  {t.tech_projects_title}
                </h2>
                <p className="text-gray-300 text-center mb-8">
                  {selectedTechs.length > 0 
                    ? `${t.tech_projects_using} ${selectedTechs.join(', ')}` 
                    : t.tech_projects_subtitle
                  }
                </p>
                
                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {filteredProjects.map((project, index) => (
                      <div
                        key={project.id}
                      className="bg-gray-900/50 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10"
                      style={{ animationDelay: `${index * 150}ms` }}
                    >
                      {/* Project Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-white hover:text-gold-400 transition-colors duration-300 mb-2">
                            {project.name}
                                  </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                            <div className="flex items-center">
                              <div className={`w-3 h-3 rounded-full mr-2 ${
                                project.language === 'TypeScript' ? 'bg-blue-500' :
                                project.language === 'JavaScript' ? 'bg-yellow-400' :
                                project.language === 'Python' ? 'bg-green-500' : 'bg-gray-500'
                              }`} />
                              <span>{project.language}</span>
                            </div>
                            <div className="flex items-center">
                              <i className="fas fa-star mr-1" />
                              <span>{project.stars}</span>
                            </div>
                            <div className="flex items-center">
                              <i className="fas fa-code-branch mr-1" />
                              <span>{project.forks}</span>
                            </div>
                          </div>
                        </div>
                      </div>
        
                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {project.description}
                      </p>
        
                      {/* Technologies */}
                      <div className="mb-4">
                        <div className="text-sm font-medium text-gray-300 mb-2">{t.tech_technologies_title}:</div>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1 rounded-full text-sm border ${
                                selectedTechs.some(selectedTech => 
                                  tech.toLowerCase().includes(selectedTech.toLowerCase())
                                )
                                  ? 'bg-gold-500/30 text-gold-400 border-gold-500/50'
                                  : 'bg-gold-500/20 text-gold-400 border-gold-500/30'
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
        
                      {/* Topics */}
                      <div className="mb-6">
                        <div className="flex flex-wrap gap-1">
                          {project.topics.map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs"
                            >
                              #{topic}
                            </span>
                          ))}
                        </div>
                      </div>
        
                      {/* Actions */}
                      <div className="flex space-x-3">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 rounded-lg transition-colors text-center"
                          >
                            <i className="fab fa-github mr-2" />
                            {t.tech_github}
                          </a>
                          {project.demoUrl && (
                            <a
                              href={project.demoUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 bg-gold-500 text-black hover:bg-gold-400 px-4 py-2 rounded-lg transition-colors text-center font-medium"
                            >
                              <i className="fas fa-external-link-alt mr-2" />
                              {t.tech_demo}
                            </a>
                          )}
                      </div>
                      
                      {/* Last Updated */}
                      <div className="text-xs text-gray-500 mt-3">
                        {t.tech_last_updated} {new Date(project.lastUpdated).toLocaleDateString('pl-PL')}
                      </div>
                              </div>
                            ))}
                          </div>
                
                {/* No Projects Message */}
                {filteredProjects.length === 0 && selectedTechs.length > 0 && (
                  <div className="text-center py-12">
                    <i className="fas fa-search text-4xl text-gray-500 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-400 mb-2">
                      {t.tech_no_projects}
                    </h3>
                    <p className="text-gray-500">
                      {t.tech_try_other}
                    </p>
                        </div>
                      )}
                    </div>
            </AnimatedSection>

            {/* CTA Section */}
            <AnimatedSection animation="slide-up" delay={400} threshold={0.3}>
              <div className="text-center mt-20 py-16 bg-gradient-to-r from-gold-500/10 to-gold-600/10 rounded-2xl border border-gold-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.tech_interested_cooperation}
                </h3>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  {t.tech_experience_many}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => navigate('/contact')}
                    className="bg-gold-500 text-black hover:bg-gold-400 px-8 py-3 rounded-lg font-bold transition-colors"
                  >
                    <i className="fas fa-paper-plane mr-2" />
                    {t.tech_contact}
                  </button>
                  <a
                    href="https://github.com/mariusz-sokolowski"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white hover:bg-gray-700 px-8 py-3 rounded-lg transition-colors"
                  >
                    <i className="fab fa-github mr-2" />
                    {t.tech_github}
                  </a>
                </div>
              </div>
            </AnimatedSection>

          </div>
            </div>
      </ProtectedSection>
    </>
  )
}

export default TechPage