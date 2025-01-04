import React, { useEffect, useState } from "react";
import "./Skills.css";
import htmlImage from "../images/html.png";
import cssImage from "../images/css.png";
import javascriptImage from "../images/javascript.png";
import reactImage from "../images/react.png";
import responsiveImage from "../images/responsive.png";

const Skills = () => {
  const [scrolling, setScrolling] = useState(0);
  const [isInView, setIsInView] = useState(false); // To track if skills section is in view

  // Intersection Observer callback to detect when the skills section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true); // Start the scroll effect when skills section is in view
        } else {
          setIsInView(false); // Reset the scroll effect when it's out of view
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    // Observe the skills section
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    // Cleanup observer on unmount
    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  // Handle scroll event to adjust the position of rows
  useEffect(() => {
    const handleScroll = () => {
      if (!isInView) return; // Only update scrolling if the skills section is in view

      // Dynamically update scrolling value with the scroll position
      const scrollPosition = window.scrollY;

      // Update the scrolling state to make the cards move upwards continuously
      setScrolling(scrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isInView]); // Only trigger scroll effect if skills section is in view

  // Function to generate random positions for scattered effect
  const getRandomPosition = () => {
    const randomX = Math.random() * 30 - 15; // Random value between -15px and 15px
    const randomY = Math.random() * 30 - 15; // Random value between -15px and 15px
    return { transform: `translate(${randomX}px, ${randomY}px)` };
  };

  return (
    <section
      id="skills"
      className="skills-section"
      style={{
        backgroundImage: `url(${require("../images/darkwave.png")})`, // Set the background image
        backgroundSize: "cover", // Make the background image cover the entire section
        backgroundPosition: "center", // Center the background
        backgroundAttachment: "fixed", // Keep the background fixed while scrolling
        transform: `translateY(-${scrolling * 0.08}px)` // Scroll effect for the background
      }}
    >
      <div className="skills-content">
        <h2
          style={{
            transform: `translateY(-${scrolling * 0.1}px)`, // Slower for top 3 skills
          }}
        >
          My Skills
        </h2>

        {/* First Row: 3 skills (slower movement) */}
        <div
          className="skills-row"
          style={{
            transform: `translateY(-${scrolling * 0.1}px)`, // Slower for top 3 skills
          }}
        >
          <div className="skill-card" style={getRandomPosition()}>
            <img src={htmlImage} alt="HTML" />
            <h3>HTML</h3>
          </div>
          <div className="skill-card" style={getRandomPosition()}>
            <img src={cssImage} alt="CSS" />
            <h3>CSS</h3>
          </div>
          <div className="skill-card" style={getRandomPosition()}>
            <img src={javascriptImage} alt="JavaScript" />
            <h3>JavaScript</h3>
          </div>
        </div>

        {/* Second Row: 2 skills (faster movement) */}
        <div
          className="skills-row"
          style={{
            transform: `translateY(-${scrolling * 0.3}px)`, // Faster for bottom 2 skills
          }}
        >
          <div className="skill-card" style={getRandomPosition()}>
            <img src={reactImage} alt="React" />
            <h3>React</h3>
          </div>
          <div className="skill-card" style={getRandomPosition()}>
            <img src={responsiveImage} alt="Responsive Design" />
            <h3>Responsive Design</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
