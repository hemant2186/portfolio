import "./App.css";
import { useState } from "react";
import { ReactTyped } from "react-typed";

function App() {
  const [dark, setDark] = useState(true);

  return (
    <div className={dark ? "app dark" : "app light"}>

      {/* TOGGLE */}
      <button className="toggle" onClick={() => setDark(!dark)}>
        {dark ? "☀️" : "🌙"}
      </button>

      {/* HERO */}
      <section className="hero">
        <h1>Hemant Kumar</h1>

        <h2>
          <ReactTyped
            strings={[
              "Machine Learning Engineer",
              "Data Scientist",
              "ML Systems with Business Impact"
            ]}
            typeSpeed={50}
            backSpeed={30}
            loop
          />
        </h2>

        {/* TAGLINE */}
        <p className="tagline">
          Turning data into business impact 🚀
        </p>

        <p>
          Building machine learning systems that drive real business decisions, not just predictions.
        </p>

        <div className="buttons">
          <a href="https://github.com/hemant2186" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/hemant-kumar-171472210/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://drive.google.com/file/d/11ZukhatEW8t5NRD5_rBcmvDak1Xv8Sn2/view" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="content">

        {/* ABOUT */}
        <div className="card">
          <h2>About</h2>
          <p>
            B.Tech student in AI & Data Science focused on building end-to-end machine learning systems that solve real-world business problems.
          </p>
        </div>

        {/* PROJECTS */}
        <div className="card">
          <h2>Projects</h2>

          <div className="project">
            <h3>Customer Churn Prediction</h3>
            <p>
              End-to-end ML system with cost-sensitive modeling, risk segmentation, and ROI-driven decision strategy.
            </p>
            <div className="buttons">
              <a href="https://github.com/hemant2186" target="_blank" rel="noreferrer">GitHub</a>
              <a href="https://customer-churn-risk-analysis.onrender.com" target="_blank" rel="noreferrer">Live</a>
            </div>
          </div>

          <div className="project">
            <h3>Fake News Detection</h3>
            <p>
              NLP model using TF-IDF and Logistic Regression with optimized precision-recall tradeoff.
            </p>
          </div>
        </div>

        {/* SKILLS */}
        <div className="card">
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
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;