import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Java & Spring Boot",
      description: "Expert in Java ecosystem with deep knowledge of Spring Boot for building robust microservices."
    },
    {
      icon: Database,
      title: "API Development",
      description: "Designing and implementing high-performance REST APIs with Apigee Edge proxy management."
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "Experience with AWS, Docker containerization, and agile development methodologies."
    },
    {
      icon: Zap,
      title: "Performance & Security",
      description: "Optimizing system performance, fraud detection, and ensuring security compliance at scale."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Senior Back-End Engineer with 10+ years of experience designing scalable microservices and APIs. 
            Proven ability to build secure, high-performance systems that drive business results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started as a System Administrator managing IT infrastructure and evolved into mobile development, 
                eventually finding my passion in backend engineering and API development. I love the challenge of 
                designing systems that handle high-volume transactions while maintaining security and performance.
              </p>
              <p>
                Throughout my career at companies like Willdom and EDGE Mobile Ideas, I've specialized in building 
                fraud detection systems, e-commerce platforms, and API management solutions. My expertise spans 
                Java, Spring Boot, microservices architecture, and API proxy management with Apigee Edge.
              </p>
              <p>
                When I'm not coding, you'll find me biking, exploring urban landscapes with my camera, 
                experimenting in the kitchen, or playing videogames. I'm passionate about mentoring junior 
                developers and continuously learning new technologies.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 text-foreground">What I Bring</h3>
            <div className="grid gap-4">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card 
                    key={index} 
                    className="p-4 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-accent"
                  >
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500K+</div>
            <div className="text-muted-foreground">Transactions/Day</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">65%</div>
            <div className="text-muted-foreground">Fraud Reduction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99.9%</div>
            <div className="text-muted-foreground">Uptime Achieved</div>
          </div>
        </div>
      </div>
    </section>
  );
};