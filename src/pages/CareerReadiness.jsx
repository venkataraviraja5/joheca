"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  ClipboardCheck,
  Target,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  TrendingUp,
  Search,
  Zap
} from "lucide-react";
import TestimonialsSection from "../components/Testimonials";

const CareerReadinessPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-100 font-sans">
      
      {/* ================= HERO: THE AMBITION BANNER ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 py-24 md:py-48 px-6">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.5 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img
            src="/images/career-readiness-banner.jpg"
            alt="Skyscraper Architecture"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Deep Purple/Black Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/90 via-slate-950/90 to-slate-950" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="p-5 md:p-10"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-xs font-bold uppercase tracking-[0.4em] mb-10">
              <Zap size={14} className="animate-pulse" /> Corporate Preparedness
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              CAREER <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-200 to-purple-400">READINESS.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-300 font-light leading-relaxed mb-12">
              The gap between graduation and employment ends here. Master the 
              mindset, the network, and the technical edge required to lead 
              the Fortune 500.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-purple-600 text-white px-12 py-5 rounded-2xl font-black hover:bg-purple-500 transition-all flex items-center gap-3 mx-auto sm:mx-0 shadow-xl shadow-purple-900/40">
                Launch Career <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= KEY SKILLS: md:py-10 & py-5 ================= */}
      <section className="py-5 md:py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto p-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900">Essential Skillsets</h2>
            <p className="text-slate-500 text-lg">Beyond technicality—we build high-impact leaders.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Communication",
                desc: "Navigate boardroom dynamics with advanced rhetoric, storytelling, and cross-cultural negotiation skills.",
                icon: <Users className="text-purple-600" />,
                bg: "bg-purple-50"
              },
              {
                title: "Critical Strategy",
                desc: "Adopt a consulting-grade approach to problem-solving. We teach you how to analyze, pivot, and execute.",
                icon: <Target className="text-indigo-600" />,
                bg: "bg-indigo-50"
              },
              {
                title: "Practical Immersion",
                desc: "1,000+ hours of real-world simulations, internships with top-tier firms, and live project ownership.",
                icon: <Briefcase className="text-fuchsia-600" />,
                bg: "bg-fuchsia-50"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-500"
              >
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAREER PATHS: md:py-10 & py-5 ================= */}
      <section className="py-5 md:py-10 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto p-5 grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white -rotate-2">
              <img
                src="/images/career-readiness-image.jpg"
                alt="Corporate Meeting"
                className="w-full h-[550px] object-cover"
              />
            </div>
            {/* Achievement Badge */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute -top-6 -right-6 z-20 bg-purple-600 p-8 rounded-full shadow-2xl flex items-center justify-center text-white"
            >
              <TrendingUp size={40} />
            </motion.div>
          </div>

          <div className="space-y-8 lg:pl-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter leading-[0.9] text-slate-900">
              Architecting Your Ascent
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Career readiness is not a workshop—it’s an evolution. We map 
              your unique strengths to the highest-demand market sectors, 
              ensuring you don't just find a job, but start a legacy.
            </p>

            <div className="grid gap-4">
              {[
                "Tier-1 Industry Mentorship",
                "Advanced Resume Architecture",
                "Behavioral Interview Forensics",
                "Exclusive Network Access"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-3xl bg-white border border-slate-200 shadow-sm hover:border-purple-300 transition-colors">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-slate-800 tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SUCCESS STORIES: md:py-10 & py-5 ================= */}
      <section className="py-5 md:py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto p-5">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl text-left">
              <h2 className="text-4xl font-black mb-4 text-slate-900">Elite Outcomes</h2>
              <p className="text-slate-500">Meet the pioneers who transitioned from our classrooms to the boardroom.</p>
            </div>
        
          </div>

            <TestimonialsSection />
        </div>
      </section>

      {/* ================= FINAL CTA: md:py-10 & py-5 ================= */}
      <section className="py-5 md:py-10 md:px-6">
        <div className="max-w-7xl mx-auto p-5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-[4rem] bg-purple-600 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-purple-900/40"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-4xl font-black mb-8 tracking-tighter leading-none">
                Command Your <br />Professional Destiny
              </h2>
              <p className="text-purple-100 text-xl mb-12 max-w-xl mx-auto font-light">
                Our next Career Accelerator cohort begins enrollment this month. 
                Spaces are strictly limited to ensure individual mentorship
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl">
                  Apply now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-xs uppercase tracking-[0.4em] font-bold">
        Career Readiness • Master Your Market
      </footer>
    </div>
  );
};

export default CareerReadinessPage;