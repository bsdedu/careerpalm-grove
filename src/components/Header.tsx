
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import GetStartedForm from "./GetStartedForm";
import GetStartedSuccess from "./GetStartedSuccess";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formDialogOpen, setFormDialogOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetStarted = () => {
    setFormDialogOpen(true);
    setFormSubmitted(false);
  };

  const handleFormSuccess = () => {
    setFormSubmitted(true);
  };

  const handleDialogClose = () => {
    setFormDialogOpen(false);
    // Reset the form submission state after the dialog closes
    setTimeout(() => {
      setFormSubmitted(false);
    }, 300);
  };

  const serviceLinks = [
    { name: "Machine Learning", path: "/services/machine-learning" },
    { name: "Natural Language Processing", path: "/services/natural-language-processing" },
    { name: "Computer Vision", path: "/services/computer-vision" },
    { name: "Big Data Analytics", path: "/services/big-data-analytics" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm dark:bg-custom-dark/90 translate-y-0"
          : "bg-transparent translate-y-0"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-transform hover:scale-105 duration-300">
            <span className="text-2xl font-bold text-custom-purple-dark dark:text-custom-red">
              Tyrian<span className="text-custom-red">AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-custom-dark hover:text-custom-red dark:text-gray-200 dark:hover:text-custom-red font-medium transition-colors hover:scale-105 duration-300"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Services Hover Menu */}
            <div className="relative group">
              <button className="text-custom-dark hover:text-custom-red dark:text-gray-200 dark:hover:text-custom-red font-medium transition-colors flex items-center gap-1 hover:scale-105 duration-300">
                Services <ChevronDown size={16} className="transition-transform group-hover:rotate-180 duration-300" />
              </button>
              <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                <div className="py-2 bg-white dark:bg-custom-dark rounded-md shadow-xl border border-gray-200 dark:border-custom-purple-dark animate-fade-in">
                  <Link 
                    to="/services" 
                    className="block px-4 py-2 text-sm text-custom-dark hover:text-custom-red hover:bg-gray-100 dark:text-gray-200 dark:hover:text-custom-red dark:hover:bg-custom-purple-dark/30"
                  >
                    All Services
                  </Link>
                  {serviceLinks.map((service) => (
                    <Link
                      key={service.name}
                      to={service.path}
                      className="block px-4 py-2 text-sm text-custom-dark hover:text-custom-red hover:bg-gray-100 dark:text-gray-200 dark:hover:text-custom-red dark:hover:bg-custom-purple-dark/30"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            <Button 
              className="bg-custom-red hover:bg-custom-purple-light text-white hover:scale-105 transition-all duration-300"
              onClick={handleGetStarted}
            >
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
              className="transition-transform active:scale-90"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-custom-dark shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-3 py-2 rounded-md text-base font-medium text-custom-dark hover:text-custom-red hover:bg-gray-50 dark:text-gray-200 dark:hover:text-custom-red dark:hover:bg-custom-purple-dark/30 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Mobile Services submenu */}
            <div className="block px-3 py-2 text-base font-medium text-custom-dark dark:text-gray-200">
              <span>Services</span>
              <div className="pl-4 mt-2 space-y-2 border-l border-gray-200 dark:border-custom-purple-dark">
                <Link
                  to="/services"
                  className="block py-1 text-gray-600 hover:text-custom-red dark:text-gray-300 dark:hover:text-custom-red transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  All Services
                </Link>
                {serviceLinks.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="block py-1 text-gray-600 hover:text-custom-red dark:text-gray-300 dark:hover:text-custom-red transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <Button 
              className="w-full bg-custom-red hover:bg-custom-purple-light text-white mt-4 transition-all duration-300"
              onClick={() => {
                setIsOpen(false);
                handleGetStarted();
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}

      {/* Get Started Form Dialog */}
      <Dialog open={formDialogOpen} onOpenChange={handleDialogClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl">
              {formSubmitted ? "Request Submitted" : "Get Started with TyrianAI"}
            </DialogTitle>
          </DialogHeader>
          {formSubmitted ? (
            <GetStartedSuccess onClose={handleDialogClose} />
          ) : (
            <GetStartedForm onSuccess={handleFormSuccess} />
          )}
        </DialogContent>
      </Dialog>
    </header>
  );
};

export default Header;
