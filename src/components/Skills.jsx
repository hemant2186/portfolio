import { motion } from "framer-motion";

const skillCategories = {
  Languages: ["Python", "C++", "Java", "SQL", "JavaScript", "Dart"],
  "Machine Learning": ["Scikit-Learn", "XGBoost", "Pandas", "NumPy", "NLP", "Feature Engineering"],
  Backend: ["FastAPI", "Flask", "Node.js", "Express.js", "REST APIs", "JWT Authentication"],
  Frontend: ["React", "Next.js", "Flutter", "Streamlit"],
  Databases: ["MongoDB", "Firebase", "Firestore", "SQLite"],
  Tools: ["Git", "GitHub", "GitHub Actions", "Postman", "Power BI", "Tableau"],
};

function Skills() {
  return (
    <section className="section section-frame" id="skills">
      <div className="section-heading">
        <span className="eyebrow">Skills</span>
        <h2>Tooling across the AI product stack.</h2>
      </div>

      <div className="skills-grid">
        {Object.entries(skillCategories).map(([category, skills]) => (
          <motion.article
            className="skill-card glass-card"
            key={category}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            whileHover={{ y: -6 }}
          >
            <h3>{category}</h3>
            <div className="pill-row">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.025 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
