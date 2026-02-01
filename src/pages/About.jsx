"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FaQuoteLeft, FaBullseye, FaRocket, FaGlobeAmericas, FaShieldAlt, FaCheckCircle } from "react-icons/fa";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerPadding = "max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24";

  return (
    <div className="w-full bg-[#fcfcfc] overflow-hidden">
      
      {/* ================= HERO: FOUNDER'S MESSAGE ================= */}
      <section className="relative w-full min-h-screen flex items-center bg-slate-900 overflow-hidden">
        {/* Background Image with sophisticated parallax-like feel */}
        <div className="absolute inset-0 opacity-40">
          <img 
            src="/images/founder-banner.jpg" 
            alt="Founder Background" 
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-transparent"></div>
        </div>

        <div className={`${containerPadding} relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center`}>
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="inline-block px-4 py-1 rounded-full bg-[#FFB800] text-slate-900 font-bold text-xs uppercase tracking-widest mb-4">
              Direct from the Heart
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white font-poppins leading-tight">
              Founder’s <span className="text-[#FFB800]">Message</span>
            </h1>
            
            <div className="relative">
              <FaQuoteLeft className="absolute -top-4 -left-8 text-white/10 text-6xl" />
              <p className="text-slate-200 text-sm md:text-lg leading-relaxed font-inter italic border-l-4 border-[#FFB800] pl-6 whitespace-pre-line">
                {`I grew up in the 90s — a generation filled with dreams but no direction. We chose engineering because we didn’t know our choices. That pain created JoHeCa. 

                JoHeCa is a promise that the confusion of the 90s will never repeat. We want every student to walk a path that matches their passion, potential, and purpose.`}
              </p>
            </div>
            
            <div className="pt-4">
              <p className="text-white font-bold text-xl">— Founder, JoHeCa</p>
              <p className="text-[#FFB800] text-sm tracking-widest uppercase">Empowering the Next Gen</p>
            </div>
          </motion.div>

          <motion.div 
            className="lg:col-span-5 hidden lg:block"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#FFB800]/20 rounded-2xl blur-xl group-hover:bg-[#FFB800]/30 transition duration-500"></div>
              <img
                src="/images/why-joheca.jpg"
                alt="Why JoHeCa Was Created"
                className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl border border-white/10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHY JOHECA: THE AWAKENING ================= */}
      <section className="bg-white">
        <div className={`${containerPadding}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              className="order-2 lg:order-1 relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <img
                src="/images/why-created-johega.png"
                alt="The Reality of Education"
                className="w-full rounded-3xl shadow-[0_20px_50px_rgba(11,61,145,0.15)]"
              />
              {/* Floating Stat Card */}
              <div className="absolute -bottom-6 -right-6 bg-[#FFB800] p-6 rounded-2xl shadow-xl hidden md:block">
                <p className="text-slate-900 font-black text-4xl italic leading-none">250+</p>
                <p className="text-slate-900 font-bold text-xs uppercase tracking-tighter">Career Paths Available</p>
              </div>
            </motion.div>

            <motion.div 
              className="order-1 lg:order-2 space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <div className="space-y-2">
                <h2 className="text-[#0B3D91] font-black text-xs tracking-[0.3em] uppercase">The Catalyst</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-slate-900 font-poppins leading-tight">
                  Why <span className="text-[#0B3D91]">JoHeCa</span> was Created
                </h3>
              </div>
              
              <p className="text-slate-600 text-lg leading-relaxed">
                JoHeCa was created for one reason: To end the confusion that destroyed the dreams of millions. We bridge the gap between classroom theory and real-world employability.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {[
                  "India has 250+ career paths… most know only 4–5.",
                  "Colleges teach subjects… but not skills.",
                  "Companies want skills… but graduates are unemployable.",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border-l-4 border-[#0B3D91] hover:bg-slate-100 transition-colors">
                    <HiArrowRight className="text-[#FFB800] shrink-0" />
                    <span className="text-slate-800 font-medium text-sm md:text-base">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= VISION & MISSION: THE CORE ================= */}
      <section className="bg-slate-50 relative py-12 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            
            {/* Vision Card */}
            <motion.div 
              className="bg-white p-8 md:p-12 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 group"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-[#0B3D91]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0B3D91] transition-colors duration-500">
                <FaBullseye className="text-[#0B3D91] text-2xl group-hover:text-white" />
              </div>
              <h4 className="text-3xl font-bold text-slate-900 mb-6 font-poppins">Our Vision</h4>
              <p className="text-slate-600 leading-relaxed text-base md:text-lg">
                To create India’s most powerful guidance ecosystem — where every child discovers their true strengths and chooses their future with clarity and courage.
              </p>
              <img src="/images/vision.jpg" className="w-full h-48 object-cover rounded-xl mt-8 grayscale hover:grayscale-0 transition duration-500" alt="Vision" />
            </motion.div>

            {/* Mission Card */}
            <motion.div 
              className="bg-[#0B3D91] p-8 md:p-12 rounded-[2rem] shadow-xl text-white group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-[#FFB800] rounded-2xl flex items-center justify-center mb-6">
                <FaRocket className="text-slate-900 text-2xl" />
              </div>
              <h4 className="text-3xl font-bold mb-6 font-poppins">Our Mission</h4>
              <p className="text-slate-100/80 leading-relaxed text-base md:text-lg">
                JoHeCa bridges gaps. We bring together: Career guidance, Skill training, Job assurance, and Insurance protection into one powerful system for India's next generation.
              </p>
              <img src="/images/mission.jpg" className="w-full h-48 object-cover rounded-xl mt-8 opacity-80 group-hover:opacity-100 transition duration-500 shadow-2xl" alt="Mission" />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= 2030 GOAL: THE FUTURE ================= */}
      <section className="bg-white overflow-hidden">
        <div className={`${containerPadding}`}>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-[#FFB800] font-black text-xs tracking-[0.4em] uppercase">Road to Impact</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 font-poppins">2030 Goal: <span className="text-[#0B3D91]">The 10 Lakh Mission</span></h3>
            <p className="text-slate-500 italic">"This is not just a goal — this is a national movement."</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Main Highlight Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#0B3D91] to-slate-900 p-8 md:p-12 rounded-[2rem] text-white flex flex-col md:flex-row gap-8 items-center overflow-hidden relative">
                <div className="relative z-10 space-y-4 md:w-2/3">
                    <h5 className="text-[#FFB800] text-6xl font-black">10,00,000</h5>
                    <p className="text-xl font-medium">Students empowered with clarity, confidence, and placement support across India.</p>
                </div>
                <img src="/images/about-us-2030-goal.jpg" className="w-full md:w-1/3 h-64 object-cover rounded-2xl md:rotate-3 shadow-2xl relative z-10" alt="Goal 2030" />
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl"></div>
            </div>

            {/* Mini Goal Cards */}
            {[
                { icon: <FaGlobeAmericas />, title: "25,000+ Global Pathways", desc: "Students sent to USA, UK, Canada & Europe." },
                { icon: <FaShieldAlt />, title: "Job Assurance", desc: "India's most trusted Edu-to-Employment network." },
                { icon: <FaCheckCircle />, title: "700+ Partnerships", desc: "Integrated with schools and colleges nationwide." },
            ].map((goal, idx) => (
                <motion.div 
                    key={idx}
                    className="p-8 rounded-[2rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center space-y-4 hover:border-[#FFB800] transition-colors"
                    whileHover={{ y: -10 }}
                >
                    <div className="text-[#0B3D91] text-3xl">{goal.icon}</div>
                    <h6 className="font-bold text-slate-900 text-lg">{goal.title}</h6>
                    <p className="text-slate-500 text-sm leading-relaxed">{goal.desc}</p>
                </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Final Call to Action Visual */}
      <div className="w-full h-2 bg-gradient-to-r from-[#0B3D91] via-[#FFB800] to-[#0B3D91]"></div>
    </div>
  );
};

export default About;