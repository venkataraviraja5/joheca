import {
  Cpu,
  Brain,
  Database,
  Activity,
  CheckCircle2,
  Users, 
} from "lucide-react";

const AITrainingPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans overflow-x-hidden">

      {/* ================= HERO BANNER ================= */}
      <section className="relative h-[60vh] flex items-center bg-gradient-to-r from-indigo-700 to-indigo-500">
        <div className="absolute inset-0">
          <img
            src="/api/placeholder/1600/900"
            alt="AI Training Banner"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 text-white text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Master AI & Machine Learning
          </h1>
          <p className="text-lg md:text-xl max-w-xl">
            Hands-on AI training programs to build real-world skills and accelerate your career in data-driven industries.
          </p>
          <button className="mt-6 bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold px-6 py-3 rounded-lg shadow-lg transition">
            Explore AI Courses
          </button>
        </div>
      </section>

      {/* ================= AI SPECIALIZATIONS ================= */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-12">
          AI & ML Specializations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Machine Learning",
              desc: "Supervised, unsupervised learning & real-life datasets.",
              icon: <Cpu size={36} className="text-indigo-700" />,
            },
            {
              title: "Deep Learning",
              desc: "Neural networks, CNNs, RNNs, and practical AI projects.",
              icon: <Brain size={36} className="text-indigo-700" />,
            },
            {
              title: "Data Engineering",
              desc: "Data pipelines, databases, and AI-ready data management.",
              icon: <Database size={36} className="text-indigo-700" />,
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

      {/* ================= FEATURED AI COURSES ================= */}
      <section className="py-20 px-6 md:px-16 bg-gray-100">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-12">
          Featured AI Courses
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            "Python for AI & ML",
            "TensorFlow Deep Dive",
            "Computer Vision with OpenCV",
            "Natural Language Processing",
            "AI Project Deployment",
            "Reinforcement Learning",
          ].map((course, i) => (
            <div key={i} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition">
              <img
                src={`/api/placeholder/300/200`}
                alt={course}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="font-semibold text-indigo-900 mb-2">{course}</h3>
                <p className="text-gray-700 text-sm mb-2">
                  Hands-on projects and mentorship for real-world AI skills.
                </p>
                <div className="flex justify-center gap-2 text-yellow-400">
                  {/* Using Unicode stars instead of icon */}
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE AI TRAINING ================= */}
      <section className="py-20 px-6 md:px-16 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-12">
          Why Choose Our AI Training
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {[
            {
              title: "Hands-on Projects",
              desc: "Build AI applications from scratch with guided projects.",
              icon: <Activity size={32} className="text-indigo-700" />,
            },
            {
              title: "Expert Mentorship",
              desc: "Learn from experienced AI practitioners and researchers.",
              icon: <Users size={32} className="text-indigo-700" />,
            },
            {
              title: "Industry Ready Skills",
              desc: "Focus on AI skills that are in high demand in tech companies.",
              icon: <CheckCircle2 size={32} className="text-indigo-700" />,
            },
            {
              title: "Flexible Learning",
              desc: "Self-paced learning with live workshops and support.",
              icon: <Brain size={32} className="text-indigo-700" />,
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

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 bg-indigo-700 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your AI Journey Today</h2>
        <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
          Join our AI training courses to gain cutting-edge skills and accelerate your career.
        </p>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-indigo-900 font-bold px-8 py-3 rounded-lg shadow-lg transition">
          Explore AI Courses
        </button>
      </section>

    </div>
  );
};

export default AITrainingPage;
