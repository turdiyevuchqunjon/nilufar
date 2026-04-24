export const siteData = {
  brand: 'SAOMED',
  doctorName: 'Профессор Нилюфар Хушвакова',
  subtitle: 'ЛОР-профессор международного уровня',
  summary:
    'Доктор медицинских наук, профессор и врач высшей категории. Основатель клиники SAOMED и инновационной лаборатории GENMEDICAL.',
  tagline: 'Лечим профессионально и с заботой',
  stats: [
    { value: '30+', label: 'лет опыта' },
    { value: '2018', label: 'запуск клиники SAOMED' },
    { value: '120+', label: 'видов анализов в GENMEDICAL' }
  ],
  highlights: [
    'Эндоскопическая диагностика и хирургия носа и околоносовых пазух',
    'FESS и реконструктивные операции',
    'Микрохирургия уха (отохирургия)',
    'Пластические и малоинвазивные операции гортани и глотки'
  ],
  experience: [
    'Стажировки и повышение квалификации в Корее, Италии, России, Казахстане и Азербайджане',
    'Участие в международных конгрессах CASOS и Eurasian ORL Assembly',
    'Современный персональный подход к диагностике, лечению и сопровождению пациентов'
  ],
  businesses: [
    {
      title: 'SAOMED Clinic',
      year: 'Основана в 2018',
      description:
        'Современная ЛОР-клиника в Самарканде, ориентированная на доступную, эффективную и безопасную медицинскую помощь.'
    },
    {
      title: 'GENMEDICAL',
      year: 'Запущена в 2022',
      description:
        'Инновационная молекулярно-генетическая лаборатория с более чем 120 видами исследований, включая раннюю диагностику наследственных заболеваний и онкорисков.'
    }
  ],
  contacts: {
    phone: '+998 95 507 00 39',
    location: 'Самарканд, ориентир: Atlas ro\'parasida, SAOMED klinikasi',
    instagram: 'https://www.instagram.com/professor_xushvakova/',
    telegram: 'https://t.me/PROF_XADMIN'
  },
  images: {
    logo: '/saomed-logo.png',
    hero: 'https://dr-xushvakova.uz/wp-content/uploads/2025/10/MAX05560-1-scaled-e1762368105543-768x542.jpg',
    portrait: 'https://dr-xushvakova.uz/wp-content/uploads/2025/10/DSC02921-683x1024.jpg',
    media: 'https://dr-xushvakova.uz/wp-content/uploads/2025/10/DSC05375-scaled.jpg',
    gallery: [
      'https://dr-xushvakova.uz/wp-content/uploads/2025/10/DSC02921-683x1024.jpg',
      'https://dr-xushvakova.uz/wp-content/uploads/2025/10/MAX05560-1-scaled-e1762368105543-768x542.jpg',
      'https://dr-xushvakova.uz/wp-content/uploads/2025/11/MAX05844-scaled-e1762403304187.jpg',
      'https://dr-xushvakova.uz/wp-content/uploads/2025/10/DSC05375-scaled.jpg'
    ]
  }
} as const;
