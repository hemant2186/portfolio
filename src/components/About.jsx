import { motion } from "framer-motion";
import { FiCpu, FiDatabase, FiLayers, FiZap } from "react-icons/fi";

const focusAreas = [
  { icon: FiCpu, label: "Machine Learning" },
  { icon: FiDatabase, label: "Data Science" },
  { icon: FiLayers, label: "Full-Stack Development" },
  { icon: FiZap, label: "AI Product Engineering" },
];

function About() {
  return (
    <section className="section section-frame" id="about">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <span className="eyebrow">About</span>
        <h2>Engineer building useful intelligence into real products.</h2>
      </motion.div>

      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <div className="about-copy">
          <p>
            B.Tech in Artificial Intelligence & Data Science at Galgotias
            College of Engineering and Technology.
          </p>
          <p>
            I focus on shipping machine learning systems, data products,
            backend services, and polished full-stack applications that are
            understandable, measurable, and ready for users.
          </p>
        </div>

        <div className="focus-grid">
          {focusAreas.map(({ icon: Icon, label }) => (
            <motion.div className="focus-card glass-card" key={label} whileHover={{ y: -5 }}>
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
