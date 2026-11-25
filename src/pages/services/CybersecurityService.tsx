import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Shield, CheckCircle, Lock, Eye, FileSearch, AlertTriangle, Server } from "lucide-react";
import cyberImg from "@/assets/cybersecurity.jpg";

const CybersecurityService = () => {
  const offerings = [
    { icon: FileSearch, title: "Vulnerability Assessment", desc: "Comprehensive scanning and analysis of your systems to identify security weaknesses before attackers do." },
    { icon: Lock, title: "Penetration Testing", desc: "Simulated cyberattacks on your infrastructure to test defenses and uncover exploitable vulnerabilities." },
    { icon: Eye, title: "Security Monitoring", desc: "24/7 monitoring of your network and systems for suspicious activity, intrusion attempts, and data breaches." },
    { icon: AlertTriangle, title: "Incident Response", desc: "Rapid response planning and execution to contain, investigate, and recover from security incidents." },
    { icon: Server, title: "Infrastructure Hardening", desc: "Strengthening your servers, firewalls, and network configurations to minimize attack surfaces." },
    { icon: Shield, title: "Compliance & Audit", desc: "Ensuring your organization meets ISO 27001, GDPR, and other industry security compliance standards." },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-primary-foreground mb-6">Cybersecurity & Penetration Testing</h1>
              <p className="text-xl text-primary-foreground/90">
                Protect your business with comprehensive security audits, vulnerability assessments, and proactive threat management.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="mb-6">Safeguard Your Digital Assets</h2>
                <p className="text-muted-foreground mb-4">
                  In today's digital landscape, cyber threats are more sophisticated than ever. Brickspring's cybersecurity 
                  team provides end-to-end security services to protect your organization's data, systems, and reputation.
                </p>
                <p className="text-muted-foreground mb-6">
                  From vulnerability assessments to full penetration testing, we simulate real-world attacks to identify 
                  weaknesses and provide actionable recommendations to strengthen your defenses.
                </p>
                <ul className="space-y-3">
                  {["OWASP Top 10 Testing", "Network & Application Security", "Social Engineering Tests", "Security Training for Staff"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img src={cyberImg} alt="Cybersecurity services" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20" />
              </div>
            </div>

            <h2 className="text-center mb-12">Our Cybersecurity Services</h2>
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
            <h2 className="text-primary-foreground mb-6">Secure Your Business Today</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Don't wait for a breach. Contact us for a free security consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="accent" size="lg">
                  Request Security Audit <ArrowRight className="ml-2 h-5 w-5" />
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

export default CybersecurityService;
