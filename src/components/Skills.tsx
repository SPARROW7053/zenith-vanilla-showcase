import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Smartphone, Globe, Database, Zap } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Delay progress animation slightly
          setTimeout(() => setAnimateProgress(true), 500);
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

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
      ]
    },
    {
      icon: Palette,
      title: 'Design & UX',
      description: 'Creating beautiful and user-friendly designs',
      skills: [
        { name: 'UI/UX Design', level: 70 },
        { name: 'Figma', level: 75 },
        { name: 'Adobe Creative Suite', level: 65 },
        { name: 'Prototyping', level: 70 },
      ]
    },
    {
      icon: Database,
      title: 'Backend & Tools',
      description: 'Server-side development and modern tooling',
      skills: [
        { name: 'Node.js', level: 60 },
        { name: 'Git & GitHub', level: 85 },
        { name: 'APIs', level: 65 },
        { name: 'Databases', level: 55 },
      ]
    }
  ];

  const highlights = [
    {
      icon: Globe,
      title: 'Responsive Design',
      description: 'Mobile-first approach ensuring perfect display across all devices'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized code for fast loading times and smooth interactions'
    },
    {
      icon: Smartphone,
      title: 'Modern Technologies',
      description: 'Staying current with the latest web development trends and tools'
    }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'fade-in visible' : 'fade-in'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className={`transition-all duration-700 delay-${index * 200} ${isVisible ? 'fade-in visible' : 'fade-in'}`}
            >
              <div className="bg-card rounded-xl p-6 shadow-md card-hover h-full">
                <div className="text-primary mb-4">
                  <category.icon className="w-10 h-10" />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="skill-progress">
                        <div 
                          className={`skill-progress-fill transition-all duration-1000 ease-out ${
                            animateProgress ? 'opacity-100' : 'opacity-0'
                          }`}
                          style={{ 
                            width: animateProgress ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 200 + 500}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={highlight.title}
              className={`text-center transition-all duration-700 delay-${(index + 3) * 200} ${isVisible ? 'scale-in visible' : 'scale-in'}`}
            >
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <highlight.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;