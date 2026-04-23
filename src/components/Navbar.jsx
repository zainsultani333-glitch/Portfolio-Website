import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/projects", name: "Projects" },
    { path: "/skills", name: "Skills" },
    { path: "/contact", name: "Contact" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-bg/95 backdrop-blur-md shadow-lg"
            : "bg-bg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              to="/"
              className="text-2xl font-bold transition-all duration-300 hover:scale-105 text-primary"
            >
              MyPortfolio
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 relative group ${
                    isActive(link.path)
                      ? "bg-primary text-bg"
                      : "text-text hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                  {!isActive(link.path) && (
                    <span
                      className="absolute bottom-0 left-1/2 w-0 h-0.5 transition-all duration-300 group-hover:w-full group-hover:left-0 bg-primary"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 transition-all duration-300 bg-text ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300 bg-text ${
                    isMobileMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 transition-all duration-300 bg-text ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full z-40 transition-all duration-300 md:hidden bg-bg ${
          isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-2 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                isActive(link.path)
                  ? "bg-primary text-bg"
                  : "text-text hover:bg-gray-50"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16" />
    </>
  );
}