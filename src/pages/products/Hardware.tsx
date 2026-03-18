import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { productsData } from "@/data/productsData";

const Hardware = () => {
  const products = productsData.filter(p => p.category === "Hardware & Accessories");

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="gradient-hero py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-primary-foreground mb-6">Hardware & Accessories</h1>
              <p className="text-xl text-primary-foreground/90 mb-8">
                Computing devices, printers, and accessories for complete weighing and POS solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/quote">
                  <Button variant="hero" size="lg">
                    Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20">
                  <Download className="mr-2 h-5 w-5" />
                  Download Catalog
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="mb-4">Hardware Products</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quality hardware and accessories to complement your weighing systems
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-smooth border-2 hover:border-accent">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                      <product.icon className="h-10 w-10 text-accent flex-shrink-0" />
                    </div>
                    <p className="text-muted-foreground pt-2">{product.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <h4 className="font-semibold text-sm">Key Features:</h4>
                      <ul className="space-y-2">
                        {(product.highlights || []).map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/products/${product.slug}`} className="flex-1">
                        <Button variant="outline" className="w-full">View Details</Button>
                      </Link>
                      <Link to="/quote" className="flex-1">
                        <Button variant="default" className="w-full group/btn">
                          Quote
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="mb-6">Looking for Custom Hardware Solutions?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We can help you find the right hardware and accessories for your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/quote">
                <Button variant="hero" size="lg">
                  Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">Contact Sales</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Hardware;
