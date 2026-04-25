"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import {
  ArrowRight, CheckCircle2,
  HeartPulse, Microscope, Send, Phone, MapPin,
  Instagram, Facebook, ChevronDown, Plus
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';

// --- MA'LUMOTLAR BAZASI ---
const siteData = {
  doctorName: "Professor Nilufar Xushvakova",
  fullName: "Professor Khushvakova Nilufar Jurakulovna",
  titles: "Tibbiyot fanlari doktori • Professor • Oliy toifali shifokor. SAOMED klinikasi va GENMEDICAL innovatsion laboratoriyasi asoschisi.",
  bullets: [
    "Otolaringologiya sohasida 29 yildan ortiq tajriba",
"O'zbekiston va Markaziy Osiyodagi yetakchi mutaxassislardan biri",
  ],
  summary: "O'zbekiston va Markaziy Osiyodagi yetakchi otolaringologlardan biri. 29 yildan ortiq tajriba, 582 dan ortiq ilmiy ishlar va zamonaviy LOR jarrohligi bo'yicha ekspert.",
  stats: [
    { label: "Yillik tajriba", value: "29+" },
    { label: "Ilmiy nashrlar", value: "582" },
    { label: "Shogirdlar", value: "89" },
  ],
  achievements: [
    "582 dan ortiq ilmiy nashrlar, 4 ta darslik va 6 ta monografiya muallifi.",
    "8 ta patent va tibbiyot uchun 37 ta dasturiy ishlanma egasi.",
    "Eurasian Assembly of Otolaryngologists xalqaro a'zosi.",
    "Mustaqillikning 25 va 30 yilligi ko'krak nishonlari sohibasi."
  ],
  contacts: {
    phone: "+998 90 000 00 00",
    location: "Samarqand shahri, SAOMED klinikasi",
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    telegram: "https://t.me"
  }
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function PortfolioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#F5EEE2]">

      {/* ================= GLOBAL DEKORATIV ELEMENTLAR ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Chap tepadagi diagonal chiziqli aylana */}
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

        {/* Chap tepadan tushadigan ingichka egri chiziq */}
        <svg
          className="absolute left-0 top-0 h-[55%] w-[20%] opacity-50"
          viewBox="0 0 200 600"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
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

        {/* O'ng pastdagi to'lqinli pattern (orange waves) */}
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

        {/* O'ng tomondan tushuvchi ko'k egri chiziq */}
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

      {/* Kontent kontayneri */}
      <div className="relative z-10">

        {/* ================= HEADER ================= */}
        <header className="absolute top-0 left-0 right-0 z-50 px-6 py-8 md:px-12 md:py-10">
          <div className="mx-auto flex max-w-[1400px] items-center justify-between">

            {/* Logo */}
            <Link href="#top" className="flex items-center gap-4 group">
              <div className="relative flex h-16 w-16 items-center justify-center transition-transform group-hover:scale-105">
                {/* Yashil tibbiy plyus */}
                <svg viewBox="0 0 64 64" className="h-full w-full">
                  <path
                    d="M 22 6 L 42 6 Q 46 6 46 10 L 46 22 L 58 22 Q 62 22 62 26 L 62 38 Q 62 42 58 42 L 46 42 L 46 54 Q 46 58 42 58 L 22 58 Q 18 58 18 54 L 18 42 L 6 42 Q 2 42 2 38 L 2 26 Q 2 22 6 22 L 18 22 L 18 10 Q 18 6 22 6 Z"
                    fill="#3A6B62"
                  />
                </svg>
              </div>
              <div className="font-serif leading-tight">
                <div className="text-base font-semibold tracking-wide text-[#3A6B62] md:text-lg">DR. NILUFAR</div>
                <div className="text-base font-semibold tracking-wide text-[#3A6B62] md:text-lg">XUSHVAKOVA</div>
              </div>
            </Link>

            {/* Navigatsiya */}
            <nav className="hidden items-center gap-10 text-[15px] font-normal text-slate-700 md:flex">
              <Link href="#about" className="transition-colors hover:text-[#3A6B62]">Men haqimda</Link>
              <Link href="#achievements" className="transition-colors hover:text-[#3A6B62]">Natijalarim</Link>
              <Link href="#achievements" className="transition-colors hover:text-[#3A6B62]">Bog'lanish uchun</Link>
          
            </nav>

            {/* Ijtimoiy tarmoqlar */}
            <div className="flex items-center gap-3">
              <Link
                href={siteData.contacts.telegram}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5BA3DD] text-white shadow-sm transition-transform hover:scale-110"
              >
                <Send className="h-4 w-4" />
              </Link>
              <Link
                href={siteData.contacts.facebook}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white shadow-sm transition-transform hover:scale-110"
              >
                <Facebook className="h-4 w-4 fill-white" />
              </Link>
              <Link
                href={siteData.contacts.instagram}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-black text-white shadow-sm transition-transform hover:scale-110"
              >
                <Instagram className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </header>

        {/* ================= HERO SECTION ================= */}
        <section id="top" className="mx-auto max-w-[1400px] px-6 pt-36 pb-16 md:px-12 md:pt-44 md:pb-24 lg:pt-48">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">

            {/* Chap tomon — Matn */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="order-2 lg:order-1 lg:pl-8"
            >
              {/* Italik sarlavha */}
              <motion.h1
                variants={fadeInLeft}
                className="font-serif italic text-2xl font-normal tracking-wide text-slate-400 md:text-[28px] lg:text-[30px]"
              >
                {siteData.fullName}
              </motion.h1>

              {/* Tavsif paragraf */}
              <motion.p
                variants={fadeInLeft}
                className="mt-8 max-w-[520px] text-[17px] leading-[1.7] text-slate-700"
              >
                {siteData.titles}
              </motion.p>

              {/* Bullet pointlar - ko'k diamond ikonlari bilan */}
              <motion.ul variants={fadeInLeft} className="mt-8 space-y-3">
                {siteData.bullets.map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-[16px] text-slate-700">
                    {/* Diamond shaklidagi marker */}
                    <span className="mt-1.5 inline-block h-3 w-3 shrink-0 rotate-45 rounded-[2px] bg-gradient-to-br from-[#5BA3DD] to-[#3D7FB8]" />
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </motion.ul>

              {/* Make an appointment tugmasi */}
              <motion.div variants={fadeInLeft} className="mt-10">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-md bg-[#A4C156] px-12 py-4 text-[15px] font-medium text-white shadow-md transition-all duration-300 hover:bg-[#94B146] hover:shadow-lg active:scale-95"
                >
                 Murojaat qoldirish
                </Link>
              </motion.div>
            </motion.div>

            {/* O'ng tomon — Doctor rasmi (organik blob shaklida) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="relative order-1 lg:order-2"
            >
              {/* Blob shaklidagi rasm konteyneri */}
              <div className="relative mx-auto w-full max-w-[560px]">
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <clipPath id="blobShape" clipPathUnits="objectBoundingBox">
                      {/* Organik leaf-blob shape - chap yuqori sezilgan, o'ng pastda dumaloq */}
                      <path d="M 0.45,0.02
                               C 0.65,0.0 0.85,0.08 0.94,0.25
                               C 1.0,0.42 0.99,0.62 0.95,0.78
                               C 0.9,0.92 0.78,0.99 0.6,1.0
                               C 0.42,1.0 0.22,0.96 0.1,0.82
                               C 0.0,0.68 0.02,0.48 0.06,0.32
                               C 0.12,0.15 0.25,0.04 0.45,0.02 Z" />
                    </clipPath>
                  </defs>
                </svg>

                <div
                  className="relative aspect-[4/5] w-full overflow-hidden"
                  style={{ clipPath: 'url(#blobShape)' }}
                >
                  <Image
                    src="/her.jpg"
                    alt={siteData.doctorName}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ================= ABOUT ME — italik sarlavha ================= */}
        <section id="about" className="relative py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center font-serif italic text-3xl font-normal text-slate-700 md:text-4xl"
            >
             Biografiya
            </motion.h2>

            <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="relative w-full"
              >
                <div className="relative aspect-video w-full overflow-hidden rounded-[2rem] border-[6px] border-white shadow-xl bg-slate-100">
                  <iframe
                    className="h-full w-full"
                    src="https://www.youtube.com/embed/ReUjmTEiunw"
                    title="Professor Nilufar Xushvakova Intervyu"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="space-y-8"
              >
                <h3 className="font-serif text-3xl font-medium leading-tight text-[#3A6B62] md:text-4xl">
                  Ekspert darajasidagi tibbiy yondashuv
                </h3>
                <p className="text-[17px] leading-relaxed text-slate-700">
                  Men {siteData.doctorName} — tibbiyot fanlari doktori, professor.
                  Mening maqsadim — O'zbekistonda LOR kasalliklarini tashxislash va davolashda eng zamonaviy texnologiyalarni joriy etish hamda tibbiy xizmat sifatini xalqaro standartlarga ko'tarishdir.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  {siteData.stats.map((s) => (
                    <div key={s.label} className="rounded-2xl border border-[#E5DCC9] bg-white/70 p-4 text-center backdrop-blur-sm">
                      <p className="font-serif text-3xl font-bold text-[#3A6B62]">{s.value}</p>
                      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-slate-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= ACHIEVEMENTS / CERTIFICATES ================= */}
        <section id="achievements" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center font-serif italic text-3xl font-normal text-slate-700 md:text-4xl"
          >
           Ilmiy yutuqlar va malaka sertifikatlari
          </motion.h2>

          <div className="relative mt-16 overflow-hidden rounded-[2.5rem] border border-[#E5DCC9] bg-white/60 backdrop-blur-sm px-6 py-14 sm:px-12 md:py-16 lg:p-20 shadow-lg">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-5 md:grid-cols-2"
            >
              {siteData.achievements.map((text, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="flex items-start gap-4 rounded-2xl border border-[#E5DCC9] bg-[#FAF5EA] p-5 transition-colors hover:bg-white"
                >
                  <span className="mt-1 inline-block h-3 w-3 shrink-0 rotate-45 rounded-[2px] bg-gradient-to-br from-[#5BA3DD] to-[#3D7FB8]" />
                  <p className="text-[16px] leading-relaxed text-slate-700">{text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ================= CLINIC SECTION ================= */}
        <section id="clinic" className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center font-serif italic text-3xl font-normal text-slate-700 md:text-4xl"
            >
              Tibbiy Markazlar
            </motion.h2>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group rounded-[2rem] border border-[#E5DCC9] bg-white/70 backdrop-blur-sm p-10 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#3A6B62]/10 text-[#3A6B62] transition-colors group-hover:bg-[#3A6B62] group-hover:text-white">
                  <HeartPulse className="h-7 w-7" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-medium text-[#3A6B62]">SAOMED Klinikasi</h3>
                <p className="mb-6 leading-relaxed text-slate-600">
                  2018-yilda asos solingan. Endoskopik LOR jarrohligi va mikroxirurgiya bo'yicha mintaqadagi yetakchi klinika.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rotate-45 bg-[#5BA3DD]" /> FESS jarrohligi
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="inline-block h-2 w-2 rotate-45 bg-[#5BA3DD]" /> Quloq mikroxirurgiyasi
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="group rounded-[2rem] border border-[#E5DCC9] bg-white/70 backdrop-blur-sm p-10 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5BA3DD]/15 text-[#3D7FB8] transition-colors group-hover:bg-[#3D7FB8] group-hover:text-white">
                  <Microscope className="h-7 w-7" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-medium text-[#3A6B62]">GENMEDICAL</h3>
                <p className="mb-6 leading-relaxed text-slate-600">
                  Innovatsion molekulyar-genetik laboratoriya. 120 dan ortiq tahlillar, nasliy kasalliklar va saraton xavfini erta aniqlash.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ================= CONTACT ================= */}
        <section id="contact" className="mx-auto max-w-7xl px-6 py-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center font-serif italic text-3xl font-normal text-slate-700 md:text-4xl"
          >
            Bog'lanish
          </motion.h2>

          <div className="mt-16 grid gap-12 lg:grid-cols-[0.8fr_1.2fr] items-start">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-6"
            >
              <p className="text-[17px] text-slate-700 leading-relaxed">
                Sog'lig'ingizni ishonchli qo'llarga topshiring. Konsultatsiya uchun qabulga yoziling.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 rounded-2xl bg-white/70 backdrop-blur-sm p-4 border border-[#E5DCC9]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#3A6B62]/10 text-[#3A6B62]">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Telefon</p>
                    <p className="font-medium text-slate-800">{siteData.contacts.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 rounded-2xl bg-white/70 backdrop-blur-sm p-4 border border-[#E5DCC9]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5BA3DD]/15 text-[#3D7FB8]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Manzil</p>
                    <p className="font-medium text-slate-800">{siteData.contacts.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-[2rem] bg-white p-8 shadow-lg border border-[#E5DCC9] lg:p-10"
            >
              <ContactForm />
            </motion.div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="border-t border-[#E5DCC9] bg-white/40 backdrop-blur-sm py-10">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 md:flex-row">
            <div className="flex items-center gap-3">
              <Link
                href={siteData.contacts.telegram}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#5BA3DD] text-white transition-transform hover:scale-110"
              >
                <Send className="h-4 w-4" />
              </Link>
              <Link
                href={siteData.contacts.facebook}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1877F2] text-white transition-transform hover:scale-110"
              >
                <Facebook className="h-4 w-4 fill-white" />
              </Link>
              <Link
                href={siteData.contacts.instagram}
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-black text-white transition-transform hover:scale-110"
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