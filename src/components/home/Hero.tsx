import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Shield, Cpu } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Advanced technology solutions"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-20 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="h-2 w-2 bg-accent rounded-full animate-pulse" />
            <span className="text-primary-foreground text-sm font-medium">Trusted by 500+ Companies Worldwide</span>
          </div>

          <h1 className="text-primary-foreground mb-6 leading-tight">
            Advanced Weighing Solutions & Technology Services
          </h1>

          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
            Empowering industries with cutting-edge weighbridge management software, 
            precision weighing equipment, cybersecurity solutions, and enterprise technology services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link to="/products">
              <Button variant="accent" size="lg" className="group">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/quote">
              <Button variant="outline" size="lg" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Request Quote
              </Button>
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Scale className="h-8 w-8 text-accent-light" />
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">15+</div>
                  <div className="text-sm text-primary-foreground/80">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-8 w-8 text-accent-light" />
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">500+</div>
                  <div className="text-sm text-primary-foreground/80">Clients Served</div>
                </div>
              </div>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <Cpu className="h-8 w-8 text-accent-light" />
                <div>
                  <div className="text-2xl font-bold text-primary-foreground">50+</div>
                  <div className="text-sm text-primary-foreground/80">Product Range</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
