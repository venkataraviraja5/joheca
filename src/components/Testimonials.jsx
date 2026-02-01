// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { Quote, Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Software Engineering Student",
      feedback: "JoHeCa helped me discover my strengths and guided me to choose the right career path. I feel confident about my future!",
    },
    {
      name: "Rohan Verma",
      role: "Medical Aspirant",
      feedback: "Thanks to JoHeCa, I understood all my career options clearly and found the right mentorship for my goals.",
    },
    {
      name: "Priya Singh",
      role: "International Student",
      feedback: "Their guidance on studying abroad was invaluable. I secured admission and scholarship in my dream university!",
    },
  ];

  const marqueeTestimonials = [...testimonials, ...testimonials, ...testimonials];
  const controls = useAnimation();

  useEffect(() => {
    if (window.innerWidth >= 768) {
      controls.start({
        x: ["0%", "-33.33%"],
        transition: { x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } },
      });
    }
  }, [controls]);

  return (
    <section className="py-5 md:py-24 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb:mb-12 mb-5 text-center">
        <h2 className="text-2xl md:text-5xl font-black text-slate-900 tracking-tight">
          What Our <span className="text-blue-600 italic font-serif">Students Say</span>
        </h2>
      </div>

      {/* MOBILE: Snap Slider (Native Feel) */}
      <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 px-6 pb-8 scrollbar-hide hide-scrollbar">
        {testimonials.map((t, index) => (
          <div key={`mobile-${index}`} className="min-w-[85vw] snap-center">
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>

      {/* DESKTOP: Marquee (Premium Edge Fades) */}
      <div className="hidden md:block relative">
        <div className="absolute left-0 top-0 bottom-0 w-48 z-10 bg-gradient-to-r from-[#FAFAFA] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-48 z-10 bg-gradient-to-l from-[#FAFAFA] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-8 w-max py-4"
          animate={controls}
          onHoverStart={() => controls.stop()}
          onHoverEnd={() => controls.start({
            x: ["0%", "-33.33%"],
            transition: { x: { repeat: Infinity, repeatType: "loop", duration: 35, ease: "linear" } },
          })}
        >
          {marqueeTestimonials.map((t, index) => (
            <div key={`desktop-${index}`} className="w-[450px]">
              <TestimonialCard t={t} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="h-full bg-white border border-slate-100 p-8 rounded md:rounded-[2.5rem] shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
            ))}
          </div>
          <Quote className="text-slate-100" size={32} />
        </div>
        <p className="text-slate-600 text-lg leading-relaxed mb-8 font-medium italic">
          "{t.feedback}"
        </p>
      </div>

      <div className="flex items-center gap-4 pt-6 border-t border-slate-50">
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-blue-700 to-blue-400 flex items-center justify-center text-white font-bold text-lg shadow-md">
          {t.name.charAt(0)}
        </div>
        <div className="text-left">
          <h4 className="text-slate-900 font-bold text-base leading-none mb-1.5">{t.name}</h4>
          <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest">{t.role}</p>
        </div>
      </div>
    </div>
  );
}