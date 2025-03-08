// import React from 'react';

// const Projects = () => {
//   return (
//     <section id="projects">
//       <h2>Projects</h2>
//       <ul>
//         <li>Project 1: A web application using React and Flask Frame work</li>
//         <li>Project 2: A Social Media app for connecting people</li>
//         <li>Project 2: A custom app for an organization for brand detection</li>
//       </ul>
//     </section>
//   );
// };

// export default Projects;



// import React from "react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Resume AI Generator",
//       description: "An AI-based tool that reads a resume and generates interview questions.",
//       link: "https://github.com/yourusername/project1",
//     },
//     {
//       title: "Portfolio Website",
//       description: "A personal website showcasing my work and experience.",
//       link: "https://github.com/yourusername/project2",
//     },
//   ];

//   return (
//     <section className="projects">
//       <h2>Projects</h2>
//       {projects.map((project, index) => (
//         <div key={index} className="project">
//           <h3>{project.title}</h3>
//           <p>{project.description}</p>
//           <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
//         </div>
//       ))}
//     </section>
//   );
// };

// export default Projects;


// import React from 'react';

// const Projects = () => {
//   return (
//     <section id="projects">
//       <h2>Projects</h2>
//       <ul>
//         <li>Project 1: A web application using React and Flask Frame work</li>
//         <li>Project 2: A Social Media app for connecting people</li>
//         <li>Project 2: A custom app for an organization for brand detection</li>
//       </ul>
//     </section>
//   );
// };

// export default Projects;


// import React from "react";

// const Projects = () => {
//   const projects = [
//     {
//       title: "Serverless Backend Development",
//       description: (
//         <>
//           Designed and implemented a serverless backend for a social media application 
//           (available on the <a href="https://play.google.com/store/apps/details?id=com.drudge.android" 
//           target="_blank" rel="noopener noreferrer">Play Store</a>) using Golang, Postgres, and AWS services like S3, 
//           Lambda, Redis, RDS, SNS, and Amazon Textract.
//         </>
//       ),},
//     {
//       title: "Custom App Backend (Python + GCP)",
//       description:
//         "Built the entire backend for a custom app distributed via the App Store using Python, Postgres, and MinIO. Integrated Kubernetes jobs for parallel execution and GCP services like Pub/Sub Lite, Cloud Functions, Firestore, and Google Cloud Storage. Implemented Azure IDP for secure access.",
//     },
//     {
//       title: "Loan Lending Platform",
//       description:
//         "Developed the backend for a loan lending website using Python, Postgres, MinIO, and AI-powered agents for risk assessment and automated processing.",
//     },
//     {
//       title: "Full-Stack Projects",
//       description:
//         "Worked on multiple websites, managing backend in Golang and frontend with React. Designed sleek UI components with Figma and integrated AI models from Hugging Face for NLP applications like a resume reader.",
//     },
//   ];

//   return (
//     <section className="projects">
//       <h2>Projects</h2>
//       {projects.map((project, index) => (
//         <div key={index} className="project">
//           <h3>{project.title}</h3>
//           <p>{project.description}</p>
//         </div>
//       ))}
//     </section>
//   );
// };

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
