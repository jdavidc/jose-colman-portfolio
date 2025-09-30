import { Navigation } from "@/components/portfolio/Navigation";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <div id="hero">
          <Hero />
        </div>
        
        <div id="about">
          <About />
        </div>
        
        <div id="skills">
          <Skills />
        </div>
        
        <div id="projects">
          <Projects />
        </div>
        
        <div id="contact">
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-primary/20 bg-secondary/30">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 José David Colmán. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
