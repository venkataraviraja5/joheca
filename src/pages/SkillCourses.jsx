import {
  BookOpen,
  Code,
  Layers,
  Cpu,
  CheckCircle2,
  Users,
  Star
} from "lucide-react";

const SkillCoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden">

      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[60vh] flex items-center bg-gradient-to-r from-purple-700 to-purple-500">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1600/900"
            alt="Skill Courses Banner"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Upskill with Our Courses
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Short-term, intensive skill courses designed to enhance your capabilities and make you industry-ready.
          </p>
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-6 py-3 rounded-lg shadow-lg transition">
            Explore Courses
          </button>
        </div>
      </section>

      {/* ================= COURSE CATEGORIES ================= */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">
          Course Categories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Programming & Development",
              desc: "Learn web, app, and software development with practical projects.",
              icon: <Code size={36} className="text-purple-700" />,
            },
            {
              title: "Design & Creativity",
              desc: "Courses in UI/UX, graphic design, animation, and visual communication.",
              icon: <Layers size={36} className="text-purple-700" />,
            },
            {
              title: "AI & Data Science",
              desc: "Master AI, machine learning, and data analysis skills for modern careers.",
              icon: <Cpu size={36} className="text-purple-700" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-purple-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-purple-900">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED COURSES ================= */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">
          Featured Skill Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "React JS Mastery",
            "UI/UX Design Fundamentals",
            "Python for AI & ML",
            "JavaScript Fullstack",
            "Graphic Design & Branding",
            "Data Analytics with Python",
          ].map((course, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                src={`/api/placeholder/300/200`}
                alt={course}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-purple-900 mb-2">{course}</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Hands-on projects, mentorship, and industry-ready skills.
                </p>
                <div className="flex justify-center gap-2 text-yellow-400">
                  <Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE SKILL COURSES ================= */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12">
          Why Choose Our Skill Courses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {[
            {
              title: "Practical Learning",
              desc: "Real-world projects and exercises to apply knowledge immediately.",
              icon: <BookOpen size={32} className="text-purple-700" />,
            },
            {
              title: "Mentorship Support",
              desc: "Learn from experienced mentors and industry experts.",
              icon: <Users size={32} className="text-purple-700" />,
            },
            {
              title: "Flexible Schedule",
              desc: "Courses designed for working students and professionals.",
              icon: <Layers size={32} className="text-purple-700" />,
            },
            {
              title: "Career Ready Skills",
              desc: "Focus on skills that make you employable and competitive.",
              icon: <CheckCircle2 size={32} className="text-purple-700" />,
            },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-6 p-6 bg-purple-50 rounded-xl shadow-md hover:shadow-xl transition">
              <div>{item.icon}</div>
              <div>
                <h3 className="text-purple-900 font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-700 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 bg-purple-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Skill Journey Today</h2>
        <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
          Enroll in our skill courses to learn, grow, and achieve career success quickly.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-bold px-8 py-3 rounded-lg shadow-lg transition">
          Explore Courses
        </button>
      </section>

    </div>
  );
};

export default SkillCoursesPage;
