import { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCopy,
  FaCheck,
  FaClock,
  FaBriefcase
} from "react-icons/fa";

function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Job Opportunity",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const email = "namratasarkar164@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      formData.subject + " - from " + formData.name
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const subjectOptions = [
    "Job Opportunity",
    "Full-Stack Project",
    "Technical Consultation",
    "General Inquiry"
  ];

  return (
    <section id="contact" className="py-24 relative bg-slate-950/90 border-t border-slate-900">
      {/* Background glow */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Build Something Great Together
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-4 leading-relaxed">
            I am currently open to full-time Software Developer opportunities, consulting, and impactful engineering projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Info & Quick Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left space-y-6">
            
            {/* Quick Status Box */}
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Open to Opportunities
                </span>
              </div>
              <p className="text-sm text-slate-300">
                Looking for Full-Stack, React, Laravel, or Backend Engineering roles where I can deliver high-quality, secure solutions.
              </p>
              <div className="flex items-center gap-2 mt-4 text-xs text-slate-400">
                <FaClock className="text-indigo-400" />
                <span>Usually responds within 24 hours</span>
              </div>
            </div>

            {/* Email Copy Card */}
            <div className="p-6 rounded-3xl glass-card flex flex-col justify-between">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-3 py-1 bg-indigo-600/20 hover:bg-indigo-600 border border-indigo-500/30 rounded-lg text-xs font-semibold text-indigo-300 hover:text-white transition-all"
                >
                  {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  <span>{copied ? "Copied!" : "Copy Email"}</span>
                </button>
              </div>
              <a
                href={`mailto:${email}`}
                className="text-lg sm:text-xl font-bold text-white hover:text-indigo-400 transition-colors break-all"
              >
                {email}
              </a>
            </div>

            {/* Location & Social Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-3 bg-purple-500/10 border border-purple-500/20 rounded-xl text-purple-400">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <p className="text-[11px] uppercase font-bold text-slate-500">Location</p>
                  <p className="text-xs font-bold text-slate-200">Kolkata, WB, India</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center gap-3">
                <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 rounded-xl text-indigo-400">
                  <FaBriefcase size={18} />
                </div>
                <div>
                  <p className="text-[11px] uppercase font-bold text-slate-500">Role</p>
                  <p className="text-xs font-bold text-slate-200">Full-Stack Dev</p>
                </div>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://www.linkedin.com/in/namrata-sarkar-46b328202/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-900 hover:bg-indigo-600 hover:text-white border border-slate-800 text-slate-300 rounded-2xl font-semibold text-xs transition-all duration-300 shadow-sm"
              >
                <FaLinkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/namrata1101"
                target="_blank"
                rel="noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 text-slate-300 rounded-2xl font-semibold text-xs transition-all duration-300 shadow-sm"
              >
                <FaGithub size={16} />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="glass-card p-8 sm:p-10 rounded-3xl text-left border-slate-800">
              <h3 className="text-2xl font-bold text-white mb-2">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mb-6">
                Fill in the details below to start a conversation directly with me.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Inquiry Type
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {subjectOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        onClick={() => setFormData({ ...formData, subject: opt })}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          formData.subject === opt
                            ? "bg-indigo-600 text-white shadow-sm"
                            : "bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the role or project you have in mind..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 hover:-translate-y-0.5"
                >
                  <FaPaperPlane className="text-sm" />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-xs text-center font-medium">
                    Redirecting to your email client to send your message. Thank you!
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;