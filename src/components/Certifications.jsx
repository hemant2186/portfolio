import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

const certifications = [
  "Oracle Cloud Infrastructure 2025 AI Foundations Associate",
  "Deloitte Data Analytics Job Simulation",
  "TATA GenAI Powered Data Analytics Simulation",
  "Career Essentials in Generative AI by Microsoft & LinkedIn",
];

function Certifications() {
  return (
    <section className="section section-frame" aria-labelledby="certifications-title">
      <div className="section-heading">
        <span className="eyebrow">Certifications</span>
        <h2 id="certifications-title">Validated learning across cloud, analytics, and GenAI.</h2>
      </div>

      <div className="compact-grid">
        {certifications.map((certification) => (
          <motion.article
            className="compact-card glass-card"
            key={certification}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <FiAward aria-hidden="true" />
            <span>{certification}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
