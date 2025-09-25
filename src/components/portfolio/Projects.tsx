import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Database, Cloud, Zap, Shield } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description: "Built a highly scalable e-commerce backend serving 100K+ daily active users. Implemented event-driven architecture with CQRS pattern, achieving 99.9% uptime and sub-200ms response times.",
      icon: Database,
      technologies: ["Node.js", "PostgreSQL", "Redis", "Apache Kafka", "Docker", "AWS"],
      highlights: ["50% reduction in response time", "Handles 1M+ requests/day", "Auto-scaling infrastructure"],
      type: "Enterprise"
    },
    {
      title: "Real-time Analytics Engine",
      description: "Developed a real-time data processing pipeline handling 10TB+ of data daily. Built custom aggregation algorithms and implemented streaming data architecture with automatic anomaly detection.",
      icon: Zap,
      technologies: ["Python", "Apache Kafka", "InfluxDB", "Elasticsearch", "Kubernetes"],
      highlights: ["10TB+ data processed daily", "Real-time insights", "ML-powered anomalies"],
      type: "Data Platform"
    },
    {
      title: "Financial API Gateway",
      description: "Architected secure API gateway for fintech startup handling sensitive financial transactions. Implemented advanced rate limiting, fraud detection, and PCI DSS compliance.",
      icon: Shield,
      technologies: ["Go", "PostgreSQL", "Redis", "JWT", "OAuth2", "AWS Lambda"],
      highlights: ["PCI DSS compliant", "Advanced fraud detection", "99.99% uptime SLA"],
      type: "Fintech"
    },
    {
      title: "Multi-tenant SaaS Backend",
      description: "Built scalable multi-tenant architecture supporting 500+ enterprise clients. Designed efficient data isolation, automated provisioning, and comprehensive monitoring.",
      icon: Cloud,
      technologies: ["Java", "Spring Boot", "MongoDB", "RabbitMQ", "Terraform"],
      highlights: ["500+ enterprise clients", "Automated tenant provisioning", "Cost optimization"],
      type: "SaaS"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
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
                className="p-8 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-accent group"
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