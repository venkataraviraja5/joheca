import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { FaArrowRight, FaCheckCircle, FaFlag } from "react-icons/fa";

const About = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full">
      {/* Founder’s Message */}
      <section className="relative w-full bg-[url('/images/founder-banner.jpg')] bg-cover bg-center bg-no-repeat">
        {/* Overlay for better readability */}
        <div className="absolute inset-0 bg-opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-5 py-16 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text */}
          <div className="space-y-6 md:space-y-8 text-white md:pr-8">
            <h2 className="text-2xl md:text-4xl font-bold font-poppins">
              Founder’s Message
            </h2>
            <p className="text-sm md:text-lg leading-relaxed font-inter whitespace-pre-line">
              {`Dear Students & Parents,

I grew up in the 90s — a generation filled with dreams but no direction.
We selected MPC or BiPC because everyone else did.
We chose engineering or medicine because we didn’t know our choices.
We entered jobs we didn’t love because there was no roadmap
I saw brilliant science students forcing themselves into software.
I saw math students struggling in science fields they never wanted.
I saw talent getting wasted — silently.
That pain created JoHeCa.
JoHeCa is not just a service.
It is a mission… a commitment… a responsibility.
A promise that the confusion of the 90s will never repeat again.
Through career guidance, job assurance, global training, and insurance protection —
we want every student to walk a path that matches their passion, potential, and purpose.
This is not only about jobs…
It’s about building a stronger next generation —
mentally, emotionally, professionally.
India has 250+ career paths… but most students know only 4–5.
Parents want the best… but don’t know the modern career reality.
Colleges teach subjects… but not skills.
Companies want skills… but don’t find employable graduates.

Your future starts here — with clarity and confidence.

— Founder, JoHeCa`}
            </p>
          </div>

          {/* Image */}
          <div className="md:order-2">
            <img
              src="/images/why-joheca.jpg"
              alt="Why JoHeCa Was Created"
              className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* WHY JOHECA WAS CREATED */}
      <motion.section
        className="relative w-full bg-gradient-to-r from-[#0B3D91] via-[#0B3D91]/90 to-[#FFB800]/20 p-6 md:p-12 shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Decorative Shapes */}
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-[#FFB800]/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#0B3D91]/20 blur-3xl"></div>

        {/* Image */}
        <div className="relative z-10">
          <img
            src="/images/why-created-johega.png"
            alt="Why JoHeCa Was Created"
            className="w-full h-56 md:h-72 object-cover rounded-xl shadow-lg border-4 border-white"
          />
        </div>

        {/* Text */}
        <div className="relative z-10 space-y-6 text-white md:pr-6">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins">
            WHY JOHECA WAS CREATED
          </h2>

          <p className="text-sm md:text-lg leading-relaxed font-inter">
            JoHeCa was created for one reason: <br />
            To end the confusion that destroyed the dreams of millions of
            students.
          </p>

          <p className="text-sm md:text-lg leading-relaxed font-inter font-semibold">
            The truth is simple:
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2">
            {[
              "Students don’t lack talent.",
              "They lack guidance, awareness, direction, and support.",
              "India has 250+ career paths… but most students know only 4–5.",
              "Parents want the best… but don’t know the modern career reality.",
              "Colleges teach subjects… but not skills.",
              "Companies want skills… but don’t find employable graduates.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <HiArrowRight className="text-[#FFB800] mt-1" />
                {point}
              </li>
            ))}
          </ul>

          <p className="text-sm md:text-lg leading-relaxed font-inter">
            JoHeCa bridges all these gaps. We bring together: Career guidance,
            Skill training, Job assurance, Insurance protection, Global
            pathways… into one powerful system, so every student grows in a way
            our generation never could.
          </p>
        </div>
      </motion.section>

      {/* VISION */}
      <motion.section
        className="relative w-full bg-white p-6 md:p-12 shadow-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Decorative Background */}
        <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-[#0B3D91]/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-[#FFB800]/10 blur-3xl"></div>

        {/* Text */}
        <div className="relative z-10 space-y-5 md:pr-6">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#0B3D91]">
            Vision
          </h2>

          <p className="text-sm md:text-lg text-gray-700 leading-relaxed font-inter">
            To create India’s most powerful guidance ecosystem — where every
            child discovers their true strengths, understands every career
            possibility, and chooses their future with clarity, confidence, and
            courage.
            <br />
            <br />
            We, the 90s kids, carried the weight of confusion — MPC or BiPC?
            Engineering or Medicine? Software or something else?
            <br />
            <br />
            Most of us ended up in jobs we never liked — not because we lacked
            talent, but because no one showed us the options, the roadmaps, the
            reality.
            <br />
            <br />
            JoHeCa exists to ensure no child ever walks blind into their future
            again.
          </p>
        </div>

        {/* Image */}
        <div className="relative z-10">
          <img
            src="/images/vision.jpg"
            alt="Vision"
            className="w-full h-56 md:h-72 object-cover rounded-xl shadow-lg border-4 border-[#FFB800]"
          />
        </div>
      </motion.section>

      {/* MISSION */}
      <motion.section
        className="relative w-full bg-gradient-to-r from-[#0B3D91]/10 via-[#FFB800]/20 to-[#0B3D91]/10 p-6 md:p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12 overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Decorative Background */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#FFB800]/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#0B3D91]/20 blur-3xl"></div>

        {/* Image */}
        <div className="relative z-10">
          <img
            src="/images/mission.jpg"
            alt="Mission"
            className="w-full h-56 md:h-72 object-cover rounded-xl shadow-lg border-4 border-white"
          />
        </div>

        {/* Text */}
        <div className="relative z-10 space-y-6 md:pl-6 text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#0B3D91]">
            Mission
          </h2>

          <p className="text-sm md:text-lg leading-relaxed font-inter">
            JoHeCa was created for one reason: <br />
            To end the confusion that destroyed the dreams of millions of
            students.
          </p>

          <p className="text-sm md:text-lg leading-relaxed font-inter font-semibold">
            The truth is simple:
          </p>

          {/* Bullet Points */}
          <ul className="space-y-2">
            {[
              "Students don’t lack talent.",
              "They lack guidance, awareness, direction, and support.",
              "India has 250+ career paths… but most students know only 4–5.",
              "Parents want the best… but don’t know the modern career reality.",
              "Colleges teach subjects… but not skills.",
              "Companies want skills… but don’t find employable graduates.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <HiArrowRight className="text-[#FFB800] mt-1" />
                {point}
              </li>
            ))}
          </ul>

          <p className="text-sm md:text-lg leading-relaxed font-inter">
            JoHeCa bridges all these gaps. We bring together: Career guidance,
            Skill training, Job assurance, Insurance protection, Global
            pathways… into one powerful system, so every student grows in a way
            our generation never could.
          </p>
        </div>
      </motion.section>

      {/* 2030 GOAL */}
      <motion.section
        className="relative w-full bg-white p-6 md:p-12 shadow-xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInUp}
      >
        {/* Decorative Background */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#FFB800]/20 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[#0B3D91]/20 blur-3xl"></div>

        {/* Image */}
        <div className="relative z-10">
          <img
            src="/images/about-us-2030-goal.jpg"
            alt="2030 Goal"
            className="w-full h-56 md:h-72 object-cover rounded-xl shadow-lg border-4 border-[#FFB800]"
          />
        </div>

        {/* Text */}
        <div className="relative z-10 space-y-5 md:pl-6 text-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-[#0B3D91]">
            2030 Goal
          </h2>

          <p className="text-sm md:text-lg leading-relaxed font-inter">
            <span className="font-semibold text-[#FFB800]">
              2030 GOAL — 10 Lakh Students Mission
            </span>
            <br />
            <br />
            By 2030, JoHeCa is committed to building India’s most trusted
            education-to-employment ecosystem by achieving the following:
          </p>

          {/* Points */}
          <ul className="space-y-4 text-sm md:text-lg font-inter">
            {[
              "Empower 10,00,000 students with clarity, confidence, and career support",
              "Partner with 500+ schools and 200+ colleges across India",
              "Provide job assurance and insurance protection to every learner",
              "Send 25,000+ students to the USA, UK, Canada, and Europe",
              "Build India’s most trusted Education-to-Employment Assurance Network",
              "Make every Indian student mentally strong, career-ready, and globally competent",
            ].map((goal, i) => (
              <li key={i} className="flex gap-3 items-start">
                <FaArrowRight className="text-[#FFB800] mt-1 w-4 h-4 flex-shrink-0" />
                <p className="leading-relaxed">{goal}</p>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 pt-3">
            <FaFlag className="text-[#FFB800] text-lg shrink-0" />
            <p className="font-semibold text-gray-900 text-sm md:text-lg font-inter">
              This is not just a goal — this is a national movement for India’s
              next generation.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
