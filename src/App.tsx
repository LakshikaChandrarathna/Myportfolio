import  { useState, useEffect } from 'react';

// === Configuration ===
const config = {
  name: "Udari Lakshika",
  title: "Full-Stack Software Developer",
  status: "Available for New Opportunities",
  email: "udarilakshika12@gmail.com",
  linkedin: "https://www.linkedin.com/in/lakshika-chandrarathna-6821242a3",
  github: "https://github.com/LakshikaChandrarathna",
  hero: {
    tagline: "Architecting End-to-End Digital Experiences",
    aboutQuick: "I build high-performance, scalable web applications with intuitive frontends and robust backends.",
    image: "https://via.placeholder.com/600x600?text=Udari+Lakshika",
    stats: [
      { label: "Completed Projects", value: "10+" },
      { label: "Experience", value: "1+ Years" },
      // { label: "Client Satisfaction", value: "100%" }
    ]
  },
  about: {
    detailed: [
      "Hi, **Udari Lakshika** a passionate **Full-Stack Software Developer** who loves crafting modern web applications that are both beautiful on the surface and powerful under the hood.",
      "With expertise in **React, JavaScript, PHP (Laravel), CSS3, Tailwind CSS**, and **MySQL**, I bring together intuitive design and efficient functionality. My experience with CeyBiz, SmartLearn.lk, and Stall Booking systems makes me confident in delivering production-ready solutions for real-world clients.",
      "Whether it's an E-commerce platform, dynamic LMS, or scalable backend API, I focus on writing clean, maintainable code and creating mobile-responsive experiences that users love."
    ]
  },
  techToolbox: {
    cards: [
      {
        id: 'frontend',
        title: "Frontend",
        icons: ['🎨', '⚛️', '💻', '🔥', 'TS'],
        skills: "React, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Responsive UI",
        description: "Building sleek, high-contrast, mobile-responsive user interfaces."
      },
      {
        id: 'backend',
        title: "Backend",
        icons: ['🐘', '🔥', '📦', 'EX'],
        skills: "PHP, Laravel, RESTful APIs, Node.js",
        description: "Creating robust APIs and server-side business logic."
      },
      {
        id: 'databases',
        title: "Databases & Tools",
        icons: ['🐬', '🗄️', '🐙'],
        skills: "MySQL, Relational DB Design, Git, GitHub, Postman",
        description: "Managing structured databases with high performance and query optimization."
      },
      {
        id: 'projects',
        title: "Featured Work",
        icons: ['🛒', '🎓', '🎪'],
        skills: "CeyBiz (E-commerce), SmartLearn.lk (LMS), Stall Booking System",
        description: "Proven track record in deploying real-world web applications."
      },
      {
        id: 'core',
        title: "Core Engineering",
        icons: ['🧠', '⚡', '📐'],
        skills: "Digital Logic Design, Systems Architecture, Logic Optimization",
        description: "Solving complex logic problems with sound engineering principles."
      }
    ]
  },
  projects: [
    {
      id: "ceybiz",
      title: "CeyBiz — Local E-commerce Platform",
      category: "Full-Stack Web App",
      tech: "Laravel, React, MySQL, Tailwind CSS",
      description: "A digital marketplace empowering local Sri Lankan entrepreneurs with storefronts, product management, and seamless checkout flows.",
      tag: "E-Commerce"
    },
    {
      id: "smartlearn",
      title: "SmartLearn.lk — Learning Portal",
      category: "EdTech Application",
      tech: "React, PHP, MySQL, CSS3",
      description: "An educational portal structuring dynamic learning content and course flows categorized for grade-level accessibility.",
      tag: "Education"
    },
    {
      id: "stallbooking",
      title: "Stall Booking & Management System",
      category: "Enterprise System",
      tech: "PHP, MySQL, Web APIs",
      description: "A database-driven system to handle event stall reservations, venue management, hall allocations, and vendor assignments.",
      tag: "Management"
    }
  ]
};

// === Typewriter Animation Component ===
const AnimatedTitle = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const typingSpeed = isDeleting ? 40 : 80;

  useEffect(() => {
    const handleTyping = () => {
      const fullText = text;
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, text, typingSpeed]);

  return (
    <p className="text-base sm:text-lg font-mono text-cyan-400 font-semibold tracking-wide flex items-center gap-1.5 min-h-[28px]">
      <span>{displayText}</span>
      <span className="w-2 h-4 bg-cyan-400 inline-block animate-pulse rounded-sm"></span>
    </p>
  );
};

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 font-sans selection:bg-cyan-500/30 antialiased">
      
      {/* 1. Header / Navbar */}
      <header className="border-b border-slate-800/80 sticky top-0 bg-[#07090e]/90 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-mono font-bold tracking-tight text-white flex items-center gap-1">
            <span className="text-cyan-400">&lt;</span>
            <span>Udari.dev</span>
            <span className="text-cyan-400">/&gt;</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {['Home', 'Projects', 'About', 'Contact'].map(link => (
              <a key={link} href="#" className="hover:text-cyan-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
          <a 
            href={`mailto:${config.email}`}
            className="text-xs font-mono px-4 py-2 bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-400 hover:text-black font-semibold transition duration-200"
          >
            Contact Me →
          </a>
        </nav>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-800/80 py-16 lg:py-24 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(56,189,248,0.12),rgba(255,255,255,0))]">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side Content (7 Columns) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Status & Titles */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                {config.status}
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-sans leading-tight">
                  {config.name}
                </h1>
                <AnimatedTitle text={config.title} />
              </div>
            </div>

            {/* Paragraph with Better Spacing & Line-Height */}
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl">
              {config.hero.aboutQuick} Specialist in building high-performance modern web platforms using <strong className="text-slate-200 font-medium">Laravel, React, Node.js</strong>, and <strong className="text-slate-200 font-medium">MySQL</strong>.
            </p>

            {/* Terminal Window Mockup */}
            <div className="bg-[#0b0e17] border border-slate-800/90 rounded-2xl overflow-hidden shadow-2xl max-w-xl">
              {/* <div className="bg-slate-900/80 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <div className="text-xs font-mono text-slate-500">developer.json</div>
                <div className="w-10"></div>
              </div> */}

              {/* <div className="p-4 font-mono text-xs leading-relaxed text-slate-300 overflow-x-auto">
                <span className="text-purple-400">const</span> <span className="text-yellow-300">developer</span> <span className="text-cyan-400">=</span> &#123;<br />
                &nbsp;&nbsp;<span className="text-cyan-300">name</span>: <span className="text-emerald-300">"{config.name}"</span>,<br />
                &nbsp;&nbsp;<span className="text-cyan-300">role</span>: <span className="text-emerald-300">"{config.title}"</span>,<br />
                &nbsp;&nbsp;<span className="text-cyan-300">coreStack</span>: [<span className="text-emerald-300">"React"</span>, <span className="text-emerald-300">"Laravel"</span>, <span className="text-emerald-300">"JavaScript"</span>, <span className="text-emerald-300">"MySQL"</span>]<br />
                &#125;;
              </div> */}

              <div className="bg-slate-900/40 border-t border-slate-800/80 p-3 grid grid-cols-3 gap-3 text-center">
                {config.hero.stats.map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-sm sm:text-base font-bold text-cyan-400 font-mono">{stat.value}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left-aligned Action Buttons at the Bottom */}
            <div className="flex flex-wrap items-center justify-start gap-4 pt-2">
              <a 
                href={config.github} 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold rounded-xl text-xs sm:text-sm transition-all duration-200 shadow-lg shadow-cyan-500/20 flex items-center gap-2"
              >
                <span>GitHub Profile</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
              </a>
              <a 
                href={config.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="px-6 py-3 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 text-slate-300 font-medium rounded-xl text-xs sm:text-sm transition-all duration-200"
              >
                LinkedIn Profile
              </a>
            </div>

          </div>

          {/* Right Side Image Box (5 Columns) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/40 to-blue-600/40 rounded-3xl blur opacity-30 group-hover:opacity-70 transition duration-300"></div>
              <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-3">
                <img 
                  src={config.hero.image}
                  alt={config.name}
                  className="w-full h-[360px] sm:h-[420px] object-cover rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. About Me Section */}
      <section className="border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 items-center gap-16">
          <div className="space-y-6">
            <span className="text-xs px-3 py-1 border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 rounded-full font-mono">About Me</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase leading-tight text-white">
              BUILDING SCALABLE & MODERN WEB PLATFORMS
            </h2>
            <div className="space-y-4 text-slate-400 text-base leading-relaxed">
              {config.about.detailed.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>') }} />
              ))}
            </div>
            <a href={config.github} target="_blank" rel="noreferrer" className="inline-block text-cyan-400 text-sm font-semibold hover:text-cyan-300 transition">
              EXPLORE MY PROJECTS ON GITHUB →
            </a>
          </div>

          <div className="relative aspect-square flex items-center justify-center">
            <div className="w-16 h-16 bg-black border border-cyan-500 text-cyan-400 rounded-full flex items-center justify-center text-xl font-bold font-mono shadow-lg shadow-cyan-500/20">
              &lt;/&gt;
            </div>
            {[
              {icon: '⚛️', pos: 'top-0 left-1/4'},
              {icon: '🐘', pos: 'top-0 right-1/4'},
              {icon: '🐬', pos: 'top-1/4 right-0'},
              {icon: '🎨', pos: 'bottom-0 left-0'},
              {icon: 'JS', pos: 'bottom-1/4 right-0'},
            ].map((skill, index) => (
              <div key={index} className={`absolute w-12 h-12 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-lg ${skill.pos}`}>
                {skill.icon}
              </div>
            ))}
            <div className="absolute inset-10 border border-slate-800 rounded-full"></div>
            <div className="absolute inset-20 border border-slate-800/60 rounded-full"></div>
            <div className="absolute inset-[120px] border border-cyan-500/20 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 4. Tech Toolbox Section */}
      <section className="border-b border-slate-800/80 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center space-y-16">
          <div className='space-y-4'>
              <span className="text-xs px-3 py-1 border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 rounded-full font-mono">Skills & Tech Stack</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-white">MY TECH TOOLBOX</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.techToolbox.cards.map((card) => (
              <div key={card.id} className="p-8 border border-slate-800 bg-slate-900/50 rounded-2xl space-y-6 text-left transition hover:border-cyan-500/40">
                <div className="flex items-center gap-2">
                    {card.icons.map(icon => <div key={icon} className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center text-sm font-bold font-mono text-slate-400">{icon}</div>)}
                </div>
                <div className='space-y-2'>
                    <h3 className="text-xl font-bold text-cyan-400">{card.title}</h3>
                    <p className="text-sm text-slate-300 font-mono leading-relaxed">{card.skills}</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Projects Section */}
      <section className="border-b border-slate-800/80 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xs px-3 py-1 border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 rounded-full font-mono">Portfolio Showcase</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight uppercase text-white">FEATURED PROJECTS</h2>
            </div>
            <a 
              href={config.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs px-5 py-2.5 border border-slate-800 text-slate-300 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition w-fit font-mono"
            >
              See All On GitHub →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.projects.map((project) => (
              <div 
                key={project.id} 
                className="group border border-slate-800 bg-slate-900/40 rounded-2xl p-8 flex flex-col justify-between hover:border-cyan-500/50 transition duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-md">
                      {project.tag}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{project.category}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400">
                      {project.tech}
                    </p>
                  </div>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 group-hover:text-white transition">
                  <span>View Details</span>
                  <span className="text-cyan-400 text-lg">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>&copy; {new Date().getFullYear()} {config.name}. All Rights Reserved.</div>
          <div className="flex gap-4 text-slate-400">
            <a href={`mailto:${config.email}`} className="hover:text-cyan-400 transition">{config.email}</a>
            <span>•</span>
            <a href={config.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">LinkedIn</a>
            <span>•</span>
            <a href={config.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition">GitHub</a>
          </div>
      </footer>

    </div>
  );
};

export default PortfolioPage;