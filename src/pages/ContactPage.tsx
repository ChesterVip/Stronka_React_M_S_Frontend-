import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useLanguage } from '@/hooks/useLanguage'
import { useAuth } from '@/hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

// Zod validation schemas
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Imię musi mieć co najmniej 2 znaki')
    .max(50, 'Imię nie może być dłuższe niż 50 znaków')
    .regex(/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]+$/, 'Imię może zawierać tylko litery, spacje i myślniki'),
  
  email: z.string()
    .email('Nieprawidłowy adres email')
    .min(5, 'Email musi mieć co najmniej 5 znaków')
    .max(100, 'Email nie może być dłuższy niż 100 znaków'),
  
  phone: z.string()
    .optional()
    .refine(val => !val || /^[\+]?[1-9][\d]{0,15}$/.test(val), 'Nieprawidłowy numer telefonu'),
    
  company: z.string()
    .optional()
    .refine(val => !val || (val.length >= 2 && val.length <= 100), 'Nazwa firmy musi mieć 2-100 znaków'),
    
  subject: z.string()
    .min(5, 'Temat musi mieć co najmniej 5 znaków')
    .max(200, 'Temat nie może być dłuższy niż 200 znaków'),
    
  category: z.enum([
    'general', 
    'business', 
    'technical', 
    'collaboration', 
    'recruitment'
  ], { 
    errorMap: () => ({ message: 'Wybierz kategorię zapytania' }) 
  }),
  
  priority: z.enum(['low', 'medium', 'high'], {
    errorMap: () => ({ message: 'Wybierz priorytet' })
  }),
  
  message: z.string()
    .min(10, 'Wiadomość musi mieć co najmniej 10 znaków')
    .max(2000, 'Wiadomość nie może być dłuższa niż 2000 znaków'),
    
  budget: z.string().optional(),
  
  timeline: z.string().optional(),
  
  gdprConsent: z.boolean()
    .refine(val => val === true, 'Musisz wyrazić zgodę na przetwarzanie danych'),
    
  marketingConsent: z.boolean().optional(),
  
  preferredContact: z.enum(['email', 'phone', 'both'], {
    errorMap: () => ({ message: 'Wybierz preferowany sposób kontaktu' })
  })
})

type ContactFormData = z.infer<typeof contactSchema>

const ContactPage = () => {
  const { t } = useLanguage()
  const { isAuthenticated } = useAuth()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [submitMessage, setSubmitMessage] = useState('')
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: 'onChange',
    defaultValues: {
      priority: 'medium',
      preferredContact: 'email',
      gdprConsent: false,
      marketingConsent: false
    }
  })

  // Watch specific fields for dynamic validation
  const watchedMessage = watch('message', '')
  const watchedCategory = watch('category')
  
  const categories = [
    { id: 'general', name: t.category_general, icon: 'fa-question-circle' },
    { id: 'business', name: t.category_business, icon: 'fa-handshake' },
    { id: 'technical', name: t.category_technical, icon: 'fa-code' },
    { id: 'collaboration', name: t.category_collaboration, icon: 'fa-users' },
    { id: 'recruitment', name: t.category_recruitment, icon: 'fa-user-tie' }
  ]
  
  const priorities = [
    { id: 'low', name: t.priority_low, color: 'text-green-400', icon: 'fa-clock' },
    { id: 'medium', name: t.priority_medium, color: 'text-yellow-400', icon: 'fa-exclamation-triangle' },
    { id: 'high', name: t.priority_high, color: 'text-red-400', icon: 'fa-exclamation' }
  ]

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // In real application, this would be an actual API call
      console.log('Form submitted:', {
        ...data,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        ipAddress: 'xxx.xxx.xxx.xxx' // Would be handled server-side
      })
      
      setSubmitStatus('success')
      setSubmitMessage(t.message_sent_success)
      reset()
      
    } catch (error) {
      setSubmitStatus('error')
      setSubmitMessage(t.message_send_error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: 'fa-envelope',
      iconClass: 'fas',
      label: t.email_label,
      value: isAuthenticated ? 'mariusz.sokolowski@fgfalke.eu' : '***@***.***',
      link: isAuthenticated ? 'mailto:mariusz.sokolowski@fgfalke.eu' : null,
      color: 'text-blue-400',
      requiresAuth: true
    },
    {
      icon: 'fa-phone',
      iconClass: 'fas',
      label: t.phone_label,
      value: isAuthenticated ? '+41 76 237 33 01' : '+41 *** *** ***',
      link: isAuthenticated ? 'tel:+41762373301' : null,
      color: 'text-green-400',
      requiresAuth: true
    },
    {
      icon: 'fa-flag',
      iconClass: 'fas',
      label: t.location_label,
      value: 'Schweiz',
      link: null,
      color: 'text-red-400',
      requiresAuth: false
    },
    {
      icon: 'fa-linkedin',
      iconClass: 'fab',
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/in/mariuszsokolowski5014/',
      color: 'text-blue-500',
      requiresAuth: false
    },
    {
      icon: 'fa-github',
      iconClass: 'fab',
      label: 'GitHub',
      value: 'GitHub Profile',
      link: 'https://github.com/ChesterVip',
      color: 'text-gray-300',
      requiresAuth: false
    },
    {
      icon: 'fa-gitlab',
      iconClass: 'fab',
      label: 'GitLab',
      value: 'GitLab Profile',
      link: 'https://gitlab.com/ChesterVip',
      color: 'text-orange-500',
      requiresAuth: false
    },
    {
      icon: 'fa-discord',
      iconClass: 'fab',
      label: 'Discord',
      value: 'chestervip',
      link: null,
      color: 'text-indigo-400',
      requiresAuth: false
    },
    {
      icon: 'fa-facebook',
      iconClass: 'fab',
      label: 'Facebook',
      value: 'Facebook Profile',
      link: 'https://www.facebook.com/mariusz.sokolowski.94',
      color: 'text-blue-600',
      requiresAuth: false
    }
  ]

  const responseTimeInfo = [
    { category: 'general', time: t.response_general, priority: 'medium' },
    { category: 'business', time: t.response_business, priority: 'high' },
    { category: 'technical', time: t.response_technical, priority: 'medium' },
    { category: 'collaboration', time: t.response_collaboration, priority: 'high' },
    { category: 'recruitment', time: t.response_recruitment, priority: 'high' }
  ]

  const currentResponseTime = responseTimeInfo.find(info => info.category === watchedCategory)

  return (
    <div className="min-h-screen bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <AnimatedSection delay={0.1}>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <i className="fas fa-envelope text-4xl text-blue-500 mr-4"></i>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 bg-clip-text text-transparent">
                {t.contact_page_title}
              </h1>
            </div>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t.contact_page_subtitle}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <AnimatedSection delay={0.2}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <i className="fas fa-paper-plane text-blue-400"></i>
                    {t.contact_form_title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {t.contact_form_subtitle} {currentResponseTime?.time || t.response_general}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          {t.name_label} *
                        </label>
                        <input
                          {...register('name')}
                          type="text"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                          placeholder={t.name_placeholder}
                        />
                        {errors.name && (
                          <p className="text-red-400 text-sm flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.name.message}
                          </p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          {t.email_label} *
                        </label>
                        <input
                          {...register('email')}
                          type="email"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                          placeholder={t.email_placeholder}
                        />
                        {errors.email && (
                          <p className="text-red-400 text-sm flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Additional Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          {t.phone_label_optional}
                        </label>
                        <input
                          {...register('phone')}
                          type="tel"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                          placeholder={t.phone_placeholder}
                        />
                        {errors.phone && (
                          <p className="text-red-400 text-sm flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.phone.message}
                          </p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          {t.company_label}
                        </label>
                        <input
                          {...register('company')}
                          type="text"
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                          placeholder={t.company_placeholder}
                        />
                        {errors.company && (
                          <p className="text-red-400 text-sm flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.company.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Category and Priority */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          {t.category_label} *
                        </label>
                        <select
                          {...register('category')}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                        >
                          <option value="">{t.category_placeholder}</option>
                          {categories.map(category => (
                            <option key={category.id} value={category.id}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                        {errors.category && (
                          <p className="text-red-400 text-sm flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.category.message}
                          </p>
                        )}
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          {t.priority_label} *
                        </label>
                        <div className="flex gap-2">
                          {priorities.map(priority => (
                            <label key={priority.id} className="flex-1">
                              <input
                                {...register('priority')}
                                type="radio"
                                value={priority.id}
                                className="sr-only peer"
                              />
                              <div className="p-3 bg-gray-800 border border-gray-600 rounded-lg peer-checked:border-blue-500 peer-checked:bg-blue-500/20 transition-all cursor-pointer text-center">
                                <i className={`fas ${priority.icon} ${priority.color} block mb-1`}></i>
                                <span className="text-sm text-white">{priority.name}</span>
                              </div>
                            </label>
                          ))}
                        </div>
                        {errors.priority && (
                          <p className="text-red-400 text-sm flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.priority.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        {t.subject_label} *
                      </label>
                      <input
                        {...register('subject')}
                        type="text"
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400"
                        placeholder={t.subject_placeholder}
                      />
                      {errors.subject && (
                        <p className="text-red-400 text-sm flex items-center gap-1">
                          <i className="fas fa-exclamation-circle"></i>
                          {errors.subject.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        {t.message_label} *
                      </label>
                      <textarea
                        {...register('message')}
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white placeholder-gray-400 resize-none"
                        placeholder={t.message_placeholder}
                      />
                      <div className="flex items-center justify-between text-sm">
                        {errors.message ? (
                          <p className="text-red-400 flex items-center gap-1">
                            <i className="fas fa-exclamation-circle"></i>
                            {errors.message.message}
                          </p>
                        ) : (
                          <div />
                        )}
                        <span className={`${watchedMessage.length > 1800 ? 'text-red-400' : 'text-gray-400'}`}>
                          {watchedMessage.length}/2000 znaków
                        </span>
                      </div>
                    </div>

                    {/* Project Details (conditional) */}
                    {(watchedCategory === 'business' || watchedCategory === 'technical') && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">
                            <i className="fas fa-dollar-sign mr-1"></i>
                            {t.budget_label}
                          </label>
                          <select
                            {...register('budget')}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                          >
                            <option value="">{t.budget_not_specified}</option>
                            <option value="<5000">{t.budget_under_5000}</option>
                            <option value="5000-15000">{t.budget_5000_15000}</option>
                            <option value="15000-50000">{t.budget_15000_50000}</option>
                            <option value=">50000">{t.budget_over_50000}</option>
                          </select>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-300">
                            <i className="fas fa-calendar-alt mr-1"></i>
                            {t.timeline_label}
                          </label>
                          <select
                            {...register('timeline')}
                            className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                          >
                            <option value="">{t.timeline_not_specified}</option>
                            <option value="asap">{t.timeline_asap}</option>
                            <option value="1month">{t.timeline_1month}</option>
                            <option value="3months">{t.timeline_3months}</option>
                            <option value="6months">{t.timeline_6months}</option>
                            <option value="flexible">{t.timeline_flexible}</option>
                          </select>
                        </div>
                      </div>
                    )}

                    {/* Preferred Contact Method */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        {t.preferred_contact_label} *
                      </label>
                      <div className="flex flex-wrap gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            {...register('preferredContact')}
                            type="radio"
                            value="email"
                            className="text-blue-500 focus:ring-blue-500"
                          />
                          <i className="fas fa-envelope text-blue-400"></i>
                          <span className="text-gray-300">{t.contact_email}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            {...register('preferredContact')}
                            type="radio"
                            value="phone"
                            className="text-blue-500 focus:ring-blue-500"
                          />
                          <i className="fas fa-phone text-green-400"></i>
                          <span className="text-gray-300">{t.contact_phone}</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            {...register('preferredContact')}
                            type="radio"
                            value="both"
                            className="text-blue-500 focus:ring-blue-500"
                          />
                          <i className="fas fa-comments text-purple-400"></i>
                          <span className="text-gray-300">{t.contact_both}</span>
                        </label>
                      </div>
                      {errors.preferredContact && (
                        <p className="text-red-400 text-sm flex items-center gap-1">
                          <i className="fas fa-exclamation-circle"></i>
                          {errors.preferredContact.message}
                        </p>
                      )}
                    </div>

                    {/* GDPR Consents */}
                    <div className="space-y-4 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
                      <div className="flex items-start gap-3">
                        <input
                          {...register('gdprConsent')}
                          type="checkbox"
                          className="mt-1 text-blue-500 focus:ring-blue-500"
                          id="gdprConsent"
                        />
                        <label htmlFor="gdprConsent" className="text-sm text-gray-300 flex-1">
                          <span className="text-red-400">*</span> {t.gdpr_consent}
                        </label>
                      </div>
                      {errors.gdprConsent && (
                        <p className="text-red-400 text-sm flex items-center gap-1">
                          <i className="fas fa-exclamation-circle"></i>
                          {errors.gdprConsent.message}
                        </p>
                      )}
                      
                      <div className="flex items-start gap-3">
                        <input
                          {...register('marketingConsent')}
                          type="checkbox"
                          className="mt-1 text-blue-500 focus:ring-blue-500"
                          id="marketingConsent"
                        />
                        <label htmlFor="marketingConsent" className="text-sm text-gray-300 flex-1">
                          {t.marketing_consent}
                        </label>
                      </div>
                    </div>

                    {/* Submit Status */}
                    {submitStatus !== 'idle' && (
                      <div className={`p-4 rounded-lg border ${
                        submitStatus === 'success' 
                          ? 'bg-green-500/20 border-green-500/30 text-green-400' 
                          : 'bg-red-500/20 border-red-500/30 text-red-400'
                      }`}>
                        <div className="flex items-center gap-2">
                          <i className={`fas ${submitStatus === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}`}></i>
                          {submitMessage}
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={isSubmitting || !isValid}
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin mr-2"></i>
                          {t.sending_message}
                        </>
                      ) : (
                        <>
                          <i className="fas fa-paper-plane mr-2"></i>
                          {t.send_message}
                        </>
                      )}
                    </Button>
                    
                    <p className="text-xs text-gray-400 text-center">
                      {t.response_time_note} {currentResponseTime?.time || t.response_general}.
                      {t.urgent_note}
                    </p>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <AnimatedSection delay={0.3}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <i className="fas fa-address-card text-green-400"></i>
                    {t.contact_info_title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 p-3 bg-gray-800/50 rounded-lg hover:bg-gray-800/70 transition-colors">
                      <div className={`p-2 rounded-lg bg-gray-700 ${info.color}`}>
                        <i className={`${info.iconClass} ${info.icon}`}></i>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm text-gray-400">{info.label}</div>
                        {info.link ? (
                          <button 
                            onClick={() => info.link && window.open(info.link, '_blank')}
                            className={`${info.color} hover:underline cursor-pointer bg-transparent border-none p-0 text-left font-medium`}
                            title={info.link}
                          >
                            {info.value}
                          </button>
                        ) : (
                          <div className="text-white">{info.value}</div>
                        )}
                        {info.requiresAuth && !isAuthenticated && (
                          <div className="text-xs text-gray-500 mt-1">
                            <i className="fas fa-lock mr-1"></i>
                            Wymaga logowania
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Response Times */}
            <AnimatedSection delay={0.4}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <i className="fas fa-clock text-yellow-400"></i>
                    {t.response_time_title}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {t.response_time_subtitle}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {responseTimeInfo.map((info) => {
                    const category = categories.find(c => c.id === info.category)
                    const isSelected = watchedCategory === info.category
                    
                    return (
                      <div 
                        key={info.category} 
                        className={`flex items-center justify-between p-3 rounded-lg transition-all ${
                          isSelected 
                            ? 'bg-blue-500/20 border border-blue-500/30' 
                            : 'bg-gray-800/50'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <i className={`fas ${category?.icon || 'fa-question'} ${
                            info.priority === 'high' ? 'text-red-400' : 
                            info.priority === 'medium' ? 'text-yellow-400' : 'text-green-400'
                          }`}></i>
                          <span className="text-sm text-gray-300">{category?.name}</span>
                        </div>
                        <span className="text-sm text-white font-medium">{info.time}</span>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Quick Tips */}
            <AnimatedSection delay={0.5}>
              <Card className="bg-gradient-to-br from-gray-900 to-black border-gray-700">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-white">
                    <i className="fas fa-lightbulb text-purple-400"></i>
                    {t.tips_title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-gray-300 space-y-2">
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-green-400 mt-1"></i>
                      <span>{t.tip_detailed_description}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-green-400 mt-1"></i>
                      <span>{t.tip_budget_timeline}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-green-400 mt-1"></i>
                      <span>{t.tip_existing_links}</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <i className="fas fa-check-circle text-green-400 mt-1"></i>
                      <span>{t.tip_urgent_call}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>

        {/* Back Navigation */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mt-12">
            <Button
              variant="secondary"
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2"
            >
              <i className="fas fa-arrow-left"></i>
              {t.back_to_home}
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}

export default ContactPage