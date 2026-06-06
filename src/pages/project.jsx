// Varun Vora COMP 229- 301416168
import './project.css'

const Project = () => {
    return (
      <div className="project">
        <a
          className="project-item project-link"
          href="https://group6-comp308project.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the Civic Case Management System live site"
        >
          <h3>Civic Case Management System</h3>
          <p className="project-tech">
            React, Node.js, Express, GraphQL, MongoDB, Git, Azure DevOps
          </p>
          <p>
            Collaborated in an Agile team to build a responsive civic service
            platform for reporting local issues, tracking case status, managing
            records, and supporting municipal workflows. Contributed to the
            frontend, backend services, data management, testing, documentation,
            and CI/CD deployment.
          </p>
          <span className="project-action">View live project</span>
        </a>
        <a
          className="project-item project-link"
          href="https://scansite-five.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the INS Market POS Product Scanner live site"
        >
          <h3>INS Market Inventory &amp; POS Product Scanner</h3>
          <p className="project-tech">
            React, Kotlin, CameraX, ZXing, Google Sheets API, MVVM
          </p>
          <p>
            Led development of a cross-platform Android and web inventory
            ecosystem deployed across three Toronto retail locations. Built
            barcode scanning with camera and Bluetooth scanner support, a
            centralized manager dashboard, and real-time product updates through
            Google Sheets, reducing manual lookup time by 40%.
          </p>
          <span className="project-action">View live project</span>
        </a>
        <a
          className="project-item project-link"
          href="https://bicycle-theft-prediction.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the Bicycle Theft Prediction live site"
        >
          <h3>Bicycle Theft Prediction</h3>
          <p className="project-tech">
            Machine Learning, Python, Flask, Data Analysis
          </p>
          <p>
            Developed a machine-learning application for predicting bicycle
            theft outcomes using Toronto bicycle theft data. Built a Flask API
            to serve model predictions and connected it to a web interface that
            allows users to enter incident details and receive prediction
            results.
          </p>
          <span className="project-action">View live project</span>
        </a>
      </div>
    );
  };
  
  export default Project;
