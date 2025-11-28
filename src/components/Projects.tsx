import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "Job Listing Platform",
    description: "A comprehensive job listing website built with React, TypeScript, and Tailwind CSS. Features real-time search, advanced filtering capabilities, and responsive design for optimal user experience across all devices.",
    tags: ["React", "TypeScript", "Tailwind CSS", "REST API"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Crypto Trading Bot App",
    description: "Mobile application for managing cryptocurrency trading bots built with .NET MAUI. Features real-time market data, secure authentication, and cross-platform compatibility for iOS and Android.",
    tags: [".NET MAUI", "C#", "XAML", "Crypto API"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&h=600&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Enterprise Web Applications",
    description: "Multiple enterprise-level applications using ASP.NET Core MVC and Blazor WebAssembly. Integrated Azure AD for authentication, implemented CI/CD pipelines, and enhanced security protocols.",
    tags: [".NET 7", "Blazor", "React", "Azure", "CI/CD"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Design System Library",
    description: "Comprehensive design system and component library for enterprise applications with accessibility focus. Built with React, TypeScript, and Storybook for comprehensive documentation.",
    tags: ["React", "TypeScript", "Storybook", "Accessibility"],
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "Real-Time Chat Application",
    description: "Full-stack real-time chat application with WebSocket support. Features include group chats, file sharing, emoji reactions, and end-to-end encryption for secure communications.",
    tags: ["Node.js", "Socket.io", "React", "MongoDB"],
    image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&h=600&fit=crop",
    link: "#",
    github: "#"
  },
  {
    title: "E-Commerce Dashboard",
    description: "Analytics dashboard for e-commerce platforms with real-time sales tracking, inventory management, and customer insights. Features interactive charts and data visualization.",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
    github: "#"
  }
];

const Projects = () => {
  return (
    <section className="hz-border-single">
      <div className="px-6 md:px-0 py-8">
        <h2 className="text-sm tracking-wide mb-6 flex items-center gap-2 text-gray-600 font-mono">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          FEATURED PROJECTS
        </h2>
        
        {/* Row 1: Project 1 (wider) | Project 2 | Project 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x divide-black border-b border-black pb-6">
          <article className="lg:col-span-5 pr-4 slide-up group">
            <div className="aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
              <img 
                src={projects[0].image} 
                alt={projects[0].title}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">
              {projects[0].title}
            </h3>
            <p className="text-sm mb-6 leading-relaxed font-mono">
              {projects[0].description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[0].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {projects[0].link && (
                <a href={projects[0].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark font-mono underline">
                  <ExternalLink className="w-4 h-4" />
                  <span className="hz-highlight">View Project</span>
                </a>
              )}
              {projects[0].github && (
                <a href={projects[0].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                  <Github className="w-4 h-4" />
                  <span className="hz-highlight">View Code</span>
                </a>
              )}
            </div>
          </article>

          <article className="lg:col-span-3 px-4 slide-up delay-100 group">
            <div className="aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
              <img src={projects[1].image} alt={projects[1].title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">{projects[1].title}</h3>
            <p className="text-sm mb-6 leading-relaxed font-mono">{projects[1].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[1].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href={projects[1].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm underline-offset-4 text-dark underline font-mono">
                <ExternalLink className="w-4 h-4"/><span className="hz-highlight">View Project</span>
              </a>
              <a href={projects[1].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <Github className="w-4 h-4" /><span className="hz-highlight">View Code</span>
              </a>
            </div>
          </article>

          <article className="lg:col-span-4 pl-4 slide-up delay-200 group">
            <div className="aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
              <img src={projects[2].image} alt={projects[2].title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">{projects[2].title}</h3>
            <p className="text-sm mb-6 leading-relaxed font-mono">{projects[2].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[2].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href={projects[2].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <ExternalLink className="w-4 h-4" /><span className="hz-highlight">View Project</span>
              </a>
              <a href={projects[2].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <Github className="w-4 h-4" /><span className="hz-highlight">View Code</span>
              </a>
            </div>
          </article>
        </div>

        {/* Row 2: Project 4 | Project 5 (wider) | Project 6 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 lg:divide-x divide-black pt-6">
          <article className="lg:col-span-3 pr-4 slide-up delay-300 group">
            <div className="aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
              <img src={projects[3].image} alt={projects[3].title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">{projects[3].title}</h3>
            <p className="text-sm mb-6 leading-relaxed font-mono">{projects[3].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[3].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href={projects[3].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <ExternalLink className="w-4 h-4" /><span className="hz-highlight">View Project</span>
              </a>
              <a href={projects[3].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <Github className="w-4 h-4" /><span className="hz-highlight">View Code</span>
              </a>
            </div>
          </article>

          <article className="lg:col-span-5 px-4 slide-up delay-400 group">
            <div className="aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
              <img src={projects[4].image} alt={projects[4].title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">{projects[4].title}</h3>
            <p className="text-sm mb-6 leading-relaxed font-mono">{projects[4].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[4].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href={projects[4].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <ExternalLink className="w-4 h-4" /><span className="hz-highlight">View Project</span>
              </a>
              <a href={projects[4].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <Github className="w-4 h-4" /><span className="hz-highlight">View Code</span>
              </a>
            </div>
          </article>

          <article className="lg:col-span-4 pl-4 slide-up delay-500 group">
            <div className="aspect-[4/3] mb-6 overflow-hidden bg-gray-100">
              <img src={projects[5].image} alt={projects[5].title} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
            </div>
            <h3 className="text-2xl font-serif font-bold mb-4 leading-tight">{projects[5].title}</h3>
            <p className="text-sm mb-6 leading-relaxed font-mono">{projects[5].description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projects[5].tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 text-xs tracking-wide border border-dark font-mono">{tag}</span>
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <a href={projects[5].link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <ExternalLink className="w-4 h-4" /><span className="hz-highlight">View Project</span>
              </a>
              <a href={projects[5].github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-dark underline font-mono">
                <Github className="w-4 h-4" /><span className="hz-highlight">View Code</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Projects;
