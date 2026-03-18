import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Code, Monitor } from "lucide-react";

const Products = () => {
  const categories = [
    {
      title: "Software Solutions",
      description: "Enterprise-grade software for weighbridge management, payroll, security, and more",
      icon: Code,
      products: [
        "Weighspring - Weighbridge Management",
        "Timespring - Time-released Messaging",
        "Payrollspring - Payroll Processing",
        "Secuspring - Security Module",
        "Safetyspring - Safety Management",
        "Parkspring - Park Management"
      ],
      link: "/products/software"
    },
    {
      title: "Weighing Equipment",
      description: "Precision weighing scales and equipment for industrial and commercial use",
      icon: Scale,
      products: [
        "OCS SB1 Hanging Scale",
        "SS Indicator with Bluetooth",
        "SCS Pallet Truck Scale",
        "Checkered Plate Platform Scale",
        "Electronic Platform Scale",
        "Pallet Weighing Scale"
      ],
      link: "/products/weighing-equipment"
    },
    {
      title: "Hardware & Accessories",
      description: "Computing devices, printers, and accessories for complete solutions",
      icon: Monitor,
      products: [
        "Mini Bluetooth Thermal Printers",
        "Laptops and Desktops",
        "Smartphones",
        "CS30 Multipurpose Android POS",
        "Network Equipment",
        "Accessories"
      ],
      link: "/products/hardware"
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
              <h1 className="text-primary-foreground mb-6">Our Products</h1>
              <p className="text-xl text-primary-foreground/90">
                Comprehensive range of weighing solutions, software, and technology products
              </p>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-smooth border-2 hover:border-accent">
                  <CardHeader>
                    <div className="mb-4">
                      <category.icon className="h-12 w-12 text-accent" />
                    </div>
                    <CardTitle className="text-2xl">{category.title}</CardTitle>
                    <CardDescription className="text-base">{category.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {category.products.map((product, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{product}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={category.link}>
                      <Button variant="default" className="w-full group/btn">
                        View Category
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="mb-6">Need Help Choosing?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our experts are here to help you find the perfect solution for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="hero" size="lg">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Sales
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

export default Products;
