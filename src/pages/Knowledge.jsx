"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
  BookOpen, Brain, Lightbulb, FileText, 
  Code2, GraduationCap, ArrowRight, CheckCircle2,
  Sparkles, Zap, ShieldCheck
} from "lucide-react";

const KnowledgePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[90vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background Image - Always Visible */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=2000&auto=format&fit=crop" 
            alt="Library"
            className="w-full h-full object-cover scale-105"
          />
          {/* Advanced Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-white" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center lg:text-left flex flex-col items-center lg:items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-blue-500/20 backdrop-blur-md border border-white/20 text-blue-200 text-xs font-bold uppercase tracking-[0.2em]">
              <Sparkles size={14} /> Intelligence Platform
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              KNOWLEDGE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">WITHOUT LIMITS.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              The ultimate repository for modern builders. We distill complex 
              engineering systems into visual, actionable mastery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-bold hover:bg-blue-500 transition-all shadow-2xl shadow-blue-600/30 flex items-center justify-center gap-3 group">
                Start Learning <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-bold hover:bg-white/20 transition-all">
                Full Curriculum
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= THE VAULT (STATS) ================= */}
      <section className="relative z-20 -mt-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-1 bg-white border border-slate-100 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 overflow-hidden">
          {[
            { label: "Active Lessons", val: "250+", icon: <Zap className="text-blue-600" /> },
            { label: "Success Rate", val: "98%", icon: <ShieldCheck className="text-emerald-600" /> },
            { label: "Community", val: "12k", icon: <GraduationCap className="text-purple-600" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-10 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-slate-50 last:border-0">
              <div className="mb-4">{stat.icon}</div>
              <div className="text-4xl font-black text-slate-900">{stat.val}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURE GRID ================= */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20">
            <div className="max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Deep Dive <br />Categories.</h2>
              <p className="text-slate-500 text-lg">Curated intelligence across the stack.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard title="Core Systems" icon={<BookOpen />} desc="Under the hood of databases, OS, and networking." color="bg-blue-600" />
            <FeatureCard title="Frontend Architecture" icon={<Code2 />} desc="Component design, performance, and UI engineering." color="bg-purple-600" />
            <FeatureCard title="Neural Networks" icon={<Brain />} desc="AI integration and LLM orchestration strategies." color="bg-emerald-600" />
          </div>
        </div>
      </section>

      {/* ================= THE ROADMAP (MOBILE OPTIMIZED) ================= */}
      <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-80 h-80 bg-blue-500 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black mb-6">The Success Path</h2>
            <p className="text-slate-400">Your step-by-step transition to Senior Engineer.</p>
          </div>

          <div className="space-y-12">
            {[
              "Fundamentals of Architecture",
              "Advanced JavaScript Patterns",
              "Scalable Cloud Infrastructure",
              "Leadership & System Design"
            ].map((text, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="flex gap-6 md:gap-10 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-blue-600 flex items-center justify-center text-xl md:text-2xl font-black shadow-lg shadow-blue-600/20 group-hover:scale-110 transition-transform">
                    {i + 1}
                  </div>
                  {i !== 3 && <div className="w-0.5 h-20 bg-gradient-to-b from-blue-600 to-transparent mt-4" />}
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">{text}</h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                    Master the foundational principles used by world-class engineering teams at FAANG and beyond.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 px-6 bg-white text-center">
        <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView" className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-black mb-10 tracking-tighter">Ready to build the future?</h2>
          <button className="inline-flex items-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-3xl text-lg font-bold hover:bg-blue-600 transition-all">
            Join the Hub Today <ArrowRight />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ title, desc, icon, color }) => (
  <div className="p-10 rounded-[2.5rem] bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-2xl transition-all group">
    <div className={`w-14 h-14 rounded-2xl ${color} text-white flex items-center justify-center mb-8 shadow-lg group-hover:rotate-6 transition-transform`}>
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{desc}</p>
  </div>
);

export default KnowledgePage;