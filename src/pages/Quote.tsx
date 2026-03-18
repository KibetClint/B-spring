import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import { FileText, CheckCircle } from "lucide-react";

const Quote = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    category: "",
    productService: "",
    quantity: "",
    details: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Quote request submitted! Our team will contact you within 24 hours.");
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      category: "",
      productService: "",
      quantity: "",
      details: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-primary-foreground mb-6">Request a Quote</h1>
              <p className="text-xl text-primary-foreground/90">
                Tell us about your requirements and get a customized quote within 24 hours
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <Card className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="pt-6">
                  <FileText className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">1. Submit Request</h3>
                  <p className="text-sm text-muted-foreground">Fill out the form with your requirements</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="pt-6">
                  <CheckCircle className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">2. Review & Analysis</h3>
                  <p className="text-sm text-muted-foreground">Our team reviews your needs</p>
                </CardContent>
              </Card>
              <Card className="text-center hover:shadow-lg transition-smooth">
                <CardContent className="pt-6">
                  <FileText className="h-10 w-10 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">3. Receive Quote</h3>
                  <p className="text-sm text-muted-foreground">Get detailed pricing within 24 hours</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Quote Request Form</CardTitle>
                <CardDescription>Please provide as much detail as possible to help us give you an accurate quote</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        placeholder="Your Company Ltd."
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="+1 (234) 567-890"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="category">Category *</Label>
                      <Select
                        value={formData.category}
                        onValueChange={(value) => setFormData({ ...formData, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="software">Software Solutions</SelectItem>
                          <SelectItem value="weighing">Weighing Equipment</SelectItem>
                          <SelectItem value="hardware">Hardware & Accessories</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity Services</SelectItem>
                          <SelectItem value="development">Development Services</SelectItem>
                          <SelectItem value="cctv">CCTV Installation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="quantity">Quantity / Scope</Label>
                      <Input
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        placeholder="e.g., 5 units or Medium project"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="productService">Product / Service *</Label>
                    <Input
                      id="productService"
                      name="productService"
                      value={formData.productService}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Weighspring Software, Platform Scale, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="details">Additional Details *</Label>
                    <Textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Please provide any additional information about your requirements, timeline, budget, or specific features needed..."
                    />
                  </div>

                  <Button type="submit" variant="hero" size="lg" className="w-full md:w-auto">
                    Submit Quote Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quote;
