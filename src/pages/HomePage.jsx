import React from "react";
import EducationProblems from "../components/EducationalProblems";
import JoHeCaSolution from "../components/JohegaSolution";
import FlowCard from "../components/FlowCard";
import { FaArrowDown } from "react-icons/fa";
import {
  FaCheckCircle,
  FaUserGraduate,
  FaShieldAlt,
  FaGlobe,
  FaLaptopCode,
  FaMobileAlt,
} from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Testimonials from "../components/Testimonials";
import "reactflow/dist/style.css";


const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};



const Homepage = () => {
  return (
    /* 🔒 HARD STOP horizontal scroll */
    <div className="overflow-x-hidden w-full">
      <section
        className="relative min-h-[90vh] bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: "url('/images/homepage-banner.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-6 md:px-12 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-16">
            {/* LEFT — Heading & Subheading */}
            <motion.div
              className="flex-1 text-center md:text-left space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInUp}
            >
              <h1 className="text-3xl md:text-5xl font-bold text-white font-poppins leading-tight">
                India’s First Education + Job Assurance Ecosystem
              </h1>

              <p className="text-md md:text-xl text-gray-200 font-inter leading-relaxed">
                “Clarity. Confidence. Career. One platform for your child’s
                secure future.”
              </p>

              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300">
                Get Started
              </button>
            </motion.div>

            {/* RIGHT — Image */}
            <motion.div
              className="flex-1 w-full max-w-md md:max-w-lg"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/images/international-student-life.jpg"
                alt="Students exploring careers"
                className="w-full object-cover rounded-xl shadow-2xl bg-blue-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <EducationProblems />
      <JoHeCaSolution />

      {/* ================= FEATURES / BENEFITS / WHO ================= */}
      <section className="relative overflow-hidden py-24 px-4 font-inter text-white mt-5">

  {/* DARK BACKGROUND */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#061B44] via-[#0B3D91] to-[#061B44]" />
  <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#FFB800]/20 rounded-full blur-[120px]" />
  <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-[#EAF1FF]/20 rounded-full blur-[120px]" />
  <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#0B3D91]/60 rounded-full blur-[140px]" />

  {/* CONTENT */}
  <div className="relative max-w-7xl mx-auto space-y-28">

    {/* FEATURES */}
    <div className="grid md:grid-cols-2 gap-14 items-center">
      <motion.img
        src="/images/features-bg.png"
        alt="Features"
        className="w-full max-w-md mx-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      />

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins">
          🎁 Powerful Features
        </h2>

        <ul className="space-y-4">
          {[
            "Complete Career Guidance (Class 8 to Degree)",
            "AI-Based Career Mapping & Skill Assessment",
            "Guaranteed Job Assurance (Legal Bond)",
            "₹5,00,000 Financial Job Protection",
            "Scholarship Support & Health Insurance",
            "USA / UK / Canada / Europe Career Paths",
            "Foreign Education & Visa Assistance",
            "Advanced Programming Training",
            "24/7 Digital Learning Access",
            "Live Internships & Projects",
            "Resume & Interview Mastery",
            "Dedicated Personal Mentor",
            "JoHeCa Mobile App Tracking",
          ].map((item, i) => (
            <li
              key={i}
              className="flex gap-4 items-start bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 hover:bg-white/15 transition"
            >
              <FaCheckCircle className="text-[#FFB800] mt-1 shrink-0 text-lg" />
              <span className="text-white/90">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

    {/* BENEFITS */}
    <div className="grid md:grid-cols-2 gap-16 items-center bg-gradient-to-br from-[#0B3D91] to-[#061B44] rounded-[40px] p-12 shadow-[0_50px_120px_rgba(0,0,0,0.6)]">
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 font-poppins">
          🌟 Real Benefits
        </h2>

        <ul className="space-y-8">
          <li className="flex gap-6">
            <FaUserGraduate className="text-[#FFB800] text-3xl mt-1" />
            <div>
              <h4 className="font-semibold text-xl">Clarity Instead of Confusion</h4>
              <p className="text-white/70">Know exactly what to study and why.</p>
            </div>
          </li>

          <li className="flex gap-6">
            <FaShieldAlt className="text-[#FFB800] text-3xl mt-1" />
            <div>
              <h4 className="font-semibold text-xl">Security & Peace of Mind</h4>
              <p className="text-white/70">Job assurance with financial protection.</p>
            </div>
          </li>

          <li className="flex gap-6">
            <FaLaptopCode className="text-[#FFB800] text-3xl mt-1" />
            <div>
              <h4 className="font-semibold text-xl">Practical Skill Growth</h4>
              <p className="text-white/70">Hands-on coding, projects & internships.</p>
            </div>
          </li>

          <li className="flex gap-6">
            <FaGlobe className="text-[#FFB800] text-3xl mt-1" />
            <div>
              <h4 className="font-semibold text-xl">Global Career Paths</h4>
              <p className="text-white/70">International education & job options.</p>
            </div>
          </li>

          <li className="flex gap-6">
            <FaMobileAlt className="text-[#FFB800] text-3xl mt-1" />
            <div>
              <h4 className="font-semibold text-xl">Lifetime Mentorship</h4>
              <p className="text-white/70">Support until placement and beyond.</p>
            </div>
          </li>
        </ul>
      </motion.div>

      <motion.img
        src="/images/benefits-removebg-preview.png"
        alt="Benefits"
        className="w-full max-w-md mx-auto drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      />
    </div>

    {/* WHO SHOULD JOIN */}
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <motion.img
        src="/images/who-should-join.jpg"
        alt="Who Should Join"
        className="w-full max-w-md mx-auto rounded-3xl shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
      />

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-poppins">
          🎯 Who Should Join?
        </h2>

        <ul className="space-y-5">
          {[
            "Students from Class 8 to Degree",
            "Students seeking guaranteed jobs",
            "Parents wanting a secure future",
            "Students targeting global careers",
            "Anyone needing clarity & confidence",
          ].map((item, i) => (
            <li
              key={i}
              className="flex gap-4 bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition"
            >
              <FaCheckCircle className="text-[#FFB800] mt-1 shrink-0 text-lg" />
              <span className="text-white/90">{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>

  </div>
</section>


      {/* FLOW SECTION */}

      <section className="bg-[#0B3D91] py-20 mt-6 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

    {/* LEFT IMAGE */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <img
        src="/images/student-journey-flowchart.png"
        alt="Student Journey"
        className="w-full max-w-md lg:max-w-lg rounded-2xl shadow-2xl"
      />
    </motion.div>

    {/* RIGHT CONTENT */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold leading-tight font-poppins">
        Student Career <span className="text-[#FFB800]">Journey</span>
      </h2>

      <p className="mt-6 text-blue-100 text-lg font-inter max-w-xl">
        Your career shouldn’t be confusing. We provide a clear, guided path
        that takes you from learning to earning — with confidence, clarity,
        and guaranteed outcomes.
      </p>

      {/* FEATURES LIST */}
      <ul className="mt-8 space-y-4 text-blue-50 font-inter">
        {[
          "Structured roadmap from registration to placement",
          "Industry-ready skill training & real projects",
          "Internships with hands-on experience",
          "Job assurance with long-term career growth",
          "Dedicated mentors at every stage",
        ].map((item, i) => (
          <li key={i} className="flex gap-3 items-start">
            <span className="text-[#FFB800] text-xl">✔</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* CTA BUTTON */}
      <div className="mt-10">
        <button className="bg-[#FFB800] text-[#0B3D91] px-8 py-4 rounded-xl font-semibold text-lg font-inter shadow-lg hover:scale-105 transition">
          Join Now
        </button>
      </div>
    </motion.div>

  </div>
</section>


      <section>
        <Testimonials />
      </section>
    </div>
  );
};

export default Homepage;
