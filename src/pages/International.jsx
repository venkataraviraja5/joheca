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
  FaHandshake,
} from "react-icons/fa";
import { MdDoneAll } from "react-icons/md";
import Marquee from "react-fast-marquee";
import ReactCountryFlag from "react-country-flag";

const steps = [
  { id: 1, title: "Registration", icon: <FaWpforms /> },
  { id: 2, title: "Training", icon: <FaUserGraduate /> },
  { id: 3, title: "Certificate", icon: <FaCertificate /> },
  { id: 4, title: "College Application", icon: <FaUniversity /> },
  { id: 5, title: "Visa Assistance", icon: <FaPassport /> },
];

const flags = [
  "US", // United States
  "GB", // United Kingdom
  "CA", // Canada
  "AU", // Australia
  "DE", // Germany
  "FR", // France
  "IE", // Ireland
  "NL", // Netherlands
  "NZ", // New Zealand
  "SE", // Sweden
  "IT", // Italy
  "ES", // Spain
  "SG", // Singapore
];

const benefits = [
  "Study Loans through 20+ leading banks",
  "Financial structuring to suit your university",
  "Hassle free documentation",
  "Pre-visa disbursal of loans",
  "Forex & Travel Insurance",
];

const tests = [
  {
    title: "IELTS",
    desc: "Free tutoring from expert instructors for top score results to qualify you for admission.",
    img: "/images/IELTS-2_20260123070916.png",
  },
  {
    title: "PTE",
    desc: "Updated PTE format emphasizes integrated skills, shorter tasks, and faster scoring.",
    img: "/images/pte-1_20260123070935.png",
  },
  {
    title: "TOEFL",
    desc: "Expert guidance to help you master test strategies and achieve high scores confidently.",
    img: "/images/tofel_20260123070951.png",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function International() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Banner */}
      <section
        className="relative w-full h-[30vh] md:h-[80vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/international banner.jpg')",
        }}
      >
        <div className="absolute inset-0 flex items-center md:pl-[200px] pl-[50px]">
          <motion.img
            src="/images/international-graduate (2).png"
            alt="International Graduate"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="h-[22vh] md:h-[60vh] max-w-full object-contain"
          />
        </div>
      </section>

      {/* About */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.img
            src="/images/international-graduate-hero.png"
            alt="Study Abroad"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full h-[300px] md:h-[450px] object-contain rounded-2xl shadow-lg max-w-full"
          />

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-2xl md:text-4xl font-bold">
              Fulfil Your Study Abroad Dream With Global Degrees
            </h2>

            <p className="text-gray-600">
              Global Degrees makes it easy for you to turn your dream of
              studying abroad into reality with expert guidance and continuous
              support.
            </p>

            <ul className="space-y-3">
              {[
                "Personalised academic guidance",
                "Top global universities",
                "Clear admission timelines",
                "Complete application support",
                "Transparent guidance from start to finish",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <div className="overflow-hidden w-full">
        <div className="text-xl md:text-3xl font-bold flex justify-center items-center text-gray-900 font-poppins">
          Our Top Destinations
        </div>
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover
          loop={0} // infinite
          className="mt-5"
        >
          <div className="flex items-center gap-16 px-8">
            {[...flags, ...flags].map((code, index) => (
              <ReactCountryFlag
                key={index}
                svg
                countryCode={code}
                style={{ fontSize: "5rem" }}
              />
            ))}
          </div>
        </Marquee>
      </div>

      <section>
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 md:p-12 rounded-xl shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {/* LEFT — Content */}
          <div className="space-y-6">
            <h2 className="text-xl md:text-3xl font-bold text-gray-900 font-poppins">
              Life as an International Student
            </h2>

            <p className="text-sm md:text-lg text-gray-700 leading-relaxed font-inter">
              Studying abroad is more than earning a degree — it’s about
              independence, global exposure, cultural growth, and building a
              future without borders.
            </p>

            <ul className="space-y-4 text-sm md:text-lg text-gray-700 font-inter">
              <li className="flex gap-3 items-start">
                <FaUniversity className="text-indigo-600 mt-1 w-5 h-5 flex-shrink-0" />
                <p>
                  World-class universities with practical, research-driven
                  education
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <FaGlobe className="text-indigo-600 mt-1 w-5 h-5 flex-shrink-0" />
                <p>
                  Global exposure through diverse cultures, perspectives, and
                  ideas
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <FaUsers className="text-indigo-600 mt-1 w-5 h-5 flex-shrink-0" />
                <p>
                  Build lifelong international networks and meaningful
                  friendships
                </p>
              </li>

              <li className="flex gap-3 items-start">
                <FaBriefcase className="text-indigo-600 mt-1 w-5 h-5 flex-shrink-0" />
                <p>
                  Access global internships, part-time jobs, and post-study work
                  opportunities
                </p>
              </li>
            </ul>
          </div>

          {/* RIGHT — Image */}
          <motion.div variants={fadeInUp} className="w-full">
            <img
              src="/images/international-student-life.jpg"
              alt="Life as an International Student"
              className="w-full h-64 md:h-80 object-cover rounded-xl"
            />
          </motion.div>
        </motion.section>
      </section>

      {/* Pathway */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-12">
            Step-by-Step Student Pathway
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step) => (
              <div
                key={step.id}
                className="bg-white p-6 rounded-xl shadow-md text-center"
              >
                <div className="text-4xl text-blue-600 mb-4 flex justify-center">
                  {step.icon}
                </div>
                <h4 className="font-semibold">
                  {step.id}. {step.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/images/Loan.jpg" // Replace with your image path
              alt="Elan Loans"
              className="w-full h-[300px] md:h-[450px] object-contain max-w-full"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
              Fly High with Elan Loans
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Availing an education loan to study in your dream university has
              never been easier!
            </p>

            <ul className="space-y-3 mt-4">
              {benefits.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-700"
                >
                  <MdDoneAll className="text-blue-600 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section>
        <motion.section
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-8 md:p-16 rounded-xl shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          {/* LEFT — Content */}
          <div className="space-y-6">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-poppins flex items-center gap-3">
              Foreign University Collaborations
            </h2>

            <p className="text-md md:text-lg text-gray-700 leading-relaxed font-inter">
              At JoHeCa, we believe that education knows no borders. Our foreign
              university collaborations are designed to empower students with
              unparalleled access to global academic programs, cutting-edge
              research opportunities, and immersive cultural experiences. These
              partnerships allow learners to broaden their perspectives, gain
              international exposure, and develop skills that are highly sought
              after in the global workforce.
            </p>

            <p className="text-md md:text-lg text-gray-700 leading-relaxed font-inter">
              Through these collaborations, students can participate in exchange
              programs, dual-degree courses, and specialized training that
              bridges the gap between Indian education and global standards. We
              facilitate smooth pathways for study abroad, international
              internships, and research opportunities, ensuring that students
              are not only academically prepared but also culturally adept and
              confident to thrive in any environment.
            </p>

            <p className="text-md md:text-lg text-gray-700 leading-relaxed font-inter">
              Our mission is to make global education accessible and practical
              for every student. From guidance on application processes to
              support in securing scholarships and mentorship, JoHeCa ensures a
              holistic experience that transforms ambitions into real-world
              opportunities. These collaborations are more than partnerships —
              they are gateways to the future, equipping our students with the
              knowledge, networks, and confidence to excel on the international
              stage.
            </p>
          </div>

          {/* RIGHT — Image */}
          <motion.div
            variants={fadeInUp}
            className="w-full flex justify-center"
          >
            <img
              src="/images/foreign-university-collaboration.jpg"
              alt="Foreign University Collaborations"
              className="w-full max-w-lg h-auto object-cover"
            />
          </motion.div>
        </motion.section>
      </section>

      {/* Test Prep */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-12">
            Test Preparation for Study Abroad
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tests.map((test, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl shadow-lg overflow-hidden"
              >
                <img
                  src={test.img}
                  alt={test.title}
                  className="w-full h-48 object-contain max-w-full"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{test.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{test.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
