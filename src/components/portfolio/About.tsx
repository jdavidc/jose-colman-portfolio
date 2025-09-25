import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Zap } from "lucide-react";

export const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, testable code following best practices and SOLID principles."
    },
    {
      icon: Database,
      title: "Data Architecture",
      description: "Designing efficient database schemas and optimizing query performance at scale."
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Building distributed systems on AWS, GCP, and Azure with containerization and orchestration."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing system performance and ensuring high availability for mission-critical applications."
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
            Passionate backend developer with 8+ years of experience building robust, 
            scalable systems that power modern applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Started my career as a full-stack developer but quickly found my passion in 
                backend systems and infrastructure. I love the challenge of designing systems 
                that can handle millions of requests while maintaining reliability and performance.
              </p>
              <p>
                Over the years, I've worked with startups and enterprise companies, helping them 
                scale their infrastructure from prototype to production. My expertise spans from 
                database optimization to microservices architecture and DevOps practices.
              </p>
              <p>
                When I'm not coding, you'll find me contributing to open source projects, 
                writing technical blogs, or exploring the latest developments in distributed systems.
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
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1M+</div>
            <div className="text-muted-foreground">API Calls/Day</div>
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