import type { FormEvent } from "react";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from "react-icons/fa";
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
import ecommerceImage from "../assets/Ecom.jpg";
import lodgeImage from "../assets/HM.jpeg";
import buyonixImage from "../assets/Buyonix.png";
import mockMindImage from "../assets/MockMind.png";
import rtaImage from "../assets/RTAI.png";
import agriImage from "../assets/Agri.png";
import cvFile from "../assets/Hadi_CV.pdf";

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
    title: "Resume Tailor AI",
    description:
      "AI-powered resume optimization tool that rewrites content and generates ATS-friendly resumes using MERN stack intelligence.",
    builtOn: "React.js, TypeScript, Node.js, Express.js, MongoDB, Tailwind",
    github: "https://github.com/abdulHadi-71/Resume-Tailor-AI",
    image: rtaImage
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
  { icon: SiOpenjdk, label: "Java" },
  { icon: SiPython, label: "Python" },
  { icon: SiCplusplus, label: "C++" },
  { icon: SiJavascript, label: "JavaScript" },
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiTailwindcss, label: "Tailwind" },
  { icon: SiFigma, label: "Figma" },
  { icon: SiGit, label: "Git" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiVisualstudiocode, label: "VS Code" }
];

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

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [experienceTab, setExperienceTab] = useState(experienceTasks[0].id);

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
    <div className="page">
      <header className={`topbar ${menuOpen ? "menu-open" : ""}`}>
        <div className="brand">Abdul Hadi</div>
        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </header>

      <section className="hero" id="home">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="eyebrow">Hello, I’m</span>
          <h1>Abdul Hadi</h1>
          <p className="hero-subtitle">
            I’m Abdul Hadi, a MERN stack developer and software engineer focused on building modern, scalable web applications and real-time systems. I work with MongoDB, Express, React, and Node.js to develop full-stack solutions with clean architecture, performance optimization, and user-focused design. I also have experience in integrating APIs, authentication systems, and AI-powered features, along with exposure to system-level development and hardware-software workflows through academic and internship projects.

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

        <motion.div
          className="hero-image-card"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div className="hero-photo-frame">
            <img src={profilePhoto} alt="Abdul Hadi" />
          </div>
          <div className="hero-profile-summary">
            <p>
              Software Engineer Intern with strong experience in full-stack development, real-time systems,
              and technical documentation.
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
        </motion.div>
      </section>

      <motion.section
        className="section about"
        id="about"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="section-header">
          <span>About Me</span>
          <h2>Professional Profile</h2>
        </div>
        <div className="section-grid">
          <div className="glass-card">
            <h3>About Me</h3>
            <p>
              I am a software engineer with a passion for beautiful, responsive product experiences built with
              modern web technologies. I create performant MERN applications, mobile ecosystems, and system-level
              tools while keeping design, accessibility, and engineering best practices front and center.
            </p>
            <p>
              I love combining strong backend architecture with polished front-end animations to deliver engaging, easy-to-use
              digital experiences.
            </p>
          </div>
          <div className="glass-card card-highlight">
            <h3>Contact</h3>
            <div className="contact-info-row">
              <p>abdullah.two00four@gmail.com</p>
              <p>+92 337 7566667</p>
            </div>
            <div className="social-icons">
              <a href="https://github.com/abdulHadi-71" target="_blank" rel="noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/abdul-hadi-804a24251/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/923377566667" target="_blank" rel="noreferrer" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
              <a href="mailto:abdullah.two00four@gmail.com" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="section experience-section"
        id="experience"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="experience-grid">
          <div className="experience-left glass-card">
            <span className="experience-left-tag">Company</span>
            <h3>National Electronics Complex of Pakistan (NECOP)</h3>
            <p className="experience-role">Software Engineer Intern</p>
            <p className="experience-meta">Jul 2025 – Sep 2025 | Onsite</p>
            <div className="experience-summary">
              <p>
                Delivered impact through secure architecture documentation, fast realtime systems, and hands-on hardware integration support.
              </p>
            </div>
          </div>

          <div className="experience-right glass-card">
            <span className="experience-right-tag">MY CONTRIBUTIONS</span>
            <h2>Elevate Through Engineering</h2>
            <div className="experience-tabs">
              {experienceTasks.map((task) => (
                <button
                  key={task.id}
                  type="button"
                  className={`experience-tab ${experienceTab === task.id ? "active" : ""}`}
                  onClick={() => setExperienceTab(task.id)}
                >
                  {task.label}
                </button>
              ))}
            </div>

            <div className="experience-task-card">
              {experienceTasks.filter((task) => task.id === experienceTab).map((active) => (
                <div key={active.id}>
                  <h3>{active.title}</h3>
                  <p>{active.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      <section className="section projects" id="projects">
        <div className="section-header">
          <span>Projects</span>
          <h2>Featured Work</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={`${project.title}-${index}`}>
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-tech">Built on: {project.builtOn}</span>
                <div className="project-links">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      View Code
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

      <motion.section
        className="section"
        id="skills"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <div className="section-header">
          <span>Skills</span>
          <h2>Technical Toolbox</h2>
        </div>
        <div className="skills-panel glass-card">
          <p>
            Skills move automatically and include logos for each technology. This section highlights the
            core languages, frameworks, and tools I use every day.
          </p>
          <div className="skills-slider">
            {skillItems.concat(skillItems).map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  className="skill-chip"
                  key={`${skill.label}-${index}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.05, duration: 0.36, ease: "easeOut" }}
                  whileHover={{ scale: 1.04, y: -3 }}
                >
                  <Icon />
                  <span>{skill.label}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

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

      <footer className="footer">
        <div className="footer-inner">
          <p>Designed and built by Abdul Hadi — responsive, polished and production-ready.</p>
          <div className="footer-social">
            <a href="https://github.com/abdulHadi-71" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/abdul-hadi-804a24251/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://wa.me/923377566667" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="mailto:abdullah.two00four@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
