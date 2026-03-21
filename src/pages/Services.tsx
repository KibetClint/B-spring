import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Code, Link as LinkIcon, Camera, CheckCircle } from "lucide-react";
import cyberImg from "@/assets/cybersecurity.jpg";
import softwareImg from "@/assets/software-solutions.jpg";

const Services = () => {
  const services = [
    {
      title: "Cybersecurity & Penetration Testing",
      description: "Comprehensive security audits, vulnerability assessments, and penetration testing to safeguard your digital infrastructure.",
      icon: Shield,
      image: cyberImg,
      features: [
        "Security Audits & Risk Assessment",
        "Vulnerability Testing",
        "Compliance Testing (ISO 27001, GDPR)",
        "Security Policy Development",
        "Incident Response Planning"
      ],
      link: "/services/cybersecurity"
    },
    {
      title: "Web & App Development",
      description: "Custom web and mobile applications built with modern technologies tailored to your business requirements.",
      icon: Code,
      image: softwareImg,
      features: [
        "Custom Web Application Development",
        "Mobile App Development (iOS & Android)",
        "Responsive Design",
        "Cloud-based Solutions",
        "API Development"
      ],
      link: "/services/web-development"
    },
    {
      title: "Integration Services",
      description: "Seamlessly connect your systems and applications for improved efficiency and streamlined operations.",
      icon: LinkIcon,
      image: softwareImg,
      features: [
        "API Integration",
        "Legacy System Integration",
        "Data Migration Services",
        "Real-time Data Synchronization",
        "Third-party Integration"
      ],
      link: "/services/integration"
    },
    {
      title: "CCTV Installation Services",
      description: "Professional security camera installation and monitoring solutions for enhanced surveillance and safety.",
      icon: Camera,
      image: cyberImg,
      features: [
        "Site Survey & Planning",
        "Professional Installation",
        "HD & IP Camera Systems",
        "Remote Monitoring Setup",
        "24/7 Maintenance Support"
      ],
      link: "/services/cctv-installation"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-primary-foreground mb-6">Professional Services</h1>
              <p className="text-xl text-primary-foreground/90">
                Expert technology services to elevate your business operations and secure your digital assets
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-12">
              {services.map((service, index) => (
                <Card key={index} className="overflow-hidden border-2 hover:border-accent hover:shadow-2xl transition-smooth">
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-accent/40" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <service.icon className="h-20 w-20 text-primary-foreground opacity-90" />
                      </div>
                    </div>
                    <div className="p-8 lg:p-12">
                      <CardHeader className="p-0 mb-6">
                        <CardTitle className="text-3xl mb-3">{service.title}</CardTitle>
                        <CardDescription className="text-base">{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0">
                        <h4 className="font-semibold mb-4">Key Features:</h4>
                        <ul className="space-y-3 mb-8">
                          {service.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Link to={service.link}>
                          <Button variant="default" size="lg" className="group">
                            Learn More
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                          </Button>
                        </Link>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-primary-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your project requirements and get a customized solution
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="accent" size="lg">
                  Request Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
