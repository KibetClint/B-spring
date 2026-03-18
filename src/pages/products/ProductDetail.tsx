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

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Breadcrumb */}
        <section className="bg-secondary/20 py-4">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-primary">Products</Link>
              <span>/</span>
              <Link to={product.categoryUrl} className="hover:text-primary">{product.category}</Link>
              <span>/</span>
              <span className="text-foreground">{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Details */}
        <section className="py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <Button 
              variant="outline" 
              size="sm" 
              className="mb-6"
              onClick={() => navigate(-1)}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>

            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Product Image Gallery */}
              <div>
                {product.images && product.images.length > 0 ? (
                  <ProductImageGallery images={product.images} productName={product.name} />
                ) : (
                  <div className="aspect-square rounded-lg overflow-hidden bg-secondary/30 flex items-center justify-center">
                    <product.icon className="h-32 w-32 text-primary/30" />
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div>
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-2">{product.category}</Badge>
                  <h1 className="mb-2">{product.name}</h1>
                  {product.capacity && (
                    <p className="text-lg font-semibold text-primary mb-4">{product.capacity}</p>
                  )}
                </div>

                <p className="text-lg text-muted-foreground mb-6">{product.description}</p>

                {product.highlights && product.highlights.length > 0 && (
                  <div className="space-y-3 mb-8">
                    {product.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/quote" className="flex-1">
                    <Button size="lg" className="w-full">
                      Request Quote
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Datasheet
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Detailed Information Tabs */}
            <Tabs defaultValue="specifications" className="w-full">
              <TabsList className="grid w-full grid-cols-3 lg:w-auto">
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="documentation">Documentation</TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="mb-4">Technical Specifications</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {product.specifications.map((spec, idx) => {
                        const [key, value] = spec.split(':');
                        return (
                          <div key={idx} className="flex border-b border-border pb-3">
                            <span className="font-semibold min-w-[150px]">{key}:</span>
                            <span className="text-muted-foreground">{value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="mb-4">Key Features & Benefits</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      {(product.features || product.specifications).map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="h-2 w-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <div>
                            <p className="font-medium mb-1">{feature}</p>
                            <p className="text-sm text-muted-foreground">
                              Professional-grade performance and reliability
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documentation" className="mt-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="mb-4">Downloads & Documentation</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Download className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">Product Datasheet</p>
                            <p className="text-sm text-muted-foreground">PDF - 2.4 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Download</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Download className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">User Manual</p>
                            <p className="text-sm text-muted-foreground">PDF - 5.1 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Download</Button>
                      </div>
                      <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-secondary/30 transition-colors">
                        <div className="flex items-center gap-3">
                          <Download className="h-5 w-5 text-primary" />
                          <div>
                            <p className="font-medium">Installation Guide</p>
                            <p className="text-sm text-muted-foreground">PDF - 1.8 MB</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">Download</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4 lg:px-8">
            <h2 className="mb-8 text-center">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {productsData
                .filter(p => p.category === product.category && p.slug !== slug)
                .slice(0, 3)
                .map((relatedProduct, idx) => (
                  <Card key={idx} className="group hover:shadow-xl transition-smooth">
                    <CardContent className="pt-6">
                      <div className="mb-4 flex justify-center">
                        <relatedProduct.icon className="h-16 w-16 text-accent" />
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-center">{relatedProduct.name}</h4>
                      <p className="text-sm text-muted-foreground text-center mb-4">
                        {relatedProduct.description.substring(0, 100)}...
                      </p>
                      <Link to={`/products/${relatedProduct.slug}`}>
                        <Button variant="outline" className="w-full">
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
