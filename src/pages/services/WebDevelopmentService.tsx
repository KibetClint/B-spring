import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, CheckCircle, Globe, Smartphone, Cloud, Database, Paintbrush, Zap } from "lucide-react";
import softwareImg from "@/assets/software-solutions.jpg";

const WebDevelopmentService = () => {
  const offerings = [
    { icon: Globe, title: "Custom Web Applications", desc: "Tailored web applications built with modern frameworks to solve your specific business challenges." },
    { icon: Smartphone, title: "Mobile App Development", desc: "Cross-platform and native mobile apps for iOS and Android that keep your business in your customers' pockets." },
    { icon: Paintbrush, title: "UI/UX Design", desc: "User-centered design that ensures intuitive interfaces, improved engagement, and higher conversion rates." },
    { icon: Cloud, title: "Cloud Solutions", desc: "Scalable cloud-based applications and infrastructure on AWS, Azure, or Google Cloud to power your operations." },
    { icon: Database, title: "API Development", desc: "Robust RESTful and GraphQL APIs that enable seamless communication between your systems and third-party services." },
    { icon: Zap, title: "Performance Optimization", desc: "Speed audits, code refactoring, and infrastructure tuning to ensure your applications run at peak performance." },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-primary-foreground mb-6">Web & App Development</h1>
              <p className="text-xl text-primary-foreground/90">
                Custom web and mobile applications built with cutting-edge technologies to transform your business operations.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img src={softwareImg} alt="Web development services" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20" />
              </div>
              <div>
                <h2 className="mb-6">Build Digital Solutions That Scale</h2>
                <p className="text-muted-foreground mb-4">
                  Our development team specializes in creating high-performance web and mobile applications 
                  using React, Node.js, Python, and other modern technologies.
                </p>
                <p className="text-muted-foreground mb-6">
                  Whether you need a customer portal, inventory management system, e-commerce platform, or 
                  a custom business tool, we deliver solutions that are scalable, secure, and user-friendly.
                </p>
                <ul className="space-y-3">
                  {["Agile Development Methodology", "Continuous Integration & Deployment", "Comprehensive Testing & QA", "Post-launch Support & Maintenance"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="text-center mb-12">What We Offer</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {offerings.map((item, i) => (
                <Card key={i} className="border-2 hover:border-accent hover:shadow-xl transition-smooth">
                  <CardContent className="pt-8">
                    <item.icon className="h-10 w-10 text-accent mb-4" />
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 gradient-hero">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-primary-foreground mb-6">Let's Build Something Great</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Share your project idea with us and get a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="accent" size="lg">
                  Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
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

export default WebDevelopmentService;
