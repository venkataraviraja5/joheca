"use client";
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaUserGraduate, 
  FaUserFriends, 
  FaBell, 
  FaCalendarAlt, 
  FaFileAlt, 
  FaChartLine, 
  FaComments, 
  FaCheckCircle,
  FaShieldAlt
} from "react-icons/fa";

const appData = {
  student: {
    title: "Student Experience",
    subtitle: "Empowering your academic journey with real-time tools.",
    color: "from-blue-600 to-indigo-700",
    features: [
      { title: "Academic Hub", desc: "One-tap access to assignments, grades, and schedules.", icon: <FaFileAlt /> },
      { title: "Smart Alerts", desc: "Real-time notifications for exams and tight deadlines.", icon: <FaBell /> },
      { title: "Digital Submission", desc: "Paperless homework uploads with instant receipts.", icon: <FaCheckCircle /> },
      { title: "Event Calendar", desc: "Integrated school events and extracurricular tracking.", icon: <FaCalendarAlt /> },
      { title: "Mentor Access", desc: "Direct communication channels with your instructors.", icon: <FaComments /> },
    ]
  },
  parent: {
    title: "Parental Visibility",
    subtitle: "Stay connected to your child's growth and safety.",
    color: "from-[#0B3D91] to-slate-900",
    features: [
      { title: "Progress Tracker", desc: "Full visibility into your child’s academic evolution.", icon: <FaChartLine /> },
      { title: "Direct Connect", desc: "Instant messaging with teachers and school staff.", icon: <FaUserFriends /> },
      { title: "Safety Reports", desc: "Daily attendance and behavior monitoring.", icon: <FaShieldAlt /> },
      { title: "Admin Alerts", desc: "Holidays, PTMs, and urgent school announcements.", icon: <FaBell /> },
      { title: "Efficient Sync", desc: "Zero physical notes. Everything on your phone.", icon: <FaCalendarAlt /> },
    ]
  }
};

const MobileAppPage = () => {
  const [view, setView] = useState("student");
  const current = appData[view];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#FFB800]">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h2 className="text-[#0B3D91] font-black uppercase tracking-[0.4em] text-xs mb-4">JoHeCa Ecosystem</h2>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 font-poppins leading-tight">
              One App. <span className="text-[#FFB800]">Two Perspectives.</span>
            </h1>
            <p className="mt-6 text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-inter">
              Bridging the gap between school and home with a seamless digital communication bridge.
            </p>
          </motion.div>

          {/* Toggle Switch */}
          <div className="flex justify-center mb-16">
            <div className="bg-slate-100 p-2 rounded-full flex gap-2 border border-slate-200 shadow-inner">
              <button 
                onClick={() => setView("student")}
                className={`flex items-center gap-3 px-8 py-3 rounded-full font-bold transition-all ${view === 'student' ? 'bg-white text-blue-600 shadow-lg' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <FaUserGraduate /> Students
              </button>
              <button 
                onClick={() => setView("parent")}
                className={`flex items-center gap-3 px-8 py-3 rounded-full font-bold transition-all ${view === 'parent' ? 'bg-white text-[#0B3D91] shadow-lg' : 'text-slate-500 hover:text-slate-800'}`}
              >
                <FaUserFriends /> Parents
              </button>
            </div>
          </div>
        </div>

        {/* Background Decorative Blobs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none opacity-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-400 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#FFB800] rounded-full blur-[120px]" />
        </div>
      </section>

      {/* ================= FEATURE DISPLAY ================= */}
      <section className="pb-5 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={view}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-12 items-center"
            >
              {/* Feature Content */}
              <div className="lg:col-span-5 space-y-8">
                <div>
                  <h3 className={`text-3xl md:text-5xl font-black mb-4 font-poppins text-transparent bg-clip-text bg-gradient-to-r ${current.color}`}>
                    {current.title}
                  </h3>
                  <p className="text-slate-600 text-lg leading-relaxed italic">{current.subtitle}</p>
                </div>

                <div className="space-y-4">
                  {current.features.map((f, i) => (
                    <motion.div 
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-5 p-6 rounded-[2rem] bg-white border border-slate-100 hover:border-[#FFB800] hover:shadow-xl hover:shadow-slate-200/50 transition-all group"
                    >
                      <div className={`mt-1 p-3 rounded-2xl bg-slate-50 text-xl group-hover:bg-[#FFB800] group-hover:text-white transition-colors`}>
                        {f.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg">{f.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Visual Mockup Side */}
              <div className="lg:col-span-7 relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${current.color} opacity-10 rounded-[4rem] -rotate-3`} />
                
                {/* Visual Representation of App */}
                <div className="relative p-8 flex justify-center">
                   {/* This replaces a static image with a dynamic UI mockup */}
                   <div className="w-full max-w-md aspect-[9/16] bg-slate-900 rounded-[3rem] border-[12px] border-slate-800 shadow-2xl relative overflow-hidden">
                      <div className={`absolute inset-x-0 top-0 h-32 bg-gradient-to-br ${current.color} flex items-center justify-center`}>
                        <div className="text-white text-center">
                          <p className="text-[10px] uppercase tracking-widest opacity-80">Welcome to JoHeCa</p>
                          <p className="font-bold text-lg">{view === 'student' ? 'My Classes' : 'Child Progress'}</p>
                        </div>
                      </div>
                      <div className="pt-36 p-6 space-y-4">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="h-20 bg-slate-800 rounded-2xl animate-pulse flex items-center px-4 gap-4">
                            <div className="w-10 h-10 bg-slate-700 rounded-lg" />
                            <div className="space-y-2">
                              <div className="w-24 h-2 bg-slate-700 rounded" />
                              <div className="w-16 h-2 bg-slate-700 rounded opacity-50" />
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="absolute bottom-6 inset-x-0 flex justify-center">
                        <div className="w-32 h-1 bg-white/20 rounded-full" />
                      </div>
                   </div>

                   {/* Floating Contextual Icon Images */}
                   <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute top-1/4 -right-4 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
                   >
                     <div className="flex items-center gap-3">
                       <div className="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center"><FaCheckCircle /></div>
                       <p className="text-[10px] font-bold text-slate-800">Notification <br/> Sent to {view === 'student' ? 'Teacher' : 'Parent'}</p>
                     </div>
                   </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="md:py-12 pt-2 md:px-6">
        <div className={`max-w-7xl mx-auto md:rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden bg-slate-900`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${current.color} opacity-40`} />
          <div className="relative z-10 space-y-8">
            <h2 className="text-3xl md:text-5xl font-black font-poppins">Ready to experience JoHeCa?</h2>
            <p className="text-slate-300 max-w-xl mx-auto">Join the movement for smarter, faster, and more secure education-to-home synchronization.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#FFB800] text-slate-900 px-10 py-4 rounded-full font-black hover:scale-105 transition-transform">Join Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MobileAppPage;