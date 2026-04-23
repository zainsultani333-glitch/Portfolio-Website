import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiLayout,
  FiImage,
  FiServer,
  FiUsers,
  FiAward,
  FiEye,
  FiX,
  FiExternalLink,
  FiTag
} from "react-icons/fi";
import {
  SiReact,
  SiTailwindcss,
  // SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiExpress,
} from "react-icons/si";
import { FaPaintBrush, FaPenNib } from "react-icons/fa";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import pic from "../assets/pic.png"

export default function Home() {
  const skills = [
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FiCode, color: "#1572B6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    // { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Express.js", icon: SiExpress, color: "#000000" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Adobe Photoshop", icon: FaPaintBrush, color: "#31A8FF" },
    { name: "Adobe Illustrator", icon: FaPenNib, color: "#FF9A00" },
  ];

  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with payment integration, user authentication, and admin dashboard.",
      fullDescription: "A complete e-commerce platform built with React and Node.js. Features include product management, shopping cart, secure checkout with Stripe, user authentication with JWT, order tracking, and an admin panel for managing products and orders. The platform is fully responsive and optimized for performance.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Redux"],
      category: "fullstack",
      featured: true,
      year: "2024",
      likes: 128,
      liveLink: "https://e-commerce-store-iota-ten.vercel.app/",
      githubLink: "https://github.com/zainsultani333-glitch/E-Commerce-Store",
      features: [
        "User authentication & authorization",
        "Product search & filtering",
        "Shopping cart with persistent storage",
        "Secure payment integration",
        "Order management system",
        "Admin dashboard for inventory"
      ],
      challenge: "Implementing real-time inventory management while maintaining performance during high traffic was challenging. We solved this by implementing Redis caching and optimizing database queries."
    },
    {
      id: 2,
      title: "Analytics Dashboard",
      description: "Real-time data visualization dashboard with customizable widgets and interactive charts.",
      fullDescription: "A powerful analytics dashboard for tracking business metrics. Features real-time data updates, customizable widgets, multiple chart types, data export capabilities, and user-specific dashboards. Built with Next.js and Chart.js for optimal performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      tags: ["Next.js", "Tailwind", "Chart.js", "Recharts", "WebSocket"],
      category: "frontend",
      featured: true,
      year: "2024",
      likes: 89,
      liveLink: "https://new-modern-dashboard-design.vercel.app/dashboard",
      githubLink: "https://github.com/zainsultani333-glitch/New-Modern-Dashboard-Design",
      features: [
        "Real-time data streaming",
        "Interactive charts & graphs",
        "Customizable dashboard layout",
        "Data export (CSV, PDF)",
        "User preference saving",
        "Responsive design"
      ]
    },
    {
      id: 3,
      title: "Job Post System Dashboard",
      description: "A full-stack job portal dashboard for posting, managing, and applying to jobs with admin control.",
      fullDescription: "A modern job post system dashboard where users can post jobs, browse listings, and apply seamlessly. It includes authentication, role-based access (admin, recruiter, candidate), job filtering, and application tracking. Built for efficiency and scalability with a clean UI and smooth UX.",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "JWT"],
      category: "fullstack",
      featured: true,
      year: "2024",
      likes: 95,
      liveLink: "https://frontend-job-system.vercel.app/",
      githubLink: "https://github.com/zainsultani333-glitch/Frontend-Job-System",
      features: [
        "Job posting & management system",
        "Role-based authentication (Admin, Recruiter, User)",
        "Job search & filtering",
        "Application tracking system",
        "Dashboard analytics",
        "Responsive UI"
      ]
    },
  ]

  const services = [
    { icon: FiCode, title: "Frontend Development", description: "Modern responsive websites" },
    { icon: FiServer, title: "Backend Integration", description: "API & database setup" },
    { icon: FiLayout, title: "UI/UX Design", description: "Beautiful user interfaces" },
    { icon: FiImage, title: "Graphic Design", description: "Bringing ideas to life through design." },
  ];

  // Modal Component for Project Details
  const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);

    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 50 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-bg rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-64 object-cover rounded-t-2xl"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-2 rounded-full text-white hover:bg-black/70 transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 md:p-8">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-text">{project.title}</h2>
              <div className="flex gap-2">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-bg rounded-lg font-semibold text-sm hover:bg-primary/90 transition-colors inline-flex items-center gap-2"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                )}
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-soft text-text rounded-lg font-semibold text-sm hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
                  >
                    <FiGithub /> Code
                  </a>
                )}
              </div>
            </div>

            <p className="text-text/70 mb-6 leading-relaxed">{project.fullDescription || project.description}</p>

            <div className="mb-6">
              <h3 className="font-semibold text-text mb-3 flex items-center gap-2">
                <FiTag className="text-primary" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {project.features && (
              <div className="mb-6">
                <h3 className="font-semibold text-text mb-3">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-text/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {project.challenge && (
              <div className="mb-6 p-4 bg-soft rounded-xl">
                <h3 className="font-semibold text-text mb-2">Challenge & Solution</h3>
                <p className="text-text/70 text-sm leading-relaxed">{project.challenge}</p>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    );
  };


  const [selectedProject, setSelectedProject] = useState(null);
  // Featured projects (top 3)
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const scaleOnHover = {
    whileHover: { scale: 1.05, transition: { duration: 0.2 } },
    whileTap: { scale: 0.95 }
  };

  // Scroll-triggered animation wrapper component
  const AnimatedSection = ({ children, className, variant = "fadeInUp", delay = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2, margin: "-100px" });

    const getVariant = () => {
      switch (variant) {
        case "fadeInLeft": return fadeInLeft;
        case "fadeInRight": return fadeInRight;
        default: return fadeInUp;
      }
    };

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={getVariant()}
        custom={delay}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center px-4 bg-bg relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column - Content */}
            <div className="text-center lg:text-left">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <span className="relative flex h-2 w-2">
                    <motion.span
                      className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Available for work
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <span className="text-text">Hi, I'm</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Frontend Developer
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                className="text-text/70 text-lg sm:text-xl max-w-2xl mx-auto lg:mx-0 mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                I build modern, responsive, and user-centric web applications
                with cutting-edge technologies and pixel-perfect designs.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <motion.div {...scaleOnHover}>
                  <Link
                    to="/projects"
                    className="group relative px-8 py-3 rounded-lg font-semibold text-bg transition-all duration-300 overflow-hidden bg-primary hover:shadow-lg inline-flex items-center gap-2"
                  >
                    <span className="relative z-10">View My Work</span>
                    <FiArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
                    <motion.span
                      className="absolute inset-0 bg-white/20"
                      initial={{ y: "100%" }}
                      whileHover={{ y: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>

                <motion.div {...scaleOnHover}>
                  <Link
                    to="/contact"
                    className="px-8 py-3 rounded-lg font-semibold text-primary transition-all duration-300 border-2 border-primary hover:bg-primary hover:text-bg inline-block"
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </motion.div>

              {/* Stats Section */}
              <motion.div
                className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {[
                  { value: "1+", label: "Years Experience" },
                  { value: "10+", label: "Projects Completed" },
                  { value: "10+", label: "Happy Clients" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center lg:text-left"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="text-3xl font-bold text-primary"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-text/60 text-sm mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column - Picture */}
            <motion.div
              className="flex justify-center items-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                {/* Decorative circle behind image */}
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    rotate: [0, 360]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                {/* Image container */}
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                  <img
                    src={pic}
                    alt="Frontend Developer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative dots */}
                <motion.div
                  className="absolute -top-8 -right-8 w-20 h-20"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                  <div className="grid grid-cols-3 gap-1">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-primary/40 rounded-full" />
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-soft overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
                What I Do
              </h2>
              <p className="text-text/60 max-w-2xl mx-auto">
                I provide high-quality services to help your business grow
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="bg-bg p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                </motion.div>
                <h3 className="text-lg font-semibold text-text mb-2">{service.title}</h3>
                <p className="text-text/60 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-bg overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
                Tech Stack
              </h2>
              <p className="text-text/60 max-w-2xl mx-auto">
                Technologies I work with to build amazing applications
              </p>
            </div>
          </AnimatedSection>

          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="group text-center p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-all duration-300 cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <skill.icon
                    className="w-12 h-12 mx-auto mb-3"
                    style={{ color: skill.color }}
                  />
                </motion.div>
                <p className="text-text font-medium text-sm">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 px-4 bg-soft overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
                Featured Projects
              </h2>
              <p className="text-text/60 max-w-2xl mx-auto">
                Some of my best work showcasing my skills and creativity
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-bg rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-start p-4">
                    <span className="text-white text-sm font-medium flex items-center gap-1"><FiEye /> Quick View</span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-text mb-2">{project.title}</h3>
                  <p className="text-text/60 text-sm line-clamp-2">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatedSection variant="fadeInUp">
            <div className="text-center mt-12">
              <motion.div {...scaleOnHover}>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-primary transition-all duration-300 border-2 border-primary hover:bg-primary hover:text-bg"
                >
                  View All Projects <FiArrowRight />
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      {/* Social Links */}
      <motion.div
        className="fixed bottom-6 right-6 flex flex-col gap-3 z-40"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        {[
          { href: "https://github.com/zainsultani333-glitch?", icon: FiGithub, label: "GitHub" },
          { href: "https://www.linkedin.com/in/m-zain-75675a2a0/", icon: FiLinkedin, label: "LinkedIn" },
          { href: "https://x.com/MZain1038353", icon: FiTwitter, label: "Twitter" }
        ].map((social, index) => (
          <motion.a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-bg p-3 rounded-full shadow-lg text-text/60 hover:text-primary transition-all duration-300 border border-gray-200"
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

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50"
        style={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.5 }}
      />
    </>
  );
}