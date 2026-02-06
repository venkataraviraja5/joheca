// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaCrown,
  FaRocket,
  FaUserGraduate,
  FaBriefcase,
  FaShieldAlt,
  FaArrowRight,
} from "react-icons/fa";
import { useEffect, useState } from "react";

const OFFER_END_TIME = new Date().getTime() + 1000 * 60 * 60 * 6;

export default function Pricing() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = OFFER_END_TIME - now;

      if (distance <= 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((distance / (1000 * 60)) % 60),
        seconds: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const plans = [
    {
      title: "Silver",
      price: "₹25,000",
      icon: <FaRocket />,
      features: [
        "₹5,00,000 Job Assurance",
        "Scholarship Support",
        "Health Insurance",
        "Career Roadmap (Basic)",
      ],
    },
    {
      title: "Diamond",
      price: "₹40,000",
      icon: <FaCrown />,
      popular: true,
      features: [
        "₹5,00,000 Job Assurance",
        "Scholarship Support",
        "Health Insurance",
        "Career Roadmap (Basic)",
        "C Language Training",
        "Soft Skills Training",
        "Advanced Programming",
        "Communication Mastery",
      ],
    },
    {
      title: "Platinum",
      price: "₹55,000",
      icon: <FaCrown />,
      features: [
        "₹5,00,000 Job Assurance",
        "Scholarship Support",
        "Health Insurance",
        "Career Roadmap (Basic)",
        "C Language Training",
        "Soft Skills Training",
        "Advanced Programming",
        "Communication Mastery",
        "Foreign Training Pathway",
        "USA Application Support",
        "Coding + Live Projects",
        "Internship Assistance",
        "Mock Interview Training",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white">
      <div 
       className="relative text-center bg-cover bg-center bg-no-repeat overflow-hidden bg-[#0B3D91] p-5"
        //  style={{ backgroundImage: "url('/images/packages.jpg')" }}
      >

        {/* Header */}
        <div 
        >
          <h2 className="text-4xl font-poppins mb-3 text-[#FFB800]">
            JOHECA Full Career Packages
          </h2>
          <p className="text-white max-w-2xl mx-auto font-inter">
            One-time investment for skills, confidence, career clarity and
            ₹5,00,000 job assurance.
          </p>
        </div>

        {/* Offer Timer */}
        <div className="text-center mb-12 text-red-500 font-inter">
          🔥 Only 500 seats left:
          <span className="ml-2">
            {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
          </span>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className={`relative rounded-2xl p-8 bg-white shadow-xl border flex flex-col
                ${plan.popular ? "border-yellow-400" : "border-gray-200"}`}
            >
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 px-4 py-1 rounded-full text-sm font-poppins">
                  Most Popular
                </span>
              )}

              <div className="text-4xl mb-4 flex justify-center text-yellow-500">
                {plan.icon}
              </div>

              <h3 className="text-2xl font-semibold text-center mb-2 font-poppins">
                {plan.title}
              </h3>

              <p className="text-4xl font-bold text-center mb-6 font-inter">
                {plan.price}
              </p>

              <ul className="space-y-3 mb-8 text-gray-700 font-inter">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 font-inter">
                    <FaCheckCircle className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold mt-auto font-inter
                  ${
                    plan.popular
                      ? "bg-yellow-400 hover:bg-yellow-300"
                      : "bg-gray-100 hover:bg-gray-200 "
                  }`}
              >
                Enroll Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Why Choose JoHeCa */}
        <div className="mb-20 font-inter">
          <h3 className="text-3xl font-bold text-center text-white mb-10">
            Why Choose JoHeCa?
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow">
              <FaUserGraduate className="text-3xl text-blue-600 mb-4" />
              <h4 className="font-semibold mb-2">Student-Centric Model</h4>
              <p className="text-gray-600 text-sm">
                Designed for real students, not just certificates.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <FaBriefcase className="text-3xl text-green-600 mb-4" />
              <h4 className="font-semibold mb-2">Job Assurance</h4>
              <p className="text-gray-600 text-sm">
                Structured roadmap leading to employability.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <FaShieldAlt className="text-3xl text-purple-600 mb-4" />
              <h4 className="font-semibold mb-2">End-to-End Support</h4>
              <p className="text-gray-600 text-sm">
                Guidance, training, insurance & global exposure.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center bg-black text-white p-14 rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Your Career Is Worth More Than Confusion
          </h3>
          <p className="mb-6 text-gray-300">
            Choose a structured path. Build skills. Secure your future.
          </p>
          <button className="bg-yellow-400 text-black px-10 py-4 rounded-xl font-semibold hover:bg-yellow-300">
            Get Started with JoHeCa
          </button>
        </div>

      </div>
    </section>
  );
}
