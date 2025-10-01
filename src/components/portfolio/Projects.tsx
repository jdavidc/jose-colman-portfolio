import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, Cloud, Zap, Shield } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Fraud Detection System",
      description: "Led implementation of a fraud detection system that reduced manual fraud case reviews by 65%, decreased customer friction by 30%, and boosted participating banks' digital transaction revenue by 15%.",
      icon: Shield,
      technologies: ["Java", "Spring Boot", "PostgreSQL", "Machine Learning", "Agile"],
      highlights: ["65% reduction in manual reviews", "30% decrease in customer friction", "15% revenue boost"],
      type: "Fintech"
    },
    {
      title: "E-Commerce Platform APIs",
      description: "Built and maintained high-performance microservices for a large-scale e-commerce platform, improving API response times by 40% and supporting over 500K transactions per day with zero downtime.",
      icon: Database,
      technologies: ["Java", "Spring Boot", "REST", "Hibernate", "PostgreSQL", "Git"],
      highlights: ["40% faster response times", "500K+ transactions/day", "Zero downtime"],
      type: "E-Commerce"
    },
    {
      title: "Push Notification Service",
      description: "Designed and implemented a push notification module using Firebase Cloud Messaging, enabling real-time transactional alerts and promotional campaigns. Improved delivery reliability by 90%.",
      icon: Zap,
      technologies: ["Java", "Spring Boot", "Google Firebase", "REST", "OAuth2"],
      highlights: ["90% delivery reliability", "35% SMS cost reduction", "Real-time alerts"],
      type: "Mobile Services"
    },
    {
      title: "API Proxy Management",
      description: "Designed, developed, and maintained API proxies on Apigee Edge, reducing API latency by 35% and improving system security compliance by 40%. Managed enterprise-level API integration.",
      icon: Cloud,
      technologies: ["Apigee Edge", "JavaScript", "OAuth", "API Security"],
      highlights: ["35% latency reduction", "40% security improvement", "Enterprise integration"],
      type: "API Management"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world solutions that demonstrate expertise in building scalable, 
            high-performance backend systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index}
                className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-accent hover:scale-105 group animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <Badge variant="outline" className="mt-1 text-xs border-accent/50 text-accent">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {project.highlights.map((highlight, highlightIndex) => (
                      <div key={highlightIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex}
                        variant="secondary"
                        className="bg-secondary text-secondary-foreground text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button 
                    size="sm" 
                    className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 hover:border-primary/50"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="border-accent/30 hover:border-accent text-accent hover:bg-accent/10"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Details
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};