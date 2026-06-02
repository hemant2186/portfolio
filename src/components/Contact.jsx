import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";

function Contact() {
  return (
    <section className="contact section-frame" id="contact">
      <motion.div
        className="contact-panel glass-card"
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className="eyebrow">Contact</span>
        <h2>Let's build intelligent products that ship.</h2>
        <p>
          Open to internships, AI/ML roles, full-stack opportunities,
          freelance projects, and collaborations around production AI systems.
        </p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:hemantttkumar21@gmail.com">
            Email Me <FiMail aria-hidden="true" />
          </a>
          <a className="button" href="https://github.com/hemant2186" target="_blank" rel="noreferrer">
            GitHub <FiGithub aria-hidden="true" />
          </a>
          <a className="button" href="https://www.linkedin.com/in/hemant-kumar-171472210/" target="_blank" rel="noreferrer">
            LinkedIn <FiLinkedin aria-hidden="true" />
          </a>
        </div>
        <a className="email-link" href="mailto:hemantttkumar21@gmail.com">
          <FiSend aria-hidden="true" /> hemantttkumar21@gmail.com
        </a>
      </motion.div>
    </section>
  );
}

export default Contact;
