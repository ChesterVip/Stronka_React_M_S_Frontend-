import { Language, Translation } from '@/types';

export const translations: Record<Language, Translation> = {
  pl: {
    // Navigation
    nav_start: "Start",
    nav_about: "O mnie",
    nav_services: "Usługi", 
    nav_experience: "Doświadczenie",
    nav_education: "Edukacja",
    nav_tech: "Technologie",
    nav_contact: "Kontakt",
    
    restricted_title: "Strefa chroniona",
    restricted_description_prefix: "Sekcja",
    restricted_description_suffix: "jest dostępna tylko po bezpiecznym zalogowaniu kodem jednorazowym.",
    restricted_hint: "Skorzystaj z przycisku poniżej, aby przejść do logowania i od razu uzyskać dostęp.",
    restricted_button: "Przejdź do logowania",
    restricted_back: "Wróć na stronę główną",
    restricted_nav_hint: "Sekcja dostępna po zalogowaniu",
    restricted_cta_details: "Po weryfikacji wyświetlimy pełne materiały, dane kontaktowe oraz bonusowe treści dla partnerów.",
    restricted_benefit_insights: "Pełne case study i szczegółowe opisy projektów.",
    restricted_benefit_materials: "Dostęp do materiałów premium oraz ofert współpracy.",
    restricted_benefit_direct: "Możliwość bezpośredniego kontaktu i negocjacji.",
    restricted_login_request_hint: "Podaj adres e-mail, aby otrzymać jednorazowy kod logowania.",
    restricted_login_verify_hint: "Wpisz otrzymany kod lub wygeneruj nowy, jeśli potrzebujesz.",
    restricted_login_missing_fields: "Podaj adres e-mail, aby otrzymać kod.",
    restricted_login_phone_invalid: "Podany numer telefonu ma nieprawidłowy format.",
    restricted_login_code_sent: "Kod został wysłany. Sprawdź skrzynkę pocztową.",
    restricted_login_generic_error: "Nie udało się przetworzyć żądania. Spróbuj ponownie.",
    restricted_login_code_missing: "Podaj adres e-mail oraz kod, aby się zalogować.",
    restricted_login_verify_error: "Niepoprawny kod. Spróbuj ponownie.",
    restricted_login_resend_hint: "Podaj adres e-mail, aby wysłać kod ponownie.",
    restricted_login_code_resent: "Kod logowania został ponownie wysłany.",
    restricted_login_missing_email: "Podaj adres e-mail, aby otrzymać kod.",
    restricted_login_existing_token: "Masz już aktywny kod ważny do {date}. Wysłaliśmy go ponownie na Twój adres e-mail.",
    restricted_login_existing_token_no_date: "Masz już aktywny kod. Wysłaliśmy go ponownie na Twój adres e-mail.",
    restricted_login_code_sent_with_expiry: "Nowy kod został wysłany i jest ważny do {date}.",
    restricted_login_email_label: "Adres e-mail",
    restricted_login_email_placeholder: "twoj.email@example.com",
    restricted_login_email_hint: "Na ten adres wyślemy kod logowania. Możesz go poprawić w dowolnym momencie – pole pozostanie uzupełnione.",
    restricted_login_new_hint: "Uzupełnij wymagane dane, abyśmy mogli utworzyć bezpieczny dostęp dla nowego użytkownika.",
    restricted_login_new_request_hint: "To Twoje pierwsze logowanie? Wypełnij krótki formularz, aby otrzymać kod startowy.",
    restricted_login_mode_label: "Wybierz sposób logowania",
    restricted_login_new_option: "Uzyskaj kod dla nowego użytkownika",
    restricted_login_existing_option: "Ponownie uzyskaj kod",
    restricted_login_new_mode_hint: "Pierwszy raz? Podaj imię i nazwisko, aby założyć konto i otrzymać kod.",
    restricted_login_existing_mode_hint: "Masz już konto? Podaj tylko e-mail, a wyślemy kod ponownie.",
    restricted_login_missing_details: "Podaj imię oraz nazwisko, aby utworzyć konto.",
    restricted_login_first_name_label: "Imię",
    restricted_login_first_name_placeholder: "Jan",
    restricted_login_last_name_label: "Nazwisko",
    restricted_login_last_name_placeholder: "Kowalski",
    restricted_login_phone_label: "Numer telefonu (opcjonalnie)",
    restricted_login_phone_placeholder: "+48 123 456 789",
    restricted_login_company_label: "Firma (opcjonalnie)",
    restricted_login_company_placeholder: "Nazwa firmy lub projekt",
    restricted_form_first_name: "Imię",
    restricted_form_last_name: "Nazwisko",
    restricted_form_code_label: "Kod logowania",
    restricted_form_login: "Zaloguj",
    restricted_form_resend: "Wyślij ponownie",
    restricted_form_send_code: "Wyślij kod",
    restricted_form_change_email: "Zmień adres e-mail",
    restricted_form_processing: "Przetwarzamy żądanie...",
    restricted_login_section_intro: "Logujesz się, aby odblokować sekcję",
    restricted_close_label: "Zamknij okno logowania",
    restricted_login_success: "Logowanie zakończone sukcesem. Kod pozostaje aktywny przez 24 godziny.",
    restricted_login_new_user_required:
      "Nie znaleziono konta dla tego adresu. Wybierz opcję \"Uzyskaj kod dla nowego użytkownika\" i wypełnij formularz, aby utworzyć konto.",
    
    // Hero section
    hero_title: "Mariusz Sokołowski",
    hero_subtitle: "Właściciel firmy transportowej • Inżynier logistyki • Specjalista finansów • Entuzjasta technologii",
    contact_btn: "Skontaktuj się",
    services_btn: "Zobacz usługi",
    hero_tags: {
      transport: "Transport międzynarodowy",
      experience: "5+ lat w Szwajcarii", 
      education: "Inżynier logistyki",
      finance: "Finanse i rachunkowość",
      tech: "Web Development"
    },
    
    // About section
    about_title: "O mnie",
    about_subtitle: "Łączę tradycyjne podejście do biznesu transportowego z nowoczesną wiedzą z zakresu logistyki, finansów i najnowszych technologii.",
    about_history_title: "Moja historia",
    about_entrepreneur: "Przedsiębiorca z pasją do doskonałości.",
    about_entrepreneur_desc: "Prowadzę własną firmę transportową w Polsce, którą budowałem od podstaw z myślą o najwyższej jakości usług i profesjonalnym podejściu do klienta.",
    about_international: "Międzynarodowe doświadczenie.",
    about_international_desc: "Przez ostatnie 5 lat pracuję jako kierowca CE w Szwajcarii, gdzie zdobywam cenne doświadczenie w międzynarodowym transporcie i uczę się od najlepszych w branży.",
    about_development: "Ciągły rozwój.",
    about_development_desc: "Jestem inżynierem zarządzania procesami logistycznymi i aktualnie kończę studia magisterskie z finansów i rachunkowości. To połączenie teorii z praktyką pozwala mi optymalizować procesy i osiągać lepsze rezultaty.",
    about_tech_enthusiast: "Technologiczny entuzjasta.",
    about_tech_enthusiast_desc: "W wolnym czasie tworzę zaawansowane strony internetowe, wykorzystuję AI w codziennej pracy i interesuję się najnowszymi technologiami. Jeżdżę Teslą, co odzwierciedla moje podejście do innowacji.",
    about_achievements_title: "Kluczowe osiągnięcia",
    about_achievements: {
      business: "Własna firma transportowa - stabilny rozwój",
      swiss_exp: "5+ lat doświadczenia w Szwajcarii",
      engineer: "Tytuł inżyniera logistyki",
      master: "Studia magisterskie z finansów (ostatni semestr)",
      webdev: "Zaawansowane projekty web development"
    },
    about_hobbies_title: "Pasje i hobby",
    
    // Services section
    services_title: "Moje usługi",
    services_subtitle: "Od transportu przez finanse po nowoczesne rozwiązania IT - kompleksowe usługi oparte na wieloletnim doświadczeniu i ciągłym rozwoju.",
    
    // Experience section
    experience_title: "Doświadczenie zawodowe",
    experience_subtitle: "Wieloletnie doświadczenie w branży transportowej i logistycznej w Polsce i Szwajcarii.",
    experience_summary: "Mam bogate doświadczenie w transporcie - od prowadzenia własnej firmy, przez pracę w Coop i Fiege jako kierowca, po kierowanie zespołem w Polsce oraz rozliczanie kierowców i załatwianie zleceń. Jestem osobą, która daje dużo z siebie, ale branża transportowa ma niewiele do zaoferowania w zakresie rozwoju. Dlatego szukam nowych możliwości w automatyzacji, IT lub finansach, gdzie mogę kontynuować swój ciągły rozwój.",
    experience_development_path: "Moja ścieżka rozwoju",
    experience_cta_title: "Interesuje Cię moje doświadczenie?",
    experience_cta_subtitle: "Mam bogate doświadczenie w różnych branżach i jestem otwarty na nowe wyzwania.",
    experience_see_services: "Zobacz usługi",
    experience_tab_timeline: "Timeline",
    experience_tab_skills: "Umiejętności",
    experience_tab_projects: "Projekty",
    
    // Education section
    education_title: "Edukacja i kwalifikacje", 
    education_subtitle: "Ciągły rozwój kompetencji - od inżynierii logistyki po finanse i najnowsze technologie.",
    
    // Tech section
    tech_title: "Technologie i hobby",
    tech_subtitle: "Pasja do technologii i innowacji - od codziennej jazdy Teslą po eksplorację najnowszych gadżetów technologicznych.",
    tech_tesla_title: "Tesla Owner",
    tech_tesla_subtitle: "Codziennie na drodze",
    tech_web_title: "Web Development", 
    tech_web_subtitle: "Zaawansowane projekty",
    tech_ai_title: "AI & Technologie",
    tech_ai_subtitle: "Codzienne wykorzystanie",
    
    // Contact section
    contact_title: "Skontaktuj się ze mną",
    contact_subtitle: "Gotowy na współpracę? Napisz do mnie w sprawie usług transportowych, konsultacji logistycznych lub projektów technologicznych.",
    contact_name: "Mariusz Sokołowski",
    contact_description: "Właściciel firmy transportowej",
    contact_role: "Inżynier logistyki | Finanse | Tech",
    phone_label: "Telefon",
    email_label: "E-mail", 
    location_label: "Lokalizacja",
    availability: "Dostępny 7 dni w tygodniu",
    response_time: "Odpowiadam w ciągu 24h",
    international_activity: "Działalność międzynarodowa",
    find_online: "Znajdź mnie online",
    form_title: "Wyślij wiadomość",
    form_success: "Wiadomość została wysłana pomyślnie! Odezwę się wkrótce.",
    form_error: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie lub skontaktuj się bezpośrednio.",
    send_message: "Wyślij wiadomość",
    logout_btn: "Wyloguj się",
    
    // Contact page specific
    contact_page_title: "Kontakt",
    contact_page_subtitle: "Masz projekt? Pytanie? A może chcesz po prostu porozmawiać o technologii? Skontaktuj się ze mną - odpowiem szybko i profesjonalnie.",
    contact_form_title: "Wyślij wiadomość",
    contact_form_subtitle: "Wypełnij formularz poniżej, a odpowiem w ciągu",
    contact_info_title: "Informacje kontaktowe",
    response_time_title: "Czas odpowiedzi",
    response_time_subtitle: "Średnie czasy odpowiedzi według kategorii",
    tips_title: "Wskazówki",
    back_to_home: "Powrót do strony głównej",
    
    // Form fields
    name_label: "Imię i nazwisko",
    name_placeholder: "Jan Kowalski",
    email_placeholder: "jan.kowalski@example.com",
    phone_label_optional: "Telefon (opcjonalnie)",
    phone_placeholder: "+41 xxx xxx xxx",
    company_label: "Firma (opcjonalnie)",
    company_placeholder: "Nazwa firmy",
    category_label: "Kategoria zapytania",
    category_placeholder: "Wybierz kategorię",
    priority_label: "Priorytet",
    subject_label: "Temat",
    subject_placeholder: "Krótko opisz temat swojego zapytania",
    message_label: "Wiadomość",
    message_placeholder: "Opisz szczegółowo swoje zapytanie, projekt lub propozycję współpracy...",
    message_sent_success: "Wiadomość została wysłana pomyślnie!",
    message_send_error: "Wystąpił błąd podczas wysyłania wiadomości.",
    characters_count: "znaków",
    preferred_contact_label: "Preferowany sposób kontaktu",
    budget_label: "Budżet (opcjonalnie)",
    timeline_label: "Termin realizacji (opcjonalnie)",
    
    // Form categories
    category_general: "Zapytanie ogólne",
    category_business: "Współpraca biznesowa",
    category_technical: "Projekt techniczny",
    category_collaboration: "Współpraca",
    category_recruitment: "Rekrutacja",
    
    // Form priorities
    priority_low: "Niski",
    priority_medium: "Średni",
    priority_high: "Wysoki",
    
    // Form options
    budget_not_specified: "Nie określono",
    budget_under_5000: "Poniżej 5000 CHF",
    budget_5000_15000: "5000 - 15000 CHF",
    budget_15000_50000: "15000 - 50000 CHF",
    budget_over_50000: "Powyżej 50000 CHF",
    timeline_not_specified: "Nie określono",
    timeline_asap: "Jak najszybciej",
    timeline_1month: "W ciągu miesiąca",
    timeline_3months: "W ciągu 3 miesięcy",
    timeline_6months: "W ciągu 6 miesięcy",
    timeline_flexible: "Elastyczny termin",
    
    // Contact preferences
    contact_email: "Email",
    contact_phone: "Telefon",
    contact_both: "Oba sposoby",
    
    // GDPR
    gdpr_consent: "Wyrażam zgodę na przetwarzanie moich danych osobowych przez Mariusza Sokołowskiego w celu udzielenia odpowiedzi na zapytanie zgodnie z Polityką Prywatności.",
    marketing_consent: "Wyrażam zgodę na otrzymywanie informacji marketingowych o usługach i projektach (opcjonalne, możesz zrezygnować w każdym momencie).",
    
    // Response times
    response_general: "24 godziny",
    response_business: "12 godzin",
    response_technical: "24-48 godzin",
    response_collaboration: "12 godzin",
    response_recruitment: "6-12 godzin",
    
    // Tips
    tip_detailed_description: "Opisz szczegółowo swój projekt lub pytanie",
    tip_budget_timeline: "Podaj orientacyjny budżet i termin realizacji",
    tip_existing_links: "Załącz linki do istniejących projektów/stron",
    tip_urgent_call: "W pilnych sprawach - dzwoń bezpośrednio",
    
    // Form messages
    sending_message: "Wysyłanie...",
    response_time_note: "Odpowiem na Twoją wiadomość w ciągu",
    urgent_note: "W przypadku projektów pilnych - zadzwoń bezpośrednio.",
    
    // About page
    about_tab_story: "Moja Historia",
    about_tab_achievements: "Osiągnięcia",
    about_tab_values: "Wartości",
    about_achievement_business_desc: "Firma transportowa z stabilnymi kontraktami i rosnącą bazą klientów",
    about_achievement_swiss_desc: "Doświadczenie w transporcie międzynarodowym w wymagającym środowisku szwajcarskim",
    about_achievement_engineer_desc: "Ukończone studia inżynierskie z zarządzania procesami logistycznymi",
    about_achievement_master_desc: "W trakcie ukończenia studiów magisterskich z finansów i rachunkowości",
    about_achievement_webdev_desc: "Samodzielne projekty web development z wykorzystaniem najnowszych technologii",
    about_value_professionalism: "Profesjonalizm",
    about_value_professionalism_desc: "Wysokie standardy w każdym projekcie",
    about_value_innovation: "Innowacyjność",
    about_value_innovation_desc: "Otwartość na nowe technologie i rozwiązania",
    about_value_precision: "Precyzja",
    about_value_precision_desc: "Dbałość o każdy szczegół",
    about_value_partnership: "Partnerstwo",
    about_value_partnership_desc: "Budowanie długotrwałych relacji",
    about_stat_years_switzerland: "Lat w Szwajcarii",
    about_stat_daily_km: "Km dziennie",
    about_stat_languages: "Języki",
    about_stat_it_projects: "Projektów IT",
    about_cta_title: "Gotowy na współpracę?",
    about_cta_subtitle: "Skontaktuj się ze mną, aby omówić Twoje potrzeby w zakresie transportu, logistyki lub projektów technologicznych.",
    about_key_subjects: "Kluczowe przedmioty:",
    
    // Services page
    services_pricing_title: "Cennik usług konsultingowych",
    services_pricing_subtitle: "Wybierz pakiet dopasowany do Twoich potrzeb",
    services_cta_title: "Nie widzisz odpowiedniej usługi?",
    services_cta_subtitle: "Skontaktuj się ze mną, aby omówić indywidualne rozwiązanie dostosowane do Twoich potrzeb.",
    services_webdev_info: "Web Development - prosty info page od 499 CHF z rocznym deploymentem!",
    services_cta_contact: "Skontaktuj się",
    services_cta_about: "Poznaj mnie lepiej",
    services_learn_more: "Dowiedz się więcej",
    services_most_popular: "Najpopularniejszy",
    services_choose_plan: "Wybierz plan",
    services_contact_us: "Skontaktuj się",
    
    // Services - Priority and Pricing
    services_priority_high: "PRIORYTET",
    services_price_from: "od",
    services_get_quote: "Wycenia",
    services_tech_title: "IT & Technologie",
    services_tech_highlight: "Nowoczesne rozwiązania webowe i automatyzacja",
    services_finance_title: "Finanse",
    services_finance_highlight: "Optymalizacja kosztów i analiza rentowności",
    services_transport_title: "Transport",
    services_transport_highlight: "Międzynarodowy transport i logistyka",
    
    // Services - Promo Pricing
    services_webdev_promo_price: "499 CHF",
    services_promo_label: "PROMOCJA",
    
    // Video Hero
    video_not_supported: "Twoja przeglądarka nie obsługuje odtwarzania wideo.",
    video_skip: "Pomiń",
    video_loading: "Ładowanie wideo...",
    video_buffering: "Buforowanie...",
    video_error: "Błąd ładowania wideo",
    video_retry: "Spróbuj ponownie",
    
    // Tech page specific
    tech_technologies_title: "Technologie",
    tech_technologies_subtitle: "Technologie, które znam i używam w projektach",
    tech_projects_title: "Moje projekty",
    tech_projects_subtitle: "Projekty z GitHub z opisem zastosowanych technologii",
    tech_skill_level: "Poziom:",
    tech_skill_expert: "Ekspert",
    tech_skill_advanced: "Zaawansowany", 
    tech_skill_intermediate: "Średni",
    tech_skill_beginner: "Początkujący",
    tech_clear_filters: "Wyczyść wszystkie filtry",
    tech_projects_using: "Projekty używające:",
    tech_no_projects: "Brak projektów z wybranymi technologiami",
    tech_try_other: "Spróbuj wybrać inne technologie lub wyczyść filtry",
    tech_last_updated: "Ostatnia aktualizacja:",
    tech_github: "GitHub",
    tech_demo: "Demo",
    tech_interested_cooperation: "Interesuje Cię współpraca?",
    tech_experience_many: "Mam doświadczenie w wielu technologiach i jestem otwarty na nowe wyzwania. Skontaktuj się ze mną!",
    tech_contact: "Skontaktuj się",
    
    // Cookie Policy
    cookie_policy_title: "Polityka Cookies",
    cookie_policy_subtitle: "Informacje o wykorzystaniu plików cookies na stronie mariusz-sokolowski.ch",
    cookie_what_are: "Co to są cookies?",
    cookie_what_are_desc: "Cookies to małe pliki tekstowe przechowywane na Twoim urządzeniu podczas przeglądania strony internetowej. Pomagają one stronie zapamiętać informacje o Twojej wizycie, co może ułatwić następne odwiedziny i sprawić, że strona będzie bardziej użyteczna.",
    cookie_types: "Rodzaje cookies używanych na tej stronie",
    cookie_essential: "Cookies niezbędne",
    cookie_essential_desc: "Te cookies są niezbędne do funkcjonowania strony internetowej i nie można ich wyłączyć. Zazwyczaj są ustawiane tylko w odpowiedzi na działania wykonywane przez Ciebie, które są równoznaczne z żądaniem usług, takich jak ustawienie preferencji prywatności, logowanie lub wypełnianie formularzy.",
    cookie_analytics: "Cookies analityczne",
    cookie_analytics_desc: "Te cookies pozwalają nam liczyć wizyty i źródła ruchu, abyśmy mogli mierzyć i poprawiać wydajność naszej strony. Pomagają nam dowiedzieć się, które strony są najbardziej i najmniej popularne oraz zobaczyć, jak odwiedzający poruszają się po stronie.",
    cookie_functional: "Cookies funkcjonalne",
    cookie_functional_desc: "Te cookies umożliwiają stronie internetowej zapamiętanie wyborów, których dokonujesz (takich jak Twoja nazwa użytkownika, język lub region, w którym się znajdujesz) i zapewniają ulepszone, bardziej osobiste funkcje.",
    cookie_third_party: "Cookies stron trzecich",
    cookie_third_party_desc: "Ta strona może zawierać cookies od stron trzecich, takich jak Google Analytics, które pomagają nam analizować sposób korzystania z naszej strony internetowej.",
    cookie_manage: "Zarządzanie cookies",
    cookie_manage_desc: "Możesz kontrolować i/lub usuwać cookies według własnego uznania. Możesz usunąć wszystkie cookies, które są już na Twoim komputerze, i możesz ustawić większość przeglądarek, aby zapobiec ich umieszczaniu.",
    cookie_browser_settings: "Ustawienia przeglądarki",
    cookie_browser_settings_desc: "Większość przeglądarek internetowych automatycznie akceptuje cookies, ale zazwyczaj możesz zmodyfikować ustawienia przeglądarki, aby odrzucić cookies, jeśli wolisz.",
    cookie_contact: "Kontakt",
    cookie_contact_desc: "Jeśli masz pytania dotyczące naszej polityki cookies, skontaktuj się z nami pod adresem info@mariusz-sokolowski.ch",
    cookie_last_updated: "Ostatnia aktualizacja",
    cookie_last_updated_date: "21 października 2024",
    
    // Cookie Consent Banner
    cookie_banner_title: "Ta strona używa plików cookies",
    cookie_banner_description: "Używamy plików cookies, aby poprawić Twoje doświadczenia na stronie, analizować ruch i personalizować treści. Możesz zarządzać swoimi preferencjami w każdej chwili.",
    cookie_banner_accept_all: "Akceptuję wszystkie",
    cookie_banner_accept_necessary: "Tylko niezbędne",
    cookie_banner_customize: "Dostosuj",
    cookie_banner_more_info: "Więcej informacji",
    cookie_banner_settings: "Ustawienia cookies",
    cookie_banner_necessary_cookies: "Cookies niezbędne",
    cookie_banner_analytics_cookies: "Cookies analityczne",
    cookie_banner_functional_cookies: "Cookies funkcjonalne",
    cookie_banner_save_preferences: "Zapisz preferencje",
    cookie_banner_preferences_saved: "Twoje preferencje zostały zapisane",
    
    // GitHub Projects
    project_portfolio_desc: "Strona portfolio z zaawansowanym systemem logowania, wielojęzycznością i Git-style timeline doświadczenia. Implementacja automatycznej rejestracji użytkowników i systemu OTP.",
    project_transport_ai_desc: "System AI do optymalizacji tras transportowych z integracją GPS i predykcją kosztów. Wykorzystuje machine learning do analizy danych logistycznych.",
    project_crypto_desc: "Aplikacja do śledzenia portfolio kryptowalut z real-time danymi z giełd. Implementacja WebSocket do aktualizacji cen i analizy zysków/strat.",
    project_automation_desc: "Zestaw narzędzi do automatyzacji procesów biznesowych z integracją CRM, ERP i systemów księgowymi. Workflow builder z drag-and-drop interface.",
    project_finance_desc: "Aplikacja mobilna do zarządzania finansami osobistymi z AI-powered insights. Integracja z bankami przez Open Banking API i analiza wydatków.",
    
    // Git Timeline specific
    git_timeline_title: "Mein Karriereweg",
    git_view_oneline: "--oneline",
    git_view_detailed: "--detailed", 
    git_branch_all: "--all",
    git_branch_main: "main",
    git_branch_polska: "polska",
    git_branch_szwajcaria: "szwajcaria",
    git_current_position: "Aktuelle Position",
    git_showing_commits: "Zeige {count} Commit{plural} in {view} Ansicht",
    
    // Education page
    education_tab_formal: "Edukacja formalna",
    education_tab_certifications: "Certyfikaty",
    education_tab_skills: "Umiejętności techniczne",
    education_tab_continuous: "Rozwój ciągły",
    education_cta_title: "Szukasz eksperta z solidnym wykształceniem?",
    education_cta_subtitle: "Połączenie wykształcenia technicznego, doświadczenia praktycznego i ciągłego rozwoju to moja przewaga konkurencyjna.",
    education_see_experience: "Zobacz doświadczenie",
    education_cert_valid: "Aktualne",
    
    // Tech page
    tech_page_title: "Projekty Technologiczne",
    tech_page_subtitle: "Portfolio projektów technologicznych - od aplikacji webowych przez systemy AI po rozwiązania blockchain. Każdy projekt to kombinacja innowacji, praktycznego zastosowania i najnowszych technologii.",
    tech_view_grid: "Siatka",
    tech_view_list: "Lista",
    tech_view_label: "Widok:",
    tech_back_to_home: "Powrót do strony głównej",
    tech_see_details: "Zobacz szczegóły",
    tech_code: "Code",
    tech_documentation: "Dokumentacja",
    tech_project_description: "Opis projektu",
    tech_technologies_used: "Wykorzystane technologie",
    tech_key_features: "Kluczowe funkcjonalności",
    tech_achievements: "Osiągnięcia",
    tech_see_demo: "Zobacz demo",
    tech_source_code: "Kod źródłowy",
    tech_complexity_level: "Poziom:",
    tech_status_completed: "Ukończone",
    tech_status_in_progress: "W trakcie",
    tech_status_planned: "Planowane",
    tech_complexity_beginner: "Podstawowy",
    tech_complexity_intermediate: "Średniozaawansowany",
    tech_complexity_advanced: "Zaawansowany",
    tech_complexity_expert: "Ekspert",
    
    // HomePage specific
    homepage_overview_title: "Profesjonalne usługi transportowe i technologiczne",
    homepage_services: {
      transport: "Transport",
      transport_desc: "Międzynarodowe usługi transportowe",
      logistics: "Logistyka", 
      logistics_desc: "Optymalizacja procesów logistycznych",
      education: "Edukacja",
      education_desc: "Inżynier logistyki + studia magisterskie",
      technologies: "Technologie",
      technologies_desc: "Web development i rozwiązania AI",
      experience: "Doświadczenie",
      experience_desc: "5+ lat w Szwajcarii",
      contact: "Kontakt",
      contact_desc: "Skontaktuj się ze mną"
    },
    
    // ServicesPage specific
    services_categories: {
      transport: {
        title: "Transport międzynarodowy",
        services: {
          poland_switzerland: {
            title: "Przewozy Polska - Szwajcaria",
            description: "Regularne kursy z terminowymi dostawami",
            features: ["Ubezpieczenie cargo", "Tracking GPS", "Dostawy door-to-door"]
          },
          europe: {
            title: "Transport po całej Europie", 
            description: "Szeroka sieć połączeń europejskich",
            features: ["27 krajów UE", "Dokumentacja celna", "Express delivery"]
          },
          ce_cargo: {
            title: "Obsługa ładunków CE",
            description: "Profesjonalna obsługa pojazdów ciężkich", 
            features: ["Do 40 ton", "ADR certified", "Bezpieczny załadunek"]
          }
        }
      },
      logistics: {
        title: "Optymalizacja logistyczna",
        services: {
          route_planning: {
            title: "Planowanie tras",
            description: "Optymalizacja kosztów i czasu transportu",
            features: ["Analiza GPS", "Oszczędność paliwa", "Minimalizacja przestojów"]
          },
          process_analysis: {
            title: "Analiza procesów",
            description: "Identyfikacja miejsc do usprawnień",
            features: ["Process mapping", "KPI monitoring", "Raportowanie"]
          },
          consulting: {
            title: "Doradztwo logistyczne",
            description: "Kompleksowe konsultacje w zakresie logistyki",
            features: ["Supply Chain", "Warehouse design", "Cost optimization"]
          }
        }
      },
      finance: {
        title: "Zarządzanie finansowe",
        services: {
          cost_optimization: {
            title: "Optymalizacja kosztów",
            description: "Redukcja wydatków operacyjnych",
            features: ["Cost analysis", "Budget planning", "ROI optimization"]
          },
          profitability: {
            title: "Analiza rentowności",
            description: "Ocena efektywności inwestycji",
            features: ["P&L analysis", "Break-even point", "Cash flow"]
          },
          budget_planning: {
            title: "Planowanie budżetu",
            description: "Strategiczne planowanie finansowe",
            features: ["Forecasting", "Risk assessment", "Financial modeling"]
          }
        }
      },
      tech: {
        title: "Rozwiązania IT",
        services: {
          web_development: {
            title: "Tworzenie stron internetowych",
            description: "Nowoczesne, responsywne witryny",
            features: ["React/Next.js", "Mobile-first", "SEO optimized"]
          },
          automation: {
            title: "Automatyzacja procesów",
            description: "Digitalizacja i usprawnianie workflow",
            features: ["API integrations", "Workflow automation", "Data processing"]
          },
          ai_integration: {
            title: "Integracja z AI",
            description: "Implementacja rozwiązań sztucznej inteligencji",
            features: ["Machine learning", "Data analysis", "Predictive models"]
          }
        }
      }
    },
    
    // ExperiencePage specific
    experience_data: {
      current_swiss: {
        title: "Kierowca CE",
        period: "09.2022 – obecnie",
        company: "Coop Schweiz (Schafisheim, CH)",
        location: "Szwajcaria",
        description: "Dystrybucja towarów na terenie Szwajcarii, zgodność z przepisami CH/EU, obsługa tachografu.",
        achievements: [
          "Terminowość dostaw > 98%",
          "Bezpieczna jazda – brak szkód",
          "Optymalizacja tras w górskich warunkach"
        ]
      },
      business_owner: {
        title: "Właściciel firmy transportowej",
        period: "01.2018 – obecnie",
        company: "Transport własny (PL–DE–CH)",
        location: "Polska / Niemcy / Szwajcaria",
        description: "Prowadzenie własnej działalności w zakresie transportu międzynarodowego.",
        achievements: [
          "Współpraca z DHL, Baltershwiller, OHL Cargo, Flex, Migolog",
          "Optymalizacja kosztów i tras",
          "Budowa stabilnej sieci klientów"
        ]
      },
      fg_falke: {
        title: "Udziałowiec mniejszościowy – consulting/doradztwo",
        period: "12.2020 – obecnie",
        company: "FG Falke sp. z o.o.",
        location: "Polska",
        description: "Doradztwo operacyjne i finansowe, procesy, projekty IT, automatyzacje i integracje AI.",
        achievements: [
          "Rozwój usług consultingowych",
          "Współpraca w branży transport/logistyka",
          "Implementacja nowych technologii AI i automatyzacji"
        ]
      },
      early_driver: {
        title: "Kierowca Stückgut",
        period: "2020 – 2022",
        company: "Fiege Logistik (Oftringen, CH)",
        location: "Szwajcaria",
        description: "Dystrybucja drobnicowa, planowanie tras, obsługa klienta.",
        achievements: [
          "Efektywna obsługa dostaw lokalnych",
          "Wdrożenie systemu skanowania przesyłek",
          "Wysoki poziom satysfakcji klientów"
        ]
      }
    },
    
    // EducationPage specific
    education_data: {
      master: {
        title: "Studia magisterskie - Finanse i rachunkowość",
        institution: "Wyższa Szkoła Biznesu w Dąbrowie Górniczej",
        period: "2023-2025",
        status: "W trakcie - ostatni semestr",
        description: "Pogłębianie wiedzy z zakresu zarządzania finansami, analizy ekonomicznej, rachunkowości zarządczej i kontrolingu.",
        subjects: [
          "Zaawansowana analiza finansowa",
          "Controlling strategiczny",
          "Zarządzanie ryzykiem",
          "International Finance",
          "Corporate Governance"
        ]
      },
      engineer: {
        title: "Inżynier zarządzania procesami logistycznymi",
        institution: "Wyższa Szkoła Biznesu w Dąbrowie Górniczej – Oddział w Krakowie",
        period: "2018-2022",
        status: "Ukończone",
        description: "Specjalizacja w logistyce. Optymalizacja procesów, zarządzanie łańcuchem dostaw, systemy transportowe i magazynowe.",
        subjects: [
          "Supply Chain Management",
          "Systemy transportowe",
          "Optymalizacja procesów",
          "Logistyka międzynarodowa",
          "Lean Management"
        ]
      }
    },
    
    // Common UI labels
    ui_achievements_title: "Kluczowe osiągnięcia",
    ui_key_subjects_title: "Kluczowe przedmioty:",
    
    // EducationPage learning stats
    education_learning_stats: [
      { label: "Ukończone kursy online", value: "20+", icon: "fa-graduation-cap" },
      { label: "Godziny nauki rocznie", value: "200+", icon: "fa-clock" },
      { label: "Certyfikaty branżowe", value: "5", icon: "fa-certificate" },
      { label: "Księgi przeczytane", value: "25+", icon: "fa-book" }
    ],
    
    // EducationPage certifications
    education_certifications: [
      {
        name: "CKZ Transport osób i rzeczy (unijny)",
        issuer: "CKZ",
        date: "2016",
        valid: true,
        icon: "fa-bus"
      },
      {
        name: "Dyplom Inżyniera Zarządzania Procesami Logistycznymi",
        issuer: "Wyższa Szkoła Biznesu",
        date: "2021",
        valid: true,
        icon: "fa-graduation-cap"
      },
      {
        name: "Certyfikat Web Coders Full Stack Developer",
        issuer: "Web Coders",
        date: "2021",
        valid: true,
        icon: "fa-code"
      },
      {
        name: "Java Developer",
        issuer: "Web Coders",
        date: "2022",
        valid: true,
        icon: "fa-coffee"
      },
      {
        name: "Certyfikat Goethe-Institut B2 (Rozwój języka niemieckiego)",
        issuer: "Goethe-Institut",
        date: "2024",
        valid: true,
        icon: "fa-language"
      }
    ],
    
    // EducationPage technical skills
    education_technical_skills: [
      { 
        category: "Web Development", 
        skills: [
          { name: "React/Next.js", level: 80 },
          { name: "TypeScript", level: 75 },
          { name: "Node.js", level: 70 },
          { name: "CSS/Tailwind", level: 85 }
        ]
      },
      { 
        category: "Logistyka & Transport", 
        skills: [
          { name: "Planowanie tras", level: 95 },
          { name: "TMS Systems", level: 90 },
          { name: "GPS/Telemetria", level: 88 },
          { name: "Lean Management", level: 82 }
        ]
      },
      { 
        category: "Finanse & Analityka", 
        skills: [
          { name: "Excel Advanced", level: 95 },
          { name: "Power BI", level: 78 },
          { name: "SQL", level: 70 },
          { name: "Financial Modeling", level: 85 }
        ]
      },
      { 
        category: "Języki", 
        skills: [
          { name: "Polski", level: 100 },
          { name: "Niemiecki", level: 85 },
          { name: "Angielski", level: 80 }
        ]
      }
    ],
    
    // EducationPage continuous learning
    education_continuous_learning: {
      online_courses: {
        title: "Kursy online i szkolenia",
        items: [
          "Coursera - Machine Learning Specialization",
          "Udemy - Advanced React Development",
          "LinkedIn Learning - Leadership Skills",
          "YouTube Tech Channels - Daily Learning"
        ]
      },
      conferences: {
        title: "Konferencje i branżowe wydarzenia",
        items: [
          "TransLogistica 2023 - Kielce",
          "React Summit 2024",
          "Logistic Summit Poland",
          "AI in Business Conference"
        ]
      },
      projects: {
        title: "Własne projekty i eksperymenty",
        items: [
          "Transport route optimization AI",
          "Personal finance tracking app",
          "IoT sensors for fleet monitoring",
          "Blockchain supply chain prototype"
        ]
      },
      personal: {
        title: "Projekty osobiste i pasje",
        items: [
          "Rozwój własnej firmy transportowej",
          "Eksperymenty z Flipper Zero i IoT",
          "Automatyzacje n8n i Make do codziennych zadań",
          "Optymalizacja procesów logistycznych w praktyce",
          "Testy i użytkowanie samochodu Tesla (elektromobilność)"
        ]
      }
    },
    
    // Footer
    footer_quick_links: "Szybkie linki",
    footer_copyright: "© 2025 Mariusz Sokołowski. Wszystkie prawa zastrzeżone.",
    footer_cookie_policy: "Polityka Cookies",
    
    // NotFound page
    notfound_need_help: "Potrzebujesz pomocy?",
    notfound_contact_description: "Jeśli nadal masz problemy z nawigacją, skontaktuj się ze mną bezpośrednio.",
    notfound_contact_form: "Formularz kontaktowy"
  },
  
  de: {
    // Navigation
    nav_start: "Start",
    nav_about: "Über mich",
    nav_services: "Dienstleistungen",
    nav_experience: "Erfahrung", 
    nav_education: "Bildung",
    nav_tech: "Technologien",
    nav_contact: "Kontakt",
    restricted_title: "Geschützter Bereich",
    restricted_description_prefix: "Der Bereich",
    restricted_description_suffix: "ist nur nach einer sicheren Anmeldung mit einem Einmalcode verfügbar.",
    restricted_hint: "Nutze den Button unten, um zum sicheren Login zu wechseln und sofortigen Zugriff zu erhalten.",
    restricted_button: "Zum Login",
    restricted_back: "Zur Startseite",
    restricted_nav_hint: "Bereich nur für angemeldete Benutzer",
    restricted_cta_details: "Nach der Verifizierung erhältst du den vollen Zugriff auf Materialien, Kontakte und Zusatzinhalte.",
    restricted_benefit_insights: "Detaillierte Projektberichte und Einblicke hinter die Kulissen.",
    restricted_benefit_materials: "Premium-Materialien und aktuelle Kooperationsangebote.",
    restricted_benefit_direct: "Direkter Draht für Abstimmungen und individuelle Absprachen.",
    restricted_login_request_hint: "Gib deine E-Mail-Adresse ein, um einen einmaligen Login-Code zu erhalten.",
    restricted_login_verify_hint: "Gib den erhaltenen Code ein oder fordere bei Bedarf einen neuen an.",
    restricted_login_missing_fields: "Bitte gib deine E-Mail-Adresse an, um den Code zu erhalten.",
    restricted_login_phone_invalid: "Die angegebene Telefonnummer hat ein ungültiges Format.",
    restricted_login_code_sent: "Der Code wurde versendet. Bitte prüfe dein Postfach.",
    restricted_login_generic_error: "Die Anfrage konnte nicht verarbeitet werden. Versuche es erneut.",
    restricted_login_code_missing: "Bitte gib E-Mail-Adresse und Code ein, um dich anzumelden.",
    restricted_login_verify_error: "Der Code ist ungültig. Bitte versuche es erneut.",
    restricted_login_resend_hint: "Bitte gib deine E-Mail-Adresse an, um den Code erneut zu senden.",
    restricted_login_code_resent: "Wir haben den Login-Code erneut gesendet.",
    restricted_login_missing_email: "Bitte gib deine E-Mail-Adresse an, um den Code zu erhalten.",
    restricted_login_existing_token: "Du hast bereits einen aktiven Code, gültig bis {date}. Wir haben ihn erneut an deine E-Mail gesendet.",
    restricted_login_existing_token_no_date: "Du hast bereits einen aktiven Code. Wir haben ihn erneut an deine E-Mail gesendet.",
    restricted_login_code_sent_with_expiry: "Wir haben einen neuen Code gesendet. Er ist bis {date} gültig.",
    restricted_login_email_label: "E-Mail-Adresse",
    restricted_login_email_placeholder: "dein.name@example.com",
    restricted_login_email_hint: "An diese Adresse senden wir den Login-Code. Du kannst sie jederzeit korrigieren – das Feld bleibt ausgefüllt.",
    restricted_login_new_hint: "Bitte ergänze die erforderlichen Angaben, damit wir einen sicheren Zugang für dich erstellen können.",
    restricted_login_new_request_hint: "Zum ersten Mal hier? Fülle das kurze Formular aus, um deinen Startcode zu erhalten.",
    restricted_login_mode_label: "Login-Option auswählen",
    restricted_login_new_option: "Code für neue Nutzer anfordern",
    restricted_login_existing_option: "Code erneut anfordern",
    restricted_login_new_mode_hint: "Erstes Login? Gib Vor- und Nachnamen an, damit wir dein Konto anlegen und den Code senden können.",
    restricted_login_existing_mode_hint: "Du hast bereits ein Konto? Wir schicken den bestehenden Code erneut an deine E-Mail.",
    restricted_login_missing_details: "Bitte gib deinen Vor- und Nachnamen an, um ein Konto zu erstellen.",
    restricted_login_first_name_label: "Vorname",
    restricted_login_first_name_placeholder: "Max",
    restricted_login_last_name_label: "Nachname",
    restricted_login_last_name_placeholder: "Mustermann",
    restricted_login_phone_label: "Telefonnummer (optional)",
    restricted_login_phone_placeholder: "+41 79 123 45 67",
    restricted_login_company_label: "Firma (optional)",
    restricted_login_company_placeholder: "Firmen- oder Projektname",
    restricted_form_first_name: "Vorname",
    restricted_form_last_name: "Nachname",
    restricted_form_code_label: "Login-Code",
    restricted_form_login: "Anmelden",
    restricted_form_resend: "Code erneut senden",
    restricted_form_send_code: "Code senden",
    restricted_form_change_email: "E-Mail ändern",
    restricted_form_processing: "Anfrage wird verarbeitet...",
    restricted_login_section_intro: "Du möchtest den Bereich freischalten:",
    restricted_close_label: "Login-Fenster schließen",
    restricted_login_success: "Login erfolgreich. Der Code bleibt 24 Stunden gültig.",
    restricted_login_new_user_required:
      "Für diese E-Mail existiert noch kein Zugang. Wähle bitte \"Code für neue Nutzer anfordern\" und fülle das Formular aus, um ein Konto zu erstellen.",


    // Hero section
    hero_title: "Mariusz Sokołowski",
    hero_subtitle: "Transportunternehmer • Logistikingenieur • Finanzexperte • Technologie-Enthusiast",
    contact_btn: "Kontakt aufnehmen",
    services_btn: "Services ansehen",
    hero_tags: {
      transport: "Internationaler Transport",
      experience: "5+ Jahre in der Schweiz",
      education: "Logistikingenieur", 
      finance: "Finanzen und Rechnungswesen",
      tech: "Web Development"
    },
    
    // About section
    about_title: "Über mich",
    about_subtitle: "Ich verbinde traditionelle Herangehensweise an das Transportgeschäft mit modernem Wissen in Logistik, Finanzen und neuesten Technologien.",
    about_history_title: "Meine Geschichte",
    about_entrepreneur: "Unternehmer mit Leidenschaft für Exzellenz.",
    about_entrepreneur_desc: "Ich führe mein eigenes Transportunternehmen in Polen, das ich von Grund auf mit dem Fokus auf höchste Servicequalität und professionellen Kundenansatz aufgebaut habe.",
    about_international: "Internationale Erfahrung.",
    about_international_desc: "In den letzten 5 Jahren arbeite ich als CE-Fahrer in der Schweiz, wo ich wertvolle Erfahrungen im internationalen Transport sammle und von den Besten der Branche lerne.",
    about_development: "Kontinuierliche Entwicklung.",
    about_development_desc: "Ich bin Ingenieur für Logistikprozessmanagement und beende derzeit mein Masterstudium in Finanzen und Rechnungswesen. Diese Kombination aus Theorie und Praxis ermöglicht es mir, Prozesse zu optimieren und bessere Ergebnisse zu erzielen.",
    about_tech_enthusiast: "Technologie-Enthusiast.",
    about_tech_enthusiast_desc: "In meiner Freizeit erstelle ich fortschrittliche Websites, nutze KI in der täglichen Arbeit und interessiere mich für neueste Technologien. Ich fahre einen Tesla, was meinen innovativen Ansatz widerspiegelt.",
    about_achievements_title: "Wichtigste Erfolge",
    about_achievements: {
      business: "Eigenes Transportunternehmen - stabiles Wachstum",
      swiss_exp: "5+ Jahre Erfahrung in der Schweiz",
      engineer: "Abschluss als Logistikingenieur",
      master: "Masterstudium Finanzen (letztes Semester)",
      webdev: "Fortgeschrittene Web-Development-Projekte"
    },
    about_hobbies_title: "Leidenschaften und Hobbys",
    
    // Services section
    services_title: "Meine Dienstleistungen",
    services_subtitle: "Von Transport über Finanzen bis hin zu modernen IT-Lösungen - umfassende Dienstleistungen basierend auf langjähriger Erfahrung und kontinuierlicher Entwicklung.",
    
    // Experience section
    experience_title: "Berufserfahrung",
    experience_subtitle: "Langjährige Erfahrung in der Transport- und Logistikbranche in Polen und der Schweiz.",
    experience_summary: "Ich habe umfangreiche Erfahrung im Transportwesen - von der Führung meines eigenen Unternehmens über die Arbeit als Fahrer bei Coop und Fiege bis hin zur Teamleitung in Polen sowie der Abrechnung von Fahrern und der Abwicklung von Aufträgen. Ich bin eine Person, die viel von sich gibt, aber die Transportbranche bietet wenig Entwicklungsmöglichkeiten. Deshalb suche ich nach neuen Möglichkeiten in der Automatisierung, IT oder Finanzen, wo ich meine kontinuierliche Entwicklung fortsetzen kann.",
    experience_development_path: "Mein Entwicklungsweg",
    experience_cta_title: "Interessiert Sie meine Erfahrung?",
    experience_cta_subtitle: "Ich habe umfangreiche Erfahrung in verschiedenen Branchen und bin offen für neue Herausforderungen.",
    experience_see_services: "Dienstleistungen ansehen",
    experience_tab_timeline: "Timeline",
    experience_tab_skills: "Fähigkeiten",
    experience_tab_projects: "Projekte",
    
    // Education section
    education_title: "Bildung und Qualifikationen",
    education_subtitle: "Kontinuierliche Kompetenzentwicklung - von Logistikingenieurwesen bis hin zu Finanzen und neuesten Technologien.",
    
    // Tech section
    tech_title: "Technologien und Hobbys",
    tech_subtitle: "Leidenschaft für Technologie und Innovation - vom täglichen Tesla-Fahren bis zur Erkundung neuester technologischer Gadgets.",
    tech_tesla_title: "Tesla Owner",
    tech_tesla_subtitle: "Täglich unterwegs",
    tech_web_title: "Web Development",
    tech_web_subtitle: "Fortgeschrittene Projekte",
    tech_ai_title: "KI & Technologien",
    tech_ai_subtitle: "Tägliche Nutzung",
    
    // Contact section
    contact_title: "Kontaktieren Sie mich",
    contact_subtitle: "Bereit zur Zusammenarbeit? Schreiben Sie mir bezüglich Transportdienstleistungen, Logistikberatung oder Technologieprojekten.",
    contact_name: "Mariusz Sokołowski",
    contact_description: "Transportunternehmer",
    contact_role: "Logistikingenieur | Finanzen | Tech",
    phone_label: "Telefon",
    email_label: "E-Mail",
    location_label: "Standort", 
    availability: "7 Tage die Woche verfügbar",
    response_time: "Antwort innerhalb 24h",
    international_activity: "Internationale Tätigkeit",
    find_online: "Finden Sie mich online",
    form_title: "Nachricht senden",
    form_success: "Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.",
    form_error: "Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt.",
    send_message: "Nachricht senden",
    logout_btn: "Abmelden",
    
    // Contact page specific
    contact_page_title: "Kontakt",
    contact_page_subtitle: "Haben Sie ein Projekt? Eine Frage? Oder möchten Sie einfach über Technologie sprechen? Kontaktieren Sie mich - ich antworte schnell und professionell.",
    contact_form_title: "Nachricht senden",
    contact_form_subtitle: "Füllen Sie das untenstehende Formular aus, ich antworte innerhalb von",
    contact_info_title: "Kontaktinformationen",
    response_time_title: "Antwortzeit",
    response_time_subtitle: "Durchschnittliche Antwortzeiten nach Kategorien",
    tips_title: "Tipps",
    back_to_home: "Zurück zur Startseite",
    
    // Form fields
    name_label: "Vor- und Nachname",
    name_placeholder: "Max Mustermann",
    email_placeholder: "max.mustermann@example.com",
    phone_label_optional: "Telefon (optional)",
    phone_placeholder: "+41 xxx xxx xxx",
    company_label: "Unternehmen (optional)",
    company_placeholder: "Firmenname",
    category_label: "Anfragekategorie",
    category_placeholder: "Kategorie wählen",
    priority_label: "Priorität",
    subject_label: "Betreff",
    subject_placeholder: "Beschreiben Sie kurz das Thema Ihrer Anfrage",
    message_label: "Nachricht",
    message_placeholder: "Beschreiben Sie ausführlich Ihre Anfrage, Ihr Projekt oder Ihre Kooperationsvorschlag...",
    message_sent_success: "Nachricht wurde erfolgreich gesendet!",
    message_send_error: "Fehler beim Senden der Nachricht aufgetreten.",
    characters_count: "Zeichen",
    preferred_contact_label: "Bevorzugte Kontaktmethode",
    budget_label: "Budget (optional)",
    timeline_label: "Realisierungszeitraum (optional)",
    
    // Form categories
    category_general: "Allgemeine Anfrage",
    category_business: "Geschäftliche Zusammenarbeit",
    category_technical: "Technisches Projekt",
    category_collaboration: "Zusammenarbeit",
    category_recruitment: "Rekrutierung",
    
    // Form priorities
    priority_low: "Niedrig",
    priority_medium: "Mittel",
    priority_high: "Hoch",
    
    // Form options
    budget_not_specified: "Nicht angegeben",
    budget_under_5000: "Unter 5000 CHF",
    budget_5000_15000: "5000 - 15000 CHF",
    budget_15000_50000: "15000 - 50000 CHF",
    budget_over_50000: "Über 50000 CHF",
    timeline_not_specified: "Nicht angegeben",
    timeline_asap: "So schnell wie möglich",
    timeline_1month: "Innerhalb eines Monats",
    timeline_3months: "Innerhalb von 3 Monaten",
    timeline_6months: "Innerhalb von 6 Monaten",
    timeline_flexible: "Flexibler Zeitrahmen",
    
    // Contact preferences
    contact_email: "E-Mail",
    contact_phone: "Telefon",
    contact_both: "Beide Methoden",
    
    // GDPR
    gdpr_consent: "Ich stimme der Verarbeitung meiner personenbezogenen Daten durch Mariusz Sokołowski zur Beantwortung meiner Anfrage gemäß der Datenschutzrichtlinie zu.",
    marketing_consent: "Ich stimme dem Erhalt von Marketinginformationen über Dienstleistungen und Projekte zu (optional, Sie können sich jederzeit abmelden).",
    
    // Response times
    response_general: "24 Stunden",
    response_business: "12 Stunden",
    response_technical: "24-48 Stunden",
    response_collaboration: "12 Stunden",
    response_recruitment: "6-12 Stunden",
    
    // Tips
    tip_detailed_description: "Beschreiben Sie Ihr Projekt oder Ihre Frage ausführlich",
    tip_budget_timeline: "Geben Sie ein ungefähres Budget und den Realisierungszeitraum an",
    tip_existing_links: "Fügen Sie Links zu bestehenden Projekten/Websites hinzu",
    tip_urgent_call: "Bei dringenden Angelegenheiten - rufen Sie direkt an",
    
    // Form messages
    sending_message: "Wird gesendet...",
    response_time_note: "Ich antworte auf Ihre Nachricht innerhalb von",
    urgent_note: "Bei dringenden Projekten - rufen Sie direkt an.",
    
    // About page
    about_tab_story: "Meine Geschichte",
    about_tab_achievements: "Erfolge",
    about_tab_values: "Werte",
    about_achievement_business_desc: "Transportunternehmen mit stabilen Verträgen und wachsender Kundenbasis",
    about_achievement_swiss_desc: "Erfahrung im internationalen Transport in der anspruchsvollen Schweizer Umgebung",
    about_achievement_engineer_desc: "Abgeschlossenes Ingenieurstudium in Logistikprozessmanagement",
    about_achievement_master_desc: "Abschluss des Masterstudiums in Finanzen und Rechnungswesen in Arbeit",
    about_achievement_webdev_desc: "Eigenständige Web-Development-Projekte mit neuesten Technologien",
    about_value_professionalism: "Professionalität",
    about_value_professionalism_desc: "Hohe Standards in jedem Projekt",
    about_value_innovation: "Innovation",
    about_value_innovation_desc: "Offenheit für neue Technologien und Lösungen",
    about_value_precision: "Präzision",
    about_value_precision_desc: "Sorgfalt für jedes Detail",
    about_value_partnership: "Partnerschaft",
    about_value_partnership_desc: "Aufbau langfristiger Beziehungen",
    about_stat_years_switzerland: "Jahre in der Schweiz",
    about_stat_daily_km: "Km täglich",
    about_stat_languages: "Sprachen",
    about_stat_it_projects: "IT-Projekte",
    about_cta_title: "Bereit zur Zusammenarbeit?",
    about_cta_subtitle: "Kontaktieren Sie mich, um Ihre Bedürfnisse in Transport, Logistik oder Technologieprojekten zu besprechen.",
    about_key_subjects: "Schlüsselfächer:",
    
    // Services page
    services_pricing_title: "Preisliste für Beratungsdienstleistungen",
    services_pricing_subtitle: "Wählen Sie ein Paket, das zu Ihren Bedürfnissen passt",
    services_cta_title: "Sehen Sie nicht die richtige Dienstleistung?",
    services_cta_subtitle: "Kontaktieren Sie mich, um eine individuelle Lösung zu besprechen, die auf Ihre Bedürfnisse zugeschnitten ist.",
    services_webdev_info: "Web Development - einfache Info-Seite ab 499 CHF mit jährlichem Deployment!",
    services_cta_contact: "Kontakt aufnehmen",
    services_cta_about: "Lernen Sie mich besser kennen",
    services_learn_more: "Mehr erfahren",
    services_most_popular: "Beliebteste",
    services_choose_plan: "Plan wählen",
    services_contact_us: "Kontakt aufnehmen",
    
    // Services - Priority and Pricing
    services_priority_high: "PRIORITÄT",
    services_price_from: "ab",
    services_get_quote: "Angebot",
    services_tech_title: "IT & Technologien",
    services_tech_highlight: "Moderne Web-Lösungen und Automatisierung",
    services_finance_title: "Finanzen",
    services_finance_highlight: "Kostenoptimierung und Rentabilitätsanalyse",
    services_transport_title: "Transport",
    services_transport_highlight: "Internationaler Transport und Logistik",
    
    // Services - Promo Pricing
    services_webdev_promo_price: "499 CHF",
    services_promo_label: "AKTION",
    
    // Video Hero
    video_not_supported: "Ihr Browser unterstützt keine Videowiedergabe.",
    video_skip: "Überspringen",
    video_loading: "Video wird geladen...",
    video_buffering: "Puffern...",
    video_error: "Fehler beim Laden des Videos",
    video_retry: "Erneut versuchen",
    
    // Tech page specific
    tech_technologies_title: "Technologien",
    tech_technologies_subtitle: "Technologien, die ich kenne und in Projekten verwende",
    tech_projects_title: "Meine Projekte",
    tech_projects_subtitle: "GitHub-Projekte mit Beschreibung der verwendeten Technologien",
    tech_skill_level: "Level:",
    tech_skill_expert: "Experte",
    tech_skill_advanced: "Fortgeschritten", 
    tech_skill_intermediate: "Mittel",
    tech_skill_beginner: "Anfänger",
    tech_clear_filters: "Alle Filter löschen",
    tech_projects_using: "Projekte mit:",
    tech_no_projects: "Keine Projekte mit den ausgewählten Technologien",
    tech_try_other: "Versuchen Sie andere Technologien auszuwählen oder Filter zu löschen",
    tech_last_updated: "Letzte Aktualisierung:",
    tech_github: "GitHub",
    tech_demo: "Demo",
    tech_interested_cooperation: "Interessiert Sie eine Zusammenarbeit?",
    tech_experience_many: "Ich habe Erfahrung mit vielen Technologien und bin offen für neue Herausforderungen. Kontaktieren Sie mich!",
    tech_contact: "Kontakt aufnehmen",
    
    // Cookie Policy
    cookie_policy_title: "Cookie-Richtlinie",
    cookie_policy_subtitle: "Informationen zur Verwendung von Cookies auf der Website mariusz-sokolowski.ch",
    cookie_what_are: "Was sind Cookies?",
    cookie_what_are_desc: "Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, während Sie eine Website durchsuchen. Sie helfen der Website, sich an Informationen über Ihren Besuch zu erinnern, was Ihre nächsten Besuche erleichtern und die Website nützlicher machen kann.",
    cookie_types: "Arten von Cookies, die auf dieser Website verwendet werden",
    cookie_essential: "Notwendige Cookies",
    cookie_essential_desc: "Diese Cookies sind für das Funktionieren der Website unerlässlich und können nicht deaktiviert werden. Sie werden normalerweise nur als Reaktion auf Aktionen gesetzt, die Sie ausführen und die einer Anfrage nach Diensten entsprechen, wie z.B. das Festlegen von Datenschutzeinstellungen, Anmelden oder das Ausfüllen von Formularen.",
    cookie_analytics: "Analytische Cookies",
    cookie_analytics_desc: "Diese Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können. Sie helfen uns herauszufinden, welche Seiten am beliebtesten und am wenigsten beliebt sind, und zu sehen, wie sich Besucher auf der Website bewegen.",
    cookie_functional: "Funktionale Cookies",
    cookie_functional_desc: "Diese Cookies ermöglichen es der Website, sich an Ihre Auswahl zu erinnern (wie Ihren Benutzernamen, Sprache oder Region, in der Sie sich befinden) und bieten verbesserte, persönlichere Funktionen.",
    cookie_third_party: "Cookies von Drittanbietern",
    cookie_third_party_desc: "Diese Website kann Cookies von Drittanbietern wie Google Analytics enthalten, die uns helfen, die Nutzung unserer Website zu analysieren.",
    cookie_manage: "Cookie-Verwaltung",
    cookie_manage_desc: "Sie können Cookies nach eigenem Ermessen kontrollieren und/oder löschen. Sie können alle Cookies löschen, die bereits auf Ihrem Computer vorhanden sind, und Sie können die meisten Browser so einstellen, dass sie verhindern, dass sie platziert werden.",
    cookie_browser_settings: "Browser-Einstellungen",
    cookie_browser_settings_desc: "Die meisten Webbrowser akzeptieren Cookies automatisch, aber Sie können normalerweise die Browser-Einstellungen ändern, um Cookies abzulehnen, wenn Sie es vorziehen.",
    cookie_contact: "Kontakt",
    cookie_contact_desc: "Wenn Sie Fragen zu unserer Cookie-Richtlinie haben, kontaktieren Sie uns unter info@mariusz-sokolowski.ch",
    cookie_last_updated: "Letzte Aktualisierung",
    cookie_last_updated_date: "21. Oktober 2024",
    
    // Cookie Consent Banner
    cookie_banner_title: "Diese Website verwendet Cookies",
    cookie_banner_description: "Wir verwenden Cookies, um Ihre Erfahrungen auf der Website zu verbessern, den Verkehr zu analysieren und Inhalte zu personalisieren. Sie können Ihre Präferenzen jederzeit verwalten.",
    cookie_banner_accept_all: "Alle akzeptieren",
    cookie_banner_accept_necessary: "Nur notwendige",
    cookie_banner_customize: "Anpassen",
    cookie_banner_more_info: "Weitere Informationen",
    cookie_banner_settings: "Cookie-Einstellungen",
    cookie_banner_necessary_cookies: "Notwendige Cookies",
    cookie_banner_analytics_cookies: "Analytische Cookies",
    cookie_banner_functional_cookies: "Funktionale Cookies",
    cookie_banner_save_preferences: "Einstellungen speichern",
    cookie_banner_preferences_saved: "Ihre Einstellungen wurden gespeichert",
    
    // GitHub Projects
    project_portfolio_desc: "Portfolio-Website mit erweitertem Anmeldesystem, Mehrsprachigkeit und Git-Style Timeline der Erfahrung. Implementierung der automatischen Benutzerregistrierung und OTP-System.",
    project_transport_ai_desc: "KI-System zur Optimierung von Transportrouten mit GPS-Integration und Kostenprognose. Nutzt Machine Learning zur Analyse von Logistikdaten.",
    project_crypto_desc: "Anwendung zur Verfolgung von Kryptowährungsportfolios mit Echtzeitdaten von Börsen. WebSocket-Implementierung für Preisaktualisierungen und Gewinn-/Verlustanalyse.",
    project_automation_desc: "Satz von Tools zur Automatisierung von Geschäftsprozessen mit CRM-, ERP- und Buchhaltungssystem-Integration. Workflow-Builder mit Drag-and-Drop-Interface.",
    project_finance_desc: "Mobile Anwendung zur Verwaltung persönlicher Finanzen mit KI-gestützten Einblicken. Bankintegration über Open Banking API und Ausgabenanalyse.",
    
    // Git Timeline specific
    git_timeline_title: "Mein Karriereweg",
    git_view_oneline: "--oneline",
    git_view_detailed: "--detailed", 
    git_branch_all: "--all",
    git_branch_main: "main",
    git_branch_polska: "polska",
    git_branch_szwajcaria: "szwajcaria",
    git_current_position: "Aktuelle Position",
    git_showing_commits: "Zeige {count} Commit{plural} in {view} Ansicht",
    
    // Education page
    education_tab_formal: "Formale Bildung",
    education_tab_certifications: "Zertifikate",
    education_tab_skills: "Technische Fähigkeiten",
    education_tab_continuous: "Kontinuierliche Entwicklung",
    education_cta_title: "Suchen Sie einen Experten mit solider Ausbildung?",
    education_cta_subtitle: "Die Kombination aus technischer Ausbildung, praktischer Erfahrung und kontinuierlicher Entwicklung ist mein Wettbewerbsvorteil.",
    education_see_experience: "Erfahrung ansehen",
    education_cert_valid: "Aktuell",
    
    // Tech page
    tech_page_title: "Technologieprojekte",
    tech_page_subtitle: "Portfolio technologischer Projekte - von Webanwendungen über KI-Systeme bis hin zu Blockchain-Lösungen. Jedes Projekt ist eine Kombination aus Innovation, praktischer Anwendung und neuesten Technologien.",
    tech_view_grid: "Raster",
    tech_view_list: "Liste",
    tech_view_label: "Ansicht:",
    tech_back_to_home: "Zurück zur Startseite",
    tech_see_details: "Details ansehen",
    tech_code: "Code",
    tech_documentation: "Dokumentation",
    tech_project_description: "Projektbeschreibung",
    tech_technologies_used: "Verwendete Technologien",
    tech_key_features: "Schlüsselfunktionen",
    tech_achievements: "Erfolge",
    tech_see_demo: "Demo ansehen",
    tech_source_code: "Quellcode",
    tech_complexity_level: "Niveau:",
    tech_status_completed: "Abgeschlossen",
    tech_status_in_progress: "In Bearbeitung",
    tech_status_planned: "Geplant",
    tech_complexity_beginner: "Anfänger",
    tech_complexity_intermediate: "Mittelstufe",
    tech_complexity_advanced: "Fortgeschritten",
    tech_complexity_expert: "Experte",
    
    // HomePage specific
    homepage_overview_title: "Professionelle Transport- und Technologiedienstleistungen",
    homepage_services: {
      transport: "Transport",
      transport_desc: "Internationale Transportdienstleistungen",
      logistics: "Logistik",
      logistics_desc: "Optimierung logistischer Prozesse",
      education: "Bildung",
      education_desc: "Logistikingenieur + Masterstudium",
      technologies: "Technologien",
      technologies_desc: "Web-Entwicklung und KI-Lösungen",
      experience: "Erfahrung",
      experience_desc: "5+ Jahre in der Schweiz",
      contact: "Kontakt",
      contact_desc: "Kontaktieren Sie mich"
    },
    
    // ServicesPage specific
    services_categories: {
      transport: {
        title: "Internationaler Transport",
        services: {
          poland_switzerland: {
            title: "Transporte Polen - Schweiz",
            description: "Regelmäßige Fahrten mit pünktlichen Lieferungen",
            features: ["Cargo-Versicherung", "GPS-Tracking", "Door-to-Door-Lieferungen"]
          },
          europe: {
            title: "Transport in ganz Europa",
            description: "Breites Netzwerk europäischer Verbindungen",
            features: ["27 EU-Länder", "Zolldokumentation", "Express-Lieferung"]
          },
          ce_cargo: {
            title: "CE-Ladungsabwicklung",
            description: "Professionelle Abwicklung schwerer Fahrzeuge",
            features: ["Bis 40 Tonnen", "ADR-zertifiziert", "Sichere Beladung"]
          }
        }
      },
      logistics: {
        title: "Logistische Optimierung",
        services: {
          route_planning: {
            title: "Routenplanung",
            description: "Optimierung von Transportkosten und -zeit",
            features: ["GPS-Analyse", "Kraftstoffeinsparung", "Minimierung von Stillständen"]
          },
          process_analysis: {
            title: "Prozessanalyse",
            description: "Identifikation von Verbesserungsmöglichkeiten",
            features: ["Prozess-Mapping", "KPI-Monitoring", "Berichterstattung"]
          },
          consulting: {
            title: "Logistikberatung",
            description: "Umfassende Beratung im Bereich Logistik",
            features: ["Supply Chain", "Lagerdesign", "Kostenoptimierung"]
          }
        }
      },
      finance: {
        title: "Finanzmanagement",
        services: {
          cost_optimization: {
            title: "Kostenoptimierung",
            description: "Reduzierung der Betriebskosten",
            features: ["Kostenanalyse", "Budgetplanung", "ROI-Optimierung"]
          },
          profitability: {
            title: "Rentabilitätsanalyse",
            description: "Bewertung der Investitionseffizienz",
            features: ["P&L-Analyse", "Break-even-Punkt", "Cash Flow"]
          },
          budget_planning: {
            title: "Budgetplanung",
            description: "Strategische Finanzplanung",
            features: ["Prognose", "Risikobewertung", "Finanzmodellierung"]
          }
        }
      },
      tech: {
        title: "IT-Lösungen",
        services: {
          web_development: {
            title: "Website-Entwicklung",
            description: "Moderne, responsive Websites",
            features: ["React/Next.js", "Mobile-first", "SEO-optimiert"]
          },
          automation: {
            title: "Prozessautomatisierung",
            description: "Digitalisierung und Workflow-Optimierung",
            features: ["API-Integrationen", "Workflow-Automatisierung", "Datenverarbeitung"]
          },
          ai_integration: {
            title: "KI-Integration",
            description: "Implementierung von KI-Lösungen",
            features: ["Machine Learning", "Datenanalyse", "Vorhersagemodelle"]
          }
        }
      }
    },
    
    // ExperiencePage specific
    experience_data: {
      current_swiss: {
        title: "CE-Fahrer",
        period: "09.2022 – aktuell",
        company: "Coop Schweiz (Schafisheim, CH)",
        location: "Schweiz",
        description: "Warenverteilung in der Schweiz, Einhaltung der CH/EU-Vorschriften, Tachograph-Bedienung.",
        achievements: [
          "Lieferpünktlichkeit > 98%",
          "Sichere Fahrweise – keine Schäden",
          "Routenoptimierung in Bergbedingungen"
        ]
      },
      business_owner: {
        title: "Transportunternehmer",
        period: "01.2018 – aktuell",
        company: "Eigener Transport (PL–DE–CH)",
        location: "Polen / Deutschland / Schweiz",
        description: "Führung einer eigenen Tätigkeit im Bereich internationaler Transporte.",
        achievements: [
          "Zusammenarbeit mit DHL, Baltershwiller, OHL Cargo, Flex, Migolog",
          "Kosten- und Routenoptimierung",
          "Aufbau eines stabilen Kundenstamms"
        ]
      },
      fg_falke: {
        title: "Minderheitsgesellschafter – Consulting/Beratung",
        period: "12.2020 – aktuell",
        company: "FG Falke sp. z o.o.",
        location: "Polen",
        description: "Operative und finanzielle Beratung, Prozesse, IT-Projekte, Automatisierungen und AI-Integrationen.",
        achievements: [
          "Entwicklung von Consulting-Dienstleistungen",
          "Zusammenarbeit in der Transport/Logistik-Branche",
          "Implementierung neuer AI- und Automatisierungstechnologien"
        ]
      },
      early_driver: {
        title: "Stückgut-Fahrer",
        period: "2020 – 2022",
        company: "Fiege Logistik (Oftringen, CH)",
        location: "Schweiz",
        description: "Stückgutverteilung, Routenplanung, Kundenbetreuung.",
        achievements: [
          "Effiziente Abwicklung lokaler Lieferungen",
          "Einführung eines Sendungsscanningsystems",
          "Hohes Maß an Kundenzufriedenheit"
        ]
      }
    },
    
    // EducationPage specific
    education_data: {
      master: {
        title: "Masterstudium - Finanzen und Rechnungswesen",
        institution: "Hochschule für Wirtschaft in Dąbrowa Górnicza",
        period: "2023-2025",
        status: "In Bearbeitung - letztes Semester",
        description: "Vertiefung der Kenntnisse in Finanzmanagement, Wirtschaftsanalyse, Management Accounting und Controlling.",
        subjects: [
          "Erweiterte Finanzanalyse",
          "Strategisches Controlling",
          "Risikomanagement",
          "International Finance",
          "Corporate Governance"
        ]
      },
      engineer: {
        title: "Ingenieur für Logistikprozessmanagement",
        institution: "Hochschule für Wirtschaft in Dąbrowa Górnicza – Zweigstelle Krakau",
        period: "2018-2022",
        status: "Abgeschlossen",
        description: "Spezialisierung in Logistik. Prozessoptimierung, Supply Chain Management, Transport- und Lagersysteme.",
        subjects: [
          "Supply Chain Management",
          "Transportsysteme",
          "Prozessoptimierung",
          "Internationale Logistik",
          "Lean Management"
        ]
      }
    },
    
    // Common UI labels
    ui_achievements_title: "Wichtigste Erfolge",
    ui_key_subjects_title: "Schlüsselfächer:",
    
    // EducationPage learning stats
    education_learning_stats: [
      { label: "Abgeschlossene Online-Kurse", value: "20+", icon: "fa-graduation-cap" },
      { label: "Lernstunden pro Jahr", value: "200+", icon: "fa-clock" },
      { label: "Branchenzertifikate", value: "5", icon: "fa-certificate" },
      { label: "Gelesene Bücher", value: "25+", icon: "fa-book" }
    ],
    
    // EducationPage certifications
    education_certifications: [
      {
        name: "CKZ Transport von Personen und Gütern (EU)",
        issuer: "CKZ",
        date: "2016",
        valid: true,
        icon: "fa-bus"
      },
      {
        name: "Diplom Ingenieur für Logistikprozessmanagement",
        issuer: "Hochschule für Wirtschaft",
        date: "2021",
        valid: true,
        icon: "fa-graduation-cap"
      },
      {
        name: "Web Coders Full Stack Developer Zertifikat",
        issuer: "Web Coders",
        date: "2021",
        valid: true,
        icon: "fa-code"
      },
      {
        name: "Java Developer",
        issuer: "Web Coders",
        date: "2022",
        valid: true,
        icon: "fa-coffee"
      },
      {
        name: "Goethe-Institut B2 Zertifikat (Deutschsprachige Entwicklung)",
        issuer: "Goethe-Institut",
        date: "2024",
        valid: true,
        icon: "fa-language"
      }
    ],
    
    // EducationPage technical skills
    education_technical_skills: [
      { 
        category: "Web Development", 
        skills: [
          { name: "React/Next.js", level: 80 },
          { name: "TypeScript", level: 75 },
          { name: "Node.js", level: 70 },
          { name: "CSS/Tailwind", level: 85 }
        ]
      },
      { 
        category: "Logistik & Transport", 
        skills: [
          { name: "Routenplanung", level: 95 },
          { name: "TMS-Systeme", level: 90 },
          { name: "GPS/Telemetrie", level: 88 },
          { name: "Lean Management", level: 82 }
        ]
      },
      { 
        category: "Finanzen & Analytik", 
        skills: [
          { name: "Excel Advanced", level: 95 },
          { name: "Power BI", level: 78 },
          { name: "SQL", level: 70 },
          { name: "Financial Modeling", level: 85 }
        ]
      },
      { 
        category: "Sprachen", 
        skills: [
          { name: "Polnisch", level: 100 },
          { name: "Deutsch", level: 85 },
          { name: "Englisch", level: 80 }
        ]
      }
    ],
    
    // EducationPage continuous learning
    education_continuous_learning: {
      online_courses: {
        title: "Online-Kurse und Schulungen",
        items: [
          "Coursera - Machine Learning Specialization",
          "Udemy - Advanced React Development",
          "LinkedIn Learning - Leadership Skills",
          "YouTube Tech Channels - Daily Learning"
        ]
      },
      conferences: {
        title: "Konferenzen und Branchenveranstaltungen",
        items: [
          "TransLogistica 2023 - Kielce",
          "React Summit 2024",
          "Logistic Summit Poland",
          "AI in Business Conference"
        ]
      },
      projects: {
        title: "Eigene Projekte und Experimente",
        items: [
          "Transport route optimization AI",
          "Personal finance tracking app",
          "IoT sensors for fleet monitoring",
          "Blockchain supply chain prototype"
        ]
      },
      personal: {
        title: "Persönliche Projekte und Leidenschaften",
        items: [
          "Entwicklung des eigenen Transportunternehmens",
          "Experimente mit Flipper Zero und IoT",
          "n8n und Make Automatisierungen für tägliche Aufgaben",
          "Optimierung logistischer Prozesse in der Praxis",
          "Tests und Nutzung des Tesla-Autos (Elektromobilität)"
        ]
      }
    },
    
    // Footer
    footer_quick_links: "Schnelle Links",
    footer_copyright: "© 2025 Mariusz Sokołowski. Alle Rechte vorbehalten.",
    footer_cookie_policy: "Cookie-Richtlinie",
    
    // NotFound page
    notfound_need_help: "Brauchen Sie Hilfe?",
    notfound_contact_description: "Wenn Sie weiterhin Navigationsprobleme haben, kontaktieren Sie mich direkt.",
    notfound_contact_form: "Kontaktformular"
  }
};
