import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to build something amazing? Let's discuss your next project 
            and how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-foreground">Get In Touch</h3>
              <p className="text-muted-foreground mb-8">
                I'm always interested in discussing new opportunities, challenging backend projects, 
                and innovative API solutions. Whether you need expertise in fraud detection, 
                e-commerce platforms, or scalable microservices, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-4 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">josedcolman@gmail.com</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">Available on request</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Asunción, Paraguay</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Availability */}
            <Card className="p-6 bg-gradient-card border-accent/20">
              <h4 className="font-semibold text-foreground mb-3">Current Availability</h4>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-sm text-muted-foreground">Available for new projects</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open to full-time opportunities and consulting projects. 
                Typical response time: 24 hours.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-gradient-card border-primary/20">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input 
                    placeholder="Your name"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="bg-background/50 border-primary/30 focus:border-primary"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Subject</label>
                <Input 
                  placeholder="Project inquiry, collaboration, etc."
                  className="bg-background/50 border-primary/30 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium text-foreground mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project, timeline, and how I can help..."
                  rows={6}
                  className="bg-background/50 border-primary/30 focus:border-primary resize-none"
                />
              </div>
              
              <Button 
                type="submit"
                size="lg"
                className="w-full bg-gradient-accent hover:shadow-glow-primary transition-all duration-300"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};