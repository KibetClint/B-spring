import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-bold text-xl mb-4">
              <span className="text-white">Brickspring</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Leading provider of weighing solutions, software, and technology
              services trusted by industries worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-light transition-smooth">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent-light transition-smooth">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent-light transition-smooth">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent-light transition-smooth">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/about"
                  className="text-primary-foreground/80 hover:text-accent-light transition-smooth">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-primary-foreground/80 hover:text-accent-light transition-smooth">
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-primary-foreground/80 hover:text-accent-light transition-smooth">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/quote"
                  className="text-primary-foreground/80 hover:text-accent-light transition-smooth">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-accent-light transition-smooth">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products & Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Solutions</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/products/software"
                  className="text-primary-foreground/80 hover:text-accent-light transition-smooth">
                  Software Solutions
                </Link>
              </li>
              <li>
                <Link
                  to="/products/weighing-equipment"
                  className="text-primary-foreground/80 hover:text-accent-light transition-smooth">
                  Weighing Equipment
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cybersecurity"
                  className="text-primary-foreground/80 hover:text-accent-light transition-smooth">
                  Cybersecurity
                </Link>
              </li>
              <li>
                <Link
                  to="/services/web-development"
                  className="text-primary-foreground/80 hover:text-accent-light transition-smooth">
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  to="/services/cctv-installation"
                  className="text-primary-foreground/80 hover:text-accent-light transition-smooth">
                  CCTV Installation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  P.O. Box 373-20210, Litein, Kericho, Kenya
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <a
                  href="tel:+254725903309"
                  className="text-primary-foreground/80 hover:text-accent-light transition-smooth">
                  +254 725 903309
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <a
                  href="mailto:info@brickspring.co.ke"
                  className="text-primary-foreground/80 hover:text-accent-light transition-smooth">
                  info@brickspring.co.ke
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Brickspring. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy-policy"
                className="text-primary-foreground/60 hover:text-accent-light transition-smooth">
                Privacy Policy
              </Link>
              <Link
                to="/terms-conditions"
                className="text-primary-foreground/60 hover:text-accent-light transition-smooth">
                Terms & Conditions
              </Link>
              <Link
                to="/compliance"
                className="text-primary-foreground/60 hover:text-accent-light transition-smooth">
                Compliance
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
