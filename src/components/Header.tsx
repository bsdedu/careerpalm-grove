
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { name: "Machine Learning", path: "/services/machine-learning" },
    { name: "Natural Language Processing", path: "/services/natural-language-processing" },
    { name: "Computer Vision", path: "/services/computer-vision" },
    { name: "Big Data Analytics", path: "/services/big-data-analytics" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    // Services is handled separately with dropdown
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-gray-900/90"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-tyrian-800 dark:text-tyrian-400">
              Tyrian<span className="text-tyrian-600">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-tyrian-700 dark:text-gray-200 dark:hover:text-tyrian-400 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-700 hover:text-tyrian-700 dark:text-gray-200 dark:hover:text-tyrian-400 font-medium transition-colors flex items-center gap-1">
                  Services <ChevronDown size={16} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full cursor-pointer">All Services</Link>
                </DropdownMenuItem>
                {serviceLinks.map((service) => (
                  <DropdownMenuItem key={service.name} asChild>
                    <Link to={service.path} className="w-full cursor-pointer">{service.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Button className="bg-tyrian-700 hover:bg-tyrian-800 text-white">
              Get Started
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-tyrian-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:text-tyrian-400 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Services submenu */}
            <div className="block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-200">
              <span>Services</span>
              <div className="pl-4 mt-2 space-y-2 border-l border-gray-200 dark:border-gray-700">
                <Link
                  to="/services"
                  className="block py-1 text-gray-600 hover:text-tyrian-700 dark:text-gray-300 dark:hover:text-tyrian-400"
                  onClick={() => setIsOpen(false)}
                >
                  All Services
                </Link>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block py-1 text-gray-600 hover:text-tyrian-700 dark:text-gray-300 dark:hover:text-tyrian-400"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Button 
              className="w-full bg-tyrian-700 hover:bg-tyrian-800 text-white mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
