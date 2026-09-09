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
      category: "Languages",
      description: "Core programming and scripting languages",
      color: "from-amber-500/20 to-yellow-500/10",
      skills: [
        { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
        { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
        { name: "SQL", icon: <FaDatabase className="text-emerald-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
        { name: "Python", icon: <FaPython className="text-yellow-300" /> }
      ]
    },
    {
      category: "Frameworks & Libraries",
      description: "Full-stack web application frameworks and runtime engines",
      color: "from-cyan-500/20 to-blue-500/10",
      skills: [
        { name: "React.js", icon: <FaReact className="text-cyan-400" /> },
        { name: "Node.js", icon: <SiNodedotjs className="text-emerald-500" /> },
        { name: "Laravel", icon: <SiLaravel className="text-red-500" /> }
      ]
    },
    {
      category: "UI & Performance",
      description: "Modern user interfaces and high-speed responsiveness",
      color: "from-blue-500/20 to-indigo-500/10",
      skills: [
        { name: "Responsive UI Development", icon: <FaLayerGroup className="text-cyan-400" /> },
        { name: "Application Performance Optimization", icon: <FaCogs className="text-amber-400" /> },
        { name: "REST API Integration", icon: <FaServer className="text-sky-400" /> }
      ]
    },
    {
      category: "Databases",
      description: "Relational data modeling, querying, and schema design",
      color: "from-sky-500/20 to-indigo-500/10",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-400" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-400" /> }
      ]
    },
    {
      category: "Security & Testing",
      description: "Application hardening, vulnerability remediation & audit compliance",
      color: "from-emerald-500/20 to-teal-500/10",
      skills: [
        { name: "XSS Remediation", icon: <FaShieldAlt className="text-emerald-400" /> },
        { name: "Authentication Vulnerability Assessment", icon: <FaLock className="text-teal-400" /> },
        { name: "File Upload Security", icon: <FaShieldAlt className="text-cyan-400" /> },
        { name: "UI Testing", icon: <FaTasks className="text-purple-400" /> },
        { name: "Security Audits", icon: <FaShieldAlt className="text-emerald-300" /> }
      ]
    },
    {
      category: "Tools & Platforms",
      description: "Version control, APIs, OS platforms, and Agile processes",
      color: "from-purple-500/20 to-indigo-500/10",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "REST APIs", icon: <FaServer className="text-sky-400" /> },
        { name: "Linux", icon: <FaLinux className="text-yellow-300" /> },
        { name: "Agile / Scrum", icon: <FaTasks className="text-indigo-400" /> }
      ]
    },
    {
      category: "Concepts",
      description: "System architecture, scalability, and regulatory compliance",
      color: "from-indigo-500/20 to-purple-500/10",
      skills: [
        { name: "System Architecture Design", icon: <FaServer className="text-indigo-400" /> },
        { name: "Performance Optimization", icon: <FaCogs className="text-cyan-400" /> },
        { name: "Scalability", icon: <FaLayerGroup className="text-purple-400" /> },
        { name: "Government Compliance Standards", icon: <FaShieldAlt className="text-emerald-400" /> }
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