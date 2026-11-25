import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Scale } from "lucide-react";
import weighingImage from "@/assets/weighing-equipment.jpg";
import { productsData } from "@/data/productsData";

const WeighingEquipment = () => {
  const products = productsData.filter(p => p.category === "Weighing Equipment");
  const relatedProducts = productsData.filter(p => p.category !== "Weighing Equipment").slice(0, 4);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="gradient-hero py-12 sm:py-16 lg:py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h1 className="text-primary-foreground mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl">Weighing Equipment</h1>
                <p className="text-base sm:text-xl text-primary-foreground/90 mb-6 sm:mb-8">
                  Precision weighing scales and equipment for industrial and commercial use
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link to="/quote">
                    <Button variant="hero" size="lg" className="w-full sm:w-auto">
                      Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto bg-white/10 text-white border-white/20 hover:bg-white/20">
                    <Download className="mr-2 h-5 w-5" />
                    Download Catalog
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <img src={weighingImage} alt="Weighing Equipment" className="rounded-lg shadow-elegant" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl">Our Weighing Solutions</h2>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                High-precision weighing equipment designed for accuracy and reliability
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              {products.map((product, index) => (
                <Card key={index} className="group hover:shadow-2xl transition-smooth border-2 hover:border-accent overflow-hidden">
                  {product.images && product.images.length > 0 && (
                    <div className="relative h-48 sm:h-52 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      {product.capacity && (
                        <div className="absolute bottom-3 left-3">
                          <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                            {product.capacity}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  <CardHeader className="p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <CardTitle className="text-lg sm:text-xl">{product.name}</CardTitle>
                      </div>
                      <Scale className="h-8 w-8 text-accent flex-shrink-0" />
                    </div>
                    <p className="text-sm text-muted-foreground pt-2 line-clamp-2">{product.description}</p>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 pt-0">
                    <div className="space-y-2 mb-4 sm:mb-6">
                      <h4 className="font-semibold text-xs sm:text-sm">Highlights:</h4>
                      <ul className="space-y-1.5">
                        {(product.highlights || []).slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-muted-foreground">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/products/${product.slug}`} className="flex-1">
                        <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm">View Details</Button>
                      </Link>
                      <Link to="/quote" className="flex-1">
                        <Button variant="default" size="sm" className="w-full text-xs sm:text-sm group/btn">
                          Quote
                          <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-6 sm:mb-8 text-center text-2xl sm:text-3xl">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((product, idx) => (
                <Card key={idx} className="group hover:shadow-xl transition-smooth overflow-hidden">
                  {product.images && product.images.length > 0 && (
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <span className="px-2 py-0.5 bg-accent text-accent-foreground text-[10px] sm:text-xs font-semibold rounded-full">
                          {product.category}
                        </span>
                      </div>
                    </div>
                  )}
                  <CardContent className="p-4">
                    <h4 className="text-sm sm:text-base font-semibold mb-1">{product.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <Link to={`/products/${product.slug}`}>
                      <Button variant="outline" size="sm" className="w-full text-xs">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl">Need Help Choosing the Right Scale?</h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
              Our weighing experts are here to help you select the perfect equipment for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link to="/quote">
                <Button variant="hero" size="lg" className="w-full sm:w-auto">
                  Request Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">Contact Expert</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WeighingEquipment;
