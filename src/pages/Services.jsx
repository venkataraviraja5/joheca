import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
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
import {
  Smartphone,
  Globe,
  Monitor,
  ShieldCheck,
  Database,
  Award,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: 1,
    title: "Job Assurance",
    icon: <FaBriefcase />,
    image: "/images/services-job-assurance.JPG",
    color: "from-blue-600 to-indigo-700",
    description:
      "A career-focused program designed to make students job-ready with guaranteed placement assistance. We bridge the gap between academia and industry.",
    points: [
      "Industry-aligned curriculum",
      "Live projects & case studies",
      "Mock interviews",
      "Dedicated placement support",
    ],
  },
  {
    id: 2,
    title: "Insurance",
    icon: <FaHeartbeat />,
    image: "/images/services-insurance.jpg",
    color: "from-emerald-500 to-teal-700",
    description:
      "We ensure student safety and peace of mind by providing essential health and insurance coverage during the entire training period.",
    points: [
      "Health insurance during training",
      "Emergency medical assistance",
      "Accident coverage",
      "Stress-free learning",
    ],
  },
  {
    id: 3,
    title: "Programming",
    icon: <FaCode />,
    image: "/images/services-coding.jpg",
    color: "from-purple-600 to-fuchsia-700",
    description:
      "Hands-on coding programs that build strong technical foundations using modern tools and frameworks. Master the logic, not just the syntax.",
    points: [
      "Full-stack development",
      "Real-world projects",
      "1:1 mentorship",
      "Hackathons",
    ],
  },
  {
    id: 4,
    title: "Internships",
    icon: <FaUserGraduate />,
    image: "/images/services-internship.jpg",
    color: "from-orange-500 to-red-600",
    description:
      "Structured internship programs with startups and enterprises for real industry exposure and professional networking.",
    points: [
      "Paid & unpaid options",
      "Startup exposure",
      "Performance hiring",
      "Professional networking",
    ],
  },
  {
    id: 5,
    title: "Foreign University Training",
    icon: <FaGlobe />,
    image: "/images/services-foreign-university.jpg",
    color: "from-sky-500 to-blue-700",
    description:
      "Training aligned with international university standards for global academic success and seamless transitions to overseas education.",
    points: [
      "Curriculum mapping",
      "Aptitude preparation",
      "Global exposure",
      "Admission readiness",
    ],
  },
  {
    id: 6,
    title: "University Tie-Ups",
    icon: <FaUniversity />,
    image: "/images/services-school-college.jpg",
    color: "from-amber-500 to-yellow-600",
    description:
      "Collaborative programs with institutions to enhance skill-based and future-ready education through faculty and student workshops.",
    points: [
      "Curriculum enhancement",
      "Skill workshops",
      "Faculty training",
      "Career guidance",
    ],
  },
];

const Services = () => {
  return (
    <div className="bg-[#fcfcfd] min-h-screen font-sans selection:bg-[#FFB800] selection:text-slate-900 overflow-x-hidden">
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-10 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-100/50 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-[#0B3D91] uppercase bg-blue-50 rounded-full border border-blue-100">
              Our Services & Ecosystem
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
              Education with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0B3D91] to-blue-600">
                Total Assurance
              </span>
            </h1>
            <p className="max-w-2xl mx-auto text-slate-500 text-lg md:text-xl font-medium leading-relaxed">
              Global exposure, professional security, and real-world learning
              experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICE SHOWCASE (STORYTELLING LAYOUT) ================= */}
      <section className="pb-10 space-y-10">
        {services.map((service, index) => (
          <div key={service.id} className="max-w-7xl mx-auto px-6">
            <div
              className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-12 lg:gap-24 items-center`}
            >
              {/* Image Side */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 relative"
              >
                <div
                  className={`absolute -inset-4 bg-gradient-to-br ${service.color} opacity-10 blur-2xl rounded-[3rem]`}
                />
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-white">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                viewport={{ once: true }}
                className="w-full lg:w-1/2 space-y-8"
              >
                <div className="flex items-center gap-4 text-[#0B3D91]">
                  <div className="p-3 bg-white shadow-lg rounded-2xl text-2xl">
                    {service.icon}
                  </div>
                  <span className="font-bold tracking-widest uppercase text-sm">
                    0{index + 1} — Service
                  </span>
                </div>

                <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
                  {service.title}
                </h2>

                <p className="text-slate-600 text-lg md:text-xl leading-relaxed">
                  {service.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.points.map((point, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-slate-100 shadow-sm group hover:border-[#FFB800] transition-colors"
                    >
                      <div className="h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center text-[#0B3D91] group-hover:bg-[#FFB800] transition-colors">
                        <FaChevronRight size={10} />
                      </div>
                      <span className="font-bold text-slate-700 text-sm">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* ================= THE TECH ENGINE (RE-DESIGNED) ================= */}
      <section className="py-10 bg-slate-900 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              The Tech <span className="text-indigo-400">Engine</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
              A proprietary AI-driven learning ecosystem built for the modern
              student.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* JOHECA APP */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-[3rem] group hover:bg-white/10 transition-all">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-500/20">
                  <Smartphone size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">JOHECA APP</h3>
                  <p className="text-indigo-400 text-xs font-bold tracking-widest uppercase">
                    AI-Driven Learning
                  </p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Video Classes", icon: <Monitor size={16} /> },
                  { label: "AI Chat Support", icon: <Database size={16} /> },
                  { label: "Interview Prep", icon: <Award size={16} /> },
                  {
                    label: "Career Dashboard",
                    icon: <ShieldCheck size={16} />,
                  },
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl text-slate-300 font-bold text-sm border border-white/5 hover:border-indigo-500/50 transition-colors"
                  >
                    <span className="text-indigo-400">{f.icon}</span>
                    {f.label}
                  </li>
                ))}
              </ul>
            </div>

            {/* JOHECA PORTAL */}
            <div className="bg-gradient-to-br from-slate-800 to-slate-950 border border-white/5 p-10 rounded-[3rem] shadow-2xl">
              <div className="flex items-center gap-6 mb-12">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-emerald-500/20">
                  <Globe size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">
                    JOHECA PORTAL
                  </h3>
                  <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase">
                    joheca.in
                  </p>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "College Dashboard",
                  "Admission Tracking",
                  "Referral Management",
                  "Digital Classroom",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl text-slate-400 font-bold text-sm border border-white/5 hover:bg-emerald-500/10 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENTO GRID (THE BELIEF) ================= */}
      <section className="py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">
              What Students <span className="text-[#0B3D91]">Deserve</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-xl mx-auto">
              We believe education should be a protected journey toward a
              meaningful career.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
            <div className="md:col-span-2 bg-slate-50 p-10 rounded-[2.5rem] border border-slate-100 flex flex-col justify-between group hover:bg-[#0B3D91] transition-all duration-500">
              <FaLightbulb className="text-4xl text-[#FFB800]" />
              <div>
                <h3 className="text-2xl font-black mb-2 group-hover:text-white transition-colors">
                  Clarity First
                </h3>
                <p className="text-slate-500 group-hover:text-slate-300">
                  Guidance before choices — not after years of confusion.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#0B3D91] to-blue-900 p-10 rounded-[2.5rem] text-white flex flex-col justify-between">
              <FaChartLine className="text-4xl text-blue-300" />
              <h3 className="text-xl font-bold">Skills That Industry Needs</h3>
            </div>

            <div className="bg-[#FFB800] p-10 rounded-[2.5rem] flex flex-col justify-between text-slate-900">
              <FaShieldAlt className="text-4xl opacity-50" />
              <h3 className="text-xl font-bold">Safety & Peace of Mind</h3>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Services;
