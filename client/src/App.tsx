import type { FormEvent } from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
  FaGraduationCap,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaRobot
} from "react-icons/fa";
import {
  SiOpenjdk,
  SiPython,
  SiCplusplus,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFigma,
  SiGit,
  SiDocker,
  SiVisualstudiocode
} from "react-icons/si";

import profilePhoto from "../assets/FYP-2.jpeg";
import luxCarImage from "../assets/LuxCar.jpeg";
import ecommerceImage from "../assets/Ecom.png";
import lodgeImage from "../assets/HM.jpeg";
import buyonixImage from "../assets/Buyonix.png";
import mockMindImage from "../assets/MockMind.png";

import rtaImage from "../assets/RTAI.png";
import agriImage from "../assets/Agri.png";
import cvFile from "../assets/Hadi_CV.pdf";

import { FaUserCheck, FaPencilRuler } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="service-icon" />,
    title: "Full-Stack Web Development",
    desc: "Building modern, scalable web apps using MERN stack, REST APIs, and clean architecture.",
  },
  {
    icon: <FaMobileAlt className="service-icon" />,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with React Native, seamless UI/UX, and API integration.",
  },
  {
    icon: <FaUserCheck className="service-icon" />,
    title: "Requirement Engineer",
    desc: "Gathering, analyzing, and documenting software requirements to ensure project success and alignment with business goals.",
  },
  {
    icon: <FaPencilRuler className="service-icon" />,
    title: "UI/UX Designer",
    desc: "Designing intuitive, user-friendly interfaces and experiences for web and mobile applications.",
  },
];

const projects = [
  {
    title: "Buyonix AI Ecommerce Platform - FYP",
    description:
      "Developing an AI-powered ecommerce platform with smart recommendations, virtual try-on, visual search, and multilingual chatbot support.",
    builtOn: "React, Next.js, TailwindCSS, Python, Node.js, Docker",
    github: "https://github.com/Faisal468/Buyonix",
    image: buyonixImage,
    link: "https://ecommerce-buyonix.vercel.app/"
  },
  {
    title: "Mock Mind",
    description:
      "AI mock interview platform with real-time questioning, scoring, feedback, and performance tracking through an interactive dashboard.",
    builtOn: "Next.js, React, TypeScript, Node.js, Express, MongoDB, Tailwind",
    github: "https://github.com/abdulHadi-71/Mock-Mind",
    image: mockMindImage
  },
  {
    title: "Resume Tailor AI",
    description:
      "AI-powered resume optimization tool that rewrites content and generates ATS-friendly resumes using MERN stack intelligence.",
    builtOn: "React.js, TypeScript, Node.js, Express.js, MongoDB, Tailwind",
    github: "https://github.com/abdulHadi-71/Resume-Tailor-AI",
    image: rtaImage
  },
  {
    title: "Luxury Ride Booking Platform (MERN)",
    description:
      "Developed a full MERN booking platform for luxury transportation services with secure authentication, service management, and responsive booking flow.",
    builtOn: "MERN",
    github: "https://github.com/abdulHadi-71/Luxury-Ride-Booking-Platform",
    image: luxCarImage
  },
  {
    title: "Ecommerce App Store (React Native)",
    description:
      "Built a mobile ecommerce application with API integration, checkout workflow, product browsing, and modern UI.",
    builtOn: "React Native, Node.js, Firebase, TailwindCSS, Docker",
    github: "https://github.com/abdulHadi-71/Ecommerce-App",
    image: ecommerceImage
  },
  {
    title: "Lodge Link (React Native)",
    description:
      "Created a hotel management app for bookings, guest management, and staff coordination with a polished mobile experience.",
    builtOn: "React Native, Node.js, Firebase, TailwindCSS, Docker",
    github: "https://github.com/abdulHadi-71/LodgeLink",
    image: lodgeImage
  },
  {
    title: "Agri Support System",
    description:
      "A UI/UX mobile concept created in Figma to help farmers with crop management, weather updates, disease guidance, and market tracking.",
    builtOn: "Figma",
    github: "",
    image: agriImage
  }
];

const apiBaseUrl = import.meta.env.VITE_API_URL ?? "http://localhost:5000";

const skillItems = [
  { icon: SiOpenjdk, label: "Java", percent: 84, color: "#f97316" },
  { icon: SiPython, label: "Python", percent: 78, color: "#00bcd4" },
  { icon: SiCplusplus, label: "C++", percent: 68, color: "#2563eb" },
  { icon: SiJavascript, label: "JavaScript", percent: 86, color: "#facc15" },
  { icon: SiReact, label: "React", percent: 88, color: "#61dafb" },
  { icon: SiNodedotjs, label: "Node.js", percent: 82, color: "#68a063" },
  { icon: SiMongodb, label: "MongoDB", percent: 78, color: "#4caf50" },
  { icon: SiTailwindcss, label: "Tailwind", percent: 80, color: "#38bdf8" },
  { icon: SiFigma, label: "Figma", percent: 72, color: "#a855f7" },
  { icon: SiGit, label: "Git", percent: 78, color: "#f97316" },
  { icon: SiDocker, label: "Docker", percent: 70, color: "#0ea5e9" },
  { icon: SiVisualstudiocode, label: "VS Code", percent: 76, color: "#0078d7" }
];

const techClassMap: Record<string, string> = {
  react: "tech-react",
  "react.js": "tech-react",
  "react native": "tech-react",
  node: "tech-node",
  "node.js": "tech-node",
  express: "tech-node",
  "express.js": "tech-node",
  mern: "tech-mern",
  mongodb: "tech-mongo",
  typescript: "tech-ts",
  javascript: "tech-js",
  python: "tech-python",
  tailwind: "tech-tailwind",
  tailwindcss: "tech-tailwind",
  docker: "tech-docker",
  figma: "tech-figma",
  firebase: "tech-firebase"
};

const getTechClass = (tech: string) => {
  return techClassMap[tech.trim().toLowerCase()] || "tech-default";
};

const experienceTasks = [
  {
    id: "task1",
    label: "Task 1",
    title: "SDLC Documentation",
    description:
      "Prepared comprehensive Software Development Life Cycle (SDLC) documentation for a Secure IP Camera Management System, including requirement analysis, system architecture, development planning, and test strategy, gaining practical understanding of structured software engineering workflows used in industry-level projects."
  },
  {
    id: "task2",
    label: "Task 2",
    title: "Bidirectional UDP Communication",
    description:
      "Developed a Bidirectional UDP Communication System in C# capable of continuous large-packet data transmission with real-time acknowledgment handling, implementing multithreading to ensure non-blocking communication and stable two-way data flow."
  },
  {
    id: "task3",
    label: "Task 3",
    title: "RTL Synthesis & Hardware Design",
    description:
      "Gained hands-on exposure to hardware design automation workflows using OpenFPGA and Yosys, including RTL synthesis, script-based flow automation, and understanding the end-to-end FPGA design compilation process from HDL to bitstream generation."
  },
  {
    id: "task4",
    label: "Task 4",
    title: "PyQt GUI Enhancement",
    description:
      "Enhanced a PyQt-based GUI application by integrating dynamic user-driven script modification for Yosys synthesis flow, enabling automated insertion of top module definitions, file paths, and configurable output parameters for streamlined hardware compilation."
  }
];

const themes = [
  { id: "cyan", name: "Cyber Cyan", primary: "#4f46e5", accent: "#22d3ee", rgb: "34, 211, 238", primaryRgb: "79, 70, 229" },
  { id: "purple", name: "Neon Purple", primary: "#8b5cf6", accent: "#d946ef", rgb: "217, 70, 239", primaryRgb: "139, 92, 246" },
  { id: "emerald", name: "Emerald Aurora", primary: "#059669", accent: "#10b981", rgb: "16, 185, 129", primaryRgb: "5, 150, 105" },
  { id: "orange", name: "Sunset Gold", primary: "#ea580c", accent: "#f59e0b", rgb: "245, 158, 11", primaryRgb: "234, 88, 12" },
];

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem("portfolio-theme") || "cyan";
  });
  const particlesRef = useRef<HTMLCanvasElement | null>(null);
  const aboutSectionRef = useRef<HTMLElement | null>(null);
  const [countStarted, setCountStarted] = useState(false);
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const roles = ["MERN apps", "AI tools", "real-time systems"];

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const theme = themes.find((t) => t.id === activeTheme) || themes[0];
    document.documentElement.style.setProperty("--primary", theme.primary);
    document.documentElement.style.setProperty("--primary-rgb", theme.primaryRgb);
    document.documentElement.style.setProperty("--accent", theme.accent);
    document.documentElement.style.setProperty("--accent-rgb", theme.rgb);
    localStorage.setItem("portfolio-theme", activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout = 120;

    if (!deleting && subIndex === currentRole.length) {
      timeout = 1200;
      setDeleting(true);
    } else if (deleting && subIndex === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      timeout = 200;
    }

    const id = window.setTimeout(() => {
      const nextIndex = deleting ? subIndex - 1 : subIndex + 1;
      setSubIndex(nextIndex);
      setRoleText(currentRole.substring(0, nextIndex));
    }, timeout);

    return () => window.clearTimeout(id);
  }, [subIndex, deleting, roleIndex, roles]);

  useEffect(() => {
    const canvas = particlesRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 48 }, () => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      r: Math.random() * 1.8 + 0.6,
      vx: (Math.random() - 0.5) * 0.18,
      vy: (Math.random() - 0.5) * 0.18,
      alpha: Math.random() * 0.4 + 0.16,
      hue: Math.random() * 360,
    }));

    let frameId = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      ctx.save();
      ctx.fillStyle = "rgba(7, 12, 27, 0.65)";
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      ctx.restore();

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < -20 || particle.x > canvas.clientWidth + 20) particle.vx *= -1;
        if (particle.y < -20 || particle.y > canvas.clientHeight + 20) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 95%, 72%, ${particle.alpha})`;
        ctx.shadowColor = `hsla(${particle.hue}, 95%, 72%, ${particle.alpha * 0.85})`;
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0;

        if (Math.random() < 0.03) {
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          const tx = particle.x + (Math.random() - 0.5) * 120;
          const ty = particle.y + (Math.random() - 0.5) * 120;
          ctx.lineTo(tx, ty);
          ctx.strokeStyle = `rgba(56, 189, 248, 0.12)`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      });

      frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  useEffect(() => {
    const section = aboutSectionRef.current;
    if (!section || countStarted) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCountStarted(true);
            const counters = Array.from(document.querySelectorAll<HTMLSpanElement>(".animated-count"));
            counters.forEach((counter) => {
              const target = Number(counter.dataset.target ?? "0");
              const step = Math.max(1, Math.floor(target / 40));
              let current = 0;
              const timer = window.setInterval(() => {
                current += step;
                if (current >= target) {
                  counter.textContent = String(target);
                  window.clearInterval(timer);
                } else {
                  counter.textContent = String(current);
                }
              }, 25);
            });
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, [countStarted]);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const closeMenu = () => setMenuOpen(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatusMessage(null);
    setIsSending(true);

    try {
      await axios.post(`${apiBaseUrl}/api/contact`, form, {
        headers: { "Content-Type": "application/json" }
      });
      setStatusMessage("Message sent successfully. I will reply soon!");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setStatusMessage("Unable to send message right now. Please email abdullah.two00four@gmail.com.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="app-wrapper">
      {/* Fixed Social Sidebar */}
      <aside className="social-sidebar">
        <div className="social-sidebar-content">
          <a href="https://github.com/abdulHadi-71" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link" title="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/abdul-hadi-804a24251/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link" title="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="https://wa.me/923377566667" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-link" title="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href="mailto:abdullah.two00four@gmail.com" aria-label="Email" className="social-link" title="Email">
            <FaEnvelope />
          </a>
        </div>
        <div className="sidebar-divider"></div>
      </aside>

      <div className="page">
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
        <header className={`topbar ${menuOpen ? "menu-open" : ""}`}>
          <div className="topbar-inner">
            <div className="brand">Abdul Hadi</div>
            <button className="nav-toggle" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#experience" onClick={closeMenu}>Experience</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#skills" onClick={closeMenu}>Skills</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>
          {menuOpen && <button className="nav-backdrop" aria-label="Close menu" onClick={closeMenu} />}
        </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <canvas className="hero-particles" ref={particlesRef} aria-hidden="true" />
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">Hello, I’m</span>
          <h1>
            Abdul Hadi
            <span className="hero-typed">I build {roleText}<span className="cursor">|</span></span>
          </h1>
          <p className="hero-subtitle">
            I’m a MERN stack developer and software engineer focused on delivering modern, scalable web applications with polished UX.
            I build performant systems using React, Node.js, MongoDB, and AI-enhanced experiences for real-time and production-ready products.
          </p>
          <div className="hero-actions">
            <a className="button primary" href={cvFile} target="_blank" rel="noreferrer">
              <FaDownload /> Download CV
            </a>
            <a className="button ghost" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="hero-highlights">
            <div>
              <strong>Location</strong>
              <span>Islamabad, Pakistan</span>
            </div>
            <div>
              <strong>Email</strong>
              <span>abdullah.two00four@gmail.com</span>
            </div>
          </div>
        </motion.div>

        <div className="hero-image-card">
          <div className="hero-photo-frame hero-photo-frame--glow">
            <img src={profilePhoto} alt="Abdul Hadi" />
          </div>
          <div className="hero-profile-summary">
            <p>
              Software Engineer Intern with strong experience in full-stack development, real-time systems,
              and technicFal documentation.
            </p>
            <div className="profile-stats">
              <div>
                <strong>Experience</strong>
                <span>NECOP Internship</span>
              </div>
              <div>
                <strong>Focus</strong>
                <span>MERN + AI Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section - now after Hero */}
      <motion.section
        className="section about"
        id="about"
        ref={aboutSectionRef}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="about-glow" aria-hidden="true" />
        <div className="section-header about-header">
          <span>About Me</span>
          <h2>Professional Profile</h2>
        </div>
        <div className="about-grid">
          <motion.div
            className="about-left glass-card card-highlight"
            initial={{ opacity: 0, x: -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <div className="about-education">
              <FaGraduationCap />
              <span>B.S. Software Engineering · Air University Islamabad</span>
            </div>
            <div className="about-highlights">
              <span>MERN Stack</span>
              <span>AI Products</span>
              <span>Real-time Systems</span>
            </div>
            <p>
              Full-Stack developer focused on MERN architecture, real-time systems, and AI-powered product features. I build fast, scalable, user-centered applications that solve real problems from database to deployment.
            </p>
            <p>
              I’m currently seeking engineering roles where I can contribute across the stack, collaborate with product-driven teams, and help ship solutions that are polished, performant, and easy to maintain.
            </p>
            <div className="about-contact-card about-contact-card--inline">
              <a className="contact-row contact-row--link" href="mailto:abdullah.two00four@gmail.com">
                <span className="contact-row-icon"><FaEnvelope /></span>
                <p>abdullah.two00four@gmail.com</p>
              </a>
              <a className="contact-row contact-row--link" href="https://wa.me/923377566667" target="_blank" rel="noreferrer">
                <span className="contact-row-icon"><FaPhone /></span>
                <p>+92 337 7566667</p>
              </a>
              <div className="contact-row">
                <span className="contact-row-icon"><FaMapMarkerAlt /></span>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>
          </motion.div>

          <div className="about-right">
            <div className="about-stats">
              {[
                { target: 7, label: "Projects shipped", tone: "cyan" },
                { target: 2, label: "Years building", tone: "emerald" },
                { target: 13, label: "Core technologies", tone: "purple" },
                { target: 1, label: "Internship (NECOP)", tone: "gold" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className={`about-stat-card about-stat-card--${stat.tone}`}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ duration: 0.45, delay: index * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                >
                  <span className="animated-count" data-target={stat.target}>0</span>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section - now after About Me */}
      <section className="services-section" id="services">
        <div className="services-header">
          <span style={{ letterSpacing: 2, fontWeight: 600, color: '#e0f7fa' }}>Services</span>
          <h2 style={{ fontSize: '2.1rem', margin: '0.5rem 0 1.2rem 0', color: '#fff' }}>What I Offer</h2>
        </div>
        <div className="services-list">
          {services.map((service, idx) => (
            <div className="service-card" key={idx}>
              {service.icon}
              <div className={`service-title${service.title === 'Full-Stack Web Development' || service.title === 'Mobile App Development' ? ' center-title' : ''}`}>{service.title}</div>
              <div className="service-desc">{service.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="section-header">
          <span>Experience</span>
        </div>
        <div className="timeline-wrapper">
          <div className="timeline-line" aria-hidden="true"></div>
          <article className="timeline-item glass-card">
            <div className="timeline-body">
              <span className="timeline-date">Jul 2025 – Sep 2025</span>
              <h3>Software Engineer Intern</h3>
              <p className="timeline-company">NECOP</p>
              <p>
                Delivered secure architecture documentation, real-time systems improvements, and hardware integration support for a national electronics initiative.
              </p>
            </div>
          </article>

          {experienceTasks.map((task) => (
            <article key={task.id} className="timeline-item glass-card">
              <div className="timeline-body">
                <span className="timeline-step">{task.label}</span>
                <h3>{task.title}</h3>
                <p>{task.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section projects" id="projects">
        <div className="section-header">
          <span>Projects</span>
          <h2>Featured Work</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={`${project.title}-${index}`}>
              <img src={project.image} alt={project.title} loading="lazy" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech-list">
                  {project.builtOn.split(",").map((tech) => {
                    const trimmed = tech.trim();
                    return (
                      <span key={trimmed} className={`project-tech-tag ${getTechClass(trimmed)}`}>
                        {trimmed}
                      </span>
                    );
                  })}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="github-button">
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Live Site
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <div className="section-header">
          <span>Skills</span>
          <h2>Technical Toolbox</h2>
        </div>
        <div className="skills-panel glass-card skills-grid">
          {skillItems.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.label} className="skill-progress-card">
                <div className="skill-progress-heading">
                  <div>
                    <strong>{skill.label}</strong>
                    <span>{skill.percent}%</span>
                  </div>
                  <Icon />
                </div>
                <div className="skill-progress-track">
                  <div className="skill-progress-fill" style={{ width: `${skill.percent}%`, background: skill.color }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <motion.section
        className="section"
        id="contact"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="section-header">
          <span>Contact</span>
          <h2>Let’s Build Something</h2>
        </div>
        <div className="contact-grid">
              <div className="glass-card contact-card contact-panel">
            <div className="contact-panel-head">
              <h3>Get in Touch</h3>
              <p>Contact me directly using the details below.</p>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <span>Email Me</span>
                <a href="mailto:abdullah.two00four@gmail.com">abdullah.two00four@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <span>Call Me</span>
                <a href="https://wa.me/923377566667" target="_blank" rel="noreferrer">+92 337 7566667</a>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span>Located In</span>
                <p>Islamabad, Pakistan</p>
              </div>
            </div>
          </div>

          <form className="glass-card contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your name"
                required
              />
            </label>
            <label>
              Email
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Your email"
                required
              />
            </label>
            <label>
              Message
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell me about your project"
                rows={5}
                required
              />
            </label>
            <button type="submit" className="button primary" disabled={isSending}>
              {isSending ? "Sending..." : "Send Message"}
            </button>
            {statusMessage && <p className="form-status">{statusMessage}</p>}
          </form>
        </div>
      </motion.section>

      </div>

      <footer className="footer">
        <div className="footer-glow" aria-hidden="true" />
        <div className="footer-inner">
          <div className="footer-brand">
            <h2>Abdul Hadi</h2>
            <p>Full-stack MERN developer building fast, scalable, and AI-powered digital products.</p>
            <div className="footer-cta">
              <span className="footer-cta-dot" aria-hidden="true" />
              Open to opportunities
            </div>
          </div>

          <div className="footer-links">
            <span className="footer-links-title">Navigate</span>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-connect">
            <span className="footer-connect-title">Connect</span>
            <a className="footer-link-item" href="https://github.com/abdulHadi-71" target="_blank" rel="noreferrer">
              <FaGithub /> GitHub
            </a>
            <a className="footer-link-item" href="https://www.linkedin.com/in/abdul-hadi-804a24251/" target="_blank" rel="noreferrer">
              <FaLinkedin /> LinkedIn
            </a>
            <a className="footer-link-item" href="https://wa.me/923377566667" target="_blank" rel="noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
            <a className="footer-link-item" href="mailto:abdullah.two00four@gmail.com">
              <FaEnvelope /> Email
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Abdul Hadi · Software Engineer · Islamabad, Pakistan</p>
        </div>
      </footer>

      {/* Floating Theme Switcher */}
      <div className="theme-switcher">
        <span className="theme-switcher-label">Theme</span>
        <div className="theme-options">
          {themes.map((t) => (
            <button
              key={t.id}
              className={`theme-dot ${t.id} ${activeTheme === t.id ? "active" : ""}`}
              onClick={() => setActiveTheme(t.id)}
              title={`Switch to ${t.name}`}
              aria-label={`Switch to ${t.name}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
