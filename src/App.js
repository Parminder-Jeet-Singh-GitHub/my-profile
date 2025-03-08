// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// // export default App;
// import React from 'react';
// import Header from './components/Header';
// import About from './components/About';
// import Skills from './components/Skills';
// import Projects from './components/Projects';

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <About />+-
//       <Skills />
//       <Projects />
//     </div>
//   );
// }

// // export default App;
// import React from "react";
// import Header from "./components/Header";
// import About from "./components/About";
// import Experience from "./components/Experience";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";
// import "./styles/global.css";


// function App() {
//   return (
//     <div className="container">
//       <Header />
//       <About />
//       <Experience />
//       <Skills />
//       <Projects />
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import React, { useRef } from "react";
// import Header from "./components/Header";
// import About from "./components/About";
// import Experience from "./components/Experience";
// // import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Footer from "./components/Footer";
// import "./styles/global.css";

// function App() {
//   const aboutRef = useRef(null);
//   const experienceRef = useRef(null);
//   const projectsRef = useRef(null);
//   const contactRef = useRef(null);
//   const resumeRef = useRef(null);

//   const scrollToSection = (ref) => {
//     ref.current?.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <div className="container">
//       <nav className="navbar">
//         <button onClick={() => scrollToSection(aboutRef)}>About</button>
//         <button onClick={() => scrollToSection(experienceRef)}>Experience</button>
//         <button onClick={() => scrollToSection(projectsRef)}>Projects</button>
//         <button onClick={() => scrollToSection(contactRef)}>Contact</button>
//         <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
//           <button>Resume</button>
//         </a>
//       </nav>

//       <Header />
//       <section ref={aboutRef}>
//         <About />
//       </section>
//       <section ref={experienceRef}>
//         <Experience />
//       </section>
//       <section ref={projectsRef}>
//         <Projects />
//       </section>
//       <section ref={contactRef}>
//         <Footer />
//       </section>
//     </div>
//   );
// }
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";
import "./styles/global.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="container">
        <header className="header">
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/experience" onClick={() => setMenuOpen(false)}>Experience</Link>
            <Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
            <Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/" element={<About />} /> {/* Default Route */}
        </Routes>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
