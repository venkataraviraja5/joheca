import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaCrown,
  FaRocket,
  FaGem,
  FaShieldAlt,
  FaWhatsapp,
  FaChevronDown,
  FaChevronUp,
  FaUserTie,
  FaGlobeAmericas,
  FaFileSignature,
  FaLightbulb,
} from "react-icons/fa";


export default function PricingPage() {

  const plans = [
    {
      title: "Silver",
      price: "₹25,000",
      tagline: "Secure Start: Build Confidence, Not Debt",
      icon: <FaRocket className="text-slate-400" />,
      features: [
        "7-Year AI Career App Access (Daily 45-min sessions)",
        "Weekly Tests + Gamified Progress (Stars/Badges)",
        "Monthly Mentor Review (Academic + Behavioral)",
        "2 Stream-Specific Certifications (Coding/Digital Mktg)",
        "5-Year Health Insurance (Starting from 10th Class)",
        "Parent App: Real-time Attendance & Test Scores",
        "Job Readiness Training (Resume/Interview Basics)",
        "Access to Internship Portal (Self-apply access)",
      ],
    },
    {
      title: "Diamond",
      price: "₹40,000",
      tagline: "Future-Ready Guarantee: Skills + Job + Income",
      icon: <FaGem className="text-blue-400" />,
      popular: true,
      features: [
        "All Silver Benefits Included",
        "4 Industry-Aligned Certifications (Python/Data/Soft Skills)",
        "Guaranteed Paid Internship from 2nd Year (₹15K-25K/mo)",
        "₹3 Lakh Job Insurance on Legal Bond Paper",
        "Bi-weekly 1:1 Mentor Calls",
        "Advanced AI Practice: Coding & Interview Sims",
        "Priority in Free B.Tech Selection Pool",
        "Mock Interviews + Portfolio Building",
      ],
    },
    {
      title: "Platinum",
      price: "₹55,000",
      tagline: "Global Scholar Pathway: India + World = Zero Risk",
      icon: <FaCrown className="text-amber-500" />,
      features: [
        "All Diamond Benefits Included",
        "8-Year Health Insurance (Covers 1 year post-grad)",
        "₹5 Lakh Job Insurance on Legal Bond Paper",
        "Full Study Abroad Support - FREE (USA/UK/Europe)",
        "SOP/LOR Drafting + Visa Documentation Prep",
        "Weekly 1:1 Mentor + Global Advisor",
        "6+ Premium Global Micro-credentials",
        "Remote International Internship Access",
        "Lifetime Access to JOHECA Alumni Network",
        "Free B.Tech Fast-Track Consideration",
      ],
    },
  ];

  const comparisonData = [
    {
      feature: "Job Assurance",
      silver: "Readiness Training",
      diamond: "Legal Bond Paper",
      platinum: "Legal Bond (Highest)",
    },
    {
      feature: "Job Insurance",
      silver: "—",
      diamond: "₹3 Lakh",
      platinum: "₹5 Lakh",
    },
    {
      feature: "Paid Internship",
      silver: "Self-Apply",
      diamond: "₹15K-25K/month",
      platinum: "International Access",
    },
    {
      feature: "Health Insurance",
      silver: "5 Years",
      diamond: "7 Years",
      platinum: "8 Years",
    },
    {
      feature: "Study Abroad",
      silver: "—",
      diamond: "Priority Pool",
      platinum: "Full FREE Support",
    },
    {
      feature: "Mentor Support",
      silver: "Monthly",
      diamond: "Bi-Weekly 1:1",
      platinum: "Weekly 1:1 + Global",
    },
  ];

  return (
    <div className="bg-[#020617] text-white min-h-screen font-sans selection:bg-amber-500/30">
      {/* Dynamic Promo Banner */}

        <header className="text-center py-10 mb-5">
          <h1 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-b from-white to-slate-500 bg-clip-text text-transparent italic">
            Pricing Plans
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-medium">
            India's first end-to-end 7-year student journey platform.
            <span className="block text-amber-500 mt-2">
              Barosa for Every Student. Peace for Every Parent.
            </span>
          </p>
        </header>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative bg-[#0f172a]/80 backdrop-blur-xl border ${plan.popular ? "border-amber-500 ring-2 ring-amber-500/20" : "border-slate-800"} rounded-3xl p-8 flex flex-col transition-all`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                  Most Popular
                </div>
              )}

              <div className="flex justify-between items-start mb-6">
                <div className="text-3xl">{plan.icon}</div>
                <div className="text-right">
                  <span className="text-slate-500 text-[9px] font-bold uppercase tracking-widest block mb-1">
                    {plan.tagline}
                  </span>
                  <h3 className="text-2xl font-black">{plan.title}</h3>
                </div>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-black tracking-tight">
                  {plan.price}
                </span>
                <p className="text-slate-500 text-[10px] font-bold mt-2 italic uppercase">
                  One-time service fee for 7 years
                </p>
              </div>

              <ul className="space-y-3 mb-10 flex-grow">
                {plan.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-slate-300 text-[13px] font-medium leading-tight"
                  >
                    <FaCheckCircle className="text-amber-500 mt-0.5 shrink-0" />{" "}
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${plan.popular ? "bg-amber-500 text-black shadow-[0_10px_20px_rgba(245,158,11,0.2)]" : "bg-slate-800 text-white"}`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        {/* Comparison Section - Redesigned for No Scroll Mobile */}
        <section className="mb-24">
          <h2 className="text-3xl font-black text-center mb-12 uppercase italic tracking-tighter">
            Full <span className="text-amber-500">Feature</span> Comparison
          </h2>

          {/* Desktop Table */}
          {/* Desktop & Mobile Responsive Table */}
          <section className="mb-24 px-2 md:px-0">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black italic">PLAN COMPARISON</h2>
            </div>

            <div className="bg-slate-900/50 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
              <table className="w-full border-collapse table-fixed">
                <thead>
                  <tr className="bg-slate-900">
                    {/* Feature name column - slightly wider */}
                    <th className="w-[34%] p-3 md:p-6 text-slate-500 font-black uppercase text-[8px] md:text-[10px] text-left">
                      Features
                    </th>
                    <th className="w-[22%] p-2 md:p-6 text-center text-slate-300 font-bold text-[9px] md:text-sm">
                      Silver
                    </th>
                    <th className="w-[22%] p-2 md:p-6 text-center text-amber-500 font-bold bg-amber-500/10 text-[9px] md:text-sm">
                      Diam.
                    </th>
                    <th className="w-[22%] p-2 md:p-6 text-center text-slate-300 font-bold text-[9px] md:text-sm">
                      Plat.
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {comparisonData.map((row, i) => (
                    <tr key={i} className="hover:bg-white/5 transition-colors">
                      {/* Feature Name */}
                      <td className="p-3 md:p-6 font-bold text-slate-300 text-[10px] md:text-sm leading-tight">
                        {row.feature}
                      </td>

                      {/* Silver Value */}
                      <td className="p-2 md:p-6 text-center text-[9px] md:text-xs text-slate-400 break-words">
                        {row.silver}
                      </td>

                      {/* Diamond Value (Highlighted) */}
                      <td className="p-2 md:p-6 text-center text-[9px] md:text-xs font-bold text-amber-500 bg-amber-500/5 break-words border-x border-amber-500/10">
                        {row.diamond}
                      </td>

                      {/* Platinum Value */}
                      <td className="p-2 md:p-6 text-center text-[9px] md:text-xs text-slate-400 break-words">
                        {row.platinum}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Hint */}
            <p className="text-center text-slate-600 text-[8px] mt-4 uppercase tracking-widest md:hidden">
              Full 7-Year Benefit Comparison
            </p>
          </section>
        </section>

        <div className="max-w-6xl mx-auto px-4 py-2">
        {/* Why Choose Section (From Document 7) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <FaLightbulb className="text-amber-500 mb-4 text-2xl" />
            <h4 className="font-bold mb-2">Clear Career Roadmap</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Most students are lost after 10th. We provide a 7-year guided
              journey from 10th to graduation.
            </p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <FaUserTie className="text-blue-500 mb-4 text-2xl" />
            <h4 className="font-bold mb-2">1:1 Mentorship</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Avoid years without guidance. Get a personal mentor and structured
              review system.
            </p>
          </div>
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800">
            <FaShieldAlt className="text-green-500 mb-4 text-2xl" />
            <h4 className="font-bold mb-2">Financial Safety Net</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              100% Job Assurance on legal bond paper + up to ₹5 Lakh Job
              Insurance.
            </p>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="relative bg-gradient-to-br from-amber-500 to-orange-600 p-10 md:p-20 rounded-[3rem] text-center shadow-[0_20px_50px_rgba(245,158,11,0.3)]">
          <h2 className="text-3xl md:text-5xl font-black text-slate-950 mb-6 leading-tight">
            Stop Navigating Life <br className="hidden md:block" /> Without a
            Map.
          </h2>
          <p className="text-slate-950/80 font-bold mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            "Every student deserves a Mentor, a Map, a Plan, and a Job
            Assurance."
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-black text-white px-12 py-5 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-2xl">
              ENROLL NOW
            </button>
            <button className="bg-white/30 backdrop-blur-md text-black border border-black/10 px-12 py-5 rounded-2xl font-black text-lg hover:bg-white/40 transition-all">
              TALK TO MENTOR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
