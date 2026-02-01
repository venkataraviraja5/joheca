"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight,
  Library,
  Microscope,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AcademicExcellencePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      
      {/* ================= HERO: UPDATED SPACING ================= */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-950 py-24 md:py-44">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2.5 }}
          className="absolute inset-0"
        >
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/80 via-slate-950/90 to-slate-950" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            // Content padding
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold uppercase tracking-[0.3em] mb-8">
              <Library size={14} /> The Pursuit of Knowledge
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none">
              ACADEMIC <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-blue-400">EXCELLENCE</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-2xl text-slate-300 font-light leading-relaxed mb-12">
              Beyond grades lies a deeper mastery. We build the intellectual 
              foundation required to lead, innovate, and solve the world's 
              most complex challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-black hover:bg-blue-500 transition-all flex items-center gap-3 mx-auto sm:mx-0 shadow-xl shadow-blue-900/40"
                onClick={() => navigate('/packages')}
              >
                Explore Programs <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= PILLARS: md:py-10 & py-5 ================= */}
      <section className="py-5 md:py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto p-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-slate-900">The Three Pillars</h2>
            <p className="text-slate-500 text-lg">Rigorous standards for a borderless world.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Strong Curriculum",
                desc: "A comprehensive, industry-aligned syllabus designed by subject matter experts for deep cognitive mastery.",
                icon: <BookOpen className="text-blue-600" />,
                bg: "bg-blue-50"
              },
              {
                title: "Practical Learning",
                desc: "Applying theory to high-stakes environments through labs, real-world case studies, and rapid prototyping.",
                icon: <Microscope className="text-indigo-600" />,
                bg: "bg-indigo-50"
              },
              {
                title: "Merit Recognition",
                desc: "Celebrating high-performers through international certifications and a global alumni network.",
                icon: <Award className="text-amber-600" />,
                bg: "bg-amber-50"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="group relative p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
              >
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS: md:py-10 & py-5 ================= */}
      <section className="py-5 md:py-10 px-6 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto p-5 grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white rotate-2">
              <img
                src="public/images/academic-exellence-iṁage.jpg"
                alt="Students Collaborating"
                className="w-full h-[500px] object-cover"
              />
            </div>
            
            <motion.div 
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              className="absolute -bottom-10 -left-6 z-20 bg-white p-6 rounded-3xl shadow-xl border border-slate-100 max-w-[240px]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={20} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Awarded</span>
              </div>
              <p className="font-black text-slate-800 leading-tight">National Innovation Gold Medal 2025</p>
            </motion.div>
          </div>

          <div className="space-y-8 lg:pl-10">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter leading-none text-slate-900">
              Celebrating the Win
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Excellence is a habit, not an act. We showcase student work to 
              the world, ensuring your hard work translates into tangible market value.
            </p>

            <div className="space-y-4">
              {[
                "Global Recognition Programs",
                "Portfolio-Based Assessment",
                "Research Publication Support",
                "Elite Mentorship Pathways"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm group hover:border-blue-200 transition-colors">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-bold text-slate-700 tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROGRAMS: md:py-10 & py-5 ================= */}
      <section className="py-5 md:py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto p-5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 text-slate-900">Academic Programs</h2>
            <div className="w-24 h-1.5 bg-blue-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <ProgramCard 
  img="/images/academic-1.jpg" 
  title="Degree Programs" 
  desc="Accredited bachelor's and master's tracks."
/>

<ProgramCard 
  img="/images/academic-2.jpg" 
  title="Skill Courses" 
  desc="Intensive 12-week bootcamps for modern tech."
/>

<ProgramCard 
  img="/images/academic-3.jpg" 
  title="Research" 
  desc="Pushing the boundaries of what is possible."
/>

<ProgramCard 
  img="/images/academic-4.jpg" 
  title="Mentorship" 
  desc="Direct access to industry-leading legends."
/>

          </div>
        </div>
      </section>

      {/* ================= FINAL CTA: md:py-10 & py-5 ================= */}
      <section className="py-5 md:py-10 md:px-6">
        <div className="max-w-7xl mx-auto p-5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-[4rem] bg-blue-600 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-900/40"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                Start your <br />excellence journey.
              </h2>
              <p className="text-blue-100 text-xl mb-12 max-w-xl mx-auto">
                Enrollment is open for the 2026 academic year. Secure your seat 
                in the future of global education.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl">
                  Apply for Admission
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-100 text-center text-slate-400 text-xs uppercase tracking-[0.4em] font-bold">
        Academic Excellence • Established 2026
      </footer>
    </div>
  );
};

const ProgramCard = ({ img, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-slate-50 rounded-[2.5rem] overflow-hidden group border border-slate-100 transition-all hover:shadow-2xl hover:shadow-blue-500/5"
  >
    <div className="h-48 overflow-hidden relative">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      <div className="absolute inset-0 bg-blue-900/20 group-hover:bg-blue-900/0 transition-colors" />
    </div>
    <div className="p-8 text-center">
      <h3 className="font-black text-xl text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500 text-sm mb-6">{desc}</p>
    </div>
  </motion.div>
);

export default AcademicExcellencePage;