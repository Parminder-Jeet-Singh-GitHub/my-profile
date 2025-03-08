// import React from 'react';

// const Skills = () => {
//   return (
//     <section id="skills">
//       <h2>Skills</h2>
//       <ul>
//         <li>Python</li>
//         <li>ReactJS</li>
//         <li>Golang.js</li>
//         <li>Docker</li>
//         <li>Kubernetes</li>
//         <li>Database Management</li>
//       </ul>
//     </section>
//   );
// };

// export default Skills;
import React from "react";

const Skills = () => {
  const skills = ["Golang", "Python", "React.js", "Docker", "Kubernetes", "PostgreSQL"];

  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
