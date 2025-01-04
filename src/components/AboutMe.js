import React, { useState, useEffect } from "react";
import "./AboutMe.css";
import ProgrammingGirl from "../images/programming_girl.png"; // Profile image

const AboutMe = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY); // Track the scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="about-me">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay muted loop>
          <source src={require("../images/code-bg.mp4")} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content on top of the video */}
      <div className="about-me-content">
        <div
          className="about-me-text"
          style={{
            transform: `translateX(${scrollY * 0.3}px)`, // Move text right as user scrolls down
            opacity: 1 - scrollY / 500, // Fade out as the user scrolls down
          }}
        >
          <h1>Frontend Engineer</h1>
          <p>
            Hi, I’m Bryan! I specialize in building responsive and interactive web
            applications. Passionate about creating seamless user experiences
            and turning ideas into reality.
          </p>
        </div>
        <div
          className="about-me-image"
          style={{ transform: `translateY(-${scrollY * 0.1}px)` }} // Adjust the image position
        >
          <img src={ProgrammingGirl} alt="Bryan's Portrait" />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
