"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, Award, BookOpen, Users, Stethoscope,
  HeartPulse, Microscope, Send, Phone, MapPin, Calendar,
  Instagram, GraduationCap, FlaskConical, Dna, Star, Trophy,
  FileText, Globe, Quote
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

// --- TO'LIQ MA'LUMOTLAR BAZASI (PDF dan) ---
const siteData = {
  doctorName: "Professor Nilufar Xushvakova",
  fullName: "Professor Khushvakova Nilufar Jurakulovna",
  birthInfo: "5-fevral 1974-yil, Toshkent shahri",
  titles: "Tibbiyot fanlari doktori • Professor • Oliy toifali shifokor • Otorinolaringolog • Genetik. SamDTU 1-son Otorinolaringologiya kafedrasi mudiri, SAOMED klinikasi va GENMEDICAL innovatsion molekulyar-genetik laboratoriyasi asoschisi.",

  bullets: [
    "Otolaringologiya sohasida 29 yildan ortiq tajriba",
    "O'zbekiston va Markaziy Osiyodagi yetakchi mutaxassislardan biri",
    "Xalqaro daraja dagi professor — Eurasian Assembly of Otolaryngologists a'zosi",
  ],

  summary: "Samarqand davlat tibbiyot universiteti 1-son Otorinolaringologiya kafedrasi mudiri. 29 yildan ortiq tajriba, 582 dan ortiq ilmiy ishlar va zamonaviy LOR jarrohligi bo'yicha ekspert.",

  stats: [
    { label: "Yillik tajriba", value: "29+", icon: Calendar },
    { label: "Ilmiy nashrlar", value: "582", icon: FileText },
    { label: "Shogirdlar", value: "89", icon: Users },
    { label: "Patent va dasturlar", value: "45", icon: Award },
  ],

  scientificWorks: {
    textbooks: 4, manuals: 18, monographs: 6, methodologies: 78,
    programs: 37, scopus: 15, articles: 582, patents: 8,
  },

  students: {
    phd: 6, dsc: 1, masters: 21, residents: 61, olympiad: 4, total: 89,
  },

  achievements: [
    {
      title: "582+ ilmiy nashrlar",
      description: "4 ta darslik, 18 ta o'quv qo'llanma, 6 ta monografiya va 78 dan ortiq uslubiy qo'llanmalar muallifi",
      icon: BookOpen,
    },
    {
      title: "8 ta patent va 37 ta EHM dasturi",
      description: "Tibbiyot sohasidagi innovatsion ishlanmalar egasi",
      icon: Award,
    },
    {
      title: "Xalqaro a'zoliklar",
      description: "Eurasian Assembly of Otolaryngologists va Turkiy davlatlar otorinolaringologlari assotsiatsiyasi a'zosi",
      icon: Globe,
    },
    {
      title: "Davlat mukofotlari",
      description: "Mustaqillikning 25 va 30 yilligi ko'krak nishonlari, oltin nishon sohibasi",
      icon: Trophy,
    },
    {
      title: "Ilmiy maktab asoschisi",
      description: "89 nafar shogird tayyorlagan, jumladan 6 PhD va 1 DSc",
      icon: GraduationCap,
    },
    {
      title: "Davlat grantlari g'olibi",
      description: "4 ta ilmiy-amaliy va 2 ta innovatsion loyiha rahbari",
      icon: Star,
    },
  ],

  awards: [
    { year: "2016", title: "«O'zbekiston mustaqilligiga 25 yil» esdalik nishoni" },
    { year: "2017", title: "«Olima ayollar» tashkiloti a'zosi" },
    { year: "2019", title: "«Otorinolaringologlar Yevroosiyo assambleyasi a'zosi» ko'krak nishoni" },
    { year: "2021", title: "«O'zbekiston mustaqilligiga 30 yil» ko'krak nishoni" },
    { year: "2022", title: "«Turkiy davlatlar OTRL assotsiatsiyasi a'zosi» oltin nishoni (Boku, Ozarbayjon)" },
    { year: "2023", title: "CASOS-2023 oltin nishoni (Almata, Qozog'iston)" },
  ],

  clinics: [
    {
      name: "SAOMED",
      year: "2018",
      type: "Xususiy LOR klinikasi",
      description: "LOR a'zolari kasalliklarini eng zamonaviy endoskopik usullar bilan tashxislash va davolashga ixtisoslashgan klinika.",
      services: [
        "Barcha turdagi FESS jarrohlik muolajalari",
        "Endoskopik adenotomiya, septoplastika, vazotomiya",
        "Gaymorotomiya va polipotomiya",
        "Quloq mikroxirurgiyasi (otoxirurgiya)",
        "Tympanoplastika va rinoplastika",
        "Halqum va hiqildoq endoskopik kam invaziv jarrohligi",
        "LOR a'zolarining plastik jarrohligi",
      ],
      icon: HeartPulse,
      color: "from-emerald-500/10 to-teal-500/10",
      iconColor: "text-emerald-700",
      iconBg: "bg-emerald-100",
    },
    {
      name: "GENMEDICAL",
      year: "2022",
      type: "Innovatsion molekulyar-genetik laboratoriya",
      description: "Jahon standartlariga javob beradigan to'liq avtomatlashtirilgan zamonaviy laboratoriya. Davlat granti g'olibi.",
      services: [
        "128+ innovatsion laboratoriya tekshiruvlari",
        "28 turdagi genetik irsiy va xromosom kasalliklari",
        "Onkologik va gematologik kasalliklarni erta tashxislash",
        "Bepushtlik va homila tushishi tashxisi",
        "Neonatal skrining (48 ta kasallikka)",
        "NIPT (neoinvaziv prenatal test)",
        "To'ydan oldingi genetik tekshiruvlar",
      ],
      icon: Dna,
      color: "from-blue-500/10 to-indigo-500/10",
      iconColor: "text-blue-700",
      iconBg: "bg-blue-100",
    },
  ],

  partners: [
    "Genscreen (O'zbekiston)",
    "BGI (Xitoy)",
    "KFBIO Technology for Health (Xitoy)",
    "Micro Solutions (Qozog'iston)",
    "Hayot Technology (O'zbekiston)",
  ],

  quote: {
    text: "To'ydan oldingi genetik tekshiruvlar ko'plab xastaliklarning oldini olishga yordam beradi.",
    source: "Shifo-info gazetasi, №25 (999), 20.06.2024",
  },

  expertise: [
    { name: "Endoskopik LOR jarrohligi", level: 95 },
    { name: "Quloq mikroxirurgiyasi", level: 92 },
    { name: "Genetik tashxislash", level: 90 },
    { name: "Pediatrik otorinolaringologiya", level: 95 },
    { name: "Ilmiy tadqiqot", level: 98 },
  ],

  contacts: {
    phone: "+998 95 507-00-39",
    phone2: "+998 90 479-00-39",
    location: "Samarqand shahri, Buyuk Ipak yo'li ko'chasi, 67-«D» uy",
    locationNote: "«Atlas» savdo markazi va «Astor» mehmonxonasi ro'parasida",
    instagram: "https://www.instagram.com/professor_xushvakova/",
    instagramSaomed: "https://www.instagram.com/saomed_uz/",
    instagramGenmedical: "https://www.instagram.com/genmedical.uz",
    telegram: "https://t.me/Nilufar_Xushvakova",
    telegramSaomed: "https://t.me/saomed_uzb",
  },
};

// --- ANIMATSIYA VARIANTLARI ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function PortfolioPage() {
  const [activeClinic, setActiveClinic] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F5EEE2]">

      {/* GLOBAL DEKORATIV ELEMENTLAR */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-[2%] top-[22%] h-24 w-24 md:h-28 md:w-28"
        >
          <svg viewBox="0 0 100 100" className="h-full w-full">
            <defs>
              <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="6" height="6" patternTransform="rotate(-45)">
                <line x1="0" y1="0" x2="0" y2="6" stroke="#7BA7C2" strokeWidth="1.2" opacity="0.55" />
              </pattern>
            </defs>
            <circle cx="50" cy="50" r="48" fill="url(#diagonalLines)" />
          </svg>
        </motion.div>

        <svg
          className="absolute left-0 top-0 h-[55%] w-[20%] opacity-50"
          viewBox="0 0 200 600"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M 60,0 Q 200,150 100,280 T 80,580"
            fill="none"
            stroke="#A4B8C9"
            strokeWidth="1.2"
          />
        </svg>

        <div className="absolute right-[8%] bottom-[-2%] hidden h-48 w-48 md:block">
          <svg viewBox="0 0 200 200" className="h-full w-full">
            {[...Array(8)].map((_, i) => (
              <motion.path
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                transition={{ duration: 1, delay: 0.5 + i * 0.08 }}
                d={`M 20 ${60 + i * 12} Q 50 ${50 + i * 12}, 80 ${60 + i * 12} T 140 ${60 + i * 12} T 180 ${60 + i * 12}`}
                fill="none"
                stroke="#E8A87C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ))}
          </svg>
        </div>

        <svg
          className="absolute right-0 top-[40%] hidden h-[40%] w-[18%] opacity-60 md:block"
          viewBox="0 0 200 600"
          preserveAspectRatio="none"
        >
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.5, delay: 0.3, ease: "easeInOut" }}
            d="M 180,0 Q 60,200 140,400 T 100,600"
            fill="none"
            stroke="#7BA7C2"
            strokeWidth="1.4"
          />
        </svg>
      </div>

      <div className="relative z-10">

        {/* HEADER */}
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#F5EEE2]/95 backdrop-blur-md shadow-sm py-4"
            : "py-8 md:py-10"
        } px-6 md:px-12`}>
          <div className="mx-auto flex max-w-[1400px] items-center justify-between">
            <Link href="#top" className="flex items-center gap-4 group">
              <div className="relative flex h-14 w-14 md:h-16 md:w-16 items-center justify-center transition-transform group-hover:scale-105">
                <svg viewBox="0 0 64 64" className="h-full w-full">
                  <path
                    d="M 22 6 L 42 6 Q 46 6 46 10 L 46 22 L 58 22 Q 62 22 62 26 L 62 38 Q 62 42 58 42 L 46 42 L 46 54 Q 46 58 42 58 L 22 58 Q 18 58 18 54 L 18 42 L 6 42 Q 2 42 2 38 L 2 26 Q 2 22 6 22 L 18 22 L 18 10 Q 18 6 22 6 Z"
                    fill="#3A6B62"
                  />
                </svg>
              </div>
              <div className="font-serif leading-tight">
                <div className="text-sm md:text-lg font-semibold tracking-wide text-[#3A6B62]">DR. NILUFAR</div>
                <div className="text-sm md:text-lg font-semibold tracking-wide text-[#3A6B62]">XUSHVAKOVA</div>
              </div>
            </Link>

            <nav className="hidden items-center gap-8 text-[15px] font-normal text-slate-700 lg:flex">
              <Link href="#about" className="transition-colors hover:text-[#3A6B62]">Men haqimda</Link>
              <Link href="#expertise" className="transition-colors hover:text-[#3A6B62]">Mutaxassislik</Link>
              <Link href="#clinics" className="transition-colors hover:text-[#3A6B62]">Klinikalar</Link>
              <Link href="#achievements" className="transition-colors hover:text-[#3A6B62]">Yutuqlar</Link>
              <Link href="#contact" className="transition-colors hover:text-[#3A6B62]">Bog'lanish</Link>
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href={siteData.contacts.telegram}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5BA3DD] text-white shadow-sm transition-transform hover:scale-110"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </Link>
              <Link
                href={siteData.contacts.instagram}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-black text-white shadow-sm transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </header>

        {/* HERO SECTION */}
        <section id="top" className="mx-auto max-w-[1400px] px-6 pt-36 pb-16 md:px-12 md:pt-44 md:pb-24 lg:pt-48">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="order-2 lg:order-1 lg:pl-8"
            >
              <motion.div
                variants={fadeInLeft}
                className="inline-flex items-center gap-2 rounded-full border border-[#3A6B62]/20 bg-white/60 px-4 py-1.5 backdrop-blur-sm mb-6"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-[#3A6B62]">Qabulga yoziling</span>
              </motion.div>

              <motion.h1
                variants={fadeInLeft}
                className="font-serif italic text-2xl font-normal tracking-wide text-slate-400 md:text-[28px] lg:text-[30px]"
              >
                {siteData.fullName}
              </motion.h1>

              <motion.p
                variants={fadeInLeft}
                className="mt-8 max-w-[560px] text-[17px] leading-[1.7] text-slate-700"
              >
                {siteData.titles}
              </motion.p>

              <motion.ul variants={fadeInLeft} className="mt-8 space-y-3">
                {siteData.bullets.map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px] text-slate-700">
                    <span className="mt-1.5 inline-block h-3 w-3 shrink-0 rotate-45 rounded-[2px] bg-gradient-to-br from-[#5BA3DD] to-[#3D7FB8]" />
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeInLeft} className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#A4C156] px-10 py-4 text-[15px] font-medium text-white shadow-md transition-all duration-300 hover:bg-[#94B146] hover:shadow-lg hover:gap-3 active:scale-95"
                >
                  Murojaat qoldirish
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#about"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-[#3A6B62]/30 bg-white/50 px-10 py-4 text-[15px] font-medium text-[#3A6B62] backdrop-blur-sm transition-all duration-300 hover:bg-white"
                >
                  Batafsil
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative order-1 lg:order-2"
            >
              <div className="relative w-full max-w-[600px] mx-auto bg-[#FBF3EC] p-8">
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <clipPath id="blobShape" clipPathUnits="objectBoundingBox">
                      <path d="M0.5,0.02 C0.7,0.02 0.88,0.12 0.95,0.3 C1,0.45 0.97,0.65 0.88,0.8 C0.78,0.95 0.62,0.99 0.45,0.97 C0.28,0.95 0.12,0.85 0.05,0.68 C0,0.5 0.03,0.3 0.15,0.16 C0.27,0.05 0.4,0.02 0.5,0.02 Z" />
                    </clipPath>
                  </defs>
                </svg>

                <div className="absolute bottom-20 left-2 w-3 h-3 rounded-full bg-purple-400" />
                <div className="absolute top-12 right-8 w-2 h-2 rounded-full bg-[#E8A87C]" />

                <div
                  className="relative aspect-[4/5] w-full overflow-hidden"
                  style={{ clipPath: 'url(#blobShape)' }}
                >
                  <Image
                    src="/her.jpg"
                    alt="Professor Nilufar Xushvakova"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                  className="absolute -bottom-4 -left-4 hidden md:block rounded-2xl border border-[#E5DCC9] bg-white/90 backdrop-blur-md p-4 shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3A6B62]/10">
                      <Award className="h-5 w-5 text-[#3A6B62]" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Tibbiyot fanlari</p>
                      <p className="text-sm font-semibold text-[#3A6B62]">DOKTORI (DSc)</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -top-4 -right-4 hidden md:block rounded-2xl border border-[#E5DCC9] bg-white/90 backdrop-blur-md p-4 shadow-xl"
                >
                  <div className="text-center">
                    <p className="font-serif text-2xl font-bold text-[#3A6B62]">582+</p>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Ilmiy ish</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS BANNER */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {siteData.stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={scaleIn}
                  className="group relative rounded-2xl border border-[#E5DCC9] bg-white/60 backdrop-blur-sm p-6 text-center transition-all hover:bg-white hover:shadow-lg hover:-translate-y-1"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#3A6B62]/10 text-[#3A6B62] transition-colors group-hover:bg-[#3A6B62] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="font-serif text-3xl md:text-4xl font-bold text-[#3A6B62]">{stat.value}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-slate-500">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </section>

        {/* ABOUT ME */}
        <section id="about" className="relative py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#3A6B62] mb-3">
                Tarjimai hol
              </span>
              <h2 className="font-serif italic text-3xl font-normal text-slate-700 md:text-4xl">
                Biografiya
              </h2>
            </motion.div>

            <div className="grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
                className="relative w-full"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border-[6px] border-white shadow-xl bg-slate-100">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/ReUjmTEiunw"
                    title="Professor Nilufar Xushvakova Intervyu"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute -bottom-8 -right-4 max-w-xs rounded-2xl bg-[#3A6B62] p-6 text-white shadow-xl"
                >
                  <Quote className="h-8 w-8 text-white/40 mb-2" />
                  <p className="text-sm leading-relaxed italic">
                    "{siteData.quote.text}"
                  </p>
                  <p className="mt-3 text-xs text-white/70">— {siteData.quote.source}</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                className="space-y-6"
              >
                <h3 className="font-serif text-3xl font-medium leading-tight text-[#3A6B62] md:text-4xl">
                  Ekspert darajasidagi tibbiy yondashuv
                </h3>

                <div className="space-y-4 text-[16px] leading-relaxed text-slate-700">
                  <p>
                    Men <strong className="text-[#3A6B62]">{siteData.doctorName}</strong> — tibbiyot fanlari doktori, professor.
                    {' '}{siteData.birthInfo}da tug'ilganman. 1996-yilda Samarqand davlat tibbiyot institutini imtiyozli tamomlaganman.
                  </p>
                  <p>
                    2010-yildan SamDTU Otorinolaringologiya kafedrasi mudiri lavozimida ishlab kelyapman.
                    2016-yilda doktorlik dissertatsiyasini "Bolalardagi sindromal bo'lmagan neyrosensor karlikning klinik va molekulyar-genetik aspektlari" mavzusida himoya qilganman.
                  </p>
                  <p>
                    Mening maqsadim — O'zbekistonda LOR kasalliklarini tashxislash va davolashda eng zamonaviy texnologiyalarni joriy etish hamda tibbiy xizmat sifatini xalqaro standartlarga ko'tarishdir.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4">
                  <div className="rounded-xl bg-white/70 backdrop-blur-sm border border-[#E5DCC9] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Ixtisoslik</p>
                    <p className="mt-1 text-sm font-medium text-[#3A6B62]">Otorinolaringolog • Genetik</p>
                  </div>
                  <div className="rounded-xl bg-white/70 backdrop-blur-sm border border-[#E5DCC9] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Toifa</p>
                    <p className="mt-1 text-sm font-medium text-[#3A6B62]">Oliy toifali shifokor</p>
                  </div>
                  <div className="rounded-xl bg-white/70 backdrop-blur-sm border border-[#E5DCC9] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Ilmiy daraja</p>
                    <p className="mt-1 text-sm font-medium text-[#3A6B62]">DSc, Professor</p>
                  </div>
                  <div className="rounded-xl bg-white/70 backdrop-blur-sm border border-[#E5DCC9] p-4">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">Tajriba</p>
                    <p className="mt-1 text-sm font-medium text-[#3A6B62]">29+ yil</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* EXPERTISE */}
        <section id="expertise" className="py-20 bg-gradient-to-b from-transparent via-white/30 to-transparent">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#3A6B62] mb-3">
                Mutaxassislik
              </span>
              <h2 className="font-serif italic text-3xl font-normal text-slate-700 md:text-4xl">
                Faoliyat yo'nalishlari
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-600">
                28 yildan ortiq ilmiy-pedagogik faoliyat davomida shakllangan ekspertlik sohalari
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="space-y-5"
              >
                {siteData.expertise.map((skill) => (
                  <motion.div key={skill.name} variants={fadeInUp}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-700">{skill.name}</span>
                      <span className="text-sm font-semibold text-[#3A6B62]">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-[#E5DCC9] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-to-r from-[#3A6B62] to-[#5BA3DD]"
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                className="grid grid-cols-2 gap-4"
              >
                <div className="rounded-2xl bg-gradient-to-br from-[#3A6B62] to-[#2A5B52] p-6 text-white">
                  <Stethoscope className="h-8 w-8 mb-3 opacity-80" />
                  <p className="font-serif text-3xl font-bold">29+</p>
                  <p className="text-sm text-white/80 mt-1">Yillik klinik tajriba</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-[#5BA3DD] to-[#3D7FB8] p-6 text-white">
                  <FlaskConical className="h-8 w-8 mb-3 opacity-80" />
                  <p className="font-serif text-3xl font-bold">128+</p>
                  <p className="text-sm text-white/80 mt-1">Laboratoriya tekshiruvlari</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-[#A4C156] to-[#94B146] p-6 text-white">
                  <Users className="h-8 w-8 mb-3 opacity-80" />
                  <p className="font-serif text-3xl font-bold">{siteData.students.total}</p>
                  <p className="text-sm text-white/80 mt-1">Tarbiyalangan shogirdlar</p>
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-[#E8A87C] to-[#D08C5C] p-6 text-white">
                  <BookOpen className="h-8 w-8 mb-3 opacity-80" />
                  <p className="font-serif text-3xl font-bold">{siteData.scientificWorks.scopus}</p>
                  <p className="text-sm text-white/80 mt-1">SCOPUS maqolalar</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CLINICS SECTION */}
        <section id="clinics" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#3A6B62] mb-3">
                Tibbiy markazlar
              </span>
              <h2 className="font-serif italic text-3xl font-normal text-slate-700 md:text-4xl">
                Klinikalarimiz
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-600">
                Samarqand shahrida joylashgan zamonaviy tibbiyot markazlari
              </p>
            </motion.div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {siteData.clinics.map((clinic, idx) => (
                <button
                  key={clinic.name}
                  onClick={() => setActiveClinic(idx)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                    activeClinic === idx
                      ? "bg-[#3A6B62] text-white shadow-lg"
                      : "bg-white/70 text-slate-700 border border-[#E5DCC9] hover:bg-white"
                  }`}
                >
                  {clinic.name}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeClinic}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-10 items-start"
              >
                <div className={`rounded-[2rem] border border-[#E5DCC9] bg-gradient-to-br ${siteData.clinics[activeClinic].color} backdrop-blur-sm p-10 shadow-md`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${siteData.clinics[activeClinic].iconBg} ${siteData.clinics[activeClinic].iconColor}`}>
                      {(() => {
                        const Icon = siteData.clinics[activeClinic].icon;
                        return <Icon className="h-8 w-8" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="font-serif text-3xl font-medium text-[#3A6B62]">
                        {siteData.clinics[activeClinic].name}
                      </h3>
                      <p className="text-sm text-slate-600 mt-1">
                        {siteData.clinics[activeClinic].type} • {siteData.clinics[activeClinic].year}-yildan
                      </p>
                    </div>
                  </div>

                  <p className="text-[16px] leading-relaxed text-slate-700 mb-6">
                    {siteData.clinics[activeClinic].description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-[#E5DCC9]">
                    <Link
                      href={`tel:${siteData.contacts.phone.replace(/\s/g, "")}`}
                      className="inline-flex items-center gap-2 rounded-md bg-[#3A6B62] px-6 py-3 text-sm font-medium text-white hover:bg-[#2A5B52] transition-colors"
                    >
                      <Phone className="h-4 w-4" />
                      Aloqa
                    </Link>
                    <Link
                      href={
                        siteData.clinics[activeClinic].name === "SAOMED"
                          ? siteData.contacts.instagramSaomed
                          : siteData.contacts.instagramGenmedical
                      }
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-md border border-[#3A6B62]/30 bg-white/50 px-6 py-3 text-sm font-medium text-[#3A6B62] hover:bg-white transition-colors"
                    >
                      <Instagram className="h-4 w-4" />
                      Instagram
                    </Link>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-serif text-xl font-medium text-[#3A6B62] mb-4">
                    Xizmatlar va imkoniyatlar:
                  </h4>
                  {siteData.clinics[activeClinic].services.map((service, i) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 rounded-xl bg-white/70 backdrop-blur-sm border border-[#E5DCC9] p-4"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#A4C156] shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700">{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Partners */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-16 rounded-[2rem] border border-[#E5DCC9] bg-white/40 backdrop-blur-sm p-8"
            >
              <h4 className="text-center font-serif text-xl font-medium text-[#3A6B62] mb-6">
                Xalqaro hamkorlar
              </h4>
              <div className="flex flex-wrap justify-center gap-3">
                {siteData.partners.map((partner) => (
                  <span
                    key={partner}
                    className="px-4 py-2 rounded-full bg-white border border-[#E5DCC9] text-sm text-slate-700"
                  >
                    {partner}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section id="achievements" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#3A6B62] mb-3">
                Yutuqlar va e'tirof
              </span>
              <h2 className="font-serif italic text-3xl font-normal text-slate-700 md:text-4xl">
                Ilmiy yutuqlar va malaka sertifikatlari
              </h2>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
            >
              {siteData.achievements.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    className="group rounded-2xl border border-[#E5DCC9] bg-white/70 backdrop-blur-sm p-6 transition-all hover:bg-white hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#3A6B62]/10 text-[#3A6B62] transition-colors group-hover:bg-[#3A6B62] group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="font-serif text-lg font-medium text-[#3A6B62] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="mt-16 rounded-[2rem] border border-[#E5DCC9] bg-white/60 backdrop-blur-sm p-8 md:p-12"
            >
              <h3 className="font-serif text-2xl font-medium text-[#3A6B62] mb-8 text-center">
                Davlat mukofotlari
              </h3>
              <div className="space-y-4">
                {siteData.awards.map((award, i) => (
                  <motion.div
                    key={award.year + i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/50 transition-colors"
                  >
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#E8A87C] to-[#D08C5C] text-white font-serif font-bold">
                      {award.year}
                    </div>
                    <p className="text-slate-700">{award.title}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* STUDENTS */}
        <section className="py-20 bg-gradient-to-b from-transparent via-white/30 to-transparent">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#3A6B62] mb-3">
                Ilmiy maktab
              </span>
              <h2 className="font-serif italic text-3xl font-normal text-slate-700 md:text-4xl">
                Tarbiyalangan shogirdlar
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { value: siteData.students.phd, label: "Falsafa doktori (PhD)", color: "from-[#3A6B62] to-[#2A5B52]" },
                { value: siteData.students.dsc, label: "Fan doktori (DSc)", color: "from-[#5BA3DD] to-[#3D7FB8]" },
                { value: siteData.students.masters, label: "Magistrlar", color: "from-[#A4C156] to-[#94B146]" },
                { value: siteData.students.residents, label: "Klinik ordinatorlar", color: "from-[#E8A87C] to-[#D08C5C]" },
                { value: siteData.students.olympiad, label: "Xalqaro olimpiada g'oliblari", color: "from-purple-500 to-purple-600" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`rounded-2xl bg-gradient-to-br ${item.color} p-6 text-white text-center shadow-lg`}
                >
                  <p className="font-serif text-4xl font-bold mb-2">{item.value}</p>
                  <p className="text-xs text-white/90">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-[#3A6B62] mb-3">
                Bog'lanish
              </span>
              <h2 className="font-serif italic text-3xl font-normal text-slate-700 md:text-4xl">
                Qabulga yozilish
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-slate-600">
                Sog'ligingizni ishonchli qo'llarga topshiring
              </p>
            </motion.div>

            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInLeft}
                className="space-y-6"
              >
                <p className="text-[17px] text-slate-700 leading-relaxed">
                  Konsultatsiya, jarrohlik muolajalar va genetik tekshiruvlar uchun bog'laning.
                </p>

                <div className="space-y-4">
                  <a
                    href={`tel:${siteData.contacts.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 rounded-2xl bg-white/70 backdrop-blur-sm p-4 border border-[#E5DCC9] transition-all hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3A6B62]/10 text-[#3A6B62]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Asosiy telefon</p>
                      <p className="font-medium text-slate-800">{siteData.contacts.phone}</p>
                    </div>
                  </a>

                  <a
                    href={`tel:${siteData.contacts.phone2.replace(/\s/g, "")}`}
                    className="flex items-center gap-4 rounded-2xl bg-white/70 backdrop-blur-sm p-4 border border-[#E5DCC9] transition-all hover:bg-white hover:shadow-md"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5BA3DD]/15 text-[#3D7FB8]">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Qo'shimcha</p>
                      <p className="font-medium text-slate-800">{siteData.contacts.phone2}</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 rounded-2xl bg-white/70 backdrop-blur-sm p-4 border border-[#E5DCC9]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#A4C156]/15 text-[#A4C156]">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Manzil</p>
                      <p className="font-medium text-slate-800">{siteData.contacts.location}</p>
                      <p className="text-xs text-slate-500 mt-1">{siteData.contacts.locationNote}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Link
                    href={siteData.contacts.telegram}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-[#5BA3DD] px-4 py-3 text-sm font-medium text-white hover:bg-[#4A93CD] transition-colors"
                  >
                    <Send className="h-4 w-4" />
                    Telegram
                  </Link>
                  <Link
                    href={siteData.contacts.instagram}
                    target="_blank"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 px-4 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInRight}
                className="rounded-[2rem] bg-white p-8 shadow-lg border border-[#E5DCC9] lg:p-10"
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-[#E5DCC9] bg-white/40 backdrop-blur-sm py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
            <div className="flex items-center gap-3">
              <Link
                href={siteData.contacts.telegram}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5BA3DD] text-white transition-transform hover:scale-110"
                aria-label="Telegram"
              >
                <Send className="h-4 w-4" />
              </Link>
              <Link
                href={siteData.contacts.instagram}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-black text-white transition-transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
            <p className="text-center text-xs font-medium tracking-wide text-slate-500 sm:text-sm">
              © {new Date().getFullYear()} PROFESSOR N. XUSHVAKOVA. BARCHA HUQUQLAR HIMOYALANGAN.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}

