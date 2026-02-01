"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Globe,
  Map,
  Briefcase,
  Users,
  Network,
  CheckCircle2,
  ArrowUpRight,
  Compass,
  Languages,
  Zap
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const GlobalVisionPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

   const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-100">
      
      {/* ================= HERO: THE BORDERLESS CANVAS ================= */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Video or Image Placeholder */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/global-vision-banner.jpg"
            alt="Digital World"
            className="w-full h-full object-cover scale-105"
          />
          {/* Deep Cinematic Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
          
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-none mb-6 tracking-tighter">
              GLOBAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-blue-200 to-indigo-300">VISION</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 font-medium leading-relaxed mb-10">
              The world is no longer a collection of borders, but a network of opportunities. 
              Architect your career to thrive in any timezone, culture, and market.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button className="cursor-pointer bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-indigo-50 transition-all flex items-center gap-2 group shadow-xl"
                onClick={() => navigate('/international')}
              >
                Expand Horizons <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating elements for depth */}
        <div className="absolute bottom-10 left-10 hidden lg:block animate-bounce-slow">
            <div className="p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white/40 text-[10px] font-mono tracking-widest uppercase">
                LAT: 40.7128° N <br /> LONG: 74.0060° W
            </div>
        </div>
      </section>

      {/* ================= DEFINITION: CROSS-BORDER MINDSET ================= */}
      <section className="py-5 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 italic">"Thinking beyond the immediate."</h2>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed">
              Global Vision is the cognitive shift from <span className="text-slate-900 font-bold">local competition</span> to <span className="text-indigo-600 font-bold">international contribution</span>. It is about building a personal brand that is language-agnostic and culture-fluid.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SKILLS BENTO GRID ================= */}
      <section className="py-5 md:py-10 px-6 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Cultural Intelligence",
                desc: "Navigate the nuances of high-context vs. low-context communication styles across continents.",
                icon: <Languages />,
                color: "indigo"
              },
              {
                title: "Distributed Sync",
                desc: "Mastering the art of asynchronous work and remote-first collaboration standards.",
                icon: <Network />,
                color: "blue"
              },
              {
                title: "Universal Standards",
                desc: "Applying ISO-level quality and global ethics to every line of code or business decision.",
                icon: <Zap />,
                color: "amber"
              }
            ].map((skill, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="group bg-white p-10 rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:shadow-indigo-500/5 transition-all"
              >
                <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500">
                  {React.cloneElement(skill.icon, { size: 28 })}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight">{skill.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CAREER ALIGNMENT: THE GLOBAL MAP ================= */}
      <section className="py5 py-10 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            {/* Contextual Graphic for Global Connectivity */}
            <div className="relative z-10 bg-slate-900 rounded-[3rem] p-4 shadow-2xl overflow-hidden border-8 border-white">
              <img
                src="/images/global-vision-image.jpg"
                alt="Global Connection"
                className="rounded-[2rem] w-full h-[450px] object-cover opacity-80"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-indigo-500/20 backdrop-blur-xl border border-white/30 flex items-center justify-center">
                    <div className="w-4 h-4 bg-indigo-400 rounded-full animate-ping" />
                </div>
              </div>
            </div>
            {/* Background glowing orb */}
            <div className="absolute -top-20 -right-20 w-96 h-96 bg-indigo-100 rounded-full blur-[100px] -z-10" />
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
              The Borderless <br />Career.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Success is no longer tied to a physical office. It is tied to your ability 
              to provide value that is universally understood.
            </p>

            <div className="grid gap-4">
              {[
                "Worldwide Skill Recognition",
                "Remote-First Operational Excellence",
                "Cross-Continental Ethical Standards",
                "Multicultural Team Leadership"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-5 rounded-2xl bg-indigo-50/50 border border-indigo-100 group">
                  <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-bold text-slate-800 tracking-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= GLOBAL STRATEGY: ACT LOCAL ================= */}
      <section className="py-10 px-6 bg-slate-900 rounded-t-[4rem] md:rounded-t-[6rem] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <Compass className="mx-auto text-indigo-400 mb-8 animate-spin-slow" size={60} strokeWidth={1} />
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">Think Global, Act Local</h2>
          <p className="text-slate-400 text-xl leading-relaxed max-w-3xl mx-auto mb-16">
            Universal standards do not mean ignoring local context. The most successful global professionals 
            are those who can apply world-class logic while respecting the unique cultural heartbeat 
            of their current environment.
          </p>
          
          <div className="flex justify-center gap-12">
            <div className="text-center">
                <div className="text-3xl font-black mb-1 italic">95%</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold">Market Reach</div>
            </div>
            <div className="text-center">
                <div className="text-3xl font-black mb-1 italic">∞</div>
                <div className="text-[10px] uppercase tracking-[0.2em] text-indigo-400 font-bold">Opportunity</div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-5 py-10 px-6 bg-slate-900 text-center">
        <div className="max-w-4xl mx-auto p-12 md:p-24 rounded-[3.5rem] bg-gradient-to-br from-indigo-600 to-blue-700 shadow-[0_0_100px_rgba(79,70,229,0.3)]">
          <h2 className="text-2xl md:text-5xl font-black text-white mb-8 tracking-tighter leading-none">
            Your journey <br />has no borders.
          </h2>
          <button className="bg-white text-indigo-600 px-9 md:px-12 py-4 md:py-6 rounded-3xl font-black text-lg hover:bg-slate-50 transition-all shadow-2xl"
           onClick={() => navigate('/international')}
          >
            Go Global Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default GlobalVisionPage;