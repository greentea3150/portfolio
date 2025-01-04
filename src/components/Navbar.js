import React, { useState, useRef } from "react";
import "./Navbar.css";

const Navbar = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);  // State to track if music is playing

  // Function to handle play/pause when the user clicks on "Music"
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying); // Toggle play/pause state
  };

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    if (id === "about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={() => scrollToSection("about")}>
        Bryan's Portfolio
      </div>
      <ul className="navbar-links">
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("skills")}>Skills</li>
        <li onClick={() => scrollToSection("projects")}>Projects</li>
        <li onClick={() => scrollToSection("moreaboutme")}>More About Me!!</li>
        <li onClick={toggleMusic} style={{ cursor: "pointer" }}>
          {isPlaying ? "Pause Music" : "Play Music"}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
