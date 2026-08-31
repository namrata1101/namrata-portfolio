import profile from "../assets/images/profileimg.jpeg";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaShieldAlt, FaExternalLinkAlt, FaDatabase, FaReact, FaPhp } from "react-icons/fa";
import { SiPostgresql, SiLaravel } from "react-icons/si";

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[250px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content (Left Column) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-semibold tracking-wide mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Full-Stack Developer Roles • 2+ Yrs Exp
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">Namrata Sarkar</span>
            </h1>

            {/* Sub-headline */}
            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mt-4 flex items-center flex-wrap gap-2">
              Full-Stack Software Developer
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="text-indigo-400 text-lg font-normal">
                React.js • Laravel • PostgreSQL
              </span>
            </h2>

            {/* Summary */}
            <p className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Software Developer with 2+ years of hands-on experience building and securing large-scale, mission-critical web applications for government clients (NIC, Govt of West Bengal). Proven track record in security hardening, resolving critical vulnerabilities (XSS, authentication flaws, file upload exploits), and delivering scalable, audit-compliant digital solutions.
            </p>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap gap-2.5 mt-6 items-center">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">Core Stack:</span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/90 border border-slate-700/60 rounded-lg text-xs font-medium text-slate-200">
                <FaReact className="text-cyan-400 text-sm" /> React.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/90 border border-slate-700/60 rounded-lg text-xs font-medium text-slate-200">
                <SiLaravel className="text-red-400 text-sm" /> Laravel
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/90 border border-slate-700/60 rounded-lg text-xs font-medium text-slate-200">
                <SiPostgresql className="text-sky-400 text-sm" /> PostgreSQL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-900/90 border border-slate-700/60 rounded-lg text-xs font-medium text-slate-200">
                <FaShieldAlt className="text-emerald-400 text-xs" /> Security Audits
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mt-8 items-center">
              <a
                href="/Namrata_Sarkar_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5"
              >
                <FaDownload className="text-sm" />
                <span>Download Resume</span>
              </a>

              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-slate-200 font-semibold rounded-xl border border-slate-700/80 transition-all duration-300 hover:border-slate-600 hover:-translate-y-0.5"
              >
                <span>View Projects</span>
                <FaExternalLinkAlt className="text-xs text-slate-400" />
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-3 ml-1 sm:ml-2">
                <a
                  href="https://github.com/namrata1101"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-xl transition-all hover:scale-105 hover:border-slate-700"
                  aria-label="GitHub Profile"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/namrata-sarkar-46b328202/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-indigo-400 rounded-xl transition-all hover:scale-105 hover:border-slate-700"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:namratasarkar164@gmail.com"
                  className="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 rounded-xl transition-all hover:scale-105 hover:border-slate-700"
                  aria-label="Send Email"
                >
                  <FaEnvelope size={20} />
                </a>
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-12 pt-8 border-t border-slate-800/80 w-full">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">2+ <span className="text-indigo-400">Yrs</span></p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Full-Stack Experience</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">5+ <span className="text-purple-400">Apps</span></p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">Govt Web Applications</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">100%</p>
                <p className="text-xs sm:text-sm text-emerald-400 font-medium mt-1">Audit Compliance</p>
              </div>
            </div>
          </div>

          {/* Portrait & Image Card (Right Column) */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative group">
              {/* Decorative background glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-75 transition duration-500 group-hover:duration-200" />
              
              {/* Photo Container */}
              <div className="relative rounded-3xl overflow-hidden bg-slate-900 border-2 border-slate-800/80 shadow-2xl w-72 sm:w-80 md:w-84 aspect-[3/4] flex items-center justify-center">
                <img
                  src={profile}
                  alt="Namrata Sarkar"
                  className="w-full h-full object-cover object-[center_60%] scale-[1.08] filter contrast-[1.03] group-hover:scale-115 transition-transform duration-700"
                />

                {/* Gradient overlay at bottom of photo */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 bg-slate-950/85 backdrop-blur-md rounded-2xl border border-slate-800 text-left">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-white">Namrata Sarkar</p>
                      <p className="text-[11px] text-indigo-300">Software Developer @ AeoLogic</p>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      NIC Client
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Tech Tag Badge */}
              <div className="absolute -top-4 -right-4 p-3 bg-slate-900/90 backdrop-blur-md rounded-2xl border border-slate-700/80 shadow-xl flex items-center gap-2">
                <FaShieldAlt className="text-emerald-400 text-lg" />
                <div className="text-left">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">Specialization</p>
                  <p className="text-xs font-semibold text-white">Security & Scalability</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;