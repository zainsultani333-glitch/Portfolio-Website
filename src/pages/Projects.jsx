import { Link } from "react-router-dom";
import { 
  FiGithub, 
  FiLinkedin, 
  FiTwitter, 
  FiArrowRight,
  FiExternalLink,
  FiCode,
  FiEye,
  FiHeart,
  FiStar,
  FiFilter,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiTag,
  FiUser
} from "react-icons/fi";
import { 
  SiReact, 
  SiTailwindcss, 
  SiTypescript, 
  SiNextdotjs,
  SiNodedotjs,
  SiFigma,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiGraphql,
  SiDocker,
  SiJavascript,
  SiHtml5
} from "react-icons/si";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

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

// Project Card Component
const ProjectCard = ({ project, index, onClick }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="bg-bg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
      onClick={() => onClick(project)}
    >
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
          <span className="text-white text-sm font-medium flex items-center gap-1">
            <FiEye /> Quick View
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 left-3 bg-primary text-bg text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1">
            <FiStar className="w-3 h-3" /> Featured
          </div>
        )}
      </div>
      
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold text-text group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="flex gap-1">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text/40 hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink className="w-4 h-4" />
              </a>
            )}
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-text/40 hover:text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-text/60 text-sm mb-3 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 text-xs rounded-full bg-soft text-text/50">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-3 text-text/40 text-xs">
            <span className="flex items-center gap-1">
              <FiCalendar className="w-3 h-3" /> {project.year || "2024"}
            </span>
            <span className="flex items-center gap-1">
              <FiHeart className="w-3 h-3" /> {project.likes || 0}
            </span>
          </div>
          <span className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
            Details <FiArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </motion.div>
  );
};

// Filter Button Component
const FilterButton = ({ label, active, onClick, icon: Icon }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
        active
          ? "bg-primary text-bg shadow-md"
          : "bg-soft text-text/70 hover:bg-primary/20"
      }`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </motion.button>
  );
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
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
  
  const AnimatedSection = ({ children, className, variant = "fadeInUp" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2, margin: "-100px" });
    
    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={variant === "fadeInUp" ? fadeInUp : {}}
        className={className}
      >
        {children}
      </motion.div>
    );
  };
  
  // Projects Data
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
      liveLink: "#",
      githubLink: "#",
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
      liveLink: "#",
      githubLink: "#",
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
      title: "Mobile App UI",
      description: "Cross-platform mobile application design with smooth animations and intuitive navigation.",
      fullDescription: "A beautifully designed mobile app UI for a fitness tracking application. Features include activity tracking, workout plans, nutrition logging, and social sharing. Built with React Native and Expo, with smooth animations using Reanimated.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
      tags: ["React Native", "Figma", "Firebase", "Expo", "Reanimated"],
      category: "mobile",
      featured: false,
      year: "2023",
      likes: 67,
      liveLink: "#",
      githubLink: "#",
      features: [
        "Onboarding screens",
        "Activity tracking dashboard",
        "Workout plan creator",
        "Nutrition logger",
        "Social feed",
        "Push notifications"
      ]
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations and responsive design.",
      fullDescription: "A personal portfolio website showcasing projects and skills. Features smooth scroll animations, dark/light mode toggle, project filtering, and contact form with email integration. Built with React and Framer Motion.",
      image: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=600&h=400&fit=crop",
      tags: ["React", "Framer Motion", "Tailwind", "EmailJS"],
      category: "frontend",
      featured: false,
      year: "2024",
      likes: 45,
      liveLink: "#",
      githubLink: "#",
      features: [
        "Smooth scroll animations",
        "Dark/Light theme toggle",
        "Project filtering system",
        "Contact form with email",
        "Responsive layout",
        "SEO optimized"
      ]
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features.",
      fullDescription: "A Trello-like task management app that allows teams to collaborate on projects. Features include drag-and-drop task boards, real-time updates, team chat, file attachments, and deadline tracking. Built with the MERN stack and Socket.io.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&h=400&fit=crop",
      tags: ["MongoDB", "Express", "React", "Node.js", "Socket.io", "Tailwind"],
      category: "fullstack",
      featured: true,
      year: "2023",
      likes: 112,
      liveLink: "#",
      githubLink: "#",
      features: [
        "Drag-and-drop task boards",
        "Real-time collaboration",
        "Team chat system",
        "File attachments",
        "Due date tracking",
        "Activity logs"
      ]
    },
    {
      id: 6,
      title: "Weather App",
      description: "Weather forecasting app with location detection and interactive maps.",
      fullDescription: "A weather application that provides current conditions and 7-day forecasts. Features include geolocation, interactive maps, temperature conversion, and weather alerts. Built with React and OpenWeatherMap API.",
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=600&h=400&fit=crop",
      tags: ["React", "API Integration", "Leaflet", "Axios"],
      category: "frontend",
      featured: false,
      year: "2023",
      likes: 34,
      liveLink: "#",
      githubLink: "#",
      features: [
        "Current weather conditions",
        "7-day forecast",
        "Interactive radar map",
        "Location auto-detection",
        "Temperature unit toggle",
        "Weather alerts"
      ]
    },
    {
      id: 7,
      title: "Blog Platform",
      description: "Full-featured blog platform with markdown support and comment system.",
      fullDescription: "A modern blog platform where users can write, edit, and publish articles. Features markdown editor, syntax highlighting, comment system, user profiles, and SEO optimization. Built with Next.js and GraphQL.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop",
      tags: ["Next.js", "GraphQL", "Prisma", "Markdown", "PostgreSQL"],
      category: "fullstack",
      featured: false,
      year: "2024",
      likes: 76,
      liveLink: "#",
      githubLink: "#",
      features: [
        "Markdown editor",
        "Code syntax highlighting",
        "Comment & reply system",
        "User authentication",
        "SEO optimization",
        "RSS feed"
      ]
    },
    {
      id: 8,
      title: "Chat Application",
      description: "Real-time chat application with video calls and file sharing.",
      fullDescription: "A comprehensive chat application supporting direct messaging, group chats, video calls, and file sharing. Features include read receipts, typing indicators, emoji support, and end-to-end encryption.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
      tags: ["React", "WebRTC", "Socket.io", "Node.js", "Redis"],
      category: "fullstack",
      featured: true,
      year: "2023",
      likes: 156,
      liveLink: "#",
      githubLink: "#",
      features: [
        "Direct & group messaging",
        "Video/audio calls",
        "File sharing",
        "Read receipts",
        "Typing indicators",
        "End-to-end encryption"
      ]
    }
  ];
  
  // Get unique categories for filter
  const categories = [
    { id: "all", label: "All Projects", icon: FiCode },
    { id: "frontend", label: "Frontend", icon: FiCode },
    { id: "fullstack", label: "Full Stack", icon: FiCode },
    { id: "mobile", label: "Mobile", icon: FiCode }
  ];
  
  // Filter projects
  const filteredProjects = filter === "all" 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
  
  // Pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Reset page when filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);
  
  // Featured projects (top 3)
  const featuredProjects = projectsData.filter(p => p.featured).slice(0, 3);
  
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-bg relative overflow-hidden">
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <FiCode className="w-3 h-3" />
              My Portfolio
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </motion.h1>
          
          <motion.p 
            className="text-text/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A collection of my best work, side projects, and contributions
          </motion.p>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-12 px-4 bg-soft">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-bold text-text mb-2">
                Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-text/60">Some of my best work that I'm particularly proud of</p>
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
        </div>
      </section>
      
      {/* All Projects Section */}
      <section className="py-16 px-4 bg-bg">
        <div className="max-w-6xl mx-auto">
          {/* Filter Bar */}
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <FilterButton
                  key={cat.id}
                  label={cat.label}
                  icon={cat.icon}
                  active={filter === cat.id}
                  onClick={() => setFilter(cat.id)}
                />
              ))}
            </div>
          </AnimatedSection>
          
          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentProjects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  onClick={setSelectedProject}
                />
              ))}
            </motion.div>
          </AnimatePresence>
          
          {/* Empty State */}
          {currentProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-text mb-2">No projects found</h3>
              <p className="text-text/60">Try changing the filter to see more projects</p>
            </motion.div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 mt-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`p-2 rounded-lg transition-colors ${
                  currentPage === 1 
                    ? "bg-soft text-text/30 cursor-not-allowed" 
                    : "bg-soft text-text hover:bg-primary/20"
                }`}
              >
                <FiChevronLeft className="w-5 h-5" />
              </motion.button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <motion.button
                    key={page}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setCurrentPage(page)}
                    className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                      currentPage === page
                        ? "bg-primary text-bg"
                        : "bg-soft text-text hover:bg-primary/20"
                    }`}
                  >
                    {page}
                  </motion.button>
                ))}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className={`p-2 rounded-lg transition-colors ${
                  currentPage === totalPages 
                    ? "bg-soft text-text/30 cursor-not-allowed" 
                    : "bg-soft text-text hover:bg-primary/20"
                }`}
              >
                <FiChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Have a Project in Mind?
          </motion.h2>
          <motion.p 
            className="text-white/80 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Let's work together to bring your ideas to life
          </motion.p>
          <motion.div
            {...scaleOnHover}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold bg-white text-primary hover:shadow-xl transition-all duration-300"
            >
              Start a Project <FiArrowRight />
            </Link>
          </motion.div>
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
    </>
  );
}