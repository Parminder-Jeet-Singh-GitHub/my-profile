// export default Resume;
import React from "react";

function Resume() {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* Download Button */}
      <a
        href={`${process.env.PUBLIC_URL}/parminder_backend_resume.pdf`}
        download
        style={{
          display: "inline-block",
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "#fff",
          textDecoration: "none",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
      >
        Download My Resume
      </a>

      {/* Heading & Paragraph */}
      {/* <h1 style={{ marginTop: "30px" }}>My Resume</h1> */}
    </div>
  );
}

export default Resume;
