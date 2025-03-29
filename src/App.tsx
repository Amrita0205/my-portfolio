import React from 'react';
import { Moon, Code, Briefcase, User, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2000" 
            alt="Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Amrita Kadam
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer | MERN Specialist
          </p>
          <div className="flex justify-center gap-4">
            <a href="#about" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition">
              About Me
            </a>
            <a href="#projects" className="px-6 py-3 bg-pink-600 hover:bg-pink-700 rounded-lg transition">
              My Work
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <User className="w-8 h-8 text-purple-400" />
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed">
                Currently interning at Think Tanker Private Limited as a Full Stack Developer, 
                working on cutting-edge web applications using the MERN stack. Passionate about 
                creating efficient and scalable solutions while continuously learning new technologies.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-purple-400">Skills</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-gray-700 p-2 rounded">React.js</div>
                <div className="bg-gray-700 p-2 rounded">Node.js</div>
                <div className="bg-gray-700 p-2 rounded">MongoDB</div>
                <div className="bg-gray-700 p-2 rounded">Express.js</div>
                <div className="bg-gray-700 p-2 rounded">TypeScript</div>
                <div className="bg-gray-700 p-2 rounded">Tailwind CSS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="w-8 h-8 text-pink-400" />
            Experience
          </h2>
          <div className="bg-gray-800 p-6 rounded-lg mb-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-purple-400">Full Stack Developer Intern</h3>
                <p className="text-gray-400">Think Tanker Private Limited</p>
              </div>
              <p className="text-gray-400">March 2025 - Present</p>
            </div>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Working on full-stack web development projects using MERN stack</li>
              <li>Collaborating with team members to deliver high-quality solutions</li>
              <li>Learning and implementing best practices in web development</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <Code className="w-8 h-8 text-pink-400" />
            Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Profile Website</h3>
              <p className="text-gray-300 mb-4">A modern portfolio website showcasing professional experience and projects</p>
              <a href="https://proffile-m5bl9jgea-amrita0205s-projects.vercel.app/" 
                 className="inline-flex items-center text-purple-400 hover:text-purple-300">
                View Project <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Project Management System</h3>
              <p className="text-gray-300 mb-4">A comprehensive project management system with task tracking</p>
              <a href="https://pms-lts-web.vercel.app/" 
                 className="inline-flex items-center text-purple-400 hover:text-purple-300">
                View Project <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Code Conflux</h3>
              <p className="text-gray-300 mb-4">A collaborative coding platform for developers</p>
              <a href="https://code-conflux-szk5-amrita0205s-projects.vercel.app/" 
                 className="inline-flex items-center text-purple-400 hover:text-purple-300">
                View Project <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <a href="https://github.com/Amrita0205" 
               className="text-gray-400 hover:text-purple-400 transition">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/amrita-kadam-2a293b287/" 
               className="text-gray-400 hover:text-purple-400 transition">
              LinkedIn
            </a>
          </div>
          <p className="text-gray-500">© 2025 Amrita Kadam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;