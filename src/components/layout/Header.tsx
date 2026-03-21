import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import TopBar from "./TopBar";
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
  const [productsOpen, setProductsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
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

  const closeMobile = () => {
    setMobileMenuOpen(false);
    setProductsOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <TopBar />
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
                  <Link to="/solutions">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                        isActive("/solutions")
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}>
                      Solutions
                    </NavigationMenuLink>
                  </Link>{" "}
                  <Link to="/consultation">
                    <NavigationMenuLink
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-smooth ${
                        isActive("/consultation")
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary"
                      }`}>
                      Consultations
                    </NavigationMenuLink>
                  </Link>
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
        </nav>
      </header>

      {/* Mobile Overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-[59] bg-black/50"
          onClick={closeMobile}
          aria-hidden="true"
        />
      )}

      {/* Mobile Left Drawer */}
      <div
        className={`lg:hidden rounded-br-3xl fixed top-0 left-0 z-[60] h-54 w-62 max-w-[85vw] bg-background shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}>
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <Link
            to="/"
            className="flex items-center space-x-2"
            onClick={closeMobile}>
            <img src={logo} alt="Brickspring" className="h-8 w-8" />
            <span className="font-bold text-xl text-primary">Brickspring</span>
          </Link>
          <button
            onClick={closeMobile}
            aria-label="Close menu"
            className="p-1 rounded-md hover:bg-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
          <Link
            to="/"
            className={`block px-4 py-2.5 rounded-md text-sm font-medium ${
              isActive("/")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            }`}
            onClick={closeMobile}>
            Home
          </Link>

          {/* Products accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-md text-sm font-medium hover:bg-secondary"
              onClick={() => setProductsOpen(!productsOpen)}>
              Products
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  productsOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {productsOpen && (
              <div className="mt-1 ml-4 space-y-1 border-l pl-3">
                <Link
                  to="/products"
                  className="block px-3 py-2 rounded-md text-sm hover:bg-secondary text-muted-foreground hover:text-foreground"
                  onClick={closeMobile}>
                  All Products
                </Link>
                {productCategories.map((category) => (
                  <Link
                    key={category.path}
                    to={category.path}
                    className="block px-3 py-2 rounded-md text-sm hover:bg-secondary text-muted-foreground hover:text-foreground"
                    onClick={closeMobile}>
                    {category.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services accordion */}
          <div>
            <button
              className="w-full flex items-center justify-between px-4 py-2.5 rounded-md text-sm font-medium hover:bg-secondary"
              onClick={() => setServicesOpen(!servicesOpen)}>
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  servicesOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {servicesOpen && (
              <div className="mt-1 ml-4 space-y-1 border-l pl-3">
                <Link
                  to="/services"
                  className="block px-3 py-2 rounded-md text-sm hover:bg-secondary text-muted-foreground hover:text-foreground"
                  onClick={closeMobile}>
                  All Services
                </Link>
                {services.map((service) => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-3 py-2 rounded-md text-sm hover:bg-secondary text-muted-foreground hover:text-foreground"
                    onClick={closeMobile}>
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/solutions"
            className={`block px-4 py-2.5 rounded-md text-sm font-medium ${
              isActive("/solutions")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            }`}
            onClick={closeMobile}>
            Solutions
          </Link>

          <Link
            to="/consultation"
            className={`block px-4 py-2.5 rounded-md text-sm font-medium ${
              isActive("/consultation")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            }`}
            onClick={closeMobile}>
            Consultation
          </Link>

          <Link
            to="/about"
            className={`block px-4 py-2.5 rounded-md text-sm font-medium ${
              isActive("/about")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            }`}
            onClick={closeMobile}>
            About
          </Link>

          <Link
            to="/contact"
            className={`block px-4 py-2.5 rounded-md text-sm font-medium ${
              isActive("/contact")
                ? "bg-primary text-primary-foreground"
                : "hover:bg-secondary"
            }`}
            onClick={closeMobile}>
            Contact
          </Link>
        </div>

        {/* Drawer Footer CTA */}
        <div className="px-5 py-4 border-t">
          <Link to="/quote" onClick={closeMobile}>
            <Button variant="accent" className="w-full">
              Get Quote
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
