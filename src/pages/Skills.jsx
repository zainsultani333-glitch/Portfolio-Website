"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiCode,
  FiDatabase,
  FiLayout,
  FiSmartphone,
  FiServer,
  FiTool,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiZap,
  FiShield,
  FiCloud,
  FiGitBranch,
  FiMonitor,
  FiHexagon,
  FiGrid,
  FiBox,
  FiStar,
  FiCheckCircle,
  FiSettings,
  FiFramer,
} from "react-icons/fi";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGraphql,
  SiJest,
  SiDocker,
  SiGit,
  SiFigma,
  SiRedux,
  SiVercel,
  SiFirebase,
  SiPrisma,
  SiStorybook,
  SiWebpack,
  SiExpress,
  SiPython,
  SiDjango,
  SiMysql,
  SiRedis,
  SiNginx,
  SiLinux,
  SiJavascript,
  SiAuth0,
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
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const scaleOnHover = {
  whileHover: { scale: 1.05, transition: { duration: 0.2 } },
  whileTap: { scale: 0.95 },
};

// Skill Card Component for category display
const SkillCategoryCard = ({ category, skills, icon: Icon, color, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      custom={delay}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-primary/10"
    >
      {/* Header */}
      <div className={`p-5 ${color} border-b border-primary/10`}>
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-xl">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="font-bold text-text text-lg">{category}</h3>
            <p className="text-text/50 text-sm">{skills.length} technologies</p>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="p-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: delay + idx * 0.02 }}
              whileHover={{ y: -3, scale: 1.02 }}
              className="flex items-center gap-2 p-2 rounded-lg bg-soft/30 hover:bg-soft transition-all group cursor-default"
            >
              {skill.icon && (
                <skill.icon
                  className="w-5 h-5"
                  style={{ color: skill.color || "#059669" }}
                />
              )}
              <span className="text-sm font-medium text-text/80 group-hover:text-primary transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Skill Bar Component with level
const SkillBarDetailed = ({ name, level, description, icon: Icon, color, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.5 }}
      className="bg-white p-4 rounded-xl border border-primary/10 hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        {Icon && (
          <div className="p-2 bg-primary/10 rounded-lg">
            <Icon className="w-5 h-5 text-primary" />
          </div>
        )}
        <div className="flex-1">
          <div className="flex justify-between items-center">
            <span className="font-semibold text-text">{name}</span>
            <span className="text-sm font-bold text-primary">{level}%</span>
          </div>
          {description && <p className="text-xs text-text/50 mt-1">{description}</p>}
        </div>
      </div>
      <div className="h-2 bg-primary/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay + 0.2, ease: "easeOut" }}
          className={`h-full rounded-full ${color || "bg-gradient-to-r from-primary to-secondary"}`}
        />
      </div>
    </motion.div>
  );
};

// Certification Card
const CertificationCard = ({ cert, index }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -5 }}
      className="bg-white p-5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex items-start gap-3">
        <div className="p-2 bg-primary/10 rounded-lg">
          <FiAward className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h4 className="font-semibold text-text">{cert.name}</h4>
          <p className="text-sm text-text/50">{cert.issuer}</p>
          <p className="text-xs text-primary mt-1">{cert.year}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [activeTab, setActiveTab] = useState("all");

  // Tab configuration
  const tabs = [
    { id: "all", label: "All Skills", icon: FiGrid },
    { id: "frontend", label: "Frontend", icon: FiMonitor },
    { id: "backend", label: "Backend", icon: FiServer },
    { id: "database", label: "Database", icon: FiDatabase },
    { id: "devops", label: "DevOps & Tools", icon: FiTool },
  ];

  // Categorized skills data
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: FiMonitor,
      color: "bg-soft/50",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB", level: 92, description: "Hooks, Context, Custom hooks, Performance optimization" },
        { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: 90, description: "App Router, SSR, ISR, API routes" },
        // { name: "TypeScript", icon: SiTypescript, color: "#3178C6", level: 88, description: "Advanced types, Generics, Type safety" },
        { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4", level: 95, description: "Utility-first, Custom configurations" },
        { name: "Redux", icon: SiRedux, color: "#764ABC", level: 85, description: "State management, Redux Toolkit" },
        { name: "Framer Motion", icon: FiFramer, color: "#DC382D", level: 84, description: "Animations, Gestures, Variants" },
        { name: "HTML5/CSS3", icon: FiLayout, color: "#FFCA28", level: 92, description: "Semantic markup, Flexbox, Grid, Animations" },
        { name: "JavaScript (ES6+)", icon: FiCode, level: 90, description: "Async patterns, Closures, Prototypes" },
      ],
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: FiServer,
      color: "bg-soft/50",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933", level: 85, description: "Express, REST APIs, Microservices" },
        // { name: "Python", icon: SiPython, color: "#3776AB", level: 75, description: "Django, Flask, Scripting" },
        // { name: "GraphQL", icon: SiGraphql, color: "#E10098", level: 80, description: "Apollo, Schema design, Resolvers" },
        { name: "Express.js", icon: SiExpress, color: "#000000", level: 85, description: "Middleware, Routing, Error handling" },
        { name: "REST API Design", icon: FiServer, level: 88, description: "OpenAPI, Versioning, Authentication" },
        // { name: "WebSockets", level: 78, description: "Socket.io, Real-time communication" },
        { name: "Authentication & Authorization", icon: SiAuth0, color: "#4169E1", level: 90, description: "JWT, OAuth, Role-based access control" },
        { name: "Environment & Config", icon: FiSettings, color: "#FFCA28", level: 85, description: "dotenv, Config management" },
        { name: "Deployment", icon: SiDocker, color: "#DC382D", level: 80, description: "Vercel, Render, Docker basics" },
      ],
    },
    {
      id: "database",
      name: "Database",
      icon: FiDatabase,
      color: "bg-soft/50",
      skills: [
        // { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: 82, description: "Complex queries, Indexing, Optimization" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 85, description: "Aggregation, Indexes, Replication" },
        // { name: "MySQL", icon: SiMysql, color: "#4479A1", level: 80, description: "Joins, Stored procedures" },
        // { name: "Prisma", icon: SiPrisma, color: "#2D3748", level: 84, description: "Schema modeling, Migrations" },
        // { name: "Redis", icon: SiRedis, color: "#DC382D", level: 70, description: "Caching, Session management" },
        // { name: "Firebase", icon: SiFirebase, color: "#FFCA28", level: 78, description: "Firestore, Auth, Storage" },
      ],
    },
    {
      id: "devops",
      name: "DevOps & Tools",
      icon: FiTool,
      color: "bg-soft/50",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032", level: 90, description: "Branching strategies, CI/CD workflows" },
        { name: "Docker", icon: SiDocker, color: "#2496ED", level: 75, description: "Containerization, Docker Compose" },
        // { name: "Jest", icon: SiJest, color: "#C21325", level: 82, description: "Unit testing, Integration tests" },
        { name: "Vercel", icon: SiVercel, color: "#000000", level: 88, description: "Deployment, Preview deployments" },
        // { name: "Webpack", icon: SiWebpack, color: "#8DD6F9", level: 80, description: "Bundling, Code splitting" },
        // { name: "Storybook", icon: SiStorybook, color: "#FF4785", level: 78, description: "Component library, Documentation" },
        // { name: "Linux", icon: SiLinux, color: "#FCC624", level: 70, description: "Command line, Server management" },
        // { name: "Nginx", icon: SiNginx, color: "#009639", level: 65, description: "Reverse proxy, Load balancing" },
      ],
    },
  ];

  // Top mastered skills (for detailed bars)
  const masteredSkills = [
    { name: "React Ecosystem", level: 92, icon: SiReact, color: "bg-gradient-to-r from-primary to-secondary", description: "Hooks, Context, Performance optimization" },
    { name: "JavaScript", level: 88, icon: SiJavascript, description: "ES6+, DOM manipulation, async/await" },
    { name: "Next.js", level: 90, icon: SiNextdotjs, description: "App Router, SSR, ISR, Middleware" },
    { name: "TailwindCSS", level: 95, icon: SiTailwindcss, description: "Custom configurations, Responsive design" },
    { name: "Node.js", level: 85, icon: SiNodedotjs, description: "REST APIs, Authentication, Microservices" },
    { name: "Database Design", level: 82, icon: FiDatabase, description: "PostgreSQL, MongoDB, Query optimization" },
  ];

  // Certifications
  const certifications = [
    { name: "Graphic Design Certification", issuer: "Design Solution Academy", year: "2023" },
    { name: "UI/UX Design Certification", issuer: "Design Solution Academy", year: "2023" },
    // { name: "Google UX Design Certificate", issuer: "Google / Coursera", year: "2023" },
    // { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp", year: "2022" },
    // { name: "Advanced React and GraphQL", issuer: "Frontend Masters", year: "2023" },
  ];

  // Soft skills
  const softSkills = [
    { name: "Problem Solving", icon: FiCode, description: "Analytical thinking, Debugging expertise" },
    { name: "Team Collaboration", icon: FiUsers, description: "Code reviews, Pair programming" },
    { name: "Agile Methodologies", icon: FiTrendingUp, description: "Scrum, Kanban, Sprint planning" },
    { name: "Communication", icon: FiGitBranch, description: "Technical writing, Client presentations" },
    { name: "Time Management", icon: FiZap, description: "Prioritization, Deadline driven" },
    { name: "Continuous Learning", icon: FiStar, description: "Staying updated with latest tech" },
  ];

  // Get filtered skills for tab view
  const getFilteredSkills = () => {
    if (activeTab === "all") {
      return skillCategories;
    }
    return skillCategories.filter(cat => cat.id === activeTab);
  };

  const filteredCategories = getFilteredSkills();

  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center px-4 bg-gradient-to-b from-soft/30 to-bg relative overflow-hidden">
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
              <FiCode className="w-4 h-4" />
              Technical Expertise
            </div>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            My{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills
            </span>
          </motion.h1>

          <motion.p
            className="text-text/70 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            A comprehensive overview of my technical toolkit, from frontend frameworks
            to backend technologies and development methodologies
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section ref={ref} className="py-16 px-4 max-w-7xl mx-auto">
        {/* Stats Overview */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { value: "15+", label: "Technologies", icon: FiCode },
            { value: "1+", label: "Years Experience", icon: FiTrendingUp },
            { value: "10+", label: "Projects Built", icon: FiBox },
            { value: "5+", label: "Certifications", icon: FiAward },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-6 text-center border border-primary/10 shadow-sm"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <div className="text-2xl font-bold text-text">{stat.value}</div>
              <div className="text-text/50 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mastered Skills Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-text mb-4">Core Mastery</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-text/60 mt-4 max-w-2xl mx-auto">
              My most proficient skills and technologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            {masteredSkills.map((skill, idx) => (
              <SkillBarDetailed
                key={skill.name}
                name={skill.name}
                level={skill.level}
                description={skill.description}
                icon={skill.icon}
                color={skill.color}
                delay={idx * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-10"
        >
          <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-8">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${activeTab === tab.id
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white text-text/60 border border-primary/20 hover:border-primary/40 hover:text-primary"
                  }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {filteredCategories.map((category, idx) => (
            <SkillCategoryCard
              key={category.id}
              category={category.name}
              skills={category.skills}
              icon={category.icon}
              color={category.color}
              delay={idx * 0.1}
            />
          ))}
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-text mb-4">Soft Skills</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-text/60 mt-4 max-w-2xl mx-auto">
              Beyond code - the professional qualities I bring to every team
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {softSkills.map((skill, idx) => (
              <motion.div
                key={skill.name}
                variants={fadeInUp}
                whileHover={{ y: -3 }}
                className="bg-white p-5 rounded-xl border border-primary/10 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <skill.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-text">{skill.name}</h3>
                </div>
                <p className="text-sm text-text/60">{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-text mb-4">Certifications</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
            <p className="text-text/60 mt-4 max-w-2xl mx-auto">
              Professional certifications and continuous learning achievements
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, idx) => (
              <CertificationCard key={cert.name} cert={cert} index={idx} />
            ))}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center border border-primary/20"
        >
          <FiTrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-text mb-3">Continuous Learning</h3>
          <p className="text-text/60 max-w-2xl mx-auto mb-6">
            I'm committed to staying at the forefront of web development. Currently exploring
            Dev Ops, AI integration, and advanced backend architectures.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["AWS Cloud", "AI Tools", "MySQL", "Prisma"].map((topic) => (
              <span
                key={topic}
                className="px-3 py-1.5 text-sm bg-white rounded-lg text-primary border border-primary/20"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mt-16 text-center"
        >
          <motion.div {...scaleOnHover}>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all"
            >
              Let's Work Together <FiTrendingUp />
            </Link>
          </motion.div>
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