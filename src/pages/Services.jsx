"use client";
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  FaBriefcase,
  FaHeartbeat,
  FaCode,
  FaUserGraduate,
  FaGlobe,
  FaUniversity,
  FaChevronRight,
  FaShieldAlt,
  FaLightbulb,
  FaRocket,
  FaChartLine,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Job Assurance",
    icon: <FaBriefcase />,
    image: "/images/services-job-assurance.JPG",
    color: "from-blue-600 to-indigo-700",
    description: "A career-focused program designed to make students job-ready with guaranteed placement assistance.",
    points: [
      "Industry-aligned curriculum",
      "Live projects & case studies",
      "Mock interviews & resume building",
      "Dedicated placement support",
    ],
  },
  {
    id: 2,
    title: "Insurance",
    icon: <FaHeartbeat />,
    image: "/images/services-insurance.jpg",
    color: "from-emerald-500 to-teal-700",
    description: "We ensure student safety and peace of mind by providing essential health and insurance coverage.",
    points: [
      "Health insurance during training",
      "Emergency medical assistance",
      "Accident coverage",
      "Stress-free learning environment",
    ],
  },
  {
    id: 3,
    title: "Programming",
    icon: <FaCode />,
    image: "/images/services-coding.jpg",
    color: "from-purple-600 to-fuchsia-700",
    description: "Hands-on coding programs that build strong technical foundations using modern tools and frameworks.",
    points: [
      "Full-stack development training",
      "Real-world projects",
      "1:1 mentorship from experts",
      "Hackathons & coding challenges",
    ],
  },
  {
    id: 4,
    title: "Internships",
    icon: <FaUserGraduate />,
    image: "/images/services-internship.jpg",
    color: "from-orange-500 to-red-600",
    description: "Structured internship programs with startups and enterprises for real industry exposure.",
    points: [
      "Paid & unpaid internships",
      "Startup & corporate exposure",
      "Performance-based hiring",
      "Professional networking",
    ],
  },
  {
    id: 5,
    title: "Foreign University Training",
    icon: <FaGlobe />,
    image: "/images/services-foreign-university.jpg",
    color: "from-sky-500 to-blue-700",
    description: "Training aligned with international university standards for global academic success.",
    points: [
      "Foreign university curriculum mapping",
      "Skill & aptitude preparation",
      "Global exposure programs",
      "Admission readiness support",
    ],
  },
  {
    id: 6,
    title: "University Tie-Ups",
    icon: <FaUniversity />,
    image: "/images/services-school-college.jpg",
    color: "from-amber-500 to-yellow-600",
    description: "Collaborative programs with institutions to enhance skill-based and future-ready education.",
    points: [
      "Curriculum enhancement",
      "Skill development workshops",
      "Faculty training programs",
      "Career guidance initiatives",
    ],
  },
];

const Services = () => {
  const [active, setActive] = useState(services[0]);

  return (
    <div className="bg-slate-50 min-h-screen font-sans selection:bg-[#FFB800] selection:text-slate-900">
      
      {/* ================= HERO BANNER ================= */}
      <section 
        className="relative h-[70vh] md:h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950"
      >
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/images/services-banner.jpg"
            alt="Services Banner"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 p-8 md:p-16 rounded-[3rem] shadow-2xl"
          >
            <h1 className="text-3xl md:text-6xl font-black text-white leading-tight font-poppins mb-6">
              Empowering students with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-yellow-200">
                career-driven programs.
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium tracking-wide">
              Global exposure, professional security, and real-world learning experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= NAVIGATION TABS ================= */}
      <div className="sticky top-0 z-50 py-6 bg-slate-50/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar justify-start md:justify-center">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => setActive(service)}
                className={`group flex items-center gap-3 px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 whitespace-nowrap
                  ${active.id === service.id 
                    ? "bg-[#0B3D91] text-white shadow-xl shadow-blue-900/20 scale-105" 
                    : "bg-white text-slate-500 hover:bg-slate-100 border border-slate-200"
                  }`}
              >
                <span className={`text-lg transition-transform group-hover:rotate-12 ${active.id === service.id ? "text-[#FFB800]" : "text-slate-400"}`}>
                  {service.icon}
                </span>
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ================= SERVICE DETAIL CONTENT ================= */}
      <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
          >
            {/* Image Side */}
            <div className="lg:col-span-6 relative">
              <div className={`absolute inset-0 bg-gradient-to-br ${active.color} rounded-[3rem] blur-3xl opacity-20 -rotate-6 scale-95`} />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-[400px] md:h-[500px] object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>

            {/* Text Side */}
            <div className="lg:col-span-6 space-y-8">
              <div>
                <span className="text-[#0B3D91] font-black uppercase tracking-[0.3em] text-xs">Service Overview</span>
                <h2 className="text-4xl md:text-6xl font-black text-slate-900 mt-2 font-poppins leading-tight">
                  {active.title}
                </h2>
              </div>
              
              <p className="text-slate-600 text-lg md:text-xl leading-relaxed font-inter">
                {active.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {active.points.map((point, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm group hover:border-[#FFB800] transition-colors"
                  >
                    <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-[#0B3D91] group-hover:bg-[#FFB800] group-hover:text-slate-900 transition-colors">
                      <FaChevronRight size={12} />
                    </div>
                    <span className="font-bold text-slate-700 text-sm">{point}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ================= BELIEF SECTION (BENTO GRID) ================= */}
      <section className="bg-white py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#0B3D91] font-poppins tracking-tighter">
              What Every Student <span className="text-[#FFB800]">Truly Deserves</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-inter">
              Education should not be a gamble. It should be a protected journey toward a meaningful career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-4 gap-6 auto-rows-[240px]">
            {/* Bento Card 1: Wide */}
            <div className="md:col-span-3 lg:col-span-2 bg-slate-50 p-10 rounded-[2.5rem] flex flex-col justify-between border border-slate-100 group hover:bg-[#0B3D91] transition-all duration-500">
              <FaLightbulb className="text-4xl text-[#FFB800]" />
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition-colors">Clarity Before Choices</h3>
                <p className="text-slate-500 group-hover:text-slate-300 transition-colors">Career guidance before choosing streams — not after years of confusion.</p>
              </div>
            </div>

            {/* Bento Card 2: Square */}
            <div className="md:col-span-3 lg:col-span-1 bg-gradient-to-br from-[#0B3D91] to-blue-900 p-10 rounded-[2.5rem] text-white flex flex-col justify-between">
              <FaChartLine className="text-4xl text-[#FFB800]" />
              <h3 className="text-xl font-bold">Skills That Industry Needs</h3>
            </div>

            {/* Bento Card 3: Square */}
            <div className="md:col-span-3 lg:col-span-1 bg-[#FFB800] p-10 rounded-[2.5rem] flex flex-col justify-between text-slate-900">
              <FaShieldAlt className="text-4xl text-[#0B3D91]" />
              <h3 className="text-xl font-bold">Safety & Peace of Mind</h3>
            </div>

            {/* Bento Card 4: Square */}
            <div className="md:col-span-3 lg:col-span-1 border-2 border-slate-100 p-10 rounded-[2.5rem] flex flex-col justify-between hover:bg-slate-50 transition-colors">
              <FaRocket className="text-4xl text-[#0B3D91]" />
              <h3 className="text-xl font-bold text-slate-800">Real Work Exposure</h3>
            </div>

            {/* Bento Card 5: Wide */}
            <div className="md:col-span-6 lg:col-span-2 bg-slate-900 p-10 rounded-[2.5rem] text-white flex items-center gap-8 group">
              <div className="h-20 w-20 shrink-0 rounded-3xl bg-white/10 flex items-center justify-center text-3xl text-[#FFB800]">
                <FaBriefcase />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">Job & Career Security</h3>
                <p className="text-slate-400">Education should lead to opportunity. We ensure career assurance, not uncertainty.</p>
              </div>
            </div>

            {/* Bento Card 6: Square */}
            <div className="md:col-span-3 lg:col-span-1 bg-blue-50 p-10 rounded-[2.5rem] flex flex-col justify-center items-center text-center space-y-4">
              <FaGlobe className="text-4xl text-[#0B3D91]" />
              <h3 className="text-xl font-black text-[#0B3D91]">Global <br/> Opportunities</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final Divider */}
      <div className="h-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent max-w-7xl mx-auto" />
    </div>
  );
};

export default Services;