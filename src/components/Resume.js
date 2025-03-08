import React from "react";

function Resume() {
  return (
    <div>
      <h1>My Resume</h1>
      <p>
        Download my resume{" "}
        <a href={`${process.env.PUBLIC_URL}/parminder_backend_resume.pdf`} download>
          here
        </a>.
      </p>
    </div>
  );
}

export default Resume;
