import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Factory, Truck, HeartPulse, Shield, Package, CheckCircle, Scale, Cpu, BarChart3, ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Retail & Commerce",
    icon: ShoppingCart,
    features: ["Point-of-sale integration", "Inventory management", "Loss prevention systems"],
    description: "Streamline retail operations with integrated weighing and POS solutions.",
  },
  {
    title: "Manufacturing & Production",
    icon: Factory,
    features: ["Quality assurance", "Batch processing", "Material optimization"],
    description: "Enhance production efficiency with precision weighing and quality control.",
  },
  {
    title: "Logistics & Warehousing",
    icon: Truck,
    features: ["Shipping verification", "Freight management", "Inventory tracking"],
    description: "Optimize supply chain operations with automated weighing systems.",
  },
  {
    title: "Healthcare & Laboratory",
    icon: HeartPulse,
    features: ["Precision measurements", "Regulatory compliance", "Data integrity"],
    description: "Meet strict accuracy requirements with certified weighing equipment.",
  },
];

const businessSolutions = [
  { title: "Weights & Measures", desc: "Automate stock monitoring and reduce discrepancies across all operations.", icon: Scale },
  { title: "Inventory Management", desc: "Maintain accurate inventory levels with real-time weighing data integration.", icon: Package },
  { title: "Quality Control", desc: "Ensure product consistency with precision measurement and automated reporting.", icon: CheckCircle },
  { title: "Cybersecurity", desc: "Secure your weight data, systems, and connected devices against threats.", icon: Shield },
];

const successStory = {
  company: "Kisyet Tea Factory",
  industry: "Manufacturing & Processing",
  challenge: "Inventory discrepancies across 500+ collection sites leading to stock issues and revenue loss.",
  solution: "Installed Bluetooth-enabled OCS hanging scales paired with PDA and portable thermal printers to issue on-the-spot weight receipts and transmit data via GSM to central servers.",
  results: "Achieved a 98% reduction in inventory discrepancies and saved approximately $2.4 million annually.",
  products: ["OCS Bluetooth Hanging Scale", "Bluetooth Thermal Printer"],
  quote: "Brickspring's field weighing solution revolutionized our operations—data is captured accurately at source, receipts printed on the spot, and central systems updated seamlessly.",
  quoteAuthor: "Operations Director, Kisyet Tea Factory",
  timeline: "8 weeks to implement",
  roi: "6 months to ROI",
};

const integrations = [
  { title: "ERP Systems", items: ["SAP", "Oracle", "Microsoft Dynamics", "NetSuite"] },
  { title: "Inventory Management", items: ["Fishbowl", "Zoho Inventory", "inFlow", "Cin7"] },
  { title: "POS Systems", items: ["Square", "Shopify POS", "Lightspeed", "Vend"] },
  { title: "Warehouse Management", items: ["Manhattan Associates", "HighJump", "Blue Yonder", "Körber"] },
];

const Solutions = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-12 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Our Solutions
              </h1>
              <p className="text-base md:text-lg text-white/80 mb-6">
                Discover how Brickspring's weight scale technology transforms operations across industries.
              </p>
              <Link to="/consultation">
                <Button variant="accent" size="lg">Schedule Consultation</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Solutions by Industry */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Solutions by Industry</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Tailored solutions to meet unique operational challenges across sectors.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {industries.map((ind, i) => (
                <Card key={i} className="hover:shadow-lg transition-smooth group">
                  <CardHeader className="pb-3">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-smooth">
                      <ind.icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{ind.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{ind.description}</p>
                    <ul className="space-y-2">
                      {ind.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Business Solutions */}
        <section className="py-12 md:py-20" style={{ backgroundColor: "hsl(48, 80%, 92%)" }}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Key Business Solutions</h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Our technology addresses critical challenges across operations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessSolutions.map((sol, i) => (
                <Card key={i} className="text-center hover:shadow-lg transition-smooth">
                  <CardContent className="pt-6">
                    <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                      <sol.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-bold text-base mb-2">{sol.title}</h3>
                    <p className="text-sm text-muted-foreground">{sol.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Success Stories</h2>
            <p className="text-muted-foreground text-center mb-10">Real-world impact of our solutions.</p>
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden">
                <CardContent className="p-6 md:p-8">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{successStory.industry}</span>
                  <h3 className="text-xl md:text-2xl font-bold mt-2 mb-6">{successStory.company}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Challenge</h4>
                      <p className="text-sm text-muted-foreground">{successStory.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{successStory.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-primary mb-2">Results</h4>
                      <p className="text-sm text-muted-foreground">{successStory.results}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {successStory.products.map((p, i) => (
                      <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">{p}</span>
                    ))}
                  </div>
                  <blockquote className="border-l-4 border-accent pl-4 italic text-sm text-muted-foreground mb-4">
                    "{successStory.quote}"
                  </blockquote>
                  <p className="text-xs text-muted-foreground mb-4">— {successStory.quoteAuthor}</p>
                  <div className="flex gap-6 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><BarChart3 className="h-3.5 w-3.5 text-accent" /> {successStory.timeline}</span>
                    <span className="flex items-center gap-1"><BarChart3 className="h-3.5 w-3.5 text-accent" /> {successStory.roi}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Integration & Compatibility */}
        <section className="py-12 md:py-20" style={{ backgroundColor: "hsl(48, 80%, 92%)" }}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Integration & Compatibility</h2>
            <p className="text-muted-foreground text-center mb-10">Seamless integration with your existing systems.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {integrations.map((group, i) => (
                <Card key={i}>
                  <CardContent className="pt-6">
                    <h3 className="font-bold text-sm mb-3">{group.title}</h3>
                    <ul className="space-y-2">
                      {group.items.map((item, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Cpu className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="gradient-hero py-12 md:py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transform Your Operations?</h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
              Let our experts design the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/consultation">
                <Button variant="accent" size="lg">Schedule Consultation</Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10 hover:text-white">
                  View Products <ArrowRight className="ml-2 h-4 w-4" />
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

export default Solutions;
