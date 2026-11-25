import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Camera, CheckCircle, Monitor, Wifi, HardDrive, ShieldCheck, Headphones } from "lucide-react";
import cyberImg from "@/assets/cybersecurity.jpg";

const CCTVService = () => {
  const offerings = [
    { icon: Camera, title: "HD & IP Camera Systems", desc: "High-definition and IP-based camera systems with crystal-clear footage, day and night vision capabilities." },
    { icon: Monitor, title: "Remote Monitoring", desc: "View live feeds from anywhere using your smartphone, tablet, or computer with our remote access setup." },
    { icon: HardDrive, title: "DVR/NVR Setup", desc: "Professional digital and network video recorder installation with configurable storage and playback options." },
    { icon: Wifi, title: "Wireless CCTV Solutions", desc: "Cable-free camera installations ideal for locations where wiring is impractical or aesthetically undesirable." },
    { icon: ShieldCheck, title: "Site Survey & Planning", desc: "Thorough assessment of your premises to design the optimal camera placement and coverage strategy." },
    { icon: Headphones, title: "24/7 Maintenance & Support", desc: "Round-the-clock technical support, routine maintenance, and emergency response for your CCTV systems." },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-primary-foreground mb-6">CCTV Installation Services</h1>
              <p className="text-xl text-primary-foreground/90">
                Professional security camera installation and monitoring solutions for homes, businesses, and industrial facilities.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <img src={cyberImg} alt="CCTV installation" className="w-full h-80 object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-accent/20" />
              </div>
              <div>
                <h2 className="mb-6">Complete Surveillance Solutions</h2>
                <p className="text-muted-foreground mb-4">
                  Brickspring provides end-to-end CCTV installation services for commercial, residential, and 
                  industrial properties. Our expert technicians design and install systems tailored to your security needs.
                </p>
                <p className="text-muted-foreground mb-6">
                  From site survey and camera selection to installation, configuration, and ongoing maintenance, 
                  we handle everything to ensure your property is fully protected with reliable surveillance.
                </p>
                <ul className="space-y-3">
                  {["Indoor & Outdoor Camera Installation", "Motion Detection & Alert Systems", "Cloud & Local Storage Options", "Integration with Access Control Systems"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <h2 className="text-center mb-12">Our CCTV Services</h2>
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
            <h2 className="text-primary-foreground mb-6">Protect Your Property Today</h2>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Get a free site survey and custom CCTV installation quote for your premises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="accent" size="lg">
                  Get Free Survey <ArrowRight className="ml-2 h-5 w-5" />
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

export default CCTVService;
