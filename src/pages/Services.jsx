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
} from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Job Assurance Program",
    icon: <FaBriefcase />,
    image: "/images/services-job-assurance.JPG",
    description:
      "A career-focused program designed to make students job-ready with guaranteed placement assistance.",
    points: [
      "Industry-aligned curriculum",
      "Live projects & case studies",
      "Mock interviews & resume building",
      "Dedicated placement support",
    ],
  },
  {
    id: 2,
    title: "Insurance & Health Coverage",
    icon: <FaHeartbeat />,
    image: "/images/services-insurance.jpg",
    description:
      "We ensure student safety and peace of mind by providing essential health and insurance coverage.",
    points: [
      "Health insurance during training",
      "Emergency medical assistance",
      "Accident coverage",
      "Stress-free learning environment",
    ],
  },
  {
    id: 3,
    title: "Programming & Coding Training",
    icon: <FaCode />,
    image: "/images/services-coding.jpg",
    description:
      "Hands-on coding programs that build strong technical foundations using modern tools and frameworks.",
    points: [
      "Full-stack development training",
      "Real-world projects",
      "1:1 mentorship from experts",
      "Hackathons & coding challenges",
    ],
  },
  {
    id: 4,
    title: "Internship Pathways",
    icon: <FaUserGraduate />,
    image: "/images/services-internship.jpg",
    description:
      "Structured internship programs with startups and enterprises for real industry exposure.",
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
    description:
      "Training aligned with international university standards for global academic success.",
    points: [
      "Foreign university curriculum mapping",
      "Skill & aptitude preparation",
      "Global exposure programs",
      "Admission readiness support",
    ],
  },
  {
    id: 6,
    title: "School & College Tie-Ups",
    icon: <FaUniversity />,
    image: "/images/services-school-college.jpg",
    description:
      "Collaborative programs with institutions to enhance skill-based and future-ready education.",
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
    <div className="">
      {/* Header */}
      <div
        className="flex justify-center items-center mb-12 py-20 px-4 bg-cover bg-center relative overflow-hidden md:h-[100vh]"
        style={{
          backgroundImage: "url('/images/services-banner.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 ">
          <p
            className="mt-4 max-w-2xl text-black mx-auto text-gray-100
            text-lg md:text-xl
            leading-relaxed
            tracking-wide font-poppins"
          >
            Empowering students with career-driven programs, global exposure,
            and real-world learning experiences.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-10 hide-scrollbar md:px-[100px] p-2">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setActive(service)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm md:text-base whitespace-nowrap transition-all cursor-pointer
              ${
                active.id === service.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            <span className="text-lg">{service.icon}</span>
            {service.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <section className="md:px-[100px] p-2">
        <AnimatePresence mode="wait">
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Image */}
          <div>
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              {active.title}
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              {active.description}
            </p>

            <ul className="space-y-3">
              {active.points.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <span className="text-blue-600 mt-1">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>
      </section>
    </div>
  );
};

export default Services;
