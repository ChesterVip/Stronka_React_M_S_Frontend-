// Language types
export type Language = 'pl' | 'de';

// Translation structure
export interface Translation {
  // Navigation
  nav_start: string;
  nav_about: string;
  nav_services: string;
  nav_experience: string;
  nav_education: string;
  nav_tech: string;
  nav_contact: string;
  restricted_title: string;
  restricted_description_prefix: string;
  restricted_description_suffix: string;
  restricted_hint: string;
  restricted_button: string;
  restricted_back: string;
  restricted_nav_hint: string;
  restricted_cta_details: string;
  restricted_benefit_insights: string;
  restricted_benefit_materials: string;
  restricted_benefit_direct: string;
  restricted_login_request_hint: string;
  restricted_login_verify_hint: string;
  restricted_login_missing_fields: string;
  restricted_login_phone_invalid: string;
  restricted_login_code_sent: string;
  restricted_login_generic_error: string;
  restricted_login_code_missing: string;
  restricted_login_verify_error: string;
  restricted_login_resend_hint: string;
  restricted_login_code_resent: string;
  restricted_login_missing_email: string;
  restricted_login_existing_token: string;
  restricted_login_existing_token_no_date: string;
  restricted_login_code_sent_with_expiry: string;
  restricted_login_email_label: string;
  restricted_login_email_placeholder: string;
  restricted_login_email_hint: string;
  restricted_login_new_hint: string;
  restricted_login_new_request_hint: string;
  restricted_login_mode_label: string;
  restricted_login_new_option: string;
  restricted_login_existing_option: string;
  restricted_login_new_mode_hint: string;
  restricted_login_existing_mode_hint: string;
  restricted_login_missing_details: string;
  restricted_login_first_name_label: string;
  restricted_login_first_name_placeholder: string;
  restricted_login_last_name_label: string;
  restricted_login_last_name_placeholder: string;
  restricted_login_phone_label: string;
  restricted_login_phone_placeholder: string;
  restricted_login_company_label: string;
  restricted_login_company_placeholder: string;
  restricted_form_first_name: string;
  restricted_form_last_name: string;
  restricted_form_code_label: string;
  restricted_form_login: string;
  restricted_form_resend: string;
  restricted_form_send_code: string;
  restricted_form_change_email: string;
  restricted_form_processing: string;
  restricted_login_section_intro: string;
  restricted_close_label: string;
  restricted_login_success: string;
  restricted_login_new_user_required: string;
  
  // Hero section
  hero_title: string;
  hero_subtitle: string;
  contact_btn: string;
  services_btn: string;
  hero_tags: {
    transport: string;
    experience: string;
    education: string;
    finance: string;
    tech: string;
  };
  
  // About section
  about_title: string;
  about_subtitle: string;
  about_history_title: string;
  about_entrepreneur: string;
  about_entrepreneur_desc: string;
  about_international: string;
  about_international_desc: string;
  about_development: string;
  about_development_desc: string;
  about_tech_enthusiast: string;
  about_tech_enthusiast_desc: string;
  about_achievements_title: string;
  about_achievements: {
    business: string;
    swiss_exp: string;
    engineer: string;
    master: string;
    webdev: string;
  };
  about_hobbies_title: string;
  
  // Services section
  services_title: string;
  services_subtitle: string;
  
  // Experience section
  experience_title: string;
  experience_subtitle: string;
  
  // Education section
  education_title: string;
  education_subtitle: string;
  
  // Tech section
  tech_title: string;
  tech_subtitle: string;
  tech_tesla_title: string;
  tech_tesla_subtitle: string;
  tech_web_title: string;
  tech_web_subtitle: string;
  tech_ai_title: string;
  tech_ai_subtitle: string;
  
  // Contact section
  contact_title: string;
  contact_subtitle: string;
  contact_name: string;
  contact_description: string;
  contact_role: string;
  phone_label: string;
  email_label: string;
  location_label: string;
  availability: string;
  response_time: string;
  international_activity: string;
  find_online: string;
  form_title: string;
  form_success: string;
  form_error: string;
  send_message: string;
  
  // Contact page specific
  contact_page_title: string;
  contact_page_subtitle: string;
  contact_form_title: string;
  contact_form_subtitle: string;
  contact_info_title: string;
  response_time_title: string;
  response_time_subtitle: string;
  tips_title: string;
  back_to_home: string;
  
  // Form fields
  name_label: string;
  name_placeholder: string;
  email_placeholder: string;
  phone_label_optional: string;
  phone_placeholder: string;
  company_label: string;
  company_placeholder: string;
  category_label: string;
  category_placeholder: string;
  priority_label: string;
  subject_label: string;
  subject_placeholder: string;
  message_label: string;
  message_placeholder: string;
  preferred_contact_label: string;
  budget_label: string;
  timeline_label: string;
  
  // Form categories
  category_general: string;
  category_business: string;
  category_technical: string;
  category_collaboration: string;
  category_recruitment: string;
  
  // Form priorities
  priority_low: string;
  priority_medium: string;
  priority_high: string;
  
  // Form options
  budget_not_specified: string;
  budget_under_5000: string;
  budget_5000_15000: string;
  budget_15000_50000: string;
  budget_over_50000: string;
  timeline_not_specified: string;
  timeline_asap: string;
  timeline_1month: string;
  timeline_3months: string;
  timeline_6months: string;
  timeline_flexible: string;
  
  // Contact preferences
  contact_email: string;
  contact_phone: string;
  contact_both: string;
  
  // GDPR
  gdpr_consent: string;
  marketing_consent: string;
  
  // Response times
  response_general: string;
  response_business: string;
  response_technical: string;
  response_collaboration: string;
  response_recruitment: string;
  
  // Tips
  tip_detailed_description: string;
  tip_budget_timeline: string;
  tip_existing_links: string;
  tip_urgent_call: string;
  
  // Form messages
  sending_message: string;
  message_sent_success: string;
  message_send_error: string;
  response_time_note: string;
  urgent_note: string;
  
  // About page
  about_tab_story: string;
  about_tab_achievements: string;
  about_tab_values: string;
  about_achievement_business_desc: string;
  about_achievement_swiss_desc: string;
  about_achievement_engineer_desc: string;
  about_achievement_master_desc: string;
  about_achievement_webdev_desc: string;
  about_value_professionalism: string;
  about_value_professionalism_desc: string;
  about_value_innovation: string;
  about_value_innovation_desc: string;
  about_value_precision: string;
  about_value_precision_desc: string;
  about_value_partnership: string;
  about_value_partnership_desc: string;
  about_stat_years_switzerland: string;
  about_stat_daily_km: string;
  about_stat_languages: string;
  about_stat_it_projects: string;
  about_cta_title: string;
  about_cta_subtitle: string;
  about_key_subjects: string;
  
  // Services page
  services_pricing_title: string;
  services_pricing_subtitle: string;
  services_cta_title: string;
  services_cta_subtitle: string;
  services_webdev_info: string;
  services_cta_contact: string;
  services_cta_about: string;
  services_learn_more: string;
  services_most_popular: string;
  services_choose_plan: string;
  services_contact_us: string;
  
  // Experience page
  experience_tab_timeline: string;
  experience_tab_skills: string;
  experience_tab_projects: string;
  experience_cta_title: string;
  experience_cta_subtitle: string;
  experience_see_services: string;
  
  // Education page
  education_tab_formal: string;
  education_tab_certifications: string;
  education_tab_skills: string;
  education_tab_continuous: string;
  education_cta_title: string;
  education_cta_subtitle: string;
  education_see_experience: string;
  
  // Tech page
  tech_page_title: string;
  tech_page_subtitle: string;
  tech_view_grid: string;
  tech_view_list: string;
  tech_view_label: string;
  tech_back_to_home: string;
  tech_see_details: string;
  tech_demo: string;
  tech_code: string;
  tech_documentation: string;
  tech_project_description: string;
  tech_technologies_used: string;
  tech_key_features: string;
  tech_achievements: string;
  tech_see_demo: string;
  tech_source_code: string;
  tech_complexity_level: string;
  tech_status_completed: string;
  tech_status_in_progress: string;
  tech_status_planned: string;
  tech_complexity_beginner: string;
  tech_complexity_intermediate: string;
  tech_complexity_advanced: string;
  tech_complexity_expert: string;
  
  // HomePage specific
  homepage_overview_title: string;
  homepage_services: {
    transport: string;
    transport_desc: string;
    logistics: string;
    logistics_desc: string;
    education: string;
    education_desc: string;
    technologies: string;
    technologies_desc: string;
    experience: string;
    experience_desc: string;
    contact: string;
    contact_desc: string;
  };
  
  // ServicesPage specific
  services_categories: {
    transport: {
      title: string;
      services: {
        poland_switzerland: {
          title: string;
          description: string;
          features: string[];
        };
        europe: {
          title: string;
          description: string;
          features: string[];
        };
        ce_cargo: {
          title: string;
          description: string;
          features: string[];
        };
      };
    };
    logistics: {
      title: string;
      services: {
        route_planning: {
          title: string;
          description: string;
          features: string[];
        };
        process_analysis: {
          title: string;
          description: string;
          features: string[];
        };
        consulting: {
          title: string;
          description: string;
          features: string[];
        };
      };
    };
    finance: {
      title: string;
      services: {
        cost_optimization: {
          title: string;
          description: string;
          features: string[];
        };
        profitability: {
          title: string;
          description: string;
          features: string[];
        };
        budget_planning: {
          title: string;
          description: string;
          features: string[];
        };
      };
    };
    tech: {
      title: string;
      services: {
        web_development: {
          title: string;
          description: string;
          features: string[];
        };
        automation: {
          title: string;
          description: string;
          features: string[];
        };
        ai_integration: {
          title: string;
          description: string;
          features: string[];
        };
      };
    };
  };
  
  // ExperiencePage specific
  experience_data: {
    current_swiss: {
      title: string;
      period: string;
      company: string;
      location: string;
      description: string;
      achievements: string[];
    };
    business_owner: {
      title: string;
      period: string;
      company: string;
      location: string;
      description: string;
      achievements: string[];
    };
    fg_falke: {
      title: string;
      period: string;
      company: string;
      location: string;
      description: string;
      achievements: string[];
    };
    early_driver: {
      title: string;
      period: string;
      company: string;
      location: string;
      description: string;
      achievements: string[];
    };
  };
  
  // EducationPage specific
  education_data: {
    master: {
      title: string;
      institution: string;
      period: string;
      status: string;
      description: string;
      subjects: string[];
    };
    engineer: {
      title: string;
      institution: string;
      period: string;
      status: string;
      description: string;
      subjects: string[];
    };
  };
  
  // Common UI labels
  ui_achievements_title: string;
  ui_key_subjects_title: string;
  
  // EducationPage learning stats
  education_learning_stats: Array<{
    label: string;
    value: string;
    icon: string;
  }>;
  
  // EducationPage certifications
  education_certifications: Array<{
    name: string;
    issuer: string;
    date: string;
    valid: boolean;
    icon: string;
  }>;
  
  // EducationPage technical skills
  education_technical_skills: Array<{
    category: string;
    skills: Array<{
      name: string;
      level: number;
    }>;
  }>;
  
  // EducationPage continuous learning
  education_continuous_learning: {
    online_courses: {
      title: string;
      items: string[];
    };
    conferences: {
      title: string;
      items: string[];
    };
    projects: {
      title: string;
      items: string[];
    };
    personal: {
      title: string;
      items: string[];
    };
  };
  
  // Footer
  footer_quick_links: string;
  footer_copyright: string;
  
  // NotFound page
  notfound_need_help: string;
  notfound_contact_description: string;
  notfound_contact_form: string;
  
  // Video Hero
  video_not_supported: string;
  video_skip: string;
  video_loading: string;
  video_buffering: string;
  video_error: string;
  video_retry: string;
}

// Contact form
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormSubmission extends ContactFormData {
  timestamp: string;
  language: Language;
  userAgent: string;
  referrer: string;
  formToken: string;
}

// Validation errors
export interface ValidationErrors {
  [key: string]: string;
}

// Animation types
export interface AnimationProps {
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

// Service item
export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  items: string[];
}

// Experience item
export interface ExperienceItem {
  role: string;
  period: string;
  description: string;
  duties: string[];
  current?: boolean;
}

// Education item
export interface EducationItem {
  title: string;
  period: string;
  description: string;
  completed?: boolean;
}

// Tech project
export interface TechProject {
  title: string;
  subtitle: string;
  icon: string;
  description?: string;
}

// Social link
export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

// SEO meta
export interface SEOMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
}
