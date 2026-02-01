"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CreditCard,
  BarChart2,
  PiggyBank,
  CheckCircle2,
  ArrowUpRight,
  TrendingUp,
  Wallet,
  Lock,
  ArrowRight,
  Sparkles
} from "lucide-react";

const FinancialSecurityPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 font-sans">
      
      {/* ================= HERO: NO IMAGES - ABSTRACT MESH ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 py-24 md:py-48 px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/20 rounded-full blur-[120px]" />
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-5 md:p-10"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-bold uppercase tracking-[0.4em] mb-10">
              <Lock size={14} /> Wealth Protection
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              FINANCIAL <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-200 to-emerald-400">SECURITY.</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-2xl text-slate-400 font-light leading-relaxed mb-12">
              Master the architecture of wealth. From disciplined saving to 
              strategic growth, we provide the blueprint for a future without limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-emerald-600 text-white px-12 py-5 rounded-2xl font-black hover:bg-emerald-500 transition-all flex items-center gap-3 mx-auto sm:mx-0 shadow-xl shadow-emerald-900/40">
                Apply Now<ArrowUpRight size={20} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE PRINCIPLES: md:py-10 & py-5 ================= */}
      <section className="py-5 md:py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto p-5">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-4 text-slate-900">The Wealth Framework</h2>
            <p className="text-slate-500 text-lg">Three pillars to stabilize and scale your financial life.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Budgeting & Saving",
                desc: "Harness the power of liquidity. Learn to track, optimize, and automate your capital flow.",
                icon: <PiggyBank className="text-emerald-600" />,
                bg: "bg-emerald-50"
              },
              {
                title: "Investments & Growth",
                desc: "Move from saving to compounding. Understand risk-adjusted returns and market dynamics.",
                icon: <BarChart2 className="text-blue-600" />,
                bg: "bg-blue-50"
              },
              {
                title: "Financial Protection",
                desc: "Bulletproof your assets. Shield your future against market volatility and unforeseen risks.",
                icon: <ShieldCheck className="text-teal-600" />,
                bg: "bg-teal-50"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="group p-10 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500"
              >
                <div className={`w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                  {React.cloneElement(item.icon, { size: 32 })}
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm md:text-base">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TIPS SECTION: md:py-10 & py-5 ================= */}
      <section className="py-5 md:py-10 md:px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto p-5">
          <div className="grid lg:grid-cols-2 gap-16 items-center bg-white p-8 md:p-16 rounded-[4rem] border border-slate-200 shadow-sm">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 text-emerald-600 font-bold tracking-widest uppercase text-xs">
                <Sparkles size={14} /> Intelligence & Discipline
              </div>
              <h2 className="text-2xl md:text-6xl font-black tracking-tighter leading-[0.9] text-slate-900">
                Smart Financial Protocols
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed">
                Security is a series of small, consistent decisions. We provide 
                the high-performance tips used by elite wealth managers.
              </p>
              <div className="grid gap-3">
                {[
                  "Maintain a 6-month Liquidity Buffer",
                  "Automate 20% Income Allocation",
                  "Diversify across Non-Correlated Assets",
                  "Quarterly Risk Assessments"
                ].map((tip, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-emerald-200 transition-colors">
                    <CheckCircle2 className="text-emerald-500" size={20} />
                    <span className="font-bold text-slate-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ABSTRACT ICON COMPOSITION (No Image) */}
            <div className="relative flex items-center justify-center p-10">
              <div className="absolute inset-0 bg-emerald-100/50 rounded-full blur-3xl opacity-50" />
              <div className="relative grid grid-cols-2 gap-6 w-full max-w-sm">
                <div className="aspect-square bg-emerald-600 rounded-3xl flex items-center justify-center shadow-xl shadow-emerald-200 group hover:-translate-y-2 transition-transform">
                  <TrendingUp size={48} className="text-white" />
                </div>
                <div className="aspect-square bg-slate-900 rounded-3xl flex items-center justify-center shadow-xl translate-y-8 hover:-translate-y-2 transition-transform">
                  <Wallet size={48} className="text-white" />
                </div>
                <div className="aspect-square bg-emerald-400 rounded-3xl flex items-center justify-center shadow-xl hover:-translate-y-2 transition-transform">
                  <CreditCard size={48} className="text-slate-900" />
                </div>
                <div className="aspect-square bg-white border border-slate-200 rounded-3xl flex items-center justify-center shadow-xl translate-y-8 hover:-translate-y-2 transition-transform">
                  <ShieldCheck size={48} className="text-emerald-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA: md:py-10 & py-5 ================= */}
      <section className="py-5 md:py-10 md:px-6">
        <div className="max-w-7xl mx-auto p-5">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="rounded-[4rem] bg-emerald-600 p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-900/40"
          >
            {/* CTA Background Blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-2xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                Secure Your Legacy Today
              </h2>
              <p className="text-emerald-50 text-xl mb-12 max-w-xl mx-auto font-light">
                Financial freedom is the only real freedom. Join our literacy 
                programs to build a foundation that lasts for generations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-emerald-600 px-12 py-5 rounded-full font-black text-lg hover:scale-105 transition-all shadow-xl">
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <footer className="py-12 border-t border-slate-200 text-center text-slate-400 text-[10px] uppercase tracking-[0.5em] font-bold">
        Asset Integrity • Fiscal Resilience
      </footer>
    </div>
  );
};

export default FinancialSecurityPage;