import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Link as LinkIcon, RefreshCw, Database, Workflow, ArrowLeftRight, Settings } from "lucide-react";
import softwareImg from "@/assets/software-solutions.jpg";

const IntegrationService = () => {
  const offerings = [
    { icon: ArrowLeftRight, title: "API Integration", desc: "Connect your applications through well-designed APIs for seamless data exchange between platforms." },
    { icon: Database, title: "Data Migration", desc: "Safely migrate your data between systems with zero downtime, ensuring accuracy and integrity throughout." },
    { icon: RefreshCw, title: "Real-time Synchronization", desc: "Keep all your systems in sync with real-time data synchronization across multiple platforms." },
    { icon: Workflow, title: "Workflow Automation", desc: "Automate repetitive business processes by connecting tools like ERP, CRM, and accounting systems." },
    { icon: Settings, title: "Legacy System Integration", desc: "Bridge the gap between older systems and modern applications without costly full replacements." },
    { icon: LinkIcon, title: "Third-party Connectors", desc: "Integrate with popular platforms like SAP, Salesforce, QuickBooks, M-Pesa, and more." },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-primary-foreground mb-6">Integration Services</h1>
              <p className="text-xl text-primary-foreground/90">
                Seamlessly connect your systems, automate workflows, and eliminate data silos for improved business efficiency.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h2 className="mb-6">Connect Everything, Seamlessly</h2>
                <p className="text-muted-foreground mb-4">
                  Modern businesses rely on multiple software systems. Our integration services ensure all your 
                  tools work together harmoniously — from weighing systems and ERP platforms to payment gateways and CRMs.
                </p>
                <p className="text-muted-foreground mb-6">
                  We specialize in building custom middleware, API connectors, and data pipelines that keep 
                  your operations running smoothly and your data flowing accurately across all platforms.
                </p>
                <ul className="space-y-3">
                  {["ERP & CRM Integration", "Payment Gateway Connections (M-Pesa, Stripe)", "Weighing System to Database Sync", "Custom Middleware Development"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img src={softwareImg} alt="Integration services" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20" />
              </div>
            </div>

            <h2 className="text-center mb-12">Integration Solutions</h2>
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
            <h2 className="text-primary-foreground mb-6">Streamline Your Operations</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let us connect your systems for maximum efficiency. Get a free integration assessment today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="accent" size="lg">
                  Request Assessment <ArrowRight className="ml-2 h-5 w-5" />
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

export default IntegrationService;
