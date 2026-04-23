import { Link } from "react-router-dom";
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiMail, 
  FiHeart,
  FiArrowUp,
  FiMapPin,
  FiPhone
} from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms of Service", path: "/terms" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold text-white mb-4">
              MyPortfolio
            </h2>
            <p className="text-sm leading-relaxed mb-6">
              Creating modern, responsive web applications that help businesses grow in the digital age.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/zainsultani333-glitch?" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors duration-200"
                aria-label="GitHub"
              >
                <FiGithub className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/m-zain-75675a2a0/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://x.com/MZain1038353" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors duration-200"
                aria-label="Twitter"
              >
                <FiTwitter className="w-5 h-5" />
              </a>
              <a 
                href="/contact" 
                className="hover:text-white transition-colors duration-200"
                aria-label="Email"
              >
                <FiMail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path} 
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <FiMail className="w-4 h-4 flex-shrink-0" />
                <span>zainsultani333@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FiPhone className="w-4 h-4 flex-shrink-0" />
                <span>+92 (328) 9423123</span>
              </div>
              <div className="flex items-start gap-3 text-sm">
                <FiMapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>Johar Town near Emporium Mall<br />Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
              Stay Updated
            </h3>
            <p className="text-sm mb-3">
              Get the latest updates and news.
            </p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gray-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            
            <div className="text-gray-500">
              © {currentYear} MyPortfolio. All rights reserved.
            </div>
            
            <div className="flex items-center gap-4">
              {legalLinks.map((link) => (
                <Link 
                  key={link.path}
                  to={link.path} 
                  className="text-gray-500 hover:text-white transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={scrollToTop}
                className="text-gray-500 hover:text-white transition-colors duration-200"
                aria-label="Scroll to top"
              >
                <FiArrowUp className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-1 text-gray-500 text-sm">
              Made with <FiHeart className="w-3 h-3 text-red-500" /> by Zain Solution.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}