"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiMapPin,
  FiPhone,
  FiClock,
  FiSend,
  FiCheckCircle,
  FiAlertCircle,
  FiGithub as FiGit,
  FiLinkedin as FiLi,
  FiTwitter as FiTw,
  FiInstagram,
  FiYoutube,
  FiMessageSquare,
  FiBriefcase,
  FiCoffee,
  FiGlobe,
} from "react-icons/fi";
import {
  SiWhatsapp,
  SiTelegram,
  SiDiscord,
  SiSlack,
} from "react-icons/si";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const scaleOnHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 },
};

// Form Input Component
const FormInput = ({ label, name, type = "text", value, onChange, error, required, icon: Icon, placeholder }) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-sm font-medium text-text mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-text/40">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 bg-white focus:outline-none focus:ring-2 ${
            Icon ? "pl-11" : ""
          } ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-200"
              : "border-primary/20 focus:border-primary focus:ring-primary/20"
          }`}
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <FiAlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
};

// Textarea Component
const FormTextarea = ({ label, name, value, onChange, error, required, icon: Icon, placeholder, rows = 5 }) => {
  return (
    <div className="mb-5">
      <label htmlFor={name} className="block text-sm font-medium text-text mb-2">
        {label} {required && <span className="text-primary">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-3 top-3 text-text/40">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 bg-white focus:outline-none focus:ring-2 ${
            Icon ? "pl-11" : ""
          } ${
            error
              ? "border-red-400 focus:border-red-500 focus:ring-red-200"
              : "border-primary/20 focus:border-primary focus:ring-primary/20"
          }`}
        />
      </div>
      {error && (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <FiAlertCircle className="w-3 h-3" /> {error}
        </p>
      )}
    </div>
  );
};

// Contact Info Card
const ContactInfoCard = ({ icon: Icon, title, details, link, linkText }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="bg-white p-5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-text mb-1">{title}</h3>
          {details.map((detail, idx) => (
            <p key={idx} className="text-text/60 text-sm">
              {detail}
            </p>
          ))}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm font-medium inline-flex items-center gap-1 mt-2 hover:gap-2 transition-all"
            >
              {linkText} <FiSend className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// Social Link Button
const SocialButton = ({ href, icon: Icon, label, color }) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -3, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 px-4 py-3 bg-white rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all group"
    >
      <div className={`p-2 rounded-lg bg-${color}/10 group-hover:bg-${color}/20 transition-colors`}>
        <Icon className={`w-5 h-5 text-${color}`} style={{ color: color === "primary" ? "#059669" : color === "blue" ? "#3B82F6" : "#1DA1F2" }} />
      </div>
      <span className="font-medium text-text group-hover:text-primary transition-colors">{label}</span>
    </motion.a>
  );
};

// Availability Badge
const AvailabilityBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span className="text-xs font-medium text-green-700">Available for work</span>
    </div>
  );
};

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', null

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call (replace with actual API endpoint)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Success
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: FiMail,
      title: "Email",
      details: ["hello@example.com", "support@example.com"],
      link: "mailto:hello@example.com",
      linkText: "Send email",
    },
    {
      icon: FiPhone,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      link: "tel:+15551234567",
      linkText: "Call now",
    },
    {
      icon: FiMapPin,
      title: "Location",
      details: ["San Francisco, CA", "United States"],
      link: "https://maps.google.com",
      linkText: "Get directions",
    },
    {
      icon: FiClock,
      title: "Working Hours",
      details: ["Monday - Friday: 9AM - 6PM PST", "Saturday - Sunday: Available for urgent inquiries"],
    },
  ];

  // Social links
  const socialLinks = [
    { href: "https://github.com", icon: FiGithub, label: "GitHub", color: "primary" },
    { href: "https://linkedin.com", icon: FiLinkedin, label: "LinkedIn", color: "blue" },
    { href: "https://twitter.com", icon: FiTwitter, label: "Twitter", color: "blue" },
    { href: "https://instagram.com", icon: FiInstagram, label: "Instagram", color: "primary" },
    { href: "https://youtube.com", icon: FiYoutube, label: "YouTube", color: "primary" },
  ];

  // Quick response options
  const quickResponses = [
    { label: "Project Inquiry", subject: "Project Collaboration Inquiry" },
    { label: "Job Opportunity", subject: "Job Opportunity Discussion" },
    { label: "Technical Question", subject: "Technical Question" },
    { label: "Feedback", subject: "Website Feedback" },
  ];

  const handleQuickResponse = (subject) => {
    setFormData((prev) => ({ ...prev, subject }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[35vh] flex items-center justify-center px-4 bg-gradient-to-b from-soft/30 to-bg relative overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <FiMessageSquare className="w-4 h-4" />
              Get in Touch
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Connect
            </span>
          </motion.h1>

          <motion.p
            className="text-text/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Have a project in mind or just want to say hello? I'd love to hear from you.
            Let's create something amazing together.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            {/* Availability Badge */}
            <motion.div variants={fadeInUp}>
              <AvailabilityBadge />
            </motion.div>

            {/* Contact Info Cards */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-text mb-5">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info, idx) => (
                  <ContactInfoCard key={idx} {...info} />
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-text mb-5">Connect With Me</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {socialLinks.map((social, idx) => (
                  <SocialButton key={idx} {...social} />
                ))}
              </div>
            </motion.div>

            {/* Quick Response Options */}
            <motion.div variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-text mb-5">Quick Inquiries</h2>
              <div className="flex flex-wrap gap-2">
                {quickResponses.map((response) => (
                  <motion.button
                    key={response.label}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleQuickResponse(response.subject)}
                    className="px-4 py-2 text-sm bg-soft rounded-full text-primary font-medium hover:bg-primary/20 transition-all"
                  >
                    {response.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Office Hours Note */}
            <motion.div
              variants={fadeInUp}
              className="mt-6 p-5 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl border border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <FiCoffee className="w-5 h-5 text-primary" />
                <span className="font-semibold text-text">Response Time</span>
              </div>
              <p className="text-text/60 text-sm">
                I typically respond within 24 hours during business days. 
                For urgent matters, please mention "URGENT" in your subject line.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={fadeInRight} className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-primary/10">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-text">Send a Message</h2>
                <div className="w-20 h-1 bg-primary mx-auto mt-3 rounded-full" />
                <p className="text-text/60 mt-3 text-sm">
                  Fill out the form below and I'll get back to you as soon as possible
                </p>
              </div>

              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                >
                  <FiCheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="font-medium text-green-700">Message Sent Successfully!</p>
                    <p className="text-sm text-green-600">I'll get back to you shortly.</p>
                  </div>
                </motion.div>
              )}

              {/* Error Message */}
              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
                >
                  <FiAlertCircle className="w-5 h-5 text-red-500" />
                  <div>
                    <p className="font-medium text-red-700">Something went wrong!</p>
                    <p className="text-sm text-red-600">Please try again or email me directly.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <FormInput
                  label="Your Name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                  required
                  icon={FiBriefcase}
                  placeholder="John Doe"
                />

                <FormInput
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                  required
                  icon={FiMail}
                  placeholder="john@example.com"
                />

                <FormInput
                  label="Subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  error={errors.subject}
                  required
                  icon={FiMessageSquare}
                  placeholder="What is this regarding?"
                />

                <FormTextarea
                  label="Message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  error={errors.message}
                  required
                  icon={FiMessageSquare}
                  placeholder="Tell me about your project, ideas, or just say hello..."
                  rows={5}
                />

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full mt-4 px-6 py-3 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 flex items-center justify-center gap-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>

              {/* Alternative Contact */}
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-text/50 text-sm">
                  Prefer to connect directly?{" "}
                  <a
                    href="mailto:hello@example.com"
                    className="text-primary font-medium hover:underline"
                  >
                    hello@example.com
                  </a>
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16"
        >
          <div className="rounded-2xl overflow-hidden shadow-lg border border-primary/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555016464!2d-122.507640!3d37.757815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="w-full"
            />
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-text mb-4">Frequently Asked Questions</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              { q: "What is your typical response time?", a: "I usually respond within 24 hours during business days (Monday-Friday)." },
              { q: "Do you take on freelance projects?", a: "Yes! I'm currently available for freelance work. Let's discuss your project needs." },
              { q: "What is your preferred way of communication?", a: "Email is best for initial contact. For ongoing projects, we can use Slack, Discord, or video calls." },
              { q: "Do you offer ongoing support?", a: "Absolutely! I provide maintenance and support packages for long-term collaborations." },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white p-5 rounded-xl border border-primary/10 shadow-sm"
              >
                <h3 className="font-semibold text-text mb-2">{faq.q}</h3>
                <p className="text-text/60 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Social Floating Links */}
      <motion.div
        className="fixed bottom-6 right-6 flex flex-col gap-3 z-40"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {[
          { href: "https://github.com/zainsultani333-glitch?", icon: FiGithub, label: "GitHub" },
          { href: "https://www.linkedin.com/in/m-zain-75675a2a0/", icon: FiLinkedin, label: "LinkedIn" },
          { href: "https://x.com/MZain1038353", icon: FiTwitter, label: "Twitter" },
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-3 rounded-full shadow-lg text-text/60 hover:text-primary transition-all duration-300 border border-gray-200"
            aria-label={social.label}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 1.1 + index * 0.1 }}
          >
            <social.icon className="w-5 h-5" />
          </motion.a>
        ))}
      </motion.div>
    </>
  );
}