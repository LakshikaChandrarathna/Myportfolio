import React from 'react';

// === Configuration ===
const config = {
  name: "Udari Lakshika",
  title: "Full-Stack Software Developer",
  email: "udarilakshika12@gmail.com",
  linkedin: "https://www.linkedin.com/in/lakshika-chandrarathna-6821242a3",
  github: "https://github.com/LakshikaChandrarathna",
  hero: {
    heading: "From Sketch to Scale - I Build the Web You Imagine",
    successRate: "100% Success Rate",
    projectsCompleted: "10+",
    yearsExperience: "3+",
    aboutQuick: "I'm Udari Lakshika, a developer who loves blending creative frontends with scalable backends to deliver meaningful digital products.",
    image: "https://via.placeholder.com/600x600?text=Udari+Lakshika",
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
// ====================================================

const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-orange-600/30">
      
      {/* 1. Header / Navbar */}
      <header className="border-b border-gray-800/30 sticky top-0 bg-black/80 backdrop-blur-sm z-50">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-white">
            U<span className="text-orange-600">.</span>
          </div>
          <div className="flex items-center gap-6 text-sm font-medium text-gray-300">
            {['Home', 'Projects', 'About Me', 'Contact'].map(link => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
          <a 
            href={`mailto:${config.email}`}
            className="text-xs px-4 py-1.5 border border-orange-600 text-orange-400 rounded-full hover:bg-orange-600 hover:text-white transition"
          >
            Let's Talk →
          </a>
        </nav>
      </header>

      {/* 2. Hero Section */}
      <section className="border-b border-gray-800/30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black">
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 items-center gap-12">
          
          {/* Hero Content (Left) */}
          <div className="space-y-12">
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
              From <span className="font-serif italic text-white/90">Sketch</span> to Scale &mdash; I Build the Web You <span className="text-white/95">Imagine</span>
            </h1>
            
            <div className="flex items-center gap-8 border-t border-gray-800 pt-8">
              <div className="text-center">
                <div className="text-4xl font-extrabold text-orange-600">{config.hero.projectsCompleted}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Projects Completed</div>
              </div>
              <div className="text-center border-l border-gray-800 pl-8">
                <div className="text-4xl font-extrabold text-orange-600">{config.hero.yearsExperience}</div>
                <div className="text-xs text-gray-500 uppercase tracking-widest mt-1">Years Of Experience</div>
              </div>
            </div>

            {/* Sub-about with image and success rate */}
            <div className="relative border border-orange-600/30 bg-black/40 p-6 rounded-2xl flex items-center gap-4 max-w-lg">
              <img src="https://via.placeholder.com/48?text=👩‍💻" alt="Contributor" className="w-12 h-12 rounded-full border border-orange-600" />
              <div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  {config.hero.aboutQuick}
                </p>
                <div className="flex gap-1.5 mt-2.5">
                    {[1,2,3,4].map(i => <img key={i} src={`https://via.placeholder.com/20?text=${i}`} alt="avatar" className='w-5 h-5 rounded-full border border-gray-800' />)}
                    <span className='text-xs text-orange-600 font-medium'>{config.hero.successRate}</span>
                </div>
              </div>
               <div className="absolute top-0 right-0 w-8 h-8 bg-black border border-gray-700/50 rounded-bl-xl grid place-content-center text-xs font-mono text-gray-500">I</div>
            </div>
            
            <div className="flex gap-4">
                <a href={config.github} target="_blank" rel="noreferrer" className="px-6 py-3 bg-orange-600 text-white rounded-xl text-sm font-semibold hover:bg-orange-700 transition">View GitHub →</a>
                <a href={config.linkedin} target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-800 text-gray-300 rounded-xl text-sm font-semibold hover:border-gray-600 transition">LinkedIn Profile</a>
            </div>

          </div>

          {/* Hero Image (Right) */}
          <div className="relative group flex justify-end">
            <img 
              src={config.hero.image}
              alt="Udari Lakshika"
              className="w-full max-w-lg rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      {/* 3. About Me Section */}
      <section className="border-b border-gray-800/30">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 items-center gap-16">
          
          {/* About Content (Left) */}
          <div className="space-y-6">
            <span className="text-xs px-3 py-1 border border-orange-600 text-orange-600 rounded-full font-medium">About Me</span>
            <h2 className="text-4xl font-extrabold tracking-tight uppercase leading-tight">
              EVERYTHING ABOUT <br/> <span className="font-serif italic text-white/90 lowercase">{config.name}</span>
            </h2>
            <div className="space-y-4 text-gray-400 text-base leading-relaxed">
              {config.about.detailed.map((paragraph, index) => (
                <p key={index} dangerouslySetInnerHTML={{ __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-medium">$1</strong>') }} />
              ))}
            </div>
            <a href={config.github} target="_blank" rel="noreferrer" className="inline-block text-orange-600 text-sm font-medium hover:text-orange-500 transition">EXPLORE MY PROJECTS ON GITHUB →</a>
          </div>

          {/* About Tech Skill Circle (Right) */}
          <div className="relative aspect-square flex items-center justify-center">
            {/* Center Node */}
            <div className="w-16 h-16 bg-black border border-orange-600 text-orange-600 rounded-full flex items-center justify-center text-xl font-bold font-mono">
              &lt;/&gt;
            </div>

            {/* Orbiting Icons */}
            {[
              {icon: '⚛️', pos: 'top-0 left-1/4'},
              {icon: '🐘', pos: 'top-0 right-1/4'},
              {icon: '🐬', pos: 'top-1/4 right-0'},
              {icon: '🎨', pos: 'bottom-0 left-0'},
              {icon: 'JS', pos: 'bottom-1/4 right-0'},
            ].map((skill, index) => (
              <div key={index} className={`absolute w-12 h-12 bg-black border border-gray-800/60 rounded-xl flex items-center justify-center text-lg ${skill.pos}`}>
                {skill.icon}
              </div>
            ))}

            {/* Simplified orbit lines */}
            <div className="absolute inset-10 border border-gray-900/50 rounded-full"></div>
            <div className="absolute inset-20 border border-gray-900 rounded-full"></div>
            <div className="absolute inset-[120px] border border-orange-950/40 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* 4. Tech Toolbox Section */}
      <section className="bg-[linear-gradient(180deg,_#000_0%,_#120800_50%,_#000_100%)] border-b border-gray-800/30">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 text-center space-y-16">
          <div className='space-y-4'>
              <span className="text-xs px-3 py-1 border border-orange-600 text-orange-600 rounded-full font-medium">Skills & Tech Stack</span>
              <h2 className="text-4xl font-extrabold tracking-tight uppercase">MY TECH TOOLBOX</h2>
          </div>

          {/* Grid of Tech Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.techToolbox.cards.map((card, index) => (
              <div key={card.id} className={`p-8 border border-gray-800/30 rounded-3xl space-y-6 text-left transition ${index % 2 === 0 ? 'bg-neutral-950/70 hover:border-gray-700/50' : 'bg-neutral-950 hover:border-orange-900/50'}`}>
                
                {/* Tech Icons Row */}
                <div className="flex items-center gap-2">
                    {card.icons.map(icon => <div key={icon} className="w-10 h-10 bg-black border border-gray-800 rounded-lg flex items-center justify-center text-sm font-bold font-mono text-gray-400">{icon}</div>)}
                </div>

                <div className='space-y-2'>
                    <h3 className="text-xl font-bold text-orange-600">{card.title}</h3>
                    <p className="text-sm text-gray-300 font-mono leading-relaxed">{card.skills}</p>
                </div>
                
                <p className="text-xs text-gray-500 leading-relaxed font-serif italic">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Featured Projects Section */}
      <section className="border-b border-gray-800/30 bg-black">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
              <span className="text-xs px-3 py-1 border border-orange-600 text-orange-600 rounded-full font-medium">Portfolio Showcase</span>
              <h2 className="text-4xl font-extrabold tracking-tight uppercase">FEATURED PROJECTS</h2>
            </div>
            <a 
              href={config.github} 
              target="_blank" 
              rel="noreferrer" 
              className="text-xs px-5 py-2.5 border border-gray-800 text-gray-300 rounded-full hover:border-orange-600 hover:text-orange-500 transition w-fit"
            >
              See All On GitHub →
            </a>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {config.projects.map((project) => (
              <div 
                key={project.id} 
                className="group border border-gray-800/40 bg-neutral-950 rounded-3xl p-8 flex flex-col justify-between hover:border-orange-600/50 transition duration-300"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-orange-500 bg-orange-950/40 border border-orange-900/40 px-3 py-1 rounded-full">
                      {project.tag}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">{project.category}</span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-orange-500 transition">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-gray-400">
                      {project.tech}
                    </p>
                  </div>

                  <p className="text-sm text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-8 mt-6 border-t border-gray-900 flex items-center justify-between text-xs text-gray-400 group-hover:text-white transition">
                  <span>View Details</span>
                  <span className="text-orange-500 text-lg">→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <div>&copy; {new Date().getFullYear()} {config.name}. All Rights Reserved.</div>
          <div className="flex gap-4 text-gray-400">
            <a href={`mailto:${config.email}`} className="hover:text-orange-500 transition">{config.email}</a>
            <span>•</span>
            <a href={config.linkedin} target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">LinkedIn</a>
            <span>•</span>
            <a href={config.github} target="_blank" rel="noreferrer" className="hover:text-orange-500 transition">GitHub</a>
          </div>
      </footer>

    </div>
  );
};

export default PortfolioPage;