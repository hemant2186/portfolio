import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "AI Products Deployed" },
  { value: "307K+", label: "Records Processed" },
  { value: "250+", label: "DSA Problems Solved" },
  { value: "2", label: "Industry Internships" },
];

function Stats() {
  return (
    <section className="stats section-frame" aria-label="Portfolio statistics">
      <motion.div
        className="stats-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
        }}
      >
        {stats.map((stat) => (
          <motion.article
            className="glass-card stat-card"
            key={stat.label}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -6, scale: 1.02 }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Stats;
