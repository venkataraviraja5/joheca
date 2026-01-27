import { GraduationCap, Briefcase, Shield, Globe } from "lucide-react";

const pillars = [
  {
    title: "Education",
    description:
      "Providing students with practical knowledge, mentorship, and skill development for the future.",
    icon: <GraduationCap size={48} className="text-yellow-500" />,
  },
  {
    title: "Employment",
    description:
      "Connecting graduates to the right career opportunities and enhancing employability.",
    icon: <Briefcase size={48} className="text-green-500" />,
  },
  {
    title: "Insurance",
    description:
      "Ensuring financial safety and health coverage for students and professionals.",
    icon: <Shield size={48} className="text-blue-500" />,
  },
  {
    title: "International",
    description:
      "Opening global learning and career opportunities with international programs.",
    icon: <Globe size={48} className="text-purple-500" />,
  },
];

export default function JoHeCaSolution() {
  return (
    <section className="bg-gray-50 mt-6 py-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900">
          JoHeCa Solution
        </h2>
        <p className="text-gray-600 mb-5 md:mb-5 text-lg md:text-xl max-w-3xl mx-auto">
          Our solution is built on 4 strong pillars that ensure students gain
          knowledge, career readiness, security, and global opportunities.
        </p>

        {/* Grid for cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4 md:mb-6">
                <div className="p-3 bg-gray-100 rounded-full animate-bounce">
                  {pillar.icon}
                </div>
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-gray-900">
                {pillar.title}
              </h3>
              <p className="text-xs md:text-base text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
