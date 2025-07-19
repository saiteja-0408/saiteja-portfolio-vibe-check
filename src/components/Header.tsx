
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ExternalLink, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

// Get current theme from localStorage
const getCurrentTheme = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem("theme") || "system";
  }
  return "system";
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [currentTheme, setCurrentTheme] = useState(getCurrentTheme());

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { 
      name: "Projects", 
      href: "#projects",
      dropdown: [
        { name: "All Projects", href: "#projects" },
        { name: "Full-Stack", href: "#projects?category=Full-Stack" },
        { name: "DevOps", href: "#projects?category=DevOps" },
        { name: "Data Engineering", href: "#projects?category=Data Engineering" },
        { name: "Data Analytics", href: "#projects?category=Data Analytics" },
        { name: "Machine Learning", href: "#projects?category=Machine Learning" }
      ]
    },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Listen for theme changes
  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentTheme(getCurrentTheme());
    };

    const handleThemeChange = () => {
      setTimeout(() => {
        setCurrentTheme(getCurrentTheme());
      }, 100);
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('themeChanged', handleThemeChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('themeChanged', handleThemeChange);
    };
  }, []);

  const handleNavClick = (href: string) => {
    // Handle query parameters for filtering
    if (href.includes('?')) {
      const [section, query] = href.split('?');
      const element = document.querySelector(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // Trigger filter if needed
        setTimeout(() => {
          const urlParams = new URLSearchParams(query);
          const category = urlParams.get('category');
          if (category) {
            // Dispatch custom event for filtering
            window.dispatchEvent(new CustomEvent('filterProjects', { 
              detail: { category } 
            }));
          }
        }, 500);
      }
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        // If it's the projects section without query params, reset filters
        if (href === '#projects') {
          setTimeout(() => {
            // Dispatch custom event to reset filters
            window.dispatchEvent(new CustomEvent('filterProjects', { 
              detail: { category: 'all' } 
            }));
          }, 500);
        }
      }
    }
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleResumeDownload = () => {
    // Google Drive link - Replace with your actual Google Drive link
    const googleDriveUrl = "https://drive.google.com/file/d/13dtPLjDGpL15VaZlUUfyintjf23GP8-Q/view?usp=sharing";
    
    // Convert to direct download link
    const directDownloadUrl = googleDriveUrl.replace('/view?usp=sharing', '/preview');
    
    // Open in new tab
    window.open(directDownloadUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-theme-card/80 backdrop-blur-md border-b border-theme shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
            onClick={scrollToTop}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                scrollToTop();
              }
            }}
            aria-label="Go to top of page"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-theme-primary">Saiteja</span>
                          <Badge variant="secondary" className="ml-2 text-xs">
              Available
            </Badge>

            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main navigation">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <div
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="relative"
                  >
                    <button 
                      className="flex items-center space-x-1 text-theme-secondary hover:text-accent-primary transition-colors"
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.name}
                      aria-label={`${item.name} menu`}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="h-4 w-4" />
                    </button>
                    
                    <AnimatePresence>
                      {activeDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-theme-card rounded-lg shadow-lg border border-theme py-2"
                          role="menu"
                        >
                          {item.dropdown.map((dropdownItem) => (
                            <a
                              key={dropdownItem.name}
                              href={dropdownItem.href}
                              onClick={() => handleNavClick(dropdownItem.href)}
                              className="block px-4 py-2 text-sm text-theme-secondary hover:bg-theme-secondary hover:text-accent-primary transition-colors"
                              role="menuitem"
                            >
                              {dropdownItem.name}
                            </a>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className="text-theme-secondary hover:text-accent-primary transition-colors"
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-2"
              onClick={handleResumeDownload}
              aria-label="Download resume"
            >
              <Download className="h-4 w-4" />
              Resume
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-theme-card/95 backdrop-blur-md border-t border-theme"
              role="menu"
            >
              <div className="px-4 py-6 space-y-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.dropdown ? (
                      <div>
                        <button
                          onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full text-left text-theme-secondary hover:text-accent-primary transition-colors py-2"
                          aria-expanded={activeDropdown === item.name}
                          aria-label={`${item.name} submenu`}
                        >
                          <span>{item.name}</span>
                          <ChevronDown 
                            className={`h-4 w-4 transition-transform ${
                              activeDropdown === item.name ? "rotate-180" : ""
                            }`} 
                          />
                        </button>
                        <AnimatePresence>
                          {activeDropdown === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4 space-y-2 mt-2"
                              role="menu"
                            >
                              {item.dropdown.map((dropdownItem) => (
                                <a
                                  key={dropdownItem.name}
                                  href={dropdownItem.href}
                                  onClick={() => handleNavClick(dropdownItem.href)}
                                  className="block py-2 text-sm text-theme-secondary hover:text-accent-primary transition-colors"
                                  role="menuitem"
                                >
                                  {dropdownItem.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full text-left text-theme-secondary hover:text-accent-primary transition-colors py-2"
                        aria-label={`Navigate to ${item.name} section`}
                      >
                        {item.name}
                      </button>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-200">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full flex items-center gap-2"
                    onClick={handleResumeDownload}
                    aria-label="Download resume"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
