import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const productCategories = [
    { name: "Software Solutions", path: "/products/software" },
    { name: "Weighing Equipment", path: "/products/weighing-equipment" },
    { name: "Hardware & Accessories", path: "/products/hardware" },
  ];

  const services = [
    {
      name: "Cybersecurity & Penetration Testing",
      path: "/services/cybersecurity",
    },
    { name: "Web & App Development", path: "/services/web-development" },
    { name: "Integration Services", path: "/services/integration" },
    { name: "CCTV Installation", path: "/services/cctv-installation" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Brickspring" className="h-10 w-10" />
            <div className="font-bold text-2xl">
              <span className="text-primary">Brickspring</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList className="space-x-1">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                      isActive("/")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    }`}>
                    Home
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-secondary">
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-popover">
                    <li>
                      <Link to="/products">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-smooth hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            All Products
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Browse our complete product catalog
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    {productCategories.map((category) => (
                      <li key={category.path}>
                        <Link to={category.path}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-smooth hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              {category.name}
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-secondary">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[500px] gap-3 p-4 bg-popover">
                    <li>
                      <Link to="/services">
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-smooth hover:bg-accent hover:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">
                            All Services
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Explore our comprehensive service offerings
                          </p>
                        </NavigationMenuLink>
                      </Link>
                    </li>
                    {services.map((service) => (
                      <li key={service.path}>
                        <Link to={service.path}>
                          <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-smooth hover:bg-accent hover:text-accent-foreground">
                            <div className="text-sm font-medium leading-none">
                              {service.name}
                            </div>
                          </NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                      isActive("/about")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    }`}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <Link to="/contact">
                  <NavigationMenuLink
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                      isActive("/contact")
                        ? "bg-primary text-primary-foreground"
                        : "hover:bg-secondary"
                    }`}>
                    Contact
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/quote">
              <Button variant="accent" size="lg">
                Get Quote
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu">
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2">
            <Link
              to="/"
              className={`block px-4 py-2 rounded-md ${
                isActive("/")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
              onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link
              to="/products"
              className={`block px-4 py-2 rounded-md ${
                isActive("/products")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
              onClick={() => setMobileMenuOpen(false)}>
              Products
            </Link>
            <Link
              to="/services"
              className={`block px-4 py-2 rounded-md ${
                isActive("/services")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
              onClick={() => setMobileMenuOpen(false)}>
              Services
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-2 rounded-md ${
                isActive("/about")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
              onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link
              to="/contact"
              className={`block px-4 py-2 rounded-md ${
                isActive("/contact")
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-secondary"
              }`}
              onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/quote" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="accent" className="w-full mt-4">
                Get Quote
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
