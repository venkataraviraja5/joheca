// import React, { useState } from 'react';
// // eslint-disable-next-line no-unused-vars
// import { motion, AnimatePresence } from 'framer-motion';
// import { ChevronDown } from 'lucide-react';

// const FAQItem = ({ question, answer, isOpen, onClick }) => {
//   return (
//     <div className="mb-4 border border-slate-800 rounded-xl bg-[#0f172a] overflow-hidden">
//       <button
//         className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-800/50"
//         onClick={onClick}
//       >
//         <span className="text-lg font-semibold text-white leading-tight">
//           {question}
//         </span>
//         <motion.div
//           animate={{ rotate: isOpen ? 180 : 0 }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//         >
//           <ChevronDown className="text-slate-400 w-5 h-5" />
//         </motion.div>
//       </button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//           >
//             <div className="px-5 pb-5 text-slate-400 leading-relaxed border-t border-slate-800/50 pt-4">
//               {answer}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// const FAQSection = () => {
//   const [openIndex, setOpenIndex] = useState(-1); 

//   const faqs = [
//     {
//       question: "Are there any hidden charges or additional fees?",
//       answer: "No, the pricing is transparent. However, third-party API costs (like WhatsApp Business API) may apply depending on your usage volume.",
//     },
//     {
//       question: "Can I upgrade or downgrade my plan anytime?",
//       answer: "Yes, you can change your plan at any time through your dashboard. Changes will be reflected in your next billing cycle.",
//     },
//   ];

//   return (
//     <section className="bg-[#020617] min-h-screen py-20 px-4">
//       <div className="max-w-3xl mx-auto">
//         {/* Header Section */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
//             FAQs
//           </h2>
//           <p className="text-slate-400 text-lg">
//             Common questions about Joheca
//           </p>
//         </div>

//         {/* Accordion Logic */}
//         <div className="space-y-4">
//           {faqs.map((faq, index) => (
//             <FAQItem
//               key={index}
//               question={faq.question}
//               answer={faq.answer}
//               isOpen={openIndex === index}
//               onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;


import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle, HelpCircle, Users } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-4 border border-slate-800 rounded-xl bg-[#0f172a] overflow-hidden transition-all duration-300">
      <button
        className="w-full flex items-center justify-between p-5 text-left transition-colors hover:bg-slate-800/50"
        onClick={onClick}
      >
        <span className="text-base md:text-lg font-semibold text-white leading-tight pr-4">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="shrink-0"
        >
          <ChevronDown className="text-amber-500 w-5 h-5" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-5 pb-6 text-slate-300 text-sm md:text-base leading-relaxed border-t border-slate-800/50 pt-5">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const studentFaqs = [
    {
      id: 1,
      question: "1. What is JOHECA?",
      answer: "JOHECA is India’s first end-to-end 7-year student journey platform that guides you from 10th class to your final year of B.Tech or Degree—with AI-powered learning, mentorship, job assurance, and even health insurance."
    },
    {
      id: 2,
      question: "2. Is JOHECA only for engineering students?",
      answer: "No! While we offer Free B.Tech for eligible students, our ecosystem supports all streams—MPC, Bi.PC, Commerce, Arts—and helps every student become industry-ready through stream-specific certifications and skill development."
    },
    {
      id: 3,
      question: "3. Do you really guarantee a job?",
      answer: "Yes. JOHECA provides 100% Job Assurance on legal Bond Paper. If you’re not placed within 6 months of course completion, we provide ₹5,00,000 Job Insurance."
    },
    {
      id: 4,
      question: "4. How does the Free B.Tech program work?",
      answer: "Selected students (based on merit and need) receive full tuition coverage for B.Tech, along with a paid internship starting in 2nd year (₹15K–25K/month), 7-year health insurance, and AI career support."
    },
    {
      id: 5,
      question: "5. What kind of AI training do I get?",
      answer: "You’ll get daily 45-minute AI practice sessions covering resume building, interview prep, research, coding, creativity, and stream-specific mini-projects—making you future-ready."
    },
    {
      id: 6,
      question: "6. Can slow learners succeed in JOHECA?",
      answer: "Absolutely! Our gamified system (stars, badges, leaderboards), weekly tests, and personal mentors ensure every student improves at their own pace—while top performers get extra recognition."
    }
  ];

  const parentFaqs = [
    {
      id: 7,
      question: "7. How can I track my child’s progress?",
      answer: "Through the JOHECA Parent App, you get real-time updates on attendance, test scores, mentor feedback, behavior ratings, and milestone achievements."
    },
    {
      id: 8,
      question: "8. Is my child safe and supported throughout this 7-year journey?",
      answer: "Yes. Every student gets a personal mentor, 7-year health insurance, a structured behavioral & academic review system, and a safe digital learning environment."
    },
    {
      id: 9,
      question: "9. What makes JOHECA different from coaching centers or colleges?",
      answer: "Unlike traditional institutions, JOHECA offers job assurance on legal bond, AI + human mentorship, paid internships from 2nd year, and a holistic development model—not just exam prep."
    },
    {
      id: 10,
      question: "10. Is the ₹55,000 fee a one-time payment? What does it cover?",
      answer: "Yes, it’s a one-time service fee that unlocks 7 years of access to AI learning, mentorship, certification tracks, internships, job assistance, and parental monitoring tools."
    }
  ];

  const handleToggle = (globalIndex) => {
    setOpenIndex(openIndex === globalIndex ? -1 : globalIndex);
  };

  return (
    <section className="bg-[#020617] min-h-screen py-5 md:py-24 px-4 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          <span className="text-amber-500">FAQs</span>
          </h2>
        </div>

        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <HelpCircle className="text-amber-500 w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">For Students</h3>
          </div>
          <div className="space-y-4">
            {studentFaqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>
        </div>

        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Users className="text-amber-500 w-6 h-6" />
            <h3 className="text-2xl font-bold text-white">For Parents</h3>
          </div>
          <div className="space-y-4">
            {parentFaqs.map((faq, index) => {
              const globalIndex = index + studentFaqs.length;
              return (
                <FAQItem
                  key={faq.id}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === globalIndex}
                  onClick={() => handleToggle(globalIndex)}
                />
              );
            })}
          </div>
        </div>

        <div className="text-center p-10 bg-gradient-to-b from-[#0f172a] to-transparent rounded-3xl border border-slate-800">
          <p className="text-slate-400 mb-6">Still have questions? We're here to help.</p>
          <button className="bg-amber-500 text-black px-8 py-3 rounded-full font-bold hover:bg-amber-400 transition-all">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;