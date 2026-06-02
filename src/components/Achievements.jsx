import { motion } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";

const achievements = [
  "Participated in Google Cloud GenAI Exchange Hackathon",
  "Participated in IEEE MAIT Agentic AI Hackathon",
  "Built and deployed 4 AI SaaS applications",
  "Solved 250+ DSA problems",
];

function Achievements() {
  return (
    <section className="section section-frame" aria-labelledby="achievements-title">
      <div className="section-heading">
        <span className="eyebrow">Achievements</span>
        <h2 id="achievements-title">Signals of consistent building and problem solving.</h2>
      </div>

      <div className="compact-grid">
        {achievements.map((achievement) => (
          <motion.article
            className="compact-card glass-card"
            key={achievement}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -5 }}
          >
            <FiCheckCircle aria-hidden="true" />
            <span>{achievement}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
