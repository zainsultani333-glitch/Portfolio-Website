import { useState } from "react";
import { subscribeUser } from "../api/api";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
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

  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await subscribeUser({ email });
      setShowPopup(true); // show popup
      setEmail("");
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  }


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
            <>
              {/* FORM */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-gray-500"
                  required
                />

                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-gray-900 rounded-lg text-sm font-medium hover:bg-gray-200"
                >
                  Subscribe
                </button>
              </form>

              {/* POPUP MODAL */}
              {showPopup && (
                <AnimatePresence>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
                    onClick={() => setShowPopup(false)}
                  >
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0, y: 20 }}
                      animate={{ scale: 1, opacity: 1, y: 0 }}
                      exit={{ scale: 0.8, opacity: 0, y: 20 }}
                      transition={{
                        type: "spring",
                        damping: 25,
                        stiffness: 300,
                        duration: 0.3
                      }}
                      className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl w-[400px] max-w-[90%] overflow-hidden"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Animated border gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 opacity-20 rounded-2xl" />

                      {/* Success icon with animation */}
                      <div className="relative pt-8 pb-4">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                          className="w-16 h-16 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg"
                        >
                          <motion.svg
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <motion.path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ delay: 0.2, duration: 0.5 }}
                            />
                          </motion.svg>
                        </motion.div>
                      </div>

                      {/* Content */}
                      <div className="text-center px-8 pb-8">
                        <motion.h2
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent"
                        >
                          Success!
                        </motion.h2>

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.25 }}
                          className="text-gray-600 mb-6"
                        >
                          You've successfully subscribed to our newsletter!
                        </motion.p>
                      </div>

                      {/* Close button (X) */}
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        onClick={() => setShowPopup(false)}
                        className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                        whileHover={{ rotate: 90 }}
                        transition={{ duration: 0.2 }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </motion.button>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              )}
            </>
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