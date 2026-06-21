import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "CreditRisk AI",
    image: "/projects/creditrisk.png",
    tech: ["Python", "XGBoost", "FastAPI", "Streamlit"],
    metrics: ["307K+ records", "324 engineered features", "ROC-AUC 0.781"],
    description:
      "Production-grade credit risk scoring SaaS with monitoring dashboards, audit logging, fairness reports and FastAPI endpoints.",
    links: {
      github: "https://github.com/hemant2186/credit-risk-loan-default-prediction",
      live: "https://credit-risk-loan.streamlit.app/",
    },
  },
  {
    title: "ChurnGuard AI",
    image: "/projects/churnguard.png",
    tech: ["Python", "Scikit-Learn", "Streamlit", "SQLite"],
    metrics: ["92.5% Recall", "ROC-AUC 0.841"],
    description:
      "Customer retention analytics SaaS with drift monitoring, explainability, CI/CD and batch scoring.",
    links: {
      github: "https://github.com/hemant2186/customer-churn-risk-analysis",
      live: "https://customer-churn-strategy.streamlit.app/",
    },
  },
  {
    title: "PathPilot AI",
    image: "/projects/pathpilot.png",
    tech: ["Next.js", "Node.js", "Express", "MongoDB"],
    metrics: ["Recommendation engine", "JWT authentication"],
    description:
      "Adaptive learning platform with recommendation engines, analytics and JWT authentication.",
    links: {
      github: "https://github.com/hemant2186/Automated-Learning-System",
      live: "https://automated-learning-system.vercel.app/",
    },
  },
  {
    title: "FOUNDIT",
    image: "/projects/foundit.png",
    tech: ["Flutter", "Firebase", "Firestore", "Cloudinary"],
    metrics: ["Google OAuth", "Real-time updates"],
    description:
      "Cross-platform Lost & Found application with Google OAuth and real-time updates.",
    links: {
      github: "https://github.com/hemant2186/FOUNDIT",
      live: "https://foundit-gcet.web.app/",
    },
  },
];

function Projects() {
  return (
    <section className="section section-frame" id="projects">
      <div className="section-heading">
        <span className="eyebrow">Projects</span>
        <h2>Production-minded AI and full-stack systems.</h2>
      </div>

      <motion.div
        className="projects-grid"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        {projects.map((project) => (
          <motion.article
            className="project-card glass-card"
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 26 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -8 }}
          >
            <div className="project-image">
              <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" />
            </div>
            <div className="project-body">
              <div className="project-title-row">
                <h3>{project.title}</h3>
                <div className="project-actions">
                  {project.links.github && (
                    <a href={project.links.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}>
                      <FiGithub aria-hidden="true" />
                    </a>
                  )}
                  {project.links.live && (
                    <a href={project.links.live} target="_blank" rel="noreferrer" aria-label={`${project.title} live demo`}>
                      <FiExternalLink aria-hidden="true" />
                    </a>
                  )}
                </div>
              </div>
              <p>{project.description}</p>
              <div className="pill-row">
                {project.metrics.map((metric) => (
                  <span className="metric-pill" key={metric}>
                    {metric}
                  </span>
                ))}
              </div>
              <div className="pill-row">
                {project.tech.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
