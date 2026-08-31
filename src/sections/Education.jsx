import { FaGraduationCap, FaCertificate, FaAward, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

function Education() {
  const certifications = [
    {
      title: "Accenture Nordics Developer Virtual Experience Program",
      issuer: "Accenture",
      description: "Hands-on engineering simulation focusing on software architecture, code debugging, and solution delivery.",
      category: "Software Engineering"
    },
    {
      title: "Deloitte Technology Virtual Experience Program",
      issuer: "Deloitte",
      description: "Technology consulting workflows, enterprise system modeling, and data analytics case studies.",
      category: "Enterprise Tech"
    },
    {
      title: "Datacom Software Development Virtual Experience Program",
      issuer: "Datacom",
      description: "Full-stack development processes, agile teamwork, and backend API engineering.",
      category: "Full-Stack Development"
    },
    {
      title: "React – Virtual Experience / Certification",
      issuer: "Certification Program",
      description: "In-depth component lifecycles, state management, hooks, and responsive web application patterns.",
      category: "Frontend Specialization"
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">
            Academic & Credentials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Education & Certifications
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Strong academic engineering foundation complemented by global industry virtual experience credentials.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Education Column */}
          <div className="lg:col-span-5 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <FaGraduationCap className="text-indigo-400 text-2xl" />
              <span>Degree & Academics</span>
            </h3>

            <div className="glass-card glass-card-hover p-8 rounded-3xl text-left border-indigo-500/30 flex-grow flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/15 border border-indigo-500/30 text-indigo-400 rounded-full text-xs font-semibold mb-4">
                  B.Tech Graduate
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">
                  Bachelor of Technology (B.Tech)
                </h4>
                <p className="text-lg text-indigo-300 font-semibold mb-3">
                  Heritage Institute of Technology
                </p>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Comprehensive curriculum covering data structures & algorithms, database management systems, computer networks, object-oriented design, and software engineering methodologies.
                </p>
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400 font-medium">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <FaCalendarAlt className="text-indigo-400" />
                  Oct 2020 – May 2024
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                  <FaMapMarkerAlt className="text-purple-400" />
                  Kolkata, India
                </span>
              </div>
            </div>
          </div>

          {/* Certifications Column */}
          <div className="lg:col-span-7 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <FaCertificate className="text-emerald-400 text-2xl" />
              <span>Industry Certifications & Programs</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4 flex-grow">
              {certifications.map((cert, idx) => (
                <div
                  key={idx}
                  className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between text-left group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                        {cert.category}
                      </span>
                      <FaAward className="text-indigo-400 text-sm" />
                    </div>

                    <h4 className="text-base font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs font-semibold text-slate-400 mb-3">
                      Issued by {cert.issuer}
                    </p>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Education;
