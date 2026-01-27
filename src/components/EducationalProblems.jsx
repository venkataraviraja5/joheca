import { useEffect, useState } from "react";

export default function EducationProblems() {
  const percentage = 40;
  const radius = 58;
  const circumference = 2 * Math.PI * radius;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start >= percentage) {
        start = percentage;
        clearInterval(interval);
      }
      setProgress(start);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const offset = circumference - (progress / 100) * circumference;

  return (
    <section
      className="relative py-16 md:py-24 px-4"
      style={{
        backgroundImage: "url('/images/india-map.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Blue Overlay */}
      <div className="absolute inset-0 bg-blue-900/80"></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-yellow-400">
            Problems in Indian Education
          </h2>
          <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Millions graduate every year, but employability remains a serious challenge.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-10">
          
          {/* Graduates Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-2xl">
            <h3 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-yellow-400 mb-2">
              1 Cr+
            </h3>
            <p className="text-sm sm:text-lg md:text-2xl font-semibold text-white mb-2">
              Graduates / Year
            </p>
            <p className="text-xs sm:text-sm md:text-base text-white/80">
              Massive output, limited job readiness.
            </p>
          </div>

          {/* Employability Graph Card */}
          <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 md:p-12 flex flex-col items-center justify-center shadow-2xl">
            
            <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-44 md:h-44 mb-4">
              <svg className="w-full h-full -rotate-90">
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="10"
                  fill="none"
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke="#facc15"
                  strokeWidth="10"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                />
              </svg>

              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
                  {progress}%
                </span>
                <span className="text-[10px] sm:text-xs md:text-sm text-white/80">
                  Employable
                </span>
              </div>
            </div>

            <p className="text-sm sm:text-lg md:text-2xl font-semibold text-white text-center">
              Job-Ready Graduates
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
