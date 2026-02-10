"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HiArrowRight, HiBadgeCheck } from "react-icons/hi";
import { FaQuoteLeft, FaBullseye, FaRocket, FaGlobeAmericas, FaShieldAlt, FaCheckCircle, FaMapMarkedAlt, FaUserFriends, FaGraduationCap, FaRupeeSign, FaUserShield, FaHeartbeat } from "react-icons/fa";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const coreReasons = [
    { 
      title: "No Career Roadmap", 
      desc: "Most students are lost when choosing streams with little awareness of future opportunities.",
      icon: <FaMapMarkedAlt className="text-amber-500" /> 
    },
    { 
      title: "Absence of Mentorship", 
      desc: "Students go years without a true mentor until it's too late—usually after college ends.",
      icon: <FaUserFriends className="text-amber-500" /> 
    },
    { 
      title: "Low Employability", 
      desc: "Degree holders struggle to get jobs due to outdated curricula and lack of practical skills.",
      icon: <FaGraduationCap className="text-amber-500" /> 
    },
    { 
      title: "Financial Barriers", 
      desc: "Many talented students drop out due to inability to afford higher education.",
      icon: <FaRupeeSign className="text-amber-500" /> 
    },
    { 
      title: "Parental Anxiety", 
      desc: "Parents invest heavily but have no real-time insight into their child's progress.",
      icon: <FaUserShield className="text-amber-500" /> 
    },
    { 
      title: "No Safety Net", 
      desc: "There's no job guarantee, health coverage, or fallback plan if things don't work out.",
      icon: <FaHeartbeat className="text-amber-500" /> 
    }
  ];

  const johecaAnswers = [
    "A 7-year guided journey from 10th to final year",
    "AI + human mentorship for personalized growth",
    "Free B.Tech for deserving students",
    "100% Job Assurance on legal bond paper + ₹5 lakh insurance",
    "7-8 years of health insurance",
    "Support for global education (admissions, visas, scholarships)"
  ];

  const studentNeeds = [
    "A Mentor – Guidance at every step",
    "A Map – A clear path to success",
    "A Plan – Structured goals and milestones",
    "A Skill – Practical, career-ready abilities",
    "A Job – Assurance of employability",
    "Peace of Mind for the Family – Safety, support, and transparency"
  ];

  const containerPadding = "max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24";

  return (
    <div className="w-full bg-[#fcfcfc] overflow-hidden">
      
      {/* ================= HERO: FOUNDER'S MESSAGE ================= */}
     <section className="relative w-full min-h-screen flex items-center bg-[#020617] overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-amber-500/10 blur-[120px] rounded-full"></div>
      </div>

      <div className={`${containerPadding} relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center`}>
        
        {/* Left Side: Message Content */}
        <motion.div 
          className="lg:col-span-7 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 font-bold text-[10px] uppercase tracking-[0.2em]">
              17. Founder's Story & Vision
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-poppins leading-tight">
              A Promise to the <span className="text-amber-500">Next Generation</span>
            </h2>
          </div>
          
          <div className="relative">
            <FaQuoteLeft className="absolute -top-6 -left-4 text-amber-500/20 text-7xl" />
            <div className="relative space-y-6 text-slate-300 text-base md:text-lg leading-relaxed font-inter">
              <p className="italic text-slate-200">
                "As a 90s kid, I navigated life without direction, mentorship, or clarity. I know the confusion and fear of an uncertain future. JoHeCa was born to change that—to provide students with guidance, skills, and opportunities so they can step into the world with confidence."
              </p>
              
              <div className="pt-6 border-t border-slate-800/50">
                <p className="text-white font-semibold mb-4 text-xl">Every student deserves:</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                  {studentNeeds.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-slate-400">
                      <FaCheckCircle className="text-amber-500 shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-6 border-l-4 border-amber-500 pl-6">
            <p className="text-white font-bold text-lg tracking-wide uppercase">JoHeCa stands for:</p>
            <p className="text-amber-500 text-lg italic font-medium">"Barosa for Every Student. Peace for Every Parent."</p>
          </div>
        </motion.div>

        {/* Right Side: Founder Image */}
        <motion.div 
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative group">
            {/* Decorative Background Box */}
            <div className="absolute -inset-4 border border-slate-800 rounded-3xl -translate-x-2 -translate-y-2 group-hover:border-amber-500/30 transition-colors duration-500"></div>
            
            <img
              src="/images/founder.jpg" 
              alt="Founder"
              className="relative w-full aspect-[4/5] object-cover rounded-2xl shadow-2xl border border-white/5 transition-all duration-500"
            />

            {/* Vision Equation Overlay */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-8 -left-8 md:-left-12 bg-slate-900/95 backdrop-blur-xl p-6 rounded-2xl border border-slate-700 shadow-2xl max-w-[320px]"
            >
              <p className="text-amber-500 font-bold text-xs uppercase tracking-widest mb-3">Our Vision</p>
              <div className="text-slate-200 text-xs font-medium leading-relaxed space-y-1">
                <p>Education + Employment + Insurance + International Opportunity</p>
                <p className="text-amber-500 text-center font-bold">=</p>
                <p className="text-white text-sm font-bold text-center italic">"Life Security for Every Student."</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>

      {/* ================= WHY JOHECA: THE AWAKENING ================= */}
      <section className="relative bg-[#020617] overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full"></div>
      </div>

      <div className={`${containerPadding} relative z-10`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* LEFT: CORE REASONS (THE PROBLEMS) */}
          <motion.div 
            className="lg:col-span-7 space-y-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 font-bold text-[10px] uppercase tracking-[0.2em]">
                The Systemic Problem
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white font-poppins leading-tight">
                Why <span className="text-amber-500">JOHECA</span> Was Created
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
                The founder, reflecting on his own journey as a "90s kid," experienced the confusion and fear of navigating education without direction. JOHECA was created to ensure no student faces that alone.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {coreReasons.map((reason, i) => (
                <div key={i} className="p-5 rounded-2xl bg-[#0f172a] border border-slate-800 hover:border-red-500/30 transition-all group">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-slate-800 group-hover:bg-red-500/10 transition-colors">
                      {reason.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm mb-1">{reason.title}</h4>
                      <p className="text-slate-500 text-xs leading-relaxed">{reason.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT: JOHECA'S ANSWER (THE SOLUTION) */}
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-amber-500 rounded-[2.5rem] p-8 md:p-10 shadow-2xl relative overflow-hidden group">
              {/* Decorative Circle */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full transition-transform group-hover:scale-150 duration-700"></div>
              
              <div className="relative z-10 space-y-8">
                <div>
                  <h4 className="text-slate-900 font-black text-xs uppercase tracking-widest mb-2">The Solution</h4>
                  <h3 className="text-3xl font-bold text-slate-950">JOHECA's Answer</h3>
                </div>

                <div className="space-y-5">
                  {johecaAnswers.map((answer, i) => (
                    <div key={i} className="flex items-start gap-4 group/item">
                      <div className="mt-1 bg-slate-950 rounded-full p-1 group-hover/item:scale-110 transition-transform">
                        <HiBadgeCheck className="text-amber-500 text-xl" />
                      </div>
                      <p className="text-slate-900 font-semibold text-sm md:text-base leading-snug">
                        {answer}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <p className="text-slate-900/70 text-sm italic font-medium">
                    "Built on Barosa (Meaning Trust) — to empower, protect, and guarantee a dignified future."
                  </p>
                </div>
              </div>
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