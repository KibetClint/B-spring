import { Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const TopBar = () => {
  return (
    <div className="w-full bg-primary text-primary-foreground text-xs py-1.5">
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="tel:+254725903309" className="flex items-center gap-1 hover:opacity-80 transition-smooth">
            <Phone className="h-3 w-3" />
            <span className="hidden sm:inline">+254 725 903309</span>
          </a>
          <a href="mailto:info@brickspring.co.ke" className="flex items-center gap-1 hover:opacity-80 transition-smooth">
            <Mail className="h-3 w-3" />
            <span className="hidden sm:inline">info@brickspring.co.ke</span>
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://facebook.com/brickspring" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth" aria-label="Facebook">
            <Facebook className="h-3.5 w-3.5" />
          </a>
          <a href="https://twitter.com/brickspring" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth" aria-label="Twitter">
            <Twitter className="h-3.5 w-3.5" />
          </a>
          <a href="https://instagram.com/brickspring" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth" aria-label="Instagram">
            <Instagram className="h-3.5 w-3.5" />
          </a>
          <a href="https://linkedin.com/company/brickspring" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-smooth" aria-label="LinkedIn">
            <Linkedin className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
