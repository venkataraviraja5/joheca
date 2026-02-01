"use client";
import React from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Handshake,
  ShieldCheck,
  Users,
  Star,
  CheckCircle2,
  Leaf,
  Scale,
  HeartHandshake,
  ArrowRight
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const EthicalGrowthPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#FCFDFB] text-slate-900 selection:bg-emerald-100">
      
      {/* ================= HERO: THE FOUNDATION ================= */}
     <section className="relative min-h-[80vh] flex items-start py-28 overflow-hidden">
  {/* Background Layer */}
  <div className="absolute inset-0 z-0">
    <img
      src="/images/ethical-growth-banner.jpg"
      alt="Minimalist Architecture"
      className="w-full h-full object-cover"
    />
    {/* Elegant Forest Gradient */}
    <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-emerald-900/80 to-transparent" />
  </div>

  {/* Content */}
  <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-2xl"
    >
      {/* Badge */}
      <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-emerald-500/20 backdrop-blur-md border border-emerald-400/30 text-emerald-200 text-xs font-bold uppercase tracking-[0.25em] mb-10">
        <Leaf size={14} className="text-emerald-400" />
        Principles of Character
      </div>

      {/* Heading */}
      <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tight mb-8">
        GROWTH WITH <br />
        <span className="text-emerald-400">INTEGRITY.</span>
      </h1>

      {/* Description */}
      <p className="max-w-xl text-lg md:text-xl text-emerald-50/80 font-medium leading-relaxed mb-12">
        True success isn't just measured by where you arrive, but by the person
        you become during the climb. Build a career that stands on unshakeable
        values.
      </p>

      {/* CTA */}
      <button className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-2xl font-bold hover:bg-emerald-400 transition-all shadow-xl shadow-emerald-900/40 group"
       onClick={() => navigate('/about')}
      >
        Explore Our Manifesto
        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
      </button>
    </motion.div>
  </div>
</section>


      {/* ================= THE ETHICS MANTRA ================= */}
      <section className="py-5 md:py-10 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Character is Competence.</h2>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed italic font-serif">
              "Ethical Growth is the deliberate practice of building character alongside technical prowess. 
              It is the refusal to sacrifice long-term trust for short-term gain."
            </p>
            <div className="w-16 h-1 bg-emerald-500 mx-auto mt-10 rounded-full" />
          </motion.div>
        </div>
      </section>

      {/* ================= CORE VALUES (ELEVATED CARDS) ================= */}
      <section className="py-5 py-10 px-6 bg-[#F8FAF7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col justify-center items-center mb-5 gap-6">
            <div className="max-w-xl text-center">
              <h2 className="text-4xl font-black tracking-tighter mb-4">The Ethical Pillars</h2>
              <p className="text-slate-500">The non-negotiables of high-integrity leadership.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard 
              icon={<ShieldCheck />} 
              title="Radical Integrity" 
              desc="Transparency when it's hard, and honesty when no one is looking." 
              delay={0.1}
            />
            <ValueCard 
              icon={<HeartHandshake />} 
              title="Active Empathy" 
              desc="Understanding human impact before technical deployment." 
              delay={0.2}
            />
            <ValueCard 
              icon={<Scale />} 
              title="Shared Responsibility" 
              desc="Owning the outcomes of your work, both intended and unintended." 
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* ================= ETHICAL LEADERSHIP SECTION ================= */}
      <section className="py-5 md:py-10 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-emerald-100 rounded-[3rem] -rotate-2 group-hover:rotate-0 transition-transform duration-500 -z-10" />
            <img
              src="/images/ethical-growth-image.jpg"
              alt="Ethical Leadership Team"
              className="rounded-[2.5rem] shadow-2xl relative z-10 w-full h-[500px] object-cover"
            />
            {/* Image caption/diagram overlay */}
            <div className="absolute top-6 left-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-emerald-100 shadow-lg">
                <span className="text-xs font-black text-emerald-700 uppercase tracking-widest flex items-center gap-2">
                    <CheckCircle2 size={14} /> Sustainable Leadership
                </span>
            </div>
          </div>

          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">
              Legacy over <br />Leverage
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              In a world of shortcuts, ethics is the ultimate competitive advantage. 
              Trust is the only currency that compounds infinitely.
            </p>

            <div className="space-y-4">
              {[
                "Decision-making through a moral lens",
                "Fostering psychological safety in teams",
                "Sustainable growth vs. aggressive scaling",
                "Championing accessibility and inclusion"
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-emerald-200 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="font-bold text-slate-700 tracking-tight">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= LONG-TERM IMPACT ================= */}
      <section className="py-32 bg-emerald-950 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <Star className="mx-auto text-emerald-400 mb-8 animate-pulse" size={56} strokeWidth={1} />
          <h2 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">The Compounding Impact.</h2>
          <p className="text-emerald-100/70 text-xl leading-relaxed max-w-2xl mx-auto">
            Ethical decisions are the seeds of a legendary reputation. They create a 
            ripple effect that transforms industries, communities, and the very 
            definition of success.
          </p>
        </div>
        {/* Subtle decorative background light */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      </section>

    </div>
  );
};

// Reusable Value Card Component
const ValueCard = ({ icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.6 }}
    viewport={{ once: true }}
    className="bg-white p-10 rounded-[3rem] shadow-sm border border-emerald-50 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all group"
  >
    <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h3 className="text-2xl font-black mb-4 tracking-tight">{title}</h3>
    <p className="text-slate-500 leading-relaxed">{desc}</p>
  </motion.div>
);

export default EthicalGrowthPage;