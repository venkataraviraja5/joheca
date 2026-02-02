"use client";
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { 
  Briefcase, GraduationCap, TrendingUp, Users, 
  Target, ShieldCheck, ArrowRight, Building2,
  CheckCircle2, DollarSign, Search, Award
} from "lucide-react";

const JobAssurancePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  return (
    <div className="min-h-screen bg-[#FBFBFF] text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      
      {/* ================= HERO: ASPIRATIONAL & BOLD ================= */}
      <section className="relative h-[95vh] flex items-center justify-center overflow-hidden bg-[#0A0F1E]">
        {/* Background Visual: Professional Network Mesh */}
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop" 
            alt="Professional Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1E] via-[#0A0F1E]/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-indigo-500/20 backdrop-blur-md border border-indigo-400/30 text-indigo-300 text-xs font-bold uppercase tracking-widest">
              <ShieldCheck size={14} className="text-indigo-400" /> 100% Placement Commitment
            </div>
            
            {/* <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter">
              DON'T JUST LEARN. <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
                GET HIRED.
              </span>
            </h1> */}
            
            <p className="text-xl text-slate-300 max-w-xl font-medium leading-relaxed">
              We bridge the gap between education and employment. Our Job Assurance program 
              guarantees a position at top-tier tech firms or a full refund.
            </p>

            {/* Micro-Trust Signals */}
            <div className="flex items-center gap-6 pt-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img key={i} className="w-10 h-10 rounded-full border-2 border-[#0A0F1E]" src={`https://i.pravatar.cc/150?u=${i+10}`} alt="User" />
                ))}
              </div>
              <p className="text-sm text-slate-400">Join <span className="text-white font-bold">500+</span> graduates placed this month</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= THE PLACEMENT VAULT (STATS) ================= */}
      <section className="relative z-20 -mt-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-px bg-slate-200 border border-slate-200 rounded-3xl shadow-2xl overflow-hidden">
          {[
            { label: "Avg. Salary Hike", val: "120%", icon: <TrendingUp className="text-indigo-600" /> },
            { label: "Partner Companies", val: "450+", icon: <Building2 className="text-blue-600" /> },
            { label: "Highest Package", val: "45 LPA", icon: <Award className="text-amber-500" /> },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 flex flex-col items-center text-center">
              <div className="mb-3 p-3 bg-slate-50 rounded-xl">{stat.icon}</div>
              <div className="text-3xl font-black text-slate-900">{stat.val}</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CORE GUARANTEES ================= */}
      <section className="py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">The Assurance <br /> Framework</h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto">Why 98% of our students land their dream roles within 3 months of graduation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              title="Pay After Placement" 
              icon={<DollarSign />} 
              desc="We believe in our results. You don't pay the bulk of your tuition until you receive your first paycheck." 
              color="bg-emerald-600" 
            />
            <FeatureCard 
              title="Career Mentorship" 
              icon={<Users />} 
              desc="Unlimited 1-on-1 sessions with Senior Engineers from Google, Meta, and Amazon to master interviews." 
              color="bg-indigo-600" 
            />
            <FeatureCard 
              title="Mock Drill Series" 
              icon={<Target />} 
              desc="Real-world interview simulations that mirror the exact hiring bar of top-tier product companies." 
              color="bg-rose-600" 
            />
          </div>
        </div>
      </section>

      {/* ================= THE CAREER ROADMAP ================= */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <p className="text-slate-400 font-medium italic">From "Open to Work" to "Offer Letter Received"</p>
          </div>

          <div className="space-y-16">
            {[
              { title: "Profile Optimization", desc: "We overhaul your LinkedIn, Resume, and Portfolio to rank #1 in ATS systems." },
              { title: "Skill Gap Analysis", desc: "Master the specific high-leverage skills (System Design, DSA, AI) demanded by our partners." },
              { title: "Referral Network Unlock", desc: "Gain direct internal referrals into companies like Microsoft, Uber, and Atlassian." },
              { title: "Salary Negotiation", desc: "Our experts handle the counter-offer process to ensure you get paid what you're worth." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                variants={fadeInUp}
                initial="initial"
                whileInView="whileInView"
                className="flex gap-8 group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-indigo-600 flex items-center justify-center text-xl md:text-2xl font-black shadow-lg shadow-indigo-600/40 ring-4 ring-slate-800 group-hover:scale-110 transition-all duration-500">
                    {i + 1}
                  </div>
                  {i !== 3 && <div className="w-px h-24 bg-gradient-to-b from-indigo-600 to-transparent my-4 opacity-50" />}
                </div>
                <div className="pt-2">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-indigo-400 transition-colors">{step.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA: URGENT & REASSURING ================= */}
      <section className="py-5 md:py-10 md:px-6 bg-white">
        <motion.div 
          variants={fadeInUp} 
          initial="initial" 
          whileInView="whileInView" 
          className="max-w-5xl mx-auto bg-indigo-50 rounded-[3rem] p-12 md:p-24 text-center border-2 border-dashed border-indigo-200"
        >
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-white md:rounded-2xl shadow-xl">
              <CheckCircle2 size={48} className="text-emerald-500" />
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl font-black mb-8 tracking-tighter text-slate-900">Get your offer letter <br/> <span className="text-indigo-600">Guaranteed.</span></h2>
          <p className="text-xl text-slate-500 mb-12 max-w-2xl mx-auto">Enrollments for the Q1 Cohort are closing soon. Take the leap into your professional future today.</p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-slate-900 text-white px-12 py-6 rounded-2xl text-lg font-bold hover:bg-indigo-600 transition-all shadow-xl">
              Apply for Admission
            </button>
            <button className="bg-white text-slate-900 border border-slate-200 px-12 py-6 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-all">
              Talk to Career Advisor
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

// Reusable Feature Card Component
const FeatureCard = ({ title, desc, icon, color }) => (
  <div className="p-12 rounded-[2.5rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
    <div className={`w-16 h-16 rounded-2xl ${color} text-white flex items-center justify-center mb-10 shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h3 className="text-2xl font-bold mb-5 text-slate-900">{title}</h3>
    <p className="text-slate-500 text-lg leading-relaxed">{desc}</p>
    <div className="mt-8 flex items-center gap-2 text-indigo-600 font-bold text-sm cursor-pointer group-hover:gap-4 transition-all">
      Learn how this works <ArrowRight size={16} />
    </div>
  </div>
);

export default JobAssurancePage;