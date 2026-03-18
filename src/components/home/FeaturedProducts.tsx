import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { productsData } from "@/data/productsData";
import weighingImg from "@/assets/images/weighing/Table Scale.jpg";
import softwareImg from "@/assets/software-solutions.jpg";

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
    .map((slug) => productsData.find((p) => p.slug === slug))
    .filter(Boolean)
    .map((product) => ({
      ...product!,
      image:
        product!.category === "Software Solutions" ? softwareImg : weighingImg,
    }));

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Featured Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of innovative solutions designed to enhance your
            business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-smooth overflow-hidden border-2 hover:border-accent">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                    {product.category}
                  </span>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-2">
                      {product.name}
                    </CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </div>
                  <product.icon className="h-8 w-8 text-accent flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent>
                <Link to={`/products/${product.slug}`}>
                  <Button variant="outline" className="w-full group/btn">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
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
