
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaUniversity,
  FaUserGraduate,
  FaCertificate,
  FaWpforms,
  FaPassport,
  FaCheckCircle,
  FaGlobe,
  FaUsers,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";
import { MdDoneAll, MdOutlineFlightTakeoff } from "react-icons/md";
import Marquee from "react-fast-marquee";
import ReactCountryFlag from "react-country-flag";

const steps = [
  { id: 1, title: "Registration", icon: <FaWpforms />, color: "bg-blue-100 text-blue-600" },
  { id: 2, title: "Training", icon: <FaUserGraduate />, color: "bg-purple-100 text-purple-600" },
  { id: 3, title: "Certificate", icon: <FaCertificate />, color: "bg-emerald-100 text-emerald-600" },
  { id: 4, title: "University Application", icon: <FaUniversity />, color: "bg-amber-100 text-amber-600" },
  { id: 5, title: "Visa Assistance", icon: <FaPassport />, color: "bg-rose-100 text-rose-600" },
];

const flags = ["US", "GB", "CA", "AU", "DE", "FR", "IE", "NL", "NZ", "SE", "IT", "ES", "SG"];

const tests = [
  {
    title: "IELTS",
    desc: "Free tutoring from expert instructors for top score results to qualify you for admission.",
    img: "/images/IELTS-2_20260123070916.png",
    tag: "Most Popular",
  },
  {
    title: "PTE",
    desc: "Updated PTE format emphasizes integrated skills, shorter tasks, and faster scoring.",
    img: "/images/pte-1_20260123070935.png",
    tag: "Fast Results",
  },
  {
    title: "TOEFL",
    desc: "Expert guidance to help you master test strategies and achieve high scores confidently.",
    img: "/images/tofel_20260123070951.png",
    tag: "US Standard",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function International() {
  return (
    <div className="w-full bg-white selection:bg-[#FFB800] selection:text-slate-900">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] md:h-[85vh] flex items-center bg-[#0B3D91] overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-400/10 to-transparent skew-x-12" />
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-white space-y-6"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#FFB800] text-sm font-bold tracking-widest uppercase">
              Global Education Pathways
            </span>
            <h1 className="text-4xl md:text-7xl font-black font-poppins leading-[1.1]">
              Your Future <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB800] to-yellow-200">
                Beyond Borders
              </span>
            </h1>
            <p className="text-slate-300 text-lg md:text-xl max-w-lg font-inter">
              Simplifying the complexities of international admissions with expert mentoring and end-to-end visa support.
            </p>
            <button className="bg-[#FFB800] text-slate-900 px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform">
              Start Your Journey <FaArrowRight />
            </button>
          </motion.div>

          <div className="hidden md:flex justify-end">
            <motion.img
              src="/images/international-graduate (2).png"
              alt="Graduate"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="h-[70vh] object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= DESTINATIONS MARQUEE ================= */}
      <div className="py-12 bg-slate-50 border-b border-slate-100">
        <p className="text-center font-bold text-blue-600 uppercase tracking-widest text-xs mb-8">
          Trusted Partners Across Top Destinations
        </p>
        <Marquee speed={50}>
          <div className="flex items-center gap-16 px-8">
            {flags.map((code, index) => (
              <div key={index} className="flex flex-col items-center gap-2 group cursor-pointer">
                <ReactCountryFlag
                  svg
                  countryCode={code}
                  style={{ fontSize: "4rem" }}
             
                />
                <span className="text-[10px] font-bold text-blue-600">{code}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>

      {/* ================= ABOUT STUDY ABROAD ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-50" />
            <motion.img
              src="/images/international-graduate-hero.png"
              alt="Study Abroad"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              className="relative z-10 w-full rounded-[2.5rem] shadow-2xl border-8 border-white"
            />
          </div>

          <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-[#0B3D91] font-poppins leading-tight">
              Fulfil Your Study Abroad <br /> 
              <span className="text-slate-400">Dream with Global Degrees</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Global Degrees makes it easy for you to turn your dream of studying abroad into reality with expert guidance and continuous support.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Personalised academic guidance",
                "Top global universities",
                "Clear admission timelines",
                "Complete application support",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <FaCheckCircle className="text-blue-600 flex-shrink-0" />
                  <span className="text-sm font-bold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= STEP-BY-STEP PATHWAY ================= */}
      <section className="bg-slate-900 py-24 px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white font-poppins mb-4">The Success Pathway</h2>
            <p className="text-slate-400">Five simple steps to your international degree</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="relative group text-center"
              >
                {/* Connector Line */}
                {idx !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-[2px] bg-gradient-to-r from-blue-500/50 to-transparent z-0" />
                )}
                
                <div className={`w-24 h-24 mx-auto mb-6 rounded-3xl ${step.color} flex items-center justify-center text-4xl shadow-xl transition-transform group-hover:rotate-6 group-hover:scale-110`}>
                  {step.icon}
                </div>
                <h4 className="text-white font-bold text-lg mb-2">Step {step.id}</h4>
                <p className="text-slate-400 text-sm font-medium">{step.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= LOANS & FINANCIALS ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto bg-gradient-to-br from-blue-600 to-indigo-800 rounded-[3rem] p-10 md:p-20 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <MdOutlineFlightTakeoff size={300} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-black font-poppins">Fly High with <br/><span className="text-[#FFB800]">Elan Loans</span></h2>
              <p className="text-blue-100 text-lg">Availing an education loan to study in your dream university has never been easier!</p>
              
              <ul className="space-y-4">
                {[
                  "Study Loans through 20+ leading banks",
                  "Financial structuring to suit your university",
                  "Hassle-free documentation & quick disbursal",
                  "Pre-visa disbursal of loans",
                  "Forex & Travel Insurance support",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <div className="bg-[#FFB800] p-1 rounded-full text-slate-900"><MdDoneAll /></div>
                    <span className="font-bold text-sm md:text-base">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <motion.div initial={{ scale: 0.9 }} whileInView={{ scale: 1 }}>
              <img src="/images/Loan.jpg" alt="Loans" className="rounded-3xl shadow-2xl w-full border-4 border-white/20" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= COLLABORATIONS ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-poppins">
              Global University <br/><span className="text-blue-600">Collaborations</span>
            </h2>
            <p className="text-slate-600 leading-relaxed text-lg italic">
              "At JoHeCa, we believe that education knows no borders."
            </p>
            <div className="space-y-6">
              {[
                { icon: <FaGlobe />, title: "Dual-Degree Courses", desc: "Gain certifications from both Indian and international partner institutions." },
                { icon: <FaUsers />, title: "Cultural Exchange", desc: "Participate in immersive exchange programs and specialized training." },
                { icon: <FaBriefcase />, title: "International Internships", desc: "Access global workforce opportunities before you graduate." },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 shrink-0 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-slate-800">{item.title}</h4>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-[3rem] rotate-3 scale-95 opacity-10" />
            <img 
              src="/images/foreign-university-collaboration.jpg" 
              alt="Collab" 
              className="relative rounded-[3rem] w-full h-auto object-cover shadow-xl" 
            />
          </div>
        </div>
      </section>

      {/* ================= TEST PREP ================= */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 font-poppins">Test Preparation</h2>
            <p className="text-slate-500 mt-2">Achieve your target score with JoHeCa expert mentoring</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tests.map((test, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all relative overflow-hidden"
              >
                <span className="absolute top-4 right-4 text-[10px] font-black bg-blue-50 text-blue-600 px-3 py-1 rounded-full uppercase tracking-tighter">
                  {test.tag}
                </span>
                <div className="h-40 flex items-center justify-center mb-8">
                  <img src={test.img} alt={test.title} className="max-h-full object-contain" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{test.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{test.desc}</p>
                <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-blue-600 transition-colors">
                  Join Coaching
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}