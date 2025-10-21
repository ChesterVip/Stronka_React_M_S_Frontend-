import { ReactNode, useState } from 'react'
import { cn } from '@/utils/cn'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '@/hooks/useLanguage'

interface GitTimelineItem {
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
  branch: 'main' | 'polska' | 'szwajcaria'
  commitHash?: string
}

interface GitTimelineProps {
  items: GitTimelineItem[]
  className?: string
}

const GitTimeline = ({ items, className }: GitTimelineProps) => {
  const { t } = useLanguage()
  const [viewMode, setViewMode] = useState<'oneline' | 'detailed'>('detailed')
  const [selectedBranch, setSelectedBranch] = useState<'all' | 'main' | 'polska' | 'szwajcaria'>('all')
  
  const branchColors = {
    main: 'text-blue-400 border-blue-500 bg-blue-500/10',
    polska: 'text-red-400 border-red-500 bg-red-500/10', 
    szwajcaria: 'text-white border-white bg-white/10'
  }

  const branchIcons = {
    main: 'fa-code-branch',
    polska: 'fa-flag',
    szwajcaria: 'fa-mountain'
  }

  // Generate fake commit hashes
  const generateCommitHash = (title: string) => {
    const hash = title.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0).toString(16).padStart(2, '0')
    }, '').substring(0, 7)
    return hash
  }

  // Filter items based on selected branch
  const filteredItems = selectedBranch === 'all' 
    ? items 
    : items.filter(item => item.branch === selectedBranch)

  // Get current branch for git status
  const getCurrentBranch = () => {
    if (selectedBranch === 'all') return 'main'
    return selectedBranch
  }

  // Get git log command based on view mode
  const getGitCommand = () => {
    if (viewMode === 'oneline') {
      return selectedBranch === 'all' 
        ? 'git log --oneline --graph --all'
        : `git log --oneline --graph ${selectedBranch}`
    } else {
      return selectedBranch === 'all'
        ? 'git log --graph --all'
        : `git log --graph ${selectedBranch}`
    }
  }

  return (
    <div className={cn("relative font-mono", className)}>
      {/* Git-style terminal header */}
      <div className="bg-gray-900 border border-gray-700 rounded-t-lg p-4 mb-0">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-gray-400 text-sm ml-4">{getGitCommand()}</span>
        </div>
        <div className="text-green-400 text-sm">
          <span className="text-blue-400">*</span> <span className="text-white">{getCurrentBranch()}</span> <span className="text-gray-400">(HEAD)</span>
        </div>
      </div>

      {/* Git Options Toolbar */}
      <div className="bg-gray-800 border-l border-r border-gray-700 p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* View Mode Options */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">View:</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setViewMode('oneline')}
                className={cn(
                  "px-3 py-1 rounded text-sm font-mono transition-colors",
                  viewMode === 'oneline'
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                )}
              >
                {t.git_view_oneline}
              </button>
              <button
                onClick={() => setViewMode('detailed')}
                className={cn(
                  "px-3 py-1 rounded text-sm font-mono transition-colors",
                  viewMode === 'detailed'
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                )}
              >
                {t.git_view_detailed}
              </button>
            </div>
          </div>

          {/* Branch Filter Options */}
          <div className="flex items-center space-x-4">
            <span className="text-gray-400 text-sm">Branch:</span>
            <div className="flex space-x-2">
              <button
                onClick={() => setSelectedBranch('all')}
                className={cn(
                  "px-3 py-1 rounded text-sm font-mono transition-colors",
                  selectedBranch === 'all'
                    ? "bg-green-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                )}
              >
                {t.git_branch_all}
              </button>
              <button
                onClick={() => setSelectedBranch('main')}
                className={cn(
                  "px-3 py-1 rounded text-sm font-mono transition-colors",
                  selectedBranch === 'main'
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                )}
              >
                {t.git_branch_main}
              </button>
              <button
                onClick={() => setSelectedBranch('polska')}
                className={cn(
                  "px-3 py-1 rounded text-sm font-mono transition-colors",
                  selectedBranch === 'polska'
                    ? "bg-red-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                )}
              >
                {t.git_branch_polska}
              </button>
              <button
                onClick={() => setSelectedBranch('szwajcaria')}
                className={cn(
                  "px-3 py-1 rounded text-sm font-mono transition-colors",
                  selectedBranch === 'szwajcaria'
                    ? "bg-white text-gray-900"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                )}
              >
                {t.git_branch_szwajcaria}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Git graph visualization */}
      <div className="bg-gray-900/50 border-l border-r border-gray-700 p-6">
        <div className="space-y-4">
          {/* Branch labels */}
          <div className="flex items-center space-x-8 mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-blue-500"></div>
              <span className="text-blue-400 text-sm font-bold">main</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-red-500"></div>
              <span className="text-red-400 text-sm font-bold">polska</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-4 h-4 rounded-full bg-white"></div>
              <span className="text-white text-sm font-bold">szwajcaria</span>
            </div>
          </div>

          {/* Git graph lines */}
          <div className="relative">
            {/* Main branch line */}
            <div className="absolute left-4 top-0 w-0.5 h-full bg-blue-500"></div>
            
            {/* Branch connections */}
            <div className="absolute left-4 top-16 w-8 h-0.5 bg-red-500"></div>
            <div className="absolute left-4 top-32 w-8 h-0.5 bg-white"></div>
            
            {/* Vertical connections */}
            <div className="absolute left-12 top-16 w-0.5 h-16 bg-red-500"></div>
            <div className="absolute left-12 top-32 w-0.5 h-16 bg-white"></div>
          </div>

          {/* Timeline items */}
          <div className="space-y-6 ml-8">
            {filteredItems.map((item, index) => {
              const commitHash = generateCommitHash(item.title)
              return (
                <AnimatedSection
                  key={item.id}
                  animation="slide-right"
                  delay={index * 200}
                  threshold={0.3}
                >
                  <div className="relative">
                    {/* Git commit indicator */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="flex items-center space-x-2">
                        <div className={cn(
                          "w-3 h-3 rounded-full",
                          item.branch === 'main' ? 'bg-blue-500' : 
                          item.branch === 'polska' ? 'bg-red-500' : 'bg-white'
                        )}></div>
                        <span className="text-gray-400 text-sm">*</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <span className="text-green-400 text-sm font-mono">{commitHash}</span>
                          <div className={cn(
                            "inline-flex items-center px-2 py-1 rounded text-xs font-medium border",
                            branchColors[item.branch]
                          )}>
                            <i className={cn(
                              "fas mr-1 text-xs",
                              branchIcons[item.branch]
                            )} />
                            {item.branch}
                          </div>
                          {item.current && (
                            <span className="text-blue-400 text-xs font-mono">(HEAD)</span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Content - Different views based on mode */}
                    {viewMode === 'oneline' ? (
                      /* Oneline view */
                      <div className="ml-8 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-4 hover:border-gold-500/40 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <span className="text-green-400 text-sm font-mono">{commitHash}</span>
                            <span className="text-white font-medium">{item.title}</span>
                            <span className="text-gray-400 text-sm">{item.company}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-400 text-sm">{item.period}</span>
                            {item.current && (
                              <span className="text-blue-400 text-xs font-mono">(HEAD)</span>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      /* Detailed view */
                      <div className="ml-8 bg-gray-800/50 backdrop-blur-sm border border-gray-600 rounded-lg p-6 hover:border-gold-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/10">
                        
                        {/* Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white hover:text-gold-400 transition-colors duration-300">
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

                        {/* Current indicator */}
                        {item.current && (
                          <div className="mt-6 pt-6 border-t border-gold-500/20">
                            <div className="flex items-center text-green-400">
                              <i className="fas fa-check-circle mr-2" />
                              <span className="font-medium">{t.git_current_position}</span>
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </div>

      {/* Git terminal footer */}
      <div className="bg-gray-900 border border-gray-700 rounded-b-lg p-4">
        <div className="text-gray-400 text-sm font-mono">
          <span className="text-blue-400">$</span> git status
        </div>
        <div className="text-green-400 text-sm mt-1">
          On branch <span className="text-white">{getCurrentBranch()}</span>
        </div>
        <div className="text-gray-400 text-sm mt-1">
          {t.git_showing_commits.replace('{count}', filteredItems.length.toString()).replace('{plural}', filteredItems.length !== 1 ? 's' : '').replace('{view}', viewMode)}
        </div>
      </div>
    </div>
  )
}

export default GitTimeline
