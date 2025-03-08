import React from "react";

const Experience = () => {
  const jobs = [
    {
      company: "Company A",
      role: "Backend Engineer",
      duration: "2021 - Present",
      description: "Working with Golang, Python, and Kubernetes to build scalable APIs.",
    },
    {
      company: "Company B",
      role: "Software Developer",
      duration: "2019 - 2021",
      description: "Developed web applications using React.js and Flask.",
    },
  ];

  return (
    <section className="experience">
      <h2>Experience</h2>
      {jobs.map((job, index) => (
        <div key={index} className="job">
          <h3>{job.role} - {job.company}</h3>
          <p>{job.duration}</p>
          <p>{job.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Experience;
