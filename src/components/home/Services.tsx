import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Code, Link as LinkIcon, Camera, ArrowRight } from "lucide-react";
import cyberImg from "@/assets/cybersecurity.jpg";
import softwareImg from "@/assets/software-solutions.jpg";

const Services = () => {
  const services = [
    {
      title: "Cybersecurity & Penetration Testing",
      description: "Comprehensive security audits and vulnerability assessments to protect your digital assets.",
      icon: Shield,
      image: cyberImg,
      link: "/services/cybersecurity",
      features: ["Security Audits", "Vulnerability Assessment", "Compliance Testing"],
    },
    {
      title: "Web & App Development",
      description: "Custom web and mobile applications tailored to your business needs using cutting-edge technologies.",
      icon: Code,
      image: softwareImg,
      link: "/services/web-development",
      features: ["Custom Development", "Responsive Design", "Cloud Solutions"],
    },
    {
      title: "Integration Services",
      description: "Seamlessly connect your systems and applications for improved efficiency and data flow.",
      icon: LinkIcon,
      image: softwareImg,
      link: "/services/integration",
      features: ["API Integration", "System Migration", "Data Synchronization"],
    },
    {
      title: "CCTV Installation",
      description: "Professional security camera installation and monitoring solutions for enhanced surveillance.",
      icon: Camera,
      image: cyberImg,
      link: "/services/cctv-installation",
      features: ["Site Survey", "Professional Installation", "24/7 Support"],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Professional Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert technology services to elevate your business and secure your operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-smooth border-2 hover:border-primary overflow-hidden">
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/70 to-accent/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <service.icon className="h-16 w-16 text-primary-foreground opacity-80" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to={service.link}>
                  <Button variant="default" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button variant="hero" size="lg">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
