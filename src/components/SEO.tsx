import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  author?: string
  type?: 'website' | 'article' | 'profile'
  image?: string
  url?: string
  publishedTime?: string
  modifiedTime?: string
  locale?: string
  alternateLocales?: string[]
  canonicalUrl?: string
  noindex?: boolean
  nofollow?: boolean
}

const SEO = ({
  title = 'Mariusz Sokołowski - Transport | Logistyka | Finanse | Technologie',
  description = 'Mariusz Sokołowski - właściciel firmy transportowej, inżynier logistyki, specjalista finansów i technologii. 5+ lat doświadczenia jako kierowca CE w Szwajcarii.',
  keywords = [
    'Mariusz Sokołowski',
    'transport',
    'logistyka', 
    'finanse',
    'rachunkowość',
    'technologie',
    'Szwajcaria',
    'kierowca CE',
    'React',
    'TypeScript',
    'portfolio'
  ],
  author = 'Mariusz Sokołowski',
  type = 'website',
  image,
  url,
  publishedTime,
  modifiedTime,
  locale = 'pl_PL',
  alternateLocales = ['en_US', 'de_DE'],
  canonicalUrl,
  noindex = false,
  nofollow = false
}: SEOProps) => {
  const location = useLocation()
  
  // Build full URL
  const currentUrl = url || `${window.location.origin}${location.pathname}`
  const currentCanonicalUrl = canonicalUrl || currentUrl
  
  // Default image
  const ogImage = image || `${window.location.origin}/og-image.jpg`
  
  useEffect(() => {
    // Update document title
    document.title = title
    
    // Update meta tags
    const updateMetaTag = (property: string, content: string, isName = false) => {
      const selector = isName ? `meta[name="${property}"]` : `meta[property="${property}"]`
      let tag = document.querySelector(selector) as HTMLMetaElement
      
      if (!tag) {
        tag = document.createElement('meta')
        if (isName) {
          tag.name = property
        } else {
          tag.setAttribute('property', property)
        }
        document.head.appendChild(tag)
      }
      tag.content = content
    }
    
    // Update link tags
    const updateLinkTag = (rel: string, href: string, hreflang?: string) => {
      const selector = hreflang 
        ? `link[rel="${rel}"][hreflang="${hreflang}"]`
        : `link[rel="${rel}"]`
      let tag = document.querySelector(selector) as HTMLLinkElement
      
      if (!tag) {
        tag = document.createElement('link')
        tag.rel = rel
        if (hreflang) tag.hreflang = hreflang
        document.head.appendChild(tag)
      }
      tag.href = href
    }
    
    // Basic meta tags
    updateMetaTag('description', description, true)
    updateMetaTag('keywords', keywords.join(', '), true)
    updateMetaTag('author', author, true)
    updateMetaTag('robots', `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`, true)
    
    // Open Graph tags
    updateMetaTag('og:title', title)
    updateMetaTag('og:description', description)
    updateMetaTag('og:type', type)
    updateMetaTag('og:url', currentUrl)
    updateMetaTag('og:locale', locale)
    updateMetaTag('og:site_name', 'Mariusz Sokołowski Portfolio')
    
    if (ogImage) {
      updateMetaTag('og:image', ogImage)
      updateMetaTag('og:image:alt', `${title} - Portfolio Mariusza Sokołowskiego`)
      updateMetaTag('og:image:width', '1200')
      updateMetaTag('og:image:height', '630')
      updateMetaTag('og:image:type', 'image/jpeg')
    }
    
    // Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', true)
    updateMetaTag('twitter:title', title, true)
    updateMetaTag('twitter:description', description, true)
    updateMetaTag('twitter:creator', '@mariosokolowski', true)
    updateMetaTag('twitter:site', '@mariosokolowski', true)
    
    if (ogImage) {
      updateMetaTag('twitter:image', ogImage, true)
      updateMetaTag('twitter:image:alt', `${title} - Portfolio`, true)
    }
    
    // Article-specific tags
    if (type === 'article') {
      updateMetaTag('article:author', author)
      if (publishedTime) {
        updateMetaTag('article:published_time', publishedTime)
      }
      if (modifiedTime) {
        updateMetaTag('article:modified_time', modifiedTime)
      }
      updateMetaTag('article:section', 'Technology')
      keywords.forEach(tag => {
        updateMetaTag('article:tag', tag)
      })
    }
    
    // Canonical URL
    updateLinkTag('canonical', currentCanonicalUrl)
    
    // Alternate language versions
    alternateLocales.forEach(altLocale => {
      const lang = altLocale.split('_')[0]
      updateLinkTag('alternate', currentUrl, lang)
    })
    
    // Schema.org JSON-LD
    const updateJsonLd = () => {
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        existingScript.remove()
      }
      
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": type === 'profile' ? 'Person' : 'WebSite',
        "name": "Mariusz Sokołowski",
        "url": currentUrl,
        "description": description,
        "author": {
          "@type": "Person",
          "name": author
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": `${window.location.origin}/search?q={search_term_string}`,
          "query-input": "required name=search_term_string"
        }
      }
      
      if (type === 'profile') {
        Object.assign(jsonLd, {
          "@type": "Person",
          "jobTitle": "Transport Owner & Logistics Engineer",
          "knowsAbout": ["Transport", "Logistyka", "Finanse", "Technologie", "React", "TypeScript"],
          "worksFor": {
            "@type": "Organization",
            "name": "Właściciel firmy transportowej"
          },
          "alumniOf": {
            "@type": "EducationalOrganization",
            "name": "Uniwersytet - Finanse i rachunkowość"
          },
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "Switzerland"
          },
          "sameAs": [
            "https://linkedin.com/in/mariuszsokolowski"
          ]
        })
      }
      
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(jsonLd, null, 2)
      document.head.appendChild(script)
    }
    
    updateJsonLd()
    
  }, [
    title, 
    description, 
    keywords, 
    author, 
    type, 
    currentUrl, 
    ogImage, 
    publishedTime, 
    modifiedTime, 
    locale, 
    alternateLocales, 
    currentCanonicalUrl, 
    noindex, 
    nofollow,
    location.pathname
  ])
  
  return null // This component doesn't render anything
}

export default SEO

// Pre-defined SEO configs for different pages
export const pageConfigs = {
  home: {
    title: 'Mariusz Sokołowski - Transport | Logistyka | Finanse | Technologie',
    description: 'Właściciel firmy transportowej z Szwajcarii. Inżynier logistyki, specjalista finansów i technologii. Portfolio projektów i doświadczenia.',
    keywords: ['Mariusz Sokołowski', 'transport', 'logistyka', 'finanse', 'Szwajcaria', 'portfolio'],
    type: 'website' as const
  },
  about: {
    title: 'O mnie - Mariusz Sokołowski | Transport & Technologie',
    description: 'Poznaj moją historię - od kierowcy CE w Szwajcarii do właściciela firmy transportowej i pasjonata technologii.',
    keywords: ['o mnie', 'biografia', 'doświadczenie', 'transport', 'technologie'],
    type: 'profile' as const
  },
  services: {
    title: 'Usługi - Transport, Logistyka, Technologie | Mariusz Sokołowski',
    description: 'Oferuję kompleksowe usługi transportowe, doradztwo logistyczne i rozwiązania technologiczne. Sprawdź co mogę dla Ciebie zrobić.',
    keywords: ['usługi transportowe', 'logistyka', 'doradztwo', 'technologie', 'Szwajcaria'],
    type: 'website' as const
  },
  experience: {
    title: 'Doświadczenie zawodowe - Mariusz Sokołowski',
    description: 'Moja kariera zawodowa - od kierowcy CE przez logistykę po własną firmę transportową. 5+ lat doświadczenia w Szwajcarii.',
    keywords: ['doświadczenie', 'kariera', 'kierowca CE', 'firma transportowa', 'logistyka'],
    type: 'website' as const
  },
  education: {
    title: 'Edukacja i certyfikaty - Mariusz Sokołowski',
    description: 'Moje wykształcenie, certyfikaty i ciągła nauka. Studia z finansów i rachunkowości, kursy technologiczne.',
    keywords: ['edukacja', 'certyfikaty', 'finanse', 'rachunkowość', 'kursy', 'nauka'],
    type: 'website' as const
  },
  tech: {
    title: 'Projekty technologiczne - React, TypeScript, AI | Mariusz Sokołowski',
    description: 'Portfolio moich projektów technologicznych - aplikacje React, systemy AI, automatyzacja procesów biznesowych.',
    keywords: ['projekty', 'React', 'TypeScript', 'AI', 'automatyzacja', 'portfolio technologiczne'],
    type: 'website' as const
  },
  contact: {
    title: 'Kontakt - Mariusz Sokołowski | Współpraca biznesowa',
    description: 'Skontaktuj się ze mną w sprawie projektów transportowych, technologicznych lub współpracy biznesowej.',
    keywords: ['kontakt', 'współpraca', 'projekty', 'transport', 'technologie'],
    type: 'website' as const
  },
  notfound: {
    title: 'Strona nie znaleziona - 404 | Mariusz Sokołowski',
    description: 'Strona której szukasz nie została znaleziona. Wróć do strony głównej lub skorzystaj z nawigacji.',
    keywords: ['404', 'strona nie znaleziona', 'błąd'],
    type: 'website' as const,
    noindex: true
  }
} as const