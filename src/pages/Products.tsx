import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Code, Monitor, Download } from "lucide-react";
import { productsData } from "@/data/productsData";

const Products = () => {
  const categories = [
    {
      title: "Software Solutions",
      description: "Enterprise-grade software for weighbridge management, payroll, security, and more",
      icon: Code,
      category: "Software Solutions",
      link: "/products/software"
    },
    {
      title: "Weighing Equipment",
      description: "Precision weighing scales and equipment for industrial and commercial use",
      icon: Scale,
      category: "Weighing Equipment",
      link: "/products/weighing-equipment"
    },
    {
      title: "Hardware & Accessories",
      description: "Computing devices, printers, and accessories for complete solutions",
      icon: Monitor,
      category: "Hardware & Accessories",
      link: "/products/hardware"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="gradient-hero py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-primary-foreground mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl">Our Products</h1>
              <p className="text-base sm:text-xl text-primary-foreground/90 mb-6">
                Comprehensive range of weighing solutions, software, and technology products
              </p>
              <a href="/brickspring-catalog.pdf" download>
                <Button variant="accent" size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download Catalog (PDF)
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Product Categories with images */}
        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-8 sm:space-y-12">
              {categories.map((cat, index) => {
                const catProducts = productsData.filter(p => p.category === cat.category);
                return (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-4 sm:mb-6">
                      <div className="flex items-center gap-3">
                        <cat.icon className="h-8 w-8 text-accent" />
                        <div>
                          <h2 className="text-xl sm:text-2xl">{cat.title}</h2>
                          <p className="text-xs sm:text-sm text-muted-foreground">{cat.description}</p>
                        </div>
                      </div>
                      <Link to={cat.link} className="hidden sm:block">
                        <Button variant="outline" size="sm" className="group/btn">
                          View All <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4">
                      {catProducts.map((product, idx) => (
                        <Link key={idx} to={`/products/${product.slug}`}>
                          <Card className="group hover:shadow-lg transition-smooth border hover:border-accent overflow-hidden h-full">
                            {product.images && product.images.length > 0 ? (
                              <div className="relative h-28 sm:h-36 overflow-hidden">
                                <img
                                  src={product.images[0]}
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                              </div>
                            ) : (
                              <div className="h-28 sm:h-36 flex items-center justify-center bg-secondary/30">
                                <product.icon className="h-10 w-10 text-accent/50" />
                              </div>
                            )}
                            <CardContent className="p-2 sm:p-3">
                              <h4 className="text-xs sm:text-sm font-semibold line-clamp-2 leading-tight">{product.name}</h4>
                              {product.capacity && (
                                <p className="text-[10px] sm:text-xs text-primary mt-0.5">{product.capacity}</p>
                              )}
                            </CardContent>
                          </Card>
                        </Link>
                      ))}
                    </div>
                    <Link to={cat.link} className="sm:hidden mt-3 block">
                      <Button variant="outline" size="sm" className="w-full group/btn">
                        View All {cat.title} <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl">Need Help Choosing?</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our experts are here to help you find the perfect solution for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/quote">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
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
