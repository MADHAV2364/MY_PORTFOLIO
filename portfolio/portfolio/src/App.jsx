import React, { useState } from 'react';
import * as Icons from 'lucide-react';

import ThreeBackground from './components/ThreeBackground';
import { NAV_LINKS, SKILLS, PROJECTS } from './constants/data';

// --- NATIVE SVG FALLBACKS ---
const NativeGithubIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.8 0-1.4-.5-2.8-1.5-3.8.1-.3.7-1.8-.1-3.8 0 0-1.2-.4-3.8 1.4a12.8 12.8 0 0 0-7 0C4.2 2.1 3 2.5 3 2.5c-.8 2-.2 3.5-.1 3.8-1 1-1.5 2.4-1.5 3.8 0 5.3 3 6.5 6 6.8-.5.4-.8 1.1-.9 2.2-.2.1-.8.3-2.3-.6-.8-1-1.4-1.1-1.4-1.1-.9-.1-1 .1-1 .1.2.3.6.5 1 .9.7 1.2 1.5 1.5 1.5 1.5 1 .4 2.1.3 2.9.1v2.1" /></svg>
);

const NativeLinkedinIcon = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
);

// --- BULLETPROOF ICON WRAPPER ---
const SafeIcon = ({ icon, fallback, size = 24, className = "" }) => {
  const IconComponent = icon;
  if (!IconComponent) {
    if (fallback === "github") return <NativeGithubIcon size={size} className={className} />;
    if (fallback === "linkedin") return <NativeLinkedinIcon size={size} className={className} />;
    return null;
  }
  return <IconComponent size={size} className={className} />;
};

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30">
      <ThreeBackground />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-950/70 border-b border-slate-800 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold text-white tracking-tighter flex items-center gap-2">
            <SafeIcon icon={Icons.Terminal} size={28} className="text-cyan-400" />
            <span>Dev<span className="text-cyan-400">.</span></span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="text-sm font-medium hover:text-cyan-400 transition-colors"
              >
                {link}
              </button>
            ))}
            <button
              onClick={() => scrollToSection('Contact')}
              className="px-5 py-2 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/50 hover:bg-cyan-500 hover:text-slate-950 transition-all font-medium text-sm"
            >
              Hire Me
            </button>
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <SafeIcon icon={Icons.X} size={28} /> : <SafeIcon icon={Icons.Menu} size={28} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-slate-900 border-b border-slate-800 flex flex-col items-center py-6 shadow-2xl">
            {NAV_LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollToSection(link)}
                className="w-full py-4 text-center font-medium hover:text-cyan-400 hover:bg-slate-800 transition-colors"
              >
                {link}
              </button>
            ))}
          </div>
        )}
      </nav>

      <main className="relative z-10 flex flex-col items-center w-full px-6">

        {/* HERO SECTION */}
        <section className="min-h-screen flex flex-col justify-center items-start w-full max-w-5xl pt-20">
          <p className="text-cyan-400 font-mono mb-4 pl-1">Hi, my name is</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 tracking-tight">
            Madhav Das.
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-slate-400 mb-8 max-w-3xl leading-tight">
            I build interactive experiences for the web.
          </h2>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-12 leading-relaxed">
            I'm a 3rd Year CSE Student specializing in building exceptional digital experiences.
            Currently, I'm focused on creating accessible, human-centered products and exploring the world of 3D web graphics.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => scrollToSection('Projects')}
              className="px-8 py-4 rounded-lg bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-all flex items-center gap-2"
            >
              View My Work
            </button>
            <a
              href="https://github.com/MADHAV2364"
              target="_blank"
              rel="noreferrer"
              className="p-4 rounded-lg border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-all bg-slate-900/50 backdrop-blur-sm flex items-center justify-center"
            >
              <SafeIcon icon={Icons.GitHub || Icons.Github} fallback="github" size={24} />
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="w-full max-w-5xl py-24 border-t border-slate-800/50">
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-xl">01.</span> About Me
            <div className="h-px bg-slate-700 flex-grow ml-4 max-w-xs"></div>
          </h3>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-lg text-slate-400 leading-relaxed">
              <p>
                I am a Computer Science Engineering student at SSTC Bhilai, deeply committed to the intersection of Full-Stack Development and Autonomous Systems. My expertise lies in architecting scalable web applications using React and Django, alongside a specialized focus on Computer Vision and Edge Computing.
              </p>
              <p>
                With a foundation built on Python and a passion for emerging technologies like Generative AI, I thrive on transforming complex problems into practical, high-impact digital solutions.
              </p>
              <p>
                I am eager to leverage my background in IoT and full-stack engineering to contribute to cutting-edge development roles and global-scale innovation.
                I also have a strong passion for creative coding and bringing 3D graphics to the browser using technologies like 3js and WebGL.
              </p>
            </div>
            <div className="relative group mx-auto md:ml-auto md:mr-0 w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 border-2 border-cyan-400 rounded-lg translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              <div className="absolute inset-0 bg-slate-800 rounded-lg overflow-hidden mix-blend-multiply filter grayscale contrast-125 group-hover:filter-none transition-all duration-500 z-10">
                <img
                  src="/me.jpeg"
                  alt="Madhav Das Profile"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="absolute inset-0 bg-cyan-900/30 group-hover:bg-transparent transition-colors duration-300 z-20 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="w-full max-w-5xl py-24 border-t border-slate-800/50">
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-xl">02.</span> Technical Skills
            <div className="h-px bg-slate-700 flex-grow ml-4 max-w-xs"></div>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((skillGroup, idx) => (
              <div key={idx} className="bg-slate-900/40 border border-slate-800 rounded-xl p-6 backdrop-blur-sm hover:-translate-y-2 transition-transform duration-300 hover:border-cyan-500/50">
                <div className="flex items-center gap-3 mb-6 text-cyan-400">
                  <SafeIcon icon={skillGroup.icon} size={28} />
                  <h4 className="text-xl font-bold text-white">{skillGroup.category}</h4>
                </div>
                <ul className="space-y-3">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-400">
                      <SafeIcon icon={Icons.ChevronDown} size={14} className="-rotate-90 text-cyan-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="w-full max-w-5xl py-24 border-t border-slate-800/50">
          <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <span className="text-cyan-400 font-mono text-xl">03.</span> Featured Projects
            <div className="h-px bg-slate-700 flex-grow ml-4 max-w-xs"></div>
          </h3>
          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-colors duration-300 flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                  <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-cyan-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors w-max">
                    View Project <SafeIcon icon={Icons.ExternalLink} size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="w-full max-w-3xl py-32 border-t border-slate-800/50 text-center flex flex-col items-center">
          <p className="text-cyan-400 font-mono mb-4 text-lg">04. What's Next?</p>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Get In Touch</h3>
          <p className="text-lg text-slate-400 mb-10 leading-relaxed">
            Although I'm not currently looking for any new opportunities, my inbox is always open.
            Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a
            href="mailto:madhavdasgdsc@gmail.com"
            className="px-8 py-4 rounded-lg border-2 border-cyan-500 text-cyan-400 font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all text-lg flex items-center gap-3 mb-16"
          >
            <SafeIcon icon={Icons.Mail} size={20} />
            Say Hello
          </a>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="relative z-10 w-full py-8 border-t border-slate-800/50 bg-slate-950/80 backdrop-blur-md flex flex-col items-center justify-center">
        <div className="flex gap-6 mb-4">
          <a href="https://github.com/MADHAV2364" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <SafeIcon icon={Icons.GitHub || Icons.Github} fallback="github" size={20} />
          </a>
          <a href="https://www.linkedin.com/in/madhav-das-353232291/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <SafeIcon icon={Icons.LinkedIn || Icons.Linkedin} fallback="linkedin" size={20} />
          </a>
          <a href="mailto:madhavdasgdsc@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
            <SafeIcon icon={Icons.Mail} size={20} />
          </a>
        </div>
        <p className="text-slate-500 text-sm font-mono text-center px-4">
          Designed & Built by Madhav Das <br />
          <span className="text-xs mt-2 block opacity-70">Powered by React, Tailwind CSS & Three.js</span>
        </p>
      </footer>
    </div>
  );
}