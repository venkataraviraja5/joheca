// import React from "react";
// import EducationProblems from "../components/EducationalProblems";
// import JoHeCaSolution from "../components/JohegaSolution";
// import FlowCard from "../components/FlowCard";
// import { FaArrowDown } from "react-icons/fa";
// import {
//   FaCheckCircle,
//   FaUserGraduate,
//   FaShieldAlt,
//   FaGlobe,
//   FaLaptopCode,
//   FaMobileAlt,
// } from "react-icons/fa";
// // eslint-disable-next-line no-unused-vars
// import { motion } from "framer-motion";
// import Testimonials from "../components/Testimonials";
// import "reactflow/dist/style.css";

// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.8, ease: "easeOut" },
//   },
// };

// const Homepage = () => {
//   return (
//     /* 🔒 HARD STOP horizontal scroll */
//     <div className="overflow-x-hidden w-full">
//       <section
//         className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center"
//         style={{ backgroundImage: "url('/images/homepage-banner.jpg')" }}
//       >
//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40"></div>

//         <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
//           <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
//             {/* LEFT — Heading & Subheading */}
//             <motion.div
//               className="flex-1 text-center md:text-left space-y-6"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.3 }}
//               variants={fadeInUp}
//             >
//               <h1 className="text-3xl md:text-5xl font-bold text-white font-poppins leading-tight">
//                 India’s First Education + Job Assurance Ecosystem
//               </h1>

//               <p className="text-md md:text-xl text-gray-200 font-inter leading-relaxed">
//                 “Clarity. Confidence. Career. One platform for your child’s
//                 secure future.”
//               </p>

//               <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
//                 Get Started
//               </button>
//             </motion.div>

//             {/* RIGHT — Image */}
//             <motion.div
//               className="flex-1 w-full max-w-md md:max-w-lg"
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, amount: 0.3 }}
//               transition={{ duration: 0.8 }}
//             >
//               <img
//                 src="/images/international-student-life.jpg"
//                 alt="Students exploring careers"
//                 className="w-full object-cover rounded-xl shadow-2xl bg-blue-700"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Problems Section */}
//       <EducationProblems />
//       <JoHeCaSolution />

//       {/* ================= FEATURES / BENEFITS / WHO ================= */}
//       <section className="relative overflow-hidden py-24 px-4 font-inter text-white mt-5">

//   {/* DARK BACKGROUND */}
//   <div className="absolute inset-0 bg-gradient-to-br from-[#061B44] via-[#0B3D91] to-[#061B44]" />
//   <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FFB800]/20 rounded-full blur-[120px]" />
//   <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#EAF1FF]/20 rounded-full blur-[120px]" />
//   <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#0B3D91]/60 rounded-full blur-[140px]" />

//   {/* CONTENT */}
//   <div className="relative max-w-7xl mx-auto space-y-28">

//     {/* FEATURES */}
//     <div className="grid md:grid-cols-2 gap-14 items-center">
//       <motion.img
//         src="/images/features-bg.png"
//         alt="Features"
//         className="w-full max-w-md mx-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
//         initial={{ opacity: 0, x: -60 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.9 }}
//       />

//       <motion.div
//         initial={{ opacity: 0, x: 60 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.9 }}
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins">
//           🎁 Powerful Features
//         </h2>

//         <ul className="space-y-4">
//           {[
//             "Complete Career Guidance (Class 8 to Degree)",
//             "AI-Based Career Mapping & Skill Assessment",
//             "Guaranteed Job Assurance (Legal Bond)",
//             "₹5,00,000 Financial Job Protection",
//             "Scholarship Support & Health Insurance",
//             "USA / UK / Canada / Europe Career Paths",
//             "Foreign Education & Visa Assistance",
//             "Advanced Programming Training",
//             "24/7 Digital Learning Access",
//             "Live Internships & Projects",
//             "Resume & Interview Mastery",
//             "Dedicated Personal Mentor",
//             "JoHeCa Mobile App Tracking",
//           ].map((item, i) => (
//             <li
//               key={i}
//               className="flex gap-4 items-start bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:bg-white/15 transition"
//             >
//               <FaCheckCircle className="text-[#FFB800] mt-1 shrink-0 text-lg" />
//               <span className="text-white/90">{item}</span>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     </div>

//     {/* BENEFITS */}
//     <div className="grid md:grid-cols-2 gap-16 items-center bg-gradient-to-br from-[#0B3D91] to-[#061B44] rounded-[40px] p-12 shadow-[0_50px_120px_rgba(0,0,0,0.6)]">
//       <motion.div
//         initial={{ opacity: 0, x: -60 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.9 }}
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-10 font-poppins">
//           🌟 Real Benefits
//         </h2>

//         <ul className="space-y-8">
//           <li className="flex gap-6">
//             <FaUserGraduate className="text-[#FFB800] text-3xl mt-1" />
//             <div>
//               <h4 className="font-semibold text-xl">Clarity Instead of Confusion</h4>
//               <p className="text-white/70">Know exactly what to study and why.</p>
//             </div>
//           </li>

//           <li className="flex gap-6">
//             <FaShieldAlt className="text-[#FFB800] text-3xl mt-1" />
//             <div>
//               <h4 className="font-semibold text-xl">Security & Peace of Mind</h4>
//               <p className="text-white/70">Job assurance with financial protection.</p>
//             </div>
//           </li>

//           <li className="flex gap-6">
//             <FaLaptopCode className="text-[#FFB800] text-3xl mt-1" />
//             <div>
//               <h4 className="font-semibold text-xl">Practical Skill Growth</h4>
//               <p className="text-white/70">Hands-on coding, projects & internships.</p>
//             </div>
//           </li>

//           <li className="flex gap-6">
//             <FaGlobe className="text-[#FFB800] text-3xl mt-1" />
//             <div>
//               <h4 className="font-semibold text-xl">Global Career Paths</h4>
//               <p className="text-white/70">International education & job options.</p>
//             </div>
//           </li>

//           <li className="flex gap-6">
//             <FaMobileAlt className="text-[#FFB800] text-3xl mt-1" />
//             <div>
//               <h4 className="font-semibold text-xl">Lifetime Mentorship</h4>
//               <p className="text-white/70">Support until placement and beyond.</p>
//             </div>
//           </li>
//         </ul>
//       </motion.div>

//       <motion.img
//         src="/images/benefits-removebg-preview.png"
//         alt="Benefits"
//         className="w-full max-w-md mx-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
//         initial={{ opacity: 0, x: 60 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.9 }}
//       />
//     </div>

//     {/* WHO SHOULD JOIN */}
//     <div className="grid md:grid-cols-2 gap-16 items-center">
//       <motion.img
//         src="/images/who-should-join.jpg"
//         alt="Who Should Join"
//         className="w-full max-w-md mx-auto rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
//         initial={{ opacity: 0, scale: 0.9 }}
//         whileInView={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.9 }}
//       />

//       <motion.div
//         initial={{ opacity: 0, x: 60 }}
//         whileInView={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.9 }}
//       >
//         <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins">
//           🎯 Who Should Join?
//         </h2>

//         <ul className="space-y-5">
//           {[
//             "Students from Class 8 to Degree",
//             "Students seeking guaranteed jobs",
//             "Parents wanting a secure future",
//             "Students targeting global careers",
//             "Anyone needing clarity & confidence",
//           ].map((item, i) => (
//             <li
//               key={i}
//               className="flex gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition"
//             >
//               <FaCheckCircle className="text-[#FFB800] mt-1 shrink-0 text-lg" />
//               <span className="text-white/90">{item}</span>
//             </li>
//           ))}
//         </ul>
//       </motion.div>
//     </div>

//   </div>
// </section>

//       {/* FLOW SECTION */}

//       <section className="bg-[#0B3D91] py-20 mt-6 overflow-hidden">
//   <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

//     {/* LEFT IMAGE */}
//     <motion.div
//       initial={{ opacity: 0, x: -40 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="flex justify-center"
//     >
//       <img
//         src="/images/student-journey-flowchart.png"
//         alt="Student Journey"
//         className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
//       />
//     </motion.div>

//     {/* RIGHT CONTENT */}
//     <motion.div
//       initial={{ opacity: 0, x: 40 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.6 }}
//       viewport={{ once: true }}
//       className="text-white"
//     >
//       <h2 className="text-4xl md:text-5xl font-bold leading-tight font-poppins">
//         Student Career <span className="text-[#FFB800]">Journey</span>
//       </h2>

//       <p className="mt-6 text-blue-100 text-lg font-inter max-w-xl">
//         Your career shouldn’t be confusing. We provide a clear, guided path
//         that takes you from learning to earning — with confidence, clarity,
//         and guaranteed outcomes.
//       </p>

//       {/* FEATURES LIST */}
//       <ul className="mt-8 space-y-4 text-blue-50 font-inter">
//         {[
//           "Structured roadmap from registration to placement",
//           "Industry-ready skill training & real projects",
//           "Internships with hands-on experience",
//           "Job assurance with long-term career growth",
//           "Dedicated mentors at every stage",
//         ].map((item, i) => (
//           <li key={i} className="flex gap-3 items-start">
//             <span className="text-[#FFB800] text-xl">✔</span>
//             <span>{item}</span>
//           </li>
//         ))}
//       </ul>

//       {/* CTA BUTTON */}
//       <div className="mt-10">
//         <button className="bg-[#FFB800] text-[#0B3D91] px-8 py-4 rounded-xl font-semibold text-lg font-inter shadow-lg hover:scale-105 transition">
//           Join Now
//         </button>
//       </div>
//     </motion.div>

//   </div>
// </section>

//       <section>
//         <Testimonials />
//       </section>
//     </div>
//   );
// };

// export default Homepage;

import React from "react";
import {
  BookOpen,
  Target,
  Globe,
  Handshake,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  Globe2,
  CheckCircle2,
  ChevronRight,
  Sparkles,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import Testimonials from "../components/Testimonials";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { CheckCircle, Users, Rocket, Laptop } from "lucide-react";

const steps = [
  {
    title: "Join Course",
    desc: "Start your journey with a structured roadmap.",
    icon: <Laptop className="text-blue-500" />,
  },
  {
    title: "Learn from Mentors",
    desc: "Get 1-on-1 guidance from industry experts.",
    icon: <Users className="text-purple-500" />,
  },
  {
    title: "Work on Real Projects",
    desc: "Build a portfolio that stands out.",
    icon: <Rocket className="text-orange-500" />,
  },
  {
    title: "Internship Support",
    desc: "Gain hands-on experience in top companies.",
    icon: <CheckCircle className="text-green-500" />,
  },
  {
    title: "Job Placement 🎉",
    desc: "Land your dream job and start your career.",
    icon: <Briefcase className="text-pink-500" />,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants = {
  hover: { y: -10, transition: { duration: 0.3, ease: "easeInOut" } },
  floating: (custom) => ({
    y: [0, custom, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }),
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* --- Hero Section --- */}
      <section className="relative pt-32 pb-20 px-6 md:px-16 bg-gradient-to-br from-[#e8f1f8] via-[#fdfbf7] to-white">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,_#3b82f6_0%,_transparent_70%)]" />

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-100 overflow-hidden border-8 border-white shadow-2xl">
                <img
                  src="/api/placeholder/400/400"
                  alt="Krishna Wisdom"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -top-10 -right-10 w-32 h-32 text-blue-400 opacity-60">
                <Globe2 size={120} strokeWidth={0.5} />
              </div>
            </div>
          </div>

          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a4b8c] leading-tight mb-4">
              Empowering Students with <br /> Knowledge, Skills & Career
              Security
            </h1>
            <p className="text-lg italic text-blue-600 mb-8 font-medium">
              Education that prepares you for life, career & future
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                to="/degree-programs"
                className="bg-[#f0b429] hover:bg-[#d69e1f] text-blue-900 font-bold py-3 px-8 rounded-md transition shadow-lg"
              >
                Explore Programs
              </Link>
              <Link
                to="/mentorship"
                className="bg-[#1a4b8c] hover:bg-[#123666] text-white font-bold py-3 px-8 rounded-md transition shadow-lg"
              >
                Talk to Counselor
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen bg-gray-50 flex items-center justify-center p-6 sm:p-12 font-sans overflow-hidden">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Steps Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-black text-gray-900 mb-8 tracking-tight">
              How It{" "}
              <span className="text-blue-600 relative inline-block">
                Works
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="#2563eb"
                    strokeWidth="4"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h2>

            <div className="space-y-4">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-white/50 hover:bg-white border border-transparent hover:border-blue-100 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-16 h-16 text-white rounded-2xl shadow-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="text-sm md:text-xl font-bold text-gray-800 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Enhanced Image Grid */}
          <motion.div
            className="relative grid grid-cols-2 gap-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Column 1 */}
            <div className="space-y-4">
              <motion.img
                animate="floating"
                custom={15}
                whileHover="hover"
                src="images/homepage-grid-1.jpg"
                alt="Learning"
                className="rounded-3xl shadow-2xl w-full object-cover h-48 md:h-64 border-4 border-white"
              />
              <motion.img
                variants={imageVariants}
                animate="floating"
                custom={-20}
                whileHover="hover"
                src="/images/homepage-grid-2.jpg"
                alt="Mentorship"
                className="rounded-3xl shadow-2xl w-full object-cover h-64 md:h-80 border-4 border-white"
              />
            </div>

            {/* Column 2 - Offset */}
            <div className="space-y-4 pt-12">
              <motion.img
                variants={imageVariants}
                animate="floating"
                custom={-15}
                whileHover="hover"
                src="/images/homepage-grid-3.jpg"
                alt="Project"
                className="rounded-3xl shadow-2xl w-full object-cover h-64 md:h-80 border-4 border-white"
              />
              <motion.img
                variants={imageVariants}
                animate="floating"
                custom={20}
                whileHover="hover"
                src="/images/homepage-grid-4.jpg"
                alt="Job"
                className="rounded-3xl shadow-2xl w-full object-cover h-48 md:h-64 border-4 border-white"
              />
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/20 rounded-full blur-[100px]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- Wisdom Section --- */}
     <section className="py-12 md:py-20 px-4 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center justify-center mb-3 text-center">
          <h2 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">
            Modern <span className="text-blue-600 italic font-serif">Careers</span>
          </h2>
        </div>

        {/* Compact Asymmetric 2-Column Grid */}
        <div className="grid grid-cols-2 gap-3 md:gap-6">
  
  {/* Column 1 */}
  <div className="space-y-3 md:space-y-6">
    {/* 01 Knowledge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative group rounded-2xl overflow-hidden h-44 md:h-56 shadow-md"
    >
      <img
        src="/images/careers-1.jpg"
        alt="Knowledge"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent" />
      <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <BookOpen className="text-amber-400" size={18} />
          </div>
          <span className="text-white/20 font-black text-2xl">01</span>
        </div>
        <div>
          <h3 className="text-white font-bold text-sm md:text-lg mb-2">Job Assurance</h3>
          <Link
            to="/job-assurance"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-[9px] md:text-[11px] font-bold uppercase tracking-wider transition-all"
          >
            Read More <ArrowRight size={12} className="text-amber-400" />
          </Link>
        </div>
      </div>
    </motion.div>

    {/* 03 Global Vision */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative group rounded-2xl overflow-hidden h-52 md:h-64 shadow-md"
    >
      <img
        src="/images/careers-2.jpg"
        alt="Global Vision"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
      <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <Globe className="text-blue-400" size={18} />
          </div>
          <span className="text-white/20 font-black text-2xl">03</span>
        </div>
        <div>
          <h3 className="text-white font-bold text-sm md:text-lg mb-2">Global Vision</h3>
          <Link
            to="/global-vision"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-[9px] md:text-[11px] font-bold uppercase tracking-wider transition-all"
          >
            Read More <ArrowRight size={12} className="text-blue-400" />
          </Link>
        </div>
      </div>
    </motion.div>
  </div>

  {/* Column 2 */}
  <div className="space-y-3 md:space-y-6 pt-6 md:pt-12">
    {/* 02 Purpose */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative group rounded-2xl overflow-hidden h-52 md:h-64 shadow-md"
    >
      <img
        src="/images/careers-3.jpg"
        alt="Purpose"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-900/40 to-transparent" />
      <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <Target className="text-amber-400" size={18} />
          </div>
          <span className="text-white/20 font-black text-2xl">02</span>
        </div>
        <div>
          <h3 className="text-white font-bold text-sm md:text-lg mb-2">Purpose</h3>
          <Link
            to="/purpose"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-[9px] md:text-[11px] font-bold uppercase tracking-wider transition-all"
          >
            Read More <ArrowRight size={12} className="text-amber-400" />
          </Link>
        </div>
      </div>
    </motion.div>

    {/* 04 Ethics */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="relative group rounded-2xl overflow-hidden h-44 md:h-56 shadow-md"
    >
      <img
        src="/images/careers-4.jpg"
        alt="Ethics"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/90 via-blue-950/40 to-transparent" />
      <div className="absolute inset-0 p-4 flex flex-col justify-between z-10">
        <div className="flex justify-between items-start">
          <div className="p-1.5 bg-white/10 backdrop-blur-md rounded-lg border border-white/20">
            <Handshake className="text-white" size={18} />
          </div>
          <span className="text-white/20 font-black text-2xl">04</span>
        </div>
        <div>
          <h3 className="text-white font-bold text-sm md:text-lg mb-2">Ethical Growth</h3>
          <Link
            to="/ethical-growth"
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 rounded-full text-white text-[9px] md:text-[11px] font-bold uppercase tracking-wider transition-all"
          >
            Read More <ArrowRight size={12} className="text-amber-400" />
          </Link>
        </div>
      </div>
    </motion.div>
  </div>

</div>

      </div>
    </section>

      <section className="bg-[#1a4b8c] text-white py-5 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold">10,000+</div>
            <div className="text-blue-200 text-sm">Students Guided</div>
          </div>
          <div>
            <div className="text-3xl font-bold">90%+</div>
            <div className="text-blue-200 text-sm">Career Success Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold">25+</div>
            <div className="text-blue-200 text-sm">Cities Across India</div>
          </div>
          <div>
            <div className="text-3xl font-bold italic">Global</div>
            <div className="text-blue-200 text-sm">Opportunities</div>
          </div>
        </div>
      </section>

      {/* --- Pillars Section --- */}
      <section className="py-10 bg-[#f8fafc] relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-0 -left-20 w-72 h-72 bg-blue-100 rounded-full blur-[120px] opacity-60" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Our 4 Pillars of <span className="text-blue-600">Success</span>
          </h2>
          <div className="flex justify-center items-center gap-3">
             <span className="text-amber-500 font-bold">◆</span>
             <p className="text-slate-500 font-medium uppercase tracking-[0.2em] text-xs md:text-sm">The Foundation of Excellence</p>
             <span className="text-amber-500 font-bold">◆</span>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Academic Excellence",
              icon: <GraduationCap size={28} />,
              link: "/academic-excellence",
              img: "",
              desc: "Achieve top-tier results with our specialized academic mentorship."
            },
            {
              name: "Career Readiness",
              icon: <Briefcase size={28} />,
              link: "/career-readiness",
              img: "/images/pillars-2.jpg",
              desc: "Bridge the gap between education and the professional world."
            },
            {
              name: "Financial Security",
              icon: <ShieldCheck size={28} />,
              link: "/financial-security",
              img: "/images/pillars-3.jpg",
              desc: "Plan your future with confidence and sustainable growth."
            },
            {
              name: "Global Opportunities",
              icon: <Globe2 size={28} />,
              link: "/international",
              img: "/images/pillars-4.jpg",
              desc: "Unlock international pathways and expand your horizons."
            }
          ].map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={pillar.link}
                className="group relative block h-[420px] rounded-[2.5rem] overflow-hidden bg-slate-900 shadow-xl shadow-slate-200"
              >
                {/* Background Image Layer */}
                <img 
                  src={pillar.img} 
                  alt={pillar.name}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700 ease-in-out"
                />
                
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />

                {/* Card Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-left">
                  <div className="mb-4 p-3 bg-white/10 backdrop-blur-md rounded-2xl text-amber-400 border border-white/20 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                    {pillar.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                    {pillar.name}
                  </h3>
                  
                  <div className="h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-white text-xs font-bold uppercase tracking-widest border-b border-white/30 pb-1 group-hover:border-amber-500 transition-colors">
                    Learn More <ArrowUpRight size={14} className="text-amber-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* --- Programs Section --- */}
      {/* <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-12 italic flex items-center justify-center gap-3">
          <span className="text-amber-400">◆</span> Our Programs{" "}
          <span className="text-amber-400">◆</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { name: "Degree Programs", link: "/degree-programs" },
            { name: "Skill Courses", link: "/skill-courses" },
            { name: "AI Training", link: "/ai-training" },
            { name: "Career Mentorship", link: "/mentorship" },
          ].map((prog, i) => (
            <Link
              key={i}
              to={prog.link}
              className="bg-white rounded-xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl transition"
            >
              <img
                src={`/api/placeholder/300/200`}
                alt={prog.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-bold text-blue-900 mb-4">{prog.name}</h3>
                <button className="bg-[#1a4b8c] text-white text-xs px-4 py-2 rounded hover:bg-blue-800">
                  Learn More &gt;
                </button>
              </div>
            </Link>
          ))}
        </div>
      </section> */}

      {/* --- Why Choose Section --- */}
      <section className="py-16 px-6 md:px-16 bg-blue-50/50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Why Choose JoHeCa?
            </h2>
            <ul className="space-y-4">
              {[
                "Industry-Oriented Curriculum",
                "AI for Every Student",
                "Real-World Exposure",
                "Mentors, Not Just Teachers",
              ].map((text, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-blue-800 font-medium border-b border-blue-100 pb-2"
                >
                  <CheckCircle2 size={18} className="text-amber-500" /> {text}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src="/api/placeholder/600/400"
              alt="Students collaborating"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section>
        <Testimonials />
      </section>

      <section className="md:py-20 md:px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative md:rounded-[2.5rem] overflow-hidden bg-gray-900 shadow-2xl shadow-blue-900/20"
          >
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover opacity-40 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-sm font-medium mb-6 backdrop-blur-md"
                >
                  <Sparkles size={16} />
                  <span>Ready to begin?</span>
                </motion.div>

                <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Let’s build something <br />
                  <span className="text-blue-500 italic">
                    extraordinary
                  </span>{" "}
                  together.
                </h2>

                <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-8">
                  Join hundreds of others who have transformed their careers.
                  Our team is ready to guide you through every step of the
                  journey.
                </p>

                <motion.a
                  href="/contact" // Replace with your contact page route
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center gap-3 md:px-10 px-7 md:py-5 py-3 bg-blue-600 text-white rounded-2xl font-bold text-lg shadow-xl shadow-blue-600/30 overflow-hidden transition-all hover:bg-blue-500"
                >
                  <span className="relative z-10">Get In Touch</span>
                  <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />

                  {/* Button Shine Effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                </motion.a>
              </div>

              {/* Right Side: Visual Graphic/Minimalism */}
              <div className="hidden lg:flex justify-end">
                <div className="relative">
                  {/* Floating Decorative Rings */}
                  <div className="w-64 h-64 border-2 border-blue-500/30 rounded-full animate-[ping_3s_linear_infinite]" />
                  <div className="absolute inset-0 w-64 h-64 border border-white/10 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-blue-600/20 backdrop-blur-3xl rounded-full flex items-center justify-center border border-white/20">
                      <div className="text-white text-5xl font-black">?</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Corner Blobs */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-600/40 rounded-full blur-[100px]" />
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-600/20 rounded-full blur-[100px]" />
          </motion.div>
        </div>

        {/* Tailwind Animation Extension */}
        <style jsx>{`
          @keyframes shimmer {
            100% {
              transform: translateX(100%);
            }
          }
        `}</style>
      </section>
    </div>
  );
};

export default HomePage;
