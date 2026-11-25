import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-10 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-primary-foreground mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Get in touch with our experts to discuss how our solutions can enhance your business efficiency and security.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/quote">
              <Button variant="accent" size="lg" className="group">
                Request a Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Sales
              </Button>
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            <a href="tel:+254725903309" className="flex items-center space-x-2 text-primary-foreground hover:text-accent-light transition-smooth">
              <Phone className="h-5 w-5" />
              <span>+254 725 903309</span>
            </a>
            <a href="mailto:info@brickspring.co.ke" className="flex items-center space-x-2 text-primary-foreground hover:text-accent-light transition-smooth">
              <Mail className="h-5 w-5" />
              <span>info@brickspring.co.ke</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
