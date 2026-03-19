import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { productsData } from "@/data/productsData";

const FeaturedProducts = () => {
  const featuredSlugs = [
    "weighspring",
    "electronic-platform-scale",
    "timespring",
    "secuspring",
    "cs30-android-pos",
    "bluetooth-thermal-printer",
  ];

  const products = featuredSlugs
    .map(slug => productsData.find(p => p.slug === slug))
    .filter(Boolean)
    .map(product => ({
      ...product!,
      image: product!.images?.[0] || "",
    }));

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl">Featured Products</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of innovative solutions designed to enhance your business operations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {products.map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-smooth overflow-hidden border-2 hover:border-accent">
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4">
                  <span className="px-2 sm:px-3 py-0.5 sm:py-1 bg-accent text-accent-foreground text-[10px] sm:text-xs font-semibold rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <CardHeader className="p-4 sm:p-6">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <CardTitle className="text-base sm:text-xl mb-1 sm:mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-xs sm:text-sm line-clamp-2">{product.description}</CardDescription>
                  </div>
                  <product.icon className="h-6 w-6 sm:h-8 sm:w-8 text-accent flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <Link to={`/products/${product.slug}`}>
                  <Button variant="outline" className="w-full group/btn text-xs sm:text-sm">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link to="/products">
            <Button variant="hero" size="lg">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
