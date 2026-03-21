import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Star, Video, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const packages = [
  {
    name: "Basic Package",
    price: "Ksh 2,500",
    subtitle: "One-time consultation",
    popular: false,
    features: [
      "Initial needs assessment",
      "2-hour consultation session",
      "Basic implementation plan",
      "Product recommendations",
    ],
  },
  {
    name: "Professional Package",
    price: "Ksh 5,000",
    subtitle: "Comprehensive solution",
    popular: true,
    features: [
      "Detailed business analysis",
      "8-hour consultation (4 sessions)",
      "Custom implementation plan",
      "Product recommendations",
      "Custom integration design",
    ],
  },
  {
    name: "Enterprise Package",
    price: "Ksh 10,000",
    subtitle: "End-to-end solution",
    popular: false,
    features: [
      "Comprehensive business analysis",
      "Unlimited consultation hours",
      "Enterprise implementation plan",
      "Custom product configuration",
      "Advanced integration design",
      "On-site training & support",
    ],
  },
];

const Consultation = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Sent!",
      description: "Our team will get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", company: "", industry: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero */}
        <section className="gradient-hero text-primary-foreground py-12 md:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Consultation Services
              </h1>
              <p className="text-base md:text-lg text-white/80">
                Our expert team provides tailored consultation to implement perfect weight-scale integration solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {packages.map((pkg, i) => (
                <Card
                  key={i}
                  className={`relative hover:shadow-xl transition-smooth ${
                    pkg.popular ? "border-accent border-2 scale-[1.02]" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="gradient-accent text-accent-foreground text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                        <Star className="h-3 w-3" /> POPULAR
                      </span>
                    </div>
                  )}
                  <CardHeader className="text-center pt-8">
                    <CardTitle className="text-lg">{pkg.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{pkg.subtitle}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((f, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={pkg.popular ? "accent" : "outline"}
                      className="w-full"
                      onClick={() => {
                        document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Book Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-12 md:py-16" style={{ backgroundColor: "hsl(48, 80%, 92%)" }}>
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Ready to Transform Your Operations?</h2>
            <p className="text-muted-foreground text-center mb-10">
              Schedule a consultation with our experts to discuss challenges and discover optimal solutions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="pt-6">
                  <Video className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-bold text-sm mb-1">Expert Consultation</h3>
                  <p className="text-xs text-muted-foreground">Join a live video call with our consultants.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="pt-6">
                  <Video className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-bold text-sm mb-1">Live Demo</h3>
                  <p className="text-xs text-muted-foreground">Watch tailored product demos.</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="pt-6">
                  <FileText className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h3 className="font-bold text-sm mb-1">Technical Docs</h3>
                  <p className="text-xs text-muted-foreground">Download integration guides & specs.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Consultation Form */}
        <section id="consultation-form" className="py-12 md:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Schedule a Consultation</h2>
              <p className="text-muted-foreground text-center mb-8">
                Fill in the form below and our team will reach out within 24 hours.
              </p>
              <Card>
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@company.com" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+254 7XX XXX XXX" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry">Select Industry</Label>
                      <select
                        id="industry"
                        name="industry"
                        value={formData.industry}
                        onChange={handleChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <option value="">Select Industry</option>
                        <option value="retail">Retail & Commerce</option>
                        <option value="manufacturing">Manufacturing</option>
                        <option value="logistics">Logistics</option>
                        <option value="healthcare">Healthcare</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Tell us about your needs</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Describe your current challenges and what you're looking for..."
                      />
                    </div>
                    <Button type="submit" variant="accent" size="lg" className="w-full">
                      Schedule Consultation
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Consultation;
