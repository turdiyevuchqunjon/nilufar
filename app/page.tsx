'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  HeartPulse,
  Instagram,
  MapPin,
  Microscope,
  Phone,
  MessageCircle,
  Sparkles,
  Stethoscope,
  Send
} from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { siteData } from '@/lib/site-data';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      {/* Orqa fon effektlari */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[760px]">
        <div className="animated-blob left-[5%] top-20 h-56 w-56 bg-brand-light" />
        <div className="animated-blob right-[10%] top-40 h-72 w-72 bg-brand/40" />
        <div className="animated-blob left-[35%] top-10 h-48 w-48 bg-brand-mint/40" />
      </div>

      <header className="section-shell sticky top-0 z-40 pt-4">
        <div className="glass-card flex items-center justify-between rounded-full border border-white/60 px-4 py-3 shadow-lg shadow-brand/5">
          <Link href="#top" className="flex items-center gap-3">
            <Image src={siteData.images.logo} alt={siteData.brand} width={48} height={48} className="rounded-full" />
            <div>
              <p className="font-extrabold tracking-[0.22em] text-brand-dark">SAOMED</p>
              <p className="text-xs text-slate-500">Tibbiy portfoliо</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <Link href="#about">Shifokor haqida</Link>
            <Link href="#services">Xizmatlar</Link>
            <Link href="#business">Biznes</Link>
            <Link href="#gallery">Galereya</Link>
            <Link href="#contact">Kontaktlar</Link>
          </nav>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Qabulga yozilish <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section id="top" className="section-shell pb-20 pt-10 sm:pt-14 lg:pb-28 lg:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-dark shadow-lg shadow-brand/5">
              <Sparkles className="h-4 w-4" />
              Premium tibbiy brend
            </div>

            <h1 className="mt-6 max-w-3xl font-[var(--font-manrope)] text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
              <span className="text-brand-dark">{siteData.doctorName}</span> ning shaxsiy sahifasi
            </h1>

            <p className="mt-6 max-w-2xl text-balance text-lg leading-8 text-slate-600">
              {siteData.subtitle}. {siteData.summary} Sayt shifokorning shaxsiy brendi, premium tibbiy uslub va Telegram orqali qulay navbatga yozilish tizimini o'z ichiga oladi.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
              >
                Murojaat qoldirish <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={siteData.contacts.instagram}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand-dark"
              >
                <Instagram className="h-4 w-4" /> Instagram
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {siteData.stats.map((item) => (
                <div key={item.label} className="glass-card rounded-3xl p-5 shadow-lg shadow-brand/5">
                  <p className="text-3xl font-extrabold text-brand-dark">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-600">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="glass-card relative overflow-hidden rounded-[40px] border border-white/70 p-4 shadow-glow">
              <div className="absolute inset-x-4 top-4 z-10 flex items-center justify-between rounded-full bg-slate-950/75 px-4 py-2 text-xs text-white backdrop-blur-xl">
                <span>{siteData.tagline}</span>
                <span className="rounded-full bg-emerald-400/20 px-2 py-1 text-emerald-200">online</span>
              </div>

              <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-brand/10 via-white to-brand-light/20">
                <Image
                  src={siteData.images.hero}
                  alt={siteData.doctorName}
                  width={768}
                  height={542}
                  priority
                  className="h-full min-h-[460px] w-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-shell py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <div className="glass-card overflow-hidden rounded-[32px] p-4 shadow-glow">
              <Image
                src={siteData.images.portrait}
                alt="Shifokor portreti"
                width={683}
                height={1024}
                className="h-full w-full rounded-[26px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.55 }}
            className="glass-card rounded-[32px] p-8 shadow-lg shadow-brand/5"
          >
            <div className="flex items-center gap-3 text-brand-dark">
              <Stethoscope className="h-6 w-6" />
              <p className="text-sm font-semibold uppercase tracking-[0.25em]">Shifokor haqida</p>
            </div>

            <h2 className="mt-5 font-[var(--font-manrope)] text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Ekspert darajasidagi tibbiy yondashuv
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              {siteData.doctorName} — tibbiyot fanlari doktori, professor va oliy toifali shifokor. Saytning shaxsiy brendi ekspertlik, ishonch va zamonaviy LOR amaliyotiga asoslangan.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {siteData.experience.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200/80 bg-white p-4">
                  <CheckCircle2 className="h-5 w-5 text-brand" />
                  <p className="mt-3 text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-shell py-12 lg:py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-dark">Xizmatlar</p>
            <h2 className="mt-4 font-[var(--font-manrope)] text-3xl font-extrabold text-slate-950 sm:text-4xl">
              LOR yordamining asosiy yo'nalishlari
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Ushbu bo'lim premium tibbiy portfoliо ko'rinishida shakllantirilgan: aniq tuzilma, yumshoq animatsiyalar va ekspertlikka urg'u berilgan.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteData.highlights.map((item, index) => {
              const icons = [HeartPulse, Microscope, Award, Building2];
              const Icon = icons[index % icons.length];
              return (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.08 }}
                  className="glass-card rounded-[28px] p-6 shadow-lg shadow-brand/5"
                >
                  <div className="inline-flex rounded-2xl bg-brand/10 p-3 text-brand-dark">
                    <Icon className="h-6 w-6" />
                  </div>
                  <p className="mt-4 text-lg font-bold text-slate-900">{item}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Xizmatlarning o'ylangan taqdimoti ushbu blokdan ham shaxsiy brend, ham klinika rivoji uchun foydalanish imkonini beradi.
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      {/* Business Section */}
      <section id="business" className="section-shell py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <div className="glass-card rounded-[32px] p-8 shadow-lg shadow-brand/5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-dark">Biznes va loyihalar</p>
              <h2 className="mt-4 font-[var(--font-manrope)] text-3xl font-extrabold text-slate-950 sm:text-4xl">
                SAOMED va GENMEDICAL bir platformada
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Ushbu blok shifokorning shaxsiy profili va biznes yo'nalishlarini birlashtiradi: klinika va laboratoriya. Bu saytni bir vaqtning o'zida ham portfoliо, ham samarali landing sahifasiga aylantiradi.
              </p>

              <div className="mt-8 space-y-4">
                {siteData.businesses.map((business) => (
                  <div key={business.title} className="rounded-[28px] border border-slate-200 bg-white p-5">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-xl font-bold text-slate-900">{business.title}</h3>
                      <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand-dark">
                        {business.year}
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-slate-600">{business.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="glass-card overflow-hidden rounded-[32px] p-4 shadow-glow"
          >
            <Image
              src={siteData.images.media}
              alt="Shifokorning professional fotosi"
              width={1051}
              height={700}
              className="h-full min-h-[420px] w-full rounded-[26px] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-shell py-12 lg:py-16">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-dark">Galereya</p>
              <h2 className="mt-4 font-[var(--font-manrope)] text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Shaxsiy brend va media kontent
              </h2>
            </div>
            <Link
              href={siteData.contacts.telegram}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand hover:text-brand-dark"
            >
              <Send className="h-4 w-4" /> Telegram orqali bog'lanish
            </Link>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {siteData.images.gallery.map((image, index) => (
              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.08 }}
                className="glass-card overflow-hidden rounded-[28px] p-3 shadow-lg shadow-brand/5"
              >
                <Image
                  src={image}
                  alt={`Galereya ${index + 1}`}
                  width={900}
                  height={900}
                  className="h-[320px] w-full rounded-[22px] object-cover"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-shell py-12 lg:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp}>
            <div className="glass-card rounded-[32px] p-8 shadow-lg shadow-brand/5">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-dark">Kontaktlar</p>
              <h2 className="mt-4 font-[var(--font-manrope)] text-3xl font-extrabold text-slate-950 sm:text-4xl">
                Bemorlar uchun qulay yozilish tizimi
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Ro'yxatdan o'tish shakli ism, familiya, telefon va manzilni yig'adi. Ma'lumotlar to'g'ridan-to'g'ri Telegram botga yuboriladi, bu esa tezkor aloqani ta'minlaydi.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-4">
                  <Phone className="mt-1 h-5 w-5 text-brand-dark" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Telefon</p>
                    <p className="mt-1 text-sm text-slate-600">{siteData.contacts.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-4">
                  <MapPin className="mt-1 h-5 w-5 text-brand-dark" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Manzil</p>
                    <p className="mt-1 text-sm text-slate-600">{siteData.contacts.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-4">
                  <Instagram className="mt-1 h-5 w-5 text-brand-dark" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900">Instagram</p>
                    <Link className="mt-1 block text-sm text-slate-600 underline decoration-brand/40 underline-offset-4" href={siteData.contacts.instagram} target="_blank">
                      @{siteData.contacts.instagram.split('/').pop()}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </main>
  );
}


// git remote set-url origin https://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@github.com/turdiyevuchqunjon/nilufar.git