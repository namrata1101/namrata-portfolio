import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp, FaHeart } from "react-icons/fa";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Brand & Note */}
        <div className="text-center md:text-left">
          <p className="text-lg font-bold text-white tracking-tight">
            Namrata Sarkar
          </p>
          <p className="text-xs text-slate-400 mt-1">
            Full-Stack Software Developer • React.js | Laravel | PostgreSQL
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/namrata1101"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-xl transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/namrata-sarkar-46b328202/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-indigo-400 rounded-xl transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href="mailto:namratasarkar164@gmail.com"
            className="p-2.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-cyan-400 rounded-xl transition-colors"
            aria-label="Email"
          >
            <FaEnvelope size={16} />
          </a>
        </div>

        {/* Right Side: Copyright & Back to Top */}
        <div className="flex items-center gap-4 text-xs text-slate-400">
          <span>© {new Date().getFullYear()} Namrata Sarkar</span>
          <button
            onClick={scrollToTop}
            className="p-2.5 bg-slate-900 hover:bg-indigo-600 border border-slate-800 hover:border-indigo-500 rounded-xl text-slate-300 hover:text-white transition-all shadow-sm"
            aria-label="Back to top"
          >
            <FaArrowUp size={12} />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;