import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Download, Share2, CheckCircle2 } from "lucide-react";
import { productsData } from "@/data/productsData";
import ProductImageGallery from "@/components/products/ProductImageGallery";

const ProductDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const product = productsData.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
            <Button onClick={() => navigate('/products')}>Back to Products</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.slug !== slug)
    .slice(0, 3);

  const otherProducts = productsData
    .filter(p => p.category !== product.category)
    .slice(0, 3);

  const similarProducts = relatedProducts.length > 0 ? relatedProducts : otherProducts;

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="bg-secondary/20 py-3 sm:py-4">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground flex-wrap">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-primary">Products</Link>
              <span>/</span>
              <Link to={product.categoryUrl} className="hover:text-primary">{product.category}</Link>
              <span>/</span>
              <span className="text-foreground truncate max-w-[150px] sm:max-w-none">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-8 sm:py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <Button 
              variant="outline" 
              size="sm" 
              className="mb-4 sm:mb-6"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
              {/* Product Image Gallery */}
              <div>
                {product.images && product.images.length > 0 ? (
                  <ProductImageGallery images={product.images} productName={product.name} />
                ) : (
                  <div className="aspect-square rounded-lg overflow-hidden bg-secondary/30 flex items-center justify-center">
                    <product.icon className="h-24 sm:h-32 w-24 sm:w-32 text-primary/30" />
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-3 sm:mb-4">
                  <Badge variant="secondary" className="mb-2 text-xs">{product.category}</Badge>
                  <h1 className="mb-2 text-2xl sm:text-3xl lg:text-4xl">{product.name}</h1>
                  {product.capacity && (
                    <p className="text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">{product.capacity}</p>
                  )}
                </div>

                <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">{product.description}</p>

                {product.highlights && product.highlights.length > 0 && (
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {product.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3">
                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span className="text-sm sm:text-base">{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Link to="/quote" className="flex-1">
                    <Button size="lg" className="w-full">
                      Request Quote
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="flex-1 sm:flex-none">
                    <Download className="mr-2 h-4 w-4" />
                    Datasheet
                  </Button>
                  <Button variant="outline" size="lg" className="sm:flex-none">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Detailed Information Tabs */}
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:w-auto">
                <TabsTrigger value="specifications" className="text-xs sm:text-sm">Specifications</TabsTrigger>
                <TabsTrigger value="features" className="text-xs sm:text-sm">Features</TabsTrigger>
                <TabsTrigger value="documentation" className="text-xs sm:text-sm">Documentation</TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="mt-4 sm:mt-6">
                <Card>
                  <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                    <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Technical Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                      {product.specifications.map((spec, idx) => {
                        const [key, value] = spec.split(':');
                        return (
                          <div key={idx} className="flex flex-col sm:flex-row border-b border-border pb-2 sm:pb-3">
                            <span className="font-semibold text-sm sm:text-base sm:min-w-[150px]">{key}:</span>
                            <span className="text-sm sm:text-base text-muted-foreground">{value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="mt-4 sm:mt-6">
                <Card>
                  <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                    <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Key Features & Benefits</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {(product.features || product.specifications).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2 sm:gap-3">
                          <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-sm sm:text-base mb-1">{feature}</p>
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              Professional-grade performance and reliability
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documentation" className="mt-4 sm:mt-6">
                <Card>
                  <CardContent className="pt-4 sm:pt-6 px-4 sm:px-6">
                    <h3 className="mb-3 sm:mb-4 text-lg sm:text-xl">Downloads & Documentation</h3>
                    <div className="space-y-3">
                      {["Product Datasheet", "User Manual", "Installation Guide"].map((doc, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 sm:p-4 border rounded-lg hover:bg-secondary/30 transition-colors">
                          <div className="flex items-center gap-2 sm:gap-3">
                            <Download className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                            <div>
                              <p className="font-medium text-sm sm:text-base">{doc}</p>
                              <p className="text-xs sm:text-sm text-muted-foreground">PDF - {(idx + 1) * 1.8} MB</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm" className="text-xs sm:text-sm">Download</Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12 sm:py-16 lg:py-20 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-6 sm:mb-8 text-center text-2xl sm:text-3xl">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {similarProducts.map((relatedProduct, idx) => (
                <Card key={idx} className="group hover:shadow-xl transition-smooth overflow-hidden">
                  {relatedProduct.images && relatedProduct.images.length > 0 ? (
                    <div className="relative h-40 sm:h-48 overflow-hidden">
                      <img
                        src={relatedProduct.images[0]}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <span className="px-2 py-0.5 bg-accent text-accent-foreground text-[10px] sm:text-xs font-semibold rounded-full">
                          {relatedProduct.category}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="h-40 sm:h-48 flex justify-center items-center bg-secondary/30">
                      <relatedProduct.icon className="h-16 w-16 text-accent" />
                    </div>
                  )}
                  <CardContent className="p-4 sm:p-6">
                    <h4 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{relatedProduct.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <Link to={`/products/${relatedProduct.slug}`}>
                      <Button variant="outline" size="sm" className="w-full text-xs sm:text-sm">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
