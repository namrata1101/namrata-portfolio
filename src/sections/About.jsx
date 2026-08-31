import { FaShieldAlt, FaServer, FaCode, FaGraduationCap, FaMapMarkerAlt, FaBriefcase, FaCheckCircle } from "react-icons/fa";

function About() {
  const highlights = [
    {
      icon: <FaServer className="text-2xl text-indigo-400" />,
      title: "Mission-Critical Government Applications",
      description:
        "Engineered and maintained 5+ large-scale web applications for Government of West Bengal departments under National Informatics Centre (NIC), delivering high availability and reliable digital public services."
    },
    {
      icon: <FaShieldAlt className="text-2xl text-emerald-400" />,
      title: "Security Hardening & Audit Compliance",
      description:
        "Specialized in identifying and remediating critical vulnerabilities including Cross-Site Scripting (XSS), insecure file uploads, and authentication flaws to achieve 100% audit compliance."
    },
    {
      icon: <FaCode className="text-2xl text-cyan-400" />,
      title: "Scalable Full-Stack Engineering",
      description:
        "Building responsive, modern user interfaces with React.js paired with robust Laravel backend architectures, optimized PostgreSQL relational schemas, and maintainable REST APIs."
    }
  ];

  const quickInfo = [
    { label: "Location", value: "Kolkata, West Bengal, India", icon: <FaMapMarkerAlt className="text-indigo-400" /> },
    { label: "Experience", value: "2+ Years (Full-Stack)", icon: <FaBriefcase className="text-emerald-400" /> },
    { label: "Education", value: "B.Tech (Heritage Inst. of Tech)", icon: <FaGraduationCap className="text-cyan-400" /> },
    { label: "Availability", value: "Available for Roles", icon: <FaCheckCircle className="text-purple-400" /> },
  ];

  return (
    <section id="about" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">
            About Me
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Crafting Secure, High-Impact Web Solutions
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            A developer who bridges user experience with robust system architecture, security compliance, and performance optimization.
          </p>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-8 rounded-2xl flex flex-col text-left group"
            >
              <div className="w-14 h-14 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 group-hover:border-indigo-500/50 group-hover:scale-105 transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Narrative and Info Grid */}
        <div className="grid lg:grid-cols-12 gap-10 items-center p-8 sm:p-10 rounded-3xl bg-slate-900/60 border border-slate-800/80">
          
          <div className="lg:col-span-7 text-left space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Passionate About Scalable Code & Bulletproof Security
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              With a Bachelor of Technology in Engineering from Heritage Institute of Technology and over 2 years of industry experience, I thrive at the intersection of frontend elegance and backend robustness.
            </p>
            <p className="text-slate-400 text-sm leading-relaxed">
              At AeoLogic Technologies, working on behalf of the National Informatics Centre (NIC), I have delivered software solutions that serve citizen-scale workloads. Beyond writing modular code in React and Laravel, I place strong emphasis on zero-vulnerability security audits, proactive UI testing, performance tuning, and cross-functional team collaboration.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {quickInfo.map((info, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-left">
                <div className="flex items-center gap-2.5 mb-1.5">
                  {info.icon}
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {info.label}
                  </span>
                </div>
                <p className="text-sm font-bold text-slate-100">{info.value}</p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;