
import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  Target,
  Compass,
  Brain,
  HandHeart,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Quote
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const PurposePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const navigate = useNavigate()


  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-amber-100">
      
      {/* ================= HERO: THE CALM BEFORE ACTION ================= */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <img
            src="/images/purpose-banner.jpg"
            alt="Mountains"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Subtle radial gradient to focus center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_#0f172a_100%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center p-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
          
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter">
              PURPOSE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200">IN ACTION</span>
            </h1>
            
            <button className="cursor-pointer bg-amber-400 text-slate-900 px-10 py-5 rounded-full font-black hover:scale-105 transition-transform flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(251,191,36,0.3)]"
              onClick={() => navigate('/packages')}
            >
              Explore Your Path <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ================= THE IKIGAI DEFINITION ================= */}
      <section className="md:py-10 py-5 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div variants={fadeInUp} initial="initial" whileInView="whileInView">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-8 text-slate-900">
              The Architecture <br />of Intentionality.
            </h2>
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
              <p>
                Purpose is the bridge between potential and reality. It is the refusal to move through life on autopilot.
              </p>
              <p>
                When you align your skills with a sense of responsibility, work ceases to be a chore and becomes a craft. This is where true mastery begins.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            variants={fadeInUp} initial="initial" whileInView="whileInView"
            className="relative p-12 bg-slate-50 rounded-[3rem] border border-slate-100"
          >
            <Quote className="text-amber-400 w-12 h-12 mb-6" />
            <p className="text-2xl font-medium text-slate-800 italic leading-snug">
              "Your work is to discover your work and then with all your heart to give yourself to it."
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-slate-300" />
              <span className="text-sm font-bold tracking-widest uppercase text-slate-400">Zen Proverb</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= CORE PRINCIPLES (BENTO GRID) ================= */}
      <section className="py-5 md:py-10 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black mb-4">Core Principles</h2>
            <div className="w-24 h-1 bg-amber-400 mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
            <PrincipleCard 
              span="md:col-span-8"
              icon={<Compass className="text-white" />}
              title="Clarity of Direction"
              desc="Deep alignment with your 'Why'. Before doing the work, understand the legacy you want the work to leave behind."
              bg="bg-slate-900"
              textColor="text-white"
            />
            <PrincipleCard 
              span="md:col-span-4"
              icon={<Target className="text-amber-600" />}
              title="Intentional Action"
              desc="Cutting through the noise of 'busy' to find the 'vital'."
              bg="bg-white"
            />
            <PrincipleCard 
              span="md:col-span-4"
              icon={<Brain className="text-amber-600" />}
              title="Long-Term Vision"
              desc="Ignoring shortcuts for sustainable, compounding growth."
              bg="bg-white"
            />
            <PrincipleCard 
              span="md:col-span-8"
              icon={<Zap className="text-slate-900" />}
              title="Decisive Execution"
              desc="Converting philosophical intent into physical results through relentless discipline and high-standards."
              bg="bg-amber-400"
              textColor="text-slate-900"
            />
          </div>
        </div>
      </section>

      {/* ================= CAREER ALIGNMENT: IKIGAI DIAGRAM ================= */}
      <section className="py-20 md:py-32 px-6 bg-white overflow-hidden">
  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    
    {/* LEFT SIDE: Visual Composition */}
    <div className="order-2 lg:order-1 relative flex justify-center">
      {/* Abstract Background Decoration */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10" />

      {/* Main Image Container */}
      <div className="relative w-full max-w-md aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop" 
          alt="Alignment and Focus" 
          className="w-full h-full object-cover"
        />
        
        {/* Subtle Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
      </div>

      {/* Floating Insight Card */}
      <motion.div 
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute -bottom-6 -right-4 md:-right-10 bg-white/80 backdrop-blur-xl p-6 rounded-3xl shadow-xl border border-white/20 max-w-[200px]"
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-8 h-8 rounded-lg bg-amber-400 flex items-center justify-center text-slate-900">
            <Target size={18} />
          </div>
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Status</span>
        </div>
        <p className="text-sm font-bold text-slate-800 leading-tight">
          Purpose Alignment Achieved
        </p>
      </motion.div>
    </div>

    {/* RIGHT SIDE: Content */}
    <div className="order-1 lg:order-2 space-y-8">
      <div className="space-y-4">
        <span className="text-blue-600 font-bold text-sm uppercase tracking-[0.3em]">Career Mapping</span>
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[0.9]">
          Alignment <br /> in Career.
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed max-w-md">
          A purpose-driven career isn't found; it is built. It requires a 
          ruthless audit of your skills against the world's most pressing problems.
        </p>
      </div>
      
      <div className="space-y-4">
        {[
          { text: "Solve real-world friction, not just technical puzzles.", color: "text-amber-600", bg: "bg-amber-50" },
          { text: "Prioritize mastery over marketplace popularity.", color: "text-blue-600", bg: "bg-blue-50" },
          { text: "Build systems that outlast your individual contribution.", color: "text-emerald-600", bg: "bg-emerald-50" },
          { text: "Maintain ethical responsibility for the tech you deploy.", color: "text-purple-600", bg: "bg-purple-50" }
        ].map((item, i) => (
          <motion.div 
            key={i} 
            whileHover={{ x: 10, backgroundColor: "#fff" }}
            className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group cursor-default transition-all shadow-sm hover:shadow-md"
          >
            <div className={`p-2 rounded-lg ${item.bg}`}>
               <CheckCircle2 className={`${item.color} group-hover:scale-110 transition-transform`} size={20} />
            </div>
            <span className="font-bold text-slate-700 text-sm md:text-base">{item.text}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

// Bento Grid Component
const PrincipleCard = ({ span, icon, title, desc, bg, textColor = "text-slate-900" }) => (
  <motion.div 
    variants={{
      initial: { opacity: 0, scale: 0.95 },
      whileInView: { opacity: 1, scale: 1 }
    }}
    initial="initial"
    whileInView="whileInView"
    viewport={{ once: true }}
    className={`${span} ${bg} ${textColor} p-10 rounded-[2.5rem] flex flex-col justify-end group border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500`}
  >
    <div className="mb-auto p-4 bg-white/10 backdrop-blur-md rounded-2xl w-fit shadow-lg">
      {React.cloneElement(icon, { size: 32 })}
    </div>
    <h3 className="text-2xl font-black mb-3 group-hover:translate-x-2 transition-transform">{title}</h3>
    <p className="opacity-70 leading-relaxed text-sm md:text-base">{desc}</p>
  </motion.div>
);

export default PurposePage;