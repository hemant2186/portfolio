import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin } from "react-icons/fi";

const roles = [
  "Machine Learning Engineer",
  "AI Product Builder",
  "Full-Stack Developer",
  "Data Scientist",
];

function Hero() {
  return (
    <section className="hero section-frame" id="home">
      <div className="hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="eyebrow">AI Engineer / ML Engineer / Full-Stack Developer</span>
          <h1>Hemant Kumar</h1>
          <p className="typed-line">
            <ReactTyped strings={roles} typeSpeed={48} backSpeed={30} loop />
          </p>
          <p className="hero-tagline">Building Production-Ready AI Systems & SaaS Products</p>
          <p className="hero-description">
            AI & Data Science undergraduate passionate about Machine Learning,
            Data Science, Backend Engineering and Full-Stack Product Development.
          </p>

          <div className="hero-actions" aria-label="Hero actions">
            <a className="button button-primary" href="#projects">
              View Projects <FiArrowUpRight aria-hidden="true" />
            </a>
            <a className="button" href="/Hemant_Kumar_Resume.pdf" download>
              Download Resume <FiDownload aria-hidden="true" />
            </a>
            <a
              className="icon-button"
              href="https://github.com/hemant2186"
              target="_blank"
              rel="noreferrer"
              aria-label="Open GitHub profile"
            >
              <FiGithub aria-hidden="true" />
            </a>
            <a
              className="icon-button"
              href="https://www.linkedin.com/in/hemant-kumar-171472210/"
              target="_blank"
              rel="noreferrer"
              aria-label="Open LinkedIn profile"
            >
              <FiLinkedin aria-hidden="true" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
        >
          <div className="profile-card">
            <img src="/hemant.jpeg" alt="Hemant Kumar" />
            <div className="profile-meta">
              <span>Available for AI/ML roles</span>
              <strong>Production AI + SaaS</strong>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
