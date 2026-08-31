import { 
  FaReact, 
  FaPhp, 
  FaPython, 
  FaJsSquare, 
  FaHtml5, 
  FaCss3Alt, 
  FaDatabase, 
  FaShieldAlt, 
  FaGitAlt, 
  FaLinux, 
  FaServer, 
  FaLayerGroup, 
  FaTasks, 
  FaCogs,
  FaLock
} from "react-icons/fa";
import { 
  SiPostgresql, 
  SiMysql, 
  SiLaravel, 
  SiNodedotjs, 
  SiPostman 
} from "react-icons/si";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend Development",
      description: "Modern, reactive, and responsive UI interfaces",
      color: "from-cyan-500/20 to-blue-500/10",
      borderColor: "border-cyan-500/30",
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "JavaScript (ES6+)", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3 / Tailwind", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "UI Testing", icon: <FaTasks className="text-purple-400" /> },
        { name: "Responsive Design", icon: <FaLayerGroup className="text-emerald-400" /> }
      ]
    },
    {
      category: "Backend & APIs",
      description: "Secure, performant servers & RESTful architectures",
      color: "from-red-500/20 to-orange-500/10",
      borderColor: "border-red-500/30",
      skills: [
        { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-emerald-500" /> },
        { name: "Python", icon: <FaPython className="text-yellow-400" /> },
        { name: "REST APIs", icon: <FaServer className="text-sky-400" /> },
        { name: "API Integration", icon: <SiPostman className="text-orange-400" /> }
      ]
    },
    {
      category: "Databases & Storage",
      description: "Relational database modeling and query optimization",
      color: "from-sky-500/20 to-indigo-500/10",
      borderColor: "border-sky-500/30",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
        { name: "SQL", icon: <FaDatabase className="text-emerald-400" /> },
        { name: "Schema Architecture", icon: <FaLayerGroup className="text-purple-400" /> },
        { name: "Query Optimization", icon: <FaCogs className="text-amber-400" /> }
      ]
    },
    {
      category: "Security & Compliance",
      description: "Application hardening, vulnerability fixes & audit readiness",
      color: "from-emerald-500/20 to-teal-500/10",
      borderColor: "border-emerald-500/30",
      skills: [
        { name: "XSS Remediation", icon: <FaShieldAlt className="text-emerald-400" /> },
        { name: "Auth Vulnerability Assessment", icon: <FaLock className="text-teal-400" /> },
        { name: "File Upload Security", icon: <FaShieldAlt className="text-cyan-400" /> },
        { name: "Security Audits", icon: <FaTasks className="text-indigo-400" /> },
        { name: "Govt Compliance Standards", icon: <FaShieldAlt className="text-emerald-300" /> }
      ]
    },
    {
      category: "Tools & Environment",
      description: "Version control, OS environment, and workflows",
      color: "from-purple-500/20 to-indigo-500/10",
      borderColor: "border-purple-500/30",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Linux / Unix", icon: <FaLinux className="text-yellow-300" /> },
        { name: "Agile / Scrum", icon: <FaTasks className="text-indigo-400" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> }
      ]
    },
    {
      category: "Architecture & Engineering",
      description: "System design patterns for reliability and scale",
      color: "from-indigo-500/20 to-purple-500/10",
      borderColor: "border-indigo-500/30",
      skills: [
        { name: "System Architecture Design", icon: <FaServer className="text-indigo-400" /> },
        { name: "Performance Optimization", icon: <FaCogs className="text-cyan-400" /> },
        { name: "Scalability Planning", icon: <FaLayerGroup className="text-purple-400" /> },
        { name: "Clean Maintainable Code", icon: <FaReact className="text-emerald-400" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">
            Technical Proficiency
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Capabilities
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            A comprehensive overview of programming languages, frameworks, security practices, and tools I leverage daily.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card glass-card-hover p-6 rounded-2xl flex flex-col justify-between text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg text-white">
                    {cat.category}
                  </h3>
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  {cat.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-200 hover:border-slate-700 hover:bg-slate-800 transition-colors"
                    >
                      <span className="text-sm">{skill.icon}</span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;