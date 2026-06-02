import { motion } from "framer-motion";

const experiences = [
  {
    role: "Data Science Intern",
    company: "Prodigy InfoTech",
    date: "Jul 2025 - Aug 2025",
    responsibilities: [
      "Feature engineering",
      "Predictive analytics",
      "Model evaluation",
      "Business-focused insights",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    company: "CodSoft",
    date: "Jul 2025 - Aug 2025",
    responsibilities: [
      "NLP applications",
      "End-to-end ML pipelines",
      "Model optimization",
      "Feature engineering",
    ],
  },
];

function Experience() {
  return (
    <section className="section section-frame" id="experience">
      <div className="section-heading">
        <span className="eyebrow">Experience</span>
        <h2>Applied ML, analytics, and product engineering practice.</h2>
      </div>

      <div className="timeline">
        {experiences.map((item, index) => (
          <motion.article
            className="timeline-item glass-card"
            key={`${item.company}-${item.role}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -5 }}
          >
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-top">
              <div>
                <h3>{item.role}</h3>
                <p>{item.company}</p>
              </div>
              <span>{item.date}</span>
            </div>
            <ul>
              {item.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
