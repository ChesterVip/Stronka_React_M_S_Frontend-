import { cn } from '@/utils/cn'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/hooks/useLanguage'

interface TimelineItem {
  id: string
  title: string
  period: string
  company?: string
  location?: string
  description: string
  achievements: string[]
  current?: boolean
  icon?: string
  color?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

const Timeline = ({ items, className }: TimelineProps) => {
  const { t } = useLanguage()
  
  return (
    <div className={cn("relative", className)}>
      {/* Timeline line */}
      <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-gold-500 via-gold-400 to-gold-500 hidden md:block" />
      
      <div className="space-y-12">
        {items.map((item, index) => (
          <AnimatedSection
            key={item.id}
            animation="slide-right"
            delay={index * 200}
            threshold={0.3}
          >
            <div className="relative flex items-start space-x-6 md:space-x-12">
              {/* Timeline dot */}
              <div className="flex-shrink-0 relative z-10">
                <div className={cn(
                  "w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-500 group-hover:scale-110",
                  item.current 
                    ? "bg-gold-500 border-gold-400 shadow-lg shadow-gold-500/50 animate-pulse-glow" 
                    : "bg-gray-800 border-gold-500/30 hover:border-gold-500/60"
                )}>
                  <i className={cn(
                    "fas text-xl transition-colors duration-300",
                    item.icon || "fa-briefcase",
                    item.current ? "text-black" : "text-gold-400"
                  )} />
                </div>
                
                {/* Current indicator */}
                {item.current && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                    <i className="fas fa-check text-black text-xs" />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 group">
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gold-500/20 rounded-xl p-6 hover:border-gold-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10">
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-gold-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.company && (
                        <p className="text-gold-400 font-medium">
                          {item.company}
                        </p>
                      )}
                      {item.location && (
                        <p className="text-gray-400 text-sm flex items-center mt-1">
                          <i className="fas fa-map-marker-alt mr-2" />
                          {item.location}
                        </p>
                      )}
                    </div>
                    <div className="mt-2 sm:mt-0">
                      <span className={cn(
                        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium",
                        item.current 
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : "bg-gold-500/20 text-gold-400 border border-gold-500/30"
                      )}>
                        <i className={cn(
                          "fas mr-2",
                          item.current ? "fa-clock" : "fa-calendar"
                        )} />
                        {item.period}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                      <i className="fas fa-star text-gold-400 mr-2" />
                      {t.ui_achievements_title}
                    </h4>
                    <ul className="grid gap-2">
                      {item.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start text-gray-300 hover:text-white transition-colors duration-300"
                        >
                          <i className="fas fa-chevron-right text-gold-400 text-sm mr-3 mt-1 flex-shrink-0" />
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills Tags */}
                  {item.current && (
                    <div className="mt-6 pt-6 border-t border-gold-500/20">
                      <div className="flex flex-wrap gap-2">
                        {['Leadership', 'Project Management', 'International', 'Problem Solving'].map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-gold-500/10 text-gold-400 rounded-full text-sm border border-gold-500/20 hover:bg-gold-500/20 transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  )
}

export default Timeline