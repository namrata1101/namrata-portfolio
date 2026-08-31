import { useState } from "react";
import { projects } from "../data/projects";
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaShieldAlt, FaCheckCircle, FaStar } from "react-icons/fa";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Full-Stack Web App", "AI & Computer Vision"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section id="projects" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            Key applications built showcasing full-stack system architecture with React, Laravel & PostgreSQL, and computer vision with Python & Deep Learning.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/30"
                  : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`glass-card glass-card-hover rounded-3xl p-8 flex flex-col justify-between text-left relative overflow-hidden group ${
                project.featured ? "border-indigo-500/30 shadow-indigo-500/5" : ""
              }`}
            >
              {/* Featured Ribbon if featured */}
              {project.featured && (
                <div className="absolute top-0 right-0">
                  <div className="bg-gradient-to-l from-indigo-600 to-purple-600 text-white text-[10px] font-bold uppercase tracking-wider px-4 py-1 rounded-bl-xl shadow-md flex items-center gap-1.5">
                    <FaStar className="text-yellow-300 text-[10px]" /> Featured
                  </div>
                </div>
              )}

              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  {project.subtitle}
                </span>

                <h3 className="text-2xl font-bold text-white mt-1 mb-4 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Key Highlights */}
                {project.highlights && (
                  <div className="mb-6 space-y-2 bg-slate-900/80 p-4 rounded-2xl border border-slate-800">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Highlights:</p>
                    {project.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                        <FaCheckCircle className="text-emerald-400 text-xs flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-slate-900 border border-slate-700/60 px-3 py-1 rounded-lg text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Links */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-xl text-xs font-semibold text-slate-200 transition-colors"
                  >
                    <FaGithub />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/30 hover:border-indigo-600 rounded-xl text-xs font-semibold text-indigo-300 hover:text-white transition-all"
                  >
                    <FaLinkedin />
                    <span>Project Context</span>
                    <FaExternalLinkAlt className="text-[10px]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;