import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Smartphone, Globe, Zap } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '-50px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const projects = [
    {
      title: 'E-Commerce Dashboard',
      description: 'A modern admin dashboard for e-commerce management with real-time analytics, inventory tracking, and user management features.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
      category: 'Web Application',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Weather App',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and beautiful weather animations.',
      tech: ['JavaScript', 'CSS3', 'OpenWeather API', 'Geolocation'],
      category: 'Mobile Web App',
      icon: Smartphone,
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop&crop=center',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Task Management Tool',
      description: 'A collaborative task management application with drag-and-drop functionality, team collaboration, and progress tracking.',
      tech: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      category: 'Full Stack',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing clean design principles, smooth animations, and modern web technologies.',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      category: 'Portfolio',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop&crop=center',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Restaurant Website',
      description: 'A modern restaurant website with online menu, reservation system, and location integration.',
      tech: ['React', 'CSS Modules', 'EmailJS', 'Google Maps'],
      category: 'Business Website',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop&crop=center',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: false
    },
    {
      title: 'Crypto Tracker',
      description: 'Real-time cryptocurrency tracking app with price alerts, portfolio management, and market analysis.',
      tech: ['React', 'Chart.js', 'CoinGecko API', 'Local Storage'],
      category: 'Financial App',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop&crop=center',
      github: 'https://github.com',
      live: 'https://example.com',
      featured: true
    }
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="section-padding bg-gradient-section"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work and creative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`transition-all duration-700 delay-${index * 100} ${isVisible ? 'fade-in visible' : 'fade-in'}`}
            >
              <div className={`bg-card rounded-xl overflow-hidden shadow-md card-hover h-full group ${
                project.featured ? 'ring-2 ring-primary/20' : ''
              }`}>
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}

                  {/* Project Links */}
                  <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <project.icon className="w-5 h-5 text-primary mr-2" />
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 transition-all duration-700 delay-600 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <p className="text-lg text-muted-foreground mb-6">
            Interested in seeing more of my work?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center justify-center"
            >
              <Github className="w-5 h-5 mr-2" />
              View GitHub
            </a>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary"
            >
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;