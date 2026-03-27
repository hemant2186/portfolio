import "./App.css";
import { useState } from "react";
import { ReactTyped } from "react-typed";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "app dark" : "app light"}>

      {/* TOGGLE */}
      <button
        className="toggle"
        onClick={() => setDark(!dark)}
        aria-label="Toggle Theme"
      >
        {dark ? "☀️" : "🌙"}
      </button>

      {/* HERO */}
      <header className="hero">
        <h1>Hemant Kumar</h1>

        <h2>
          <ReactTyped
            strings={[
              "Machine Learning Engineer",
              "Data Scientist",
              "Building ML Systems with Business Impact"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>

        <p className="tagline">
          Turning data into business impact 🚀
        </p>

        <p className="hero-desc">
          I build end-to-end machine learning systems that solve real-world
          business problems using data-driven decision making.
        </p>

        <div className="buttons">
          <a href="https://github.com/hemant2186" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/hemant-kumar-171472210/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://drive.google.com/file/d/11ZukhatEW8t5NRD5_rBcmvDak1Xv8Sn2/view" target="_blank" rel="noreferrer">
            Resume
          </a>
        </div>
      </header>

      {/* MAIN */}
      <main className="content">

        {/* ABOUT */}
        <section className="card">
          <h2>About</h2>
          <p>
            I am a B.Tech student in Artificial Intelligence & Data Science
            focused on building end-to-end machine learning systems that solve
            real-world business problems, including churn prediction and NLP-based models.
          </p>
        </section>

        {/* PROJECTS */}
        <section className="card">
          <h2>Projects</h2>

          <div className="project">
            <h3>📉 Customer Churn Prediction</h3>
            <p>
              Built an end-to-end ML system with cost-sensitive modeling,
              risk segmentation, SHAP explainability, and ROI-driven decision strategy.
            </p>
            <div className="buttons">
              <a href="https://github.com/hemant2186" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href="https://customer-churn-risk-analysis-9fwthpg9acxegr7mvystzo.streamlit.app/" target="_blank" rel="noreferrer">
                Live Demo
              </a>
            </div>
          </div>

          <div className="project">
            <h3>🧠 Fake News Detection</h3>
            <p>
              Developed an NLP-based classification model using TF-IDF and Logistic Regression,
              optimized using precision-recall tradeoff and feature analysis.
            </p>
          </div>
        </section>

        {/* SKILLS */}
        <section className="card">
          <h2>Skills</h2>

          <div className="skills">
            <span>Python</span>
            <span>SQL</span>
            <span>Machine Learning</span>
            <span>NLP</span>
            <span>Scikit-learn</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>EDA</span>
            <span>Matplotlib</span>
            <span>Power BI</span>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Hemant Kumar • Built with React 🚀</p>
      </footer>

    </div>
  );
}

export default App;