// export default Projects;

import React from "react";
// import "./Projects.css"; // Import CSS for styling

const Projects = () => {
  const projects = [
    {
      title: "Serverless Backend Development",
      image: `${process.env.PUBLIC_URL}/drudge.png`,
      description: (
        <>
          Designed and implemented a serverless backend for a social media application 
          (available on the{" "}
          <a 
            href="https://play.google.com/store/apps/details?id=com.drudge.android" 
            target="_blank" 
            rel="noopener noreferrer">
            Play Store
          </a>) using Golang, Postgres, and AWS services like S3, Lambda, Redis, RDS, SNS, and Amazon Textract.
        </>
      ),
    },
    {
      title: "Custom App Backend (Python + GCP)",
      image: `${process.env.PUBLIC_URL}/beam.png`,
      description:
        "Built the backend for a custom app distributed via the App Store using Python, Postgres, and MinIO. Integrated Kubernetes jobs and GCP services like Pub/Sub Lite, Cloud Functions, Firestore, and Google Cloud Storage.",
    },
    {
      title: "Loan Lending Platform",
      image: `${process.env.PUBLIC_URL}/loan_lending.png`,
      description:
        "Developed the backend for a loan lending website using Python, Postgres, MinIO, and AI-powered agents for risk assessment and automated processing.",
    },
    {
      title: "Full-Stack Projects",
      image: `${process.env.PUBLIC_URL}/full_stack.png`,
      description:
        "Managed backend in Golang and frontend with React. Designed UI components with Figma and integrated AI models for NLP applications like a resume reader.",
    },
  ];

  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="image-container">
              <img src={project.image} alt={project.title} className="project-image" />
            </div>
            <div className="project-details">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
