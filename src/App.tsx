import { User, Briefcase, Code, ExternalLink } from 'lucide-react';
import { useEffect } from 'react';

// Define button styles
const btnStyles = "px-6 py-3 rounded-lg text-white font-semibold transition-colors";

// Define props interface for the button component
interface ButtonProps {
  children: React.ReactNode;
  className?: string;
}

// Button component with proper naming (uppercase)
const Btn = ({ children, className }: ButtonProps) => (
  <button className={`${btnStyles} ${className}`}>
    {children}
  </button>
);

export default function App() {
  useEffect(() => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(this: HTMLAnchorElement, e: Event) {
        e.preventDefault();
        const target = this.getAttribute('href');
        if (target) {
          const element = document.querySelector(target);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Amrita Kadam
          </h1>
          <p className="text-xl md:text-2xl mb-6">
            Full Stack Developer | MERN Specialist
          </p>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Building efficient and scalable solutions with passion and precision
          </p>
          <div className="space-x-4">
            <Btn className="bg-purple-600 hover:bg-purple-700">About Me</Btn>
            <Btn className="bg-pink-600 hover:bg-pink-700">My Work</Btn>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-2">
            <User className="text-purple-400" /> About Me
          </h2>
          <p className="text-gray-300 mb-6">
            Currently interning at TerraBiz Pvt Ltd as a Backend Developer Intern. I am passionate about creating efficient and scalable solutions while continuously learning new technologies. I specialize in backend development and full-stack development using the MERN stack and have a strong foundation in Data Structures and Algorithms.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React.js', 'Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'TypeScript', 'Tailwind CSS', 'Socket.io'].map(skill => (
              <div key={skill} className="bg-gray-800 p-3 rounded-lg text-center text-purple-300">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-gray-800">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-2">
            <Briefcase className="text-pink-400" /> Experience
          </h2>
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-300">
              Backend Developer Intern
            </h3>
            <p className="text-gray-400">TerraBiz Pvt Ltd</p>
            <p className="text-gray-500">March 2025 - Present</p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-2">
            <Code className="text-purple-400" /> Projects
          </h2>
          <div className="space-y-6">
            {/* Project 1: Prison Management and Live Tracking System */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-300">
                Prison Management and Live Tracking System
              </h3>
              <p className="text-gray-300 mt-2">
                Developed a scalable web and mobile-based tracking system with peers for 200+ personnel and 500+ prisoners, incorporating GPS-enabled location tracking and geofencing, improving operational efficiency by 35%. Implemented Role-Based Access Control (RBAC) for administrators, guards, and officers, enhancing security via authentication protocols. Integrated real-time geofencing and anomaly detection, reducing breach incidents by 25% and enabling instant alerts.
              </p>
              <p className="text-purple-400 mt-2">
                Technologies: React.js, Node.js, PostgreSQL, WebSocket (Socket.io), Docker, Leaflet.js
              </p>
              <div className="mt-4 flex gap-4">
                <a href="https://pms-lts-web.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-purple-300 hover:text-purple-200">
                  Website <ExternalLink size={16} />
                </a>
                <a href="https://drive.google.com/drive/folders/19V5OoM9LNxFhtEn7e0L9dqLLlFK7eSvR" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-purple-300 hover:text-purple-200">
                  App <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 2: Student Portal */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-300">
                Student Portal
              </h3>
              <p className="text-gray-300 mt-2">
                In association with college management, designed and developed a web platform utilized by 80+ students to organize coursework, accessing 100+ course materials, and collaborating through a built-in chat feature, boosting group productivity by 30%. Created an announcement module to facilitate timely updates, reducing communication delays by 40%. Integrated role-based access control (admin and user roles), ensuring secure content management with 100% role accuracy during testing.
              </p>
              <p className="text-purple-400 mt-2">
                Technologies: Node.js, Express.js, ejs, JWT Authentication, MongoDB
              </p>
              <div className="mt-4">
                <a href="https://github.com/Amrita0205/STUDENT-PORTAL/tree/master" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-purple-300 hover:text-purple-200">
                  GitHub <ExternalLink size={16} />
                </a>
              </div>
            </div>

            {/* Project 3: Code Conflux */}
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-pink-300">
                Code Conflux - IIITR Hackathon
              </h3>
              <p className="text-gray-300 mt-2">
                Organized Code Conflux, IIIT Raichur's first hackathon under CodeSoc, uniting the college community for a day of programming. This initiative provided a platform for students to explore technology and innovation, fostering collaboration and growth. It aimed to strengthen the coding culture and facilitate connections with other Institutes of National Importance (INIs) through inter- and intra-institutional competitions.
              </p>
              <p className="text-purple-400 mt-2">
                Role: Organizer | Technologies: React.js, TypeScript, Tailwind CSS
              </p>
              <div className="mt-4">
                <a href="https://code-conflux-szk5-amrita0205s-projects.vercel.app/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-purple-300 hover:text-purple-200">
                  Website <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-800 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/Amrita0205" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/amrita-kadam-2a293b287/" target="_blank" rel="noopener noreferrer" className="text-purple-300 hover:text-purple-200">
            LinkedIn
          </a>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} Amrita Kadam. All rights reserved.
        </p>
      </footer>
    </div>
  );
}