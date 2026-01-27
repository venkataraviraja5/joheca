// eslint-disable-next-line no-unused-vars
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function TestimonialsMarquee() {
  const testimonials = [
    {
      name: "Ananya Sharma",
      role: "Software Engineering Student",
      feedback:
        "JoHeCa helped me discover my strengths and guided me to choose the right career path. I feel confident about my future!",
    },
    {
      name: "Rohan Verma",
      role: "Medical Aspirant",
      feedback:
        "Thanks to JoHeCa, I understood all my career options clearly and found the right mentorship for my goals.",
    },
    {
      name: "Priya Singh",
      role: "International Student",
      feedback:
        "Their guidance on studying abroad was invaluable. I secured admission and scholarship in my dream university!",
    },
  ];

  const loopTestimonials = [...testimonials, ...testimonials]; // duplicate for seamless loop
  const controls = useAnimation();

  // Start continuous animation
  useEffect(() => {
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
      },
    });
  }, [controls]);

  return (
    <div className="overflow-hidden bg-gray-50 py-12">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 font-poppins text-center mb-8">
        What Our Students Say
      </h2>

      <motion.div
        className="flex gap-6 w-max cursor-pointer"
        animate={controls}
        onHoverStart={() => controls.stop()} // stop animation on hover
        onHoverEnd={() =>
          controls.start({
            x: ["0%", "-50%"],
            transition: {
              x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" },
            },
          })
        } // resume animation on hover end
      >
        {loopTestimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white p-6 md:p-8 rounded-xl shadow-md min-w-[280px] max-w-sm text-center flex-shrink-0"
          >
            <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-4">
              "{t.feedback}"
            </p>
            <h3 className="text-gray-900 font-semibold text-md md:text-lg">
              {t.name}
            </h3>
            <p className="text-indigo-600 text-sm md:text-base">{t.role}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
