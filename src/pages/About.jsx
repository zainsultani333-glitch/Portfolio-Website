import { Link } from "react-router-dom";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiArrowRight,
  FiCheckCircle,
  FiCode,
  FiLayout,
  FiSmartphone,
  FiServer,
  FiUsers,
  FiAward,
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiHeart,
  FiMail,
  FiUser,
  FiImage
} from "react-icons/fi";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiNodedotjs,
  SiFigma,
  SiJavascript,
  SiHtml5,
  SiGit,
  SiVercel,
  SiMongodb
} from "react-icons/si";
import { FaPaintBrush, FaPenNib } from "react-icons/fa"
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

// Counter Component - Reusable and customizable
const AnimatedCounter = ({ targetValue, duration = 2000, startFrom = 0, suffix = "" }) => {
  const [count, setCount] = useState(startFrom);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = startFrom + (targetValue - startFrom) * easeOutQuart;
        setCount(Math.floor(currentValue));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(targetValue);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) cancelAnimationFrame(animationFrame);
      };
    }
  }, [isInView, targetValue, duration, startFrom]);

  return (
    <motion.div
      ref={ref}
      className="text-3xl font-bold text-white"
      initial={{ scale: 0 }}
      animate={isInView ? { scale: 1 } : { scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      {count}{suffix}
    </motion.div>
  );
};

// SkillBar Component
const SkillBar = ({ name, percentage, color }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setWidth(percentage), 100);
    }
  }, [isInView, percentage]);

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-text font-medium">{name}</span>
        <span className="text-primary font-medium">{percentage}%</span>
      </div>
      <div className="h-2 bg-soft rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ width: `${width}%`, backgroundColor: color }}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ year, title, company, description, icon: Icon, isLast }) => {
  return (
    <motion.div className="relative pl-8 pb-8 last:pb-0">
      {!isLast && (
        <div className="absolute left-2 top-8 bottom-0 w-0.5 bg-primary/20" />
      )}
      <div className="absolute left-0 top-1 w-5 h-5 rounded-full bg-primary flex items-center justify-center">
        <Icon className="w-3 h-3 text-bg" />
      </div>
      <div className="bg-soft/30 rounded-xl p-5 hover:shadow-md transition-shadow">
        <span className="text-primary text-sm font-semibold">{year}</span>
        <h3 className="text-lg font-bold text-text mt-1">{title}</h3>
        <p className="text-primary font-medium text-sm mt-1">{company}</p>
        <p className="text-text/60 text-sm mt-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default function About() {
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

  // Skills data
  const technicalSkills = [
    { name: "JavaScript", percentage: 70, color: "#F7DF1E" },
    { name: "React & Next.js", percentage: 90, color: "#61DAFB" },
    { name: "HTML5 & CSS3", percentage: 92, color: "#E34F26" },
    { name: "Tailwind CSS", percentage: 85, color: "#06B6D4" },
    { name: "Node.js", percentage: 60, color: "#339933" },
    { name: "UI/UX Design", percentage: 95, color: "#F24E1E" },
    { name: "Graphic Design", percentage: 90, color: "#ff997a" }
  ];

  // Tools & Technologies
  const tools = [
    { name: "Git & GitHub", icon: SiGit, color: "#F05032" },
    { name: "VS Code", icon: SiHtml5, color: "#007ACC" },
    { name: "Figma", icon: SiFigma, color: "#F24E1E" },
    { name: "Vercel", icon: SiVercel, color: "#000000" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Postman", icon: SiJavascript, color: "#FF6C37" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },

    { name: "Adobe Photoshop", icon: FaPaintBrush, color: "#31A8FF" },
    { name: "Adobe Illustrator", icon: FaPenNib, color: "#FF9A00" }
  ];

  // Experience Timeline
  const experiences = [
    {
      year: "May 2025 - Present",
      title: "Frontend Developer",
      company: "Infinitybyte Solutions",
      description: "Built responsive websites and web applications for clients across various industries using React and Tailwind CSS.",
      icon: FiBriefcase
    },
    {
      year: "Nov 2024 - April 2025",
      title: "UI/UX Designer",
      company: "CoreTech Solutions",
      description: "Worked as a UI/UX Designer focused on creating pixel-perfect Figma to code implementations.",
      icon: FiCode
    },
    {
      year: "Jan 2024 - June 2024",
      title: "Graphic Designer",
      company: "NGO Islamic Help Pakistan",
      description: "Graphic Designer specializing in creating clean, modern, and visually engaging designs that communicate ideas effectively.",
      icon: FiLayout
    }
  ];

  // Education
  const education = [
    {
      year: "2024 - 2028",
      title: "B.S Computer Science",
      company: "Virtual University",
      description: "BSCS student at Virtual University specializing in web development and human-computer interaction.",
      icon: FiCalendar
    },
     {
      year: "July 2023 - Sep 2023",
      title: "Graphic Design Certification",
      company: "Design Solution Academy",
      description: "Completed certification in visual design, branding, typography, and Adobe Photoshop & Illustrator tools.",
      icon: FiImage
    },
    {
      year: "Oct 2023 - Dec 2023",
      title: "UI/UX Design Certification",
      company: "Design Solution Academy",
      description: "Completed training in user interface design, wireframing, prototyping, and user experience principles using Figma.",
      icon: FiLayout
    },
  ];

  // Fun facts
  const funFacts = [
    { icon: FiCode, text: "Clean & Reusable UI Components", color: "text-blue-500" },
    { icon: FiLayout, text: "Pixel-Perfect Responsive Designs", color: "text-green-500" },
    { icon: FiUsers, text: "Love Building User-Friendly Interfaces", color: "text-purple-500" },
    { icon: FiAward, text: "Focused on Performance & UX", color: "text-yellow-500" }
  ];

  // Personal info
  const personalInfo = [
    { icon: FiUser, label: "Name", value: "Muhammad Zain" },
    { icon: FiCalendar, label: "Experience", value: "1+ Year" },
    { icon: FiMapPin, label: "Location", value: "Johar Town Lahore, Pakistan." },
    { icon: FiMail, label: "Email", value: "zainsultani333@gmail.com" }
  ];

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

        <div className="max-w-6xl mx-auto relative z-10">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <FiUser className="w-3 h-3" />
                  Get to know me
                </div>
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text mb-4">
                About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
              </h1>
              <p className="text-text/70 text-lg max-w-2xl mx-auto">
                Passionate developer with a love for creating beautiful and functional web experiences
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Bio & Personal Info Section */}
      <section className="py-12 px-4 bg-soft">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection variant="fadeInLeft">
              <div className="bg-bg rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-text mb-6">Who Am I?</h2>
                <div className="space-y-4 text-text/70">
                  <p>
                    I'm a Frontend Developer with over 1 years of experience building
                    exceptional digital experiences. My journey in web development started
                    during my University years, and since then, I've been passionate about
                    creating beautiful, responsive, and user-friendly websites.
                  </p>
                  <p>
                    I believe that great design meets great functionality. I focus on
                    writing clean, maintainable code while ensuring optimal performance
                    and accessibility. When I'm not coding, I enjoy contributing to
                    open-source projects and mentoring aspiring developers.
                  </p>
                  <p>
                    My goal is to create web applications that not only look great but
                    also provide seamless user experiences across all devices and platforms.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight">
              <div className="bg-bg rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl font-bold text-text mb-6">Personal Info</h2>
                <div className="space-y-4">
                  {personalInfo.map((info, index) => (
                    <div key={index} className="flex items-center gap-4 pb-3 border-b border-gray-100">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-text/50 text-xs">{info.label}</p>
                        <p className="text-text font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4">
                  <h3 className="font-semibold text-text mb-3">Fun Facts</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {funFacts.map((fact, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center gap-2 bg-soft rounded-lg p-3"
                        whileHover={{ scale: 1.05, backgroundColor: "#ECFDF5" }}
                      >
                        <fact.icon className={`w-4 h-4 ${fact.color}`} />
                        <span className="text-text/70 text-sm">{fact.text}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-bg">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
                My <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Skills</span>
              </h2>
              <p className="text-text/60 max-w-2xl mx-auto">
                Constantly learning and improving my craft
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-12">
            <AnimatedSection variant="fadeInLeft">
              <div className="bg-soft rounded-2xl p-8">
                <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                  <FiCode className="text-primary" />
                  Technical Proficiency
                </h3>
                {technicalSkills.map((skill, index) => (
                  <SkillBar key={index} {...skill} />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight">
              <div className="bg-soft rounded-2xl p-8">
                <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                  <SiFigma className="text-primary" />
                  Tools & Technologies
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-3 bg-bg rounded-xl p-3 shadow-sm"
                      whileHover={{ scale: 1.02, x: 5 }}
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <tool.icon className="w-4 h-4" style={{ color: tool.color }} />
                      </div>
                      <span className="text-text font-medium text-sm">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Experience & Education Timeline */}
      <section className="py-20 px-4 bg-soft">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection variant="fadeInUp">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
                Journey & <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
              </h2>
              <p className="text-text/60 max-w-2xl mx-auto">
                My professional journey and academic background
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection variant="fadeInLeft">
              <div className="bg-bg rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                  <FiBriefcase className="text-primary" />
                  Work Experience
                </h3>
                {experiences.map((exp, index) => (
                  <TimelineItem
                    key={index}
                    {...exp}
                    isLast={index === experiences.length - 1}
                  />
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection variant="fadeInRight">
              <div className="bg-bg rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-text mb-6 flex items-center gap-2">
                  <FiAward className="text-primary" />
                  Education
                </h3>
                {education.map((edu, index) => (
                  <TimelineItem
                    key={index}
                    {...edu}
                    isLast={index === education.length - 1}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-primary relative overflow-hidden">
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
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: 1, suffix: "+", label: "Years Experience" },
              { value: 10, suffix: "+", label: "Projects Completed" },
              { value: 10, suffix: "+", label: "Happy Clients" },
              { value: 15, suffix: "+", label: "Technologies" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <AnimatedCounter
                  targetValue={stat.value}
                  duration={2000}
                  suffix={stat.suffix}
                />
                <div className="text-white/80 text-sm mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-bg">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection variant="fadeInUp">
            <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Ready to work together?
            </h2>
            <p className="text-text/60 mb-8 max-w-2xl mx-auto">
              Let's create something amazing! Whether you have a project in mind or just want to chat, I'd love to hear from you.
            </p>
            <motion.div {...scaleOnHover}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-lg font-semibold text-bg bg-primary hover:shadow-lg transition-all duration-300"
              >
                Get In Touch <FiArrowRight />
              </Link>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

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