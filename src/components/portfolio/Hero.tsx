import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, MessageCircle } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent animate-in slide-in-from-bottom-10 duration-1000">
            José David Colmán
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-4 animate-in slide-in-from-bottom-10 duration-1000 delay-200">
            Senior Back-End Engineer
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-in slide-in-from-bottom-10 duration-1000 delay-300">
            10+ years of experience designing scalable microservices and APIs using Java, Spring Boot, and Apigee Edge. 
            Specialized in fraud detection systems, e-commerce platforms, and high-performance backend solutions.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-in slide-in-from-bottom-10 duration-1000 delay-500">
          <Button 
            size="lg" 
            className="bg-gradient-accent hover:shadow-glow-primary transition-all duration-300 px-8 py-3 text-lg font-semibold"
            asChild
          >
            <a 
              href="https://api.whatsapp.com/send/?phone=595971787278&text=Hi%20Jos%C3%A9!%20I%27m%20interested%20in%20discussing%20a%20potential%20opportunity%20with%20you."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Get In Touch
            </a>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-glow-accent transition-all duration-300 px-8 py-3 text-lg"
            asChild
          >
            <a 
              href="https://github.com/jdavidc/jdavidc/raw/main/Jos%C3%A9%20Colm%C3%A1n%20CV%202025.pdf"
              download="José_Colmán_CV_2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-in slide-in-from-bottom-10 duration-1000 delay-700">
          <a 
            href="https://www.github.com/jdavidc" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-glow-primary transition-all duration-300 group"
          >
            <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/josedcolman" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-glow-primary transition-all duration-300 group"
          >
            <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="mailto:josedcolman@gmail.com" 
            className="p-3 rounded-full border border-primary/30 hover:border-primary hover:bg-primary/10 hover:shadow-glow-primary transition-all duration-300 group"
          >
            <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};