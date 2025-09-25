import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Node.js", "Go", "Java", "TypeScript", "Rust", "C#"]
    },
    {
      title: "Frameworks",
      skills: ["FastAPI", "Express.js", "Django", "Spring Boot", "Gin", "ASP.NET Core"]
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "InfluxDB", "Cassandra"]
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins", "GitHub Actions"]
    },
    {
      title: "Message Queues",
      skills: ["Apache Kafka", "RabbitMQ", "AWS SQS", "Redis Pub/Sub", "Apache Pulsar"]
    },
    {
      title: "Monitoring",
      skills: ["Prometheus", "Grafana", "ELK Stack", "DataDog", "New Relic", "Jaeger"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable backend systems
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-accent group"
            >
              <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Expertise */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-foreground">Core Expertise</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              "Microservices Architecture",
              "API Design & Development",
              "System Design",
              "Database Optimization",
              "Caching Strategies",
              "Load Balancing",
              "Security Best Practices",
              "Performance Tuning",
              "CI/CD Pipelines",
              "Containerization",
              "Event-Driven Architecture",
              "Distributed Systems"
            ].map((expertise, index) => (
              <Badge 
                key={index}
                className="bg-accent/10 text-accent border-accent/30 hover:bg-accent/20 hover:border-accent/50 transition-all duration-200 px-4 py-2 text-sm cursor-default"
              >
                {expertise}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};