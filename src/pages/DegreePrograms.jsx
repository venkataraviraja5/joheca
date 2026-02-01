import {
  GraduationCap,
  BookOpen,
  Users,
  Globe2,
  CheckCircle2,
  Star,
} from "lucide-react";

const DegreeProgramsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden">

      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[60vh] flex items-center bg-gradient-to-r from-indigo-700 to-indigo-500">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1600/900"
            alt="Degree Programs Banner"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Explore Our Degree Programs
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Choose from a variety of undergraduate and postgraduate programs designed to equip you with knowledge, skills, and career readiness.
          </p>
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold px-6 py-3 rounded-lg shadow-lg transition">
            View Programs
          </button>
        </div>
      </section>

      {/* ================= PROGRAM HIGHLIGHTS ================= */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-12">
          Program Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Comprehensive Curriculum",
              desc: "In-depth study across multiple domains to ensure a strong foundation.",
              icon: <BookOpen size={36} className="text-indigo-700" />,
            },
            {
              title: "Industry Integration",
              desc: "Collaborate with top companies through internships and live projects.",
              icon: <Users size={36} className="text-indigo-700" />,
            },
            {
              title: "Global Perspective",
              desc: "Gain exposure to international best practices and global learning.",
              icon: <Globe2 size={36} className="text-indigo-700" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-indigo-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-indigo-900">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROGRAM LIST ================= */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-12">
          Available Degree Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "B.Sc in Computer Science", icon: <GraduationCap className="text-indigo-700" size={32} /> },
            { name: "BBA in Management", icon: <GraduationCap className="text-indigo-700" size={32} /> },
            { name: "B.Com in Accounting", icon: <GraduationCap className="text-indigo-700" size={32} /> },
            { name: "M.Sc in AI & Data Science", icon: <GraduationCap className="text-indigo-700" size={32} /> },
            { name: "MBA in Business Analytics", icon: <GraduationCap className="text-indigo-700" size={32} /> },
            { name: "M.Com in Finance", icon: <GraduationCap className="text-indigo-700" size={32} /> },
          ].map((prog, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center gap-4 hover:shadow-xl transition">
              <div>{prog.icon}</div>
              <h3 className="text-indigo-900 font-semibold text-lg text-center">{prog.name}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE OUR DEGREES ================= */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-12">
          Why Choose Our Degree Programs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {[
            {
              title: "Hands-on Learning",
              desc: "Interactive sessions, labs, and real-world projects enhance practical knowledge.",
              icon: <BookOpen size={32} className="text-indigo-700" />,
            },
            {
              title: "Career Ready",
              desc: "Programs designed to prepare students for top industry roles immediately after graduation.",
              icon: <GraduationCap size={32} className="text-indigo-700" />,
            },
            {
              title: "Mentorship & Support",
              desc: "Guidance from faculty and industry mentors to ensure academic and career success.",
              icon: <Users size={32} className="text-indigo-700" />,
            },
            {
              title: "Recognition & Accreditation",
              desc: "Programs recognized nationally and internationally for academic excellence.",
              icon: <Star size={32} className="text-indigo-700" />,
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-6 p-6 bg-indigo-50 rounded-xl shadow-md hover:shadow-xl transition">
              <div>{item.icon}</div>
              <div>
                <h3 className="text-indigo-900 font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-12">
          Student Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Anika Roy", role: "B.Sc Student", img: "/api/placeholder/300/300", quote: "The degree program shaped my career and gave me confidence." },
            { name: "Rohan Patel", role: "MBA Student", img: "/api/placeholder/300/301", quote: "Hands-on projects and mentorship prepared me for the real world." },
            { name: "Meera Joshi", role: "M.Sc Student", img: "/api/placeholder/300/302", quote: "The curriculum is modern, practical, and highly relevant to industry." },
          ].map((student, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden p-6 flex flex-col items-center gap-4 hover:shadow-xl transition">
              <img src={student.img} alt={student.name} className="w-24 h-24 object-cover rounded-full" />
              <h3 className="text-indigo-900 font-semibold">{student.name}</h3>
              <p className="text-gray-700 text-sm text-center">{student.role}</p>
              <p className="text-gray-600 text-sm italic text-center">"{student.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Degree Programs Today</h2>
        <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
          Enroll now and take the first step toward a successful and fulfilling career.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold px-8 py-3 rounded-lg shadow-lg transition">
          Apply Now
        </button>
      </section>

    </div>
  );
};

export default DegreeProgramsPage;
