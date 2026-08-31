import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaAward, FaShieldAlt, FaRocket, FaUsers } from "react-icons/fa";

function Experience() {
  const experiences = [
    {
      role: "Software Developer",
      company: "AeoLogic Technologies Pvt. Ltd.",
      client: "National Informatics Centre (NIC), Government of West Bengal",
      period: "Sep 2024 – Present",
      location: "Kolkata, India",
      type: "Full-Time",
      description:
        "Building, maintaining, and securing citizen-scale web platforms under the aegis of NIC for the Government of West Bengal.",
      bulletPoints: [
        "Developed and maintained 5+ large-scale, mission-critical government web applications using React.js, Laravel, and PostgreSQL, serving thousands of citizens.",
        "Developed and deployed the West Bengal Taxation Tribunal (WBTT) website to production, delivering a responsive, secure, and user-friendly public-facing web application for a government tribunal.",
        "Implemented frontend and backend features, REST API integration, database-driven functionality, responsive UI, and production deployment while adhering to government requirements.",
        "Resolved critical security vulnerabilities including XSS, insecure file uploads, and authentication flaws, achieving full security-audit compliance and reducing application risk.",
        "Designed and optimized scalable application architectures, improving performance, reliability, maintainability, and user experience across existing government systems.",
        "Conducted UI/user-level testing and security assessments, identified defects and vulnerabilities, and collaborated with QA, backend engineers, and government stakeholders to deliver production-ready fixes."
      ],
      skills: ["React.js", "Laravel", "PostgreSQL", "REST APIs", "WBTT Portal", "XSS Remediation", "Security Audits", "Linux", "Agile"]
    },
    {
      role: "Python Intern",
      company: "UniConverge Technologies",
      client: null,
      period: "Jun 2023 – Jul 2023",
      location: "Kolkata, India",
      type: "Internship",
      description:
        "Engineered backend automation scripts and contributed to software module development.",
      bulletPoints: [
        "Developed Python-based scripts and contributed to software modules, gaining hands-on experience in backend development workflows and production-level code practices.",
        "Assisted in automated data handling, algorithm implementation, and debugging codebase components."
      ],
      skills: ["Python", "Scripting", "Backend Workflows", "Data Processing"]
    }
  ];

  const keyAchievements = [
    {
      icon: <FaShieldAlt className="text-emerald-400 text-xl" />,
      title: "Security Hardening",
      desc: "Led remediation of multiple critical vulnerabilities flagged in government security audits (XSS, insecure file uploads, broken authentication) — resulting in zero critical findings post-audit."
    },
    {
      icon: <FaRocket className="text-indigo-400 text-xl" />,
      title: "Mission-Critical Delivery",
      desc: "Successfully maintained and enhanced government web applications with high availability and reliability standards, directly supporting public-sector digital services for Government of West Bengal."
    },
    {
      icon: <FaUsers className="text-cyan-400 text-xl" />,
      title: "Cross-Functional Collaboration",
      desc: "Partnered with government stakeholders, QA teams, and backend engineers to design compliant architectures and implement features under tight regulatory requirements."
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Hands-on software engineering delivering secure government solutions and scalable digital infrastructure.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8 mb-16">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="glass-card glass-card-hover p-8 sm:p-10 rounded-3xl text-left relative overflow-hidden"
            >
              {/* Header inside card */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
                <div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="px-3 py-0.5 text-xs font-semibold rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-500/30">
                      {exp.type}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg font-semibold text-indigo-300 mt-1">
                    {exp.company}
                  </p>
                  
                  {exp.client && (
                    <p className="text-xs sm:text-sm font-medium text-slate-400 mt-0.5 flex items-center gap-1.5">
                      <span className="text-slate-500">Client:</span> {exp.client}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap lg:flex-col lg:items-end gap-2 text-xs sm:text-sm text-slate-400">
                  <span className="flex items-center gap-1.5 font-medium px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                    <FaCalendarAlt className="text-indigo-400" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 rounded-lg border border-slate-800">
                    <FaMapMarkerAlt className="text-purple-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Bullet Points */}
              <div className="mt-6">
                <ul className="space-y-3.5">
                  {exp.bulletPoints.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                      <FaCheckCircle className="text-indigo-400 text-sm mt-1 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills badges */}
              <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap gap-2 items-center">
                <span className="text-xs font-semibold text-slate-400 mr-2">Technologies used:</span>
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3 py-1 text-xs font-medium text-slate-300 bg-slate-900 border border-slate-700/60 rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements Spotlight */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-indigo-500/20 text-left">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 bg-indigo-600/20 border border-indigo-500/30 rounded-xl text-indigo-400">
              <FaAward size={22} />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Key Professional Achievements
              </h3>
              <p className="text-xs text-slate-400">Highlights from government and mission-critical engagements</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {keyAchievements.map((ach, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950/70 border border-slate-800/80 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  {ach.icon}
                  <h4 className="font-bold text-white text-base">{ach.title}</h4>
                </div>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed flex-grow">
                  {ach.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Experience;