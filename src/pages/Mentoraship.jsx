import {
  Users,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Star,
} from "lucide-react";

const CareerMentorshipPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden">

      {/* ================= HERO SECTION ================= */}
      <section className="relative h-[60vh] flex items-center bg-gradient-to-r from-blue-500 to-blue-400">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1600/900"
            alt="Career Mentorship Banner"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Career Mentorship & Guidance
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Personalized mentorship from industry experts to help you grow, excel, and achieve your career goals.
          </p>
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-6 py-3 rounded-lg shadow-lg transition">
            Start Mentorship
          </button>
        </div>
      </section>

      {/* ================= MENTORSHIP HIGHLIGHTS ================= */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          Mentorship Highlights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "1-on-1 Guidance",
              desc: "Personalized mentorship sessions to help you set and achieve goals.",
              icon: <Users size={36} className="text-blue-500" />,
            },
            {
              title: "Career Planning",
              desc: "Strategic career planning and roadmap development with experts.",
              icon: <Briefcase size={36} className="text-blue-500" />,
            },
            {
              title: "Skill Assessment",
              desc: "Identify your strengths and gaps for targeted growth.",
              icon: <CheckCircle2 size={36} className="text-blue-500" />,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-blue-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-2 text-blue-900">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= FEATURED MENTORS ================= */}
      <section className="py-20 px-6 md:px-16 bg-blue-50">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          Featured Mentors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { name: "Ananya Sharma", role: "AI & Data Science Mentor", img: "/api/placeholder/300/300" },
            { name: "Rohit Verma", role: "Software Development Mentor", img: "/api/placeholder/300/300" },
            { name: "Priya Reddy", role: "UI/UX & Design Mentor", img: "/api/placeholder/300/300" },
            { name: "Siddharth Jain", role: "Career Strategy Mentor", img: "/api/placeholder/300/300" },
          ].map((mentor, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2">
              <img src={mentor.img} alt={mentor.name} className="w-full h-56 object-cover" />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-blue-900 mb-1">{mentor.name}</h3>
                <p className="text-gray-700 text-sm">{mentor.role}</p>
                <div className="flex justify-center gap-1 mt-2 text-yellow-400">
                  <Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SUCCESS STORIES ================= */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-700 mb-12">
          Success Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {[
            {
              name: "Meera Joshi",
              story: "With mentorship guidance, I landed my dream AI job in 6 months.",
              img: "/api/placeholder/400/300",
            },
            {
              name: "Arjun Patel",
              story: "Personalized mentorship helped me switch my career to Data Science seamlessly.",
              img: "/api/placeholder/400/300",
            },
            {
              name: "Sneha Kapoor",
              story: "Mentors helped me identify my strengths and improve my skills rapidly.",
              img: "/api/placeholder/400/300",
            },
          ].map((item, i) => (
            <div key={i} className="bg-blue-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
              <img src={item.img} alt={item.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-blue-900 mb-2">{item.name}</h3>
                <p className="text-gray-700 text-sm italic">"{item.story}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-16 px-6 bg-blue-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Mentorship Journey</h2>
        <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
          Connect with top industry mentors and accelerate your career growth today.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold px-8 py-3 rounded-lg shadow-lg transition">
          Get Mentorship
        </button>
      </section>

    </div>
  );
};

export default CareerMentorshipPage;
