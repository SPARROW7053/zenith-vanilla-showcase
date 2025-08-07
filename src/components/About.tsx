import { useEffect, useRef, useState } from 'react';
import profilePhoto from '@/assets/profile-photo.jpg';

const About = () => {
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

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-gradient-section"
    >
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className={`transition-all duration-700 ${isVisible ? 'slide-in-left visible' : 'slide-in-left'}`}>
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src={profilePhoto}
                  alt="John Developer - Profile Photo"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'slide-in-right visible' : 'slide-in-right'}`}>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Hi! I'm John, an aspiring web developer with a passion for creating 
                digital experiences that make a difference. My journey into web development 
                started with curiosity and has evolved into a deep love for clean code, 
                beautiful design, and user-centered solutions.
              </p>
              
              <p>
                I specialize in front-end development with a strong foundation in HTML, CSS, 
                and JavaScript. I'm constantly learning new technologies and frameworks to 
                stay current with industry trends and best practices.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new design patterns, 
                contributing to open-source projects, or planning my next creative project. 
                I believe in the power of technology to solve real-world problems and 
                create meaningful connections.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                <div className="text-3xl font-bold gradient-text">2+</div>
                <div className="text-muted-foreground">Years Learning</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg shadow-sm">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-muted-foreground">Projects Built</div>
              </div>
            </div>

            <div className="mt-8">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;