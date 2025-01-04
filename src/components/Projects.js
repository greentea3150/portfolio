import React, { useEffect } from "react";
import "./Projects.css";
import genshinmania from "../images/genshinmania.png";
import terasedap from "../images/terasedap.png";
import studyplanner from "../images/studyplanner.png";
import todolist from "../images/todolist.png";
import lemonade from "../images/lemonade.png";
import gunandrun from "../images/gunandrun.png";

const Projects = () => {
  useEffect(() => {
    const observerOptions = {
      root: null, // Use the viewport as the root
      rootMargin: '0px 0px -50px 0px', // This will make the observer trigger when the element is 50px above the viewport
      threshold: 0.5, // Trigger when 50% of the card is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          observer.unobserve(entry.target); // Unobserve after it becomes visible
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.project-card');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el)); // Cleanup observer on component unmount
    };
  }, []);


  return (
    <section className="projects-section" id="projects">
      <div className="projects-content fade-in">
        <h2 className="section-title">Projects</h2>
        <div className="projects-row">
          <div className="project-card">
            <h3 className="project-title">Genshin Mania</h3>
            <img
              src={genshinmania}
              alt="Project Screenshot"
              className="project-image"
            />
            <p className="project-description">
              Genshin Mania is an interactive encyclopedia made using React for Genshin Impact, offering detailed information on characters, weapons, and other in-game elements to enhance your adventure.
            </p>
            <div className="project-languages">
              <span className="language-tag">React</span>
              <span className="language-tag">HTML</span>
              <span className="language-tag">CSS</span>
              <span className="language-tag">JavaScript</span>
            </div>
          </div>
          <div className="project-card">
            <h3 className="project-title">TeraSedap Digital Menu</h3>
            <img
              src={terasedap}
              alt="Project Screenshot"
              className="project-image"
            />
            <p className="project-description">
              TeraSedap is a digital menu management website that allows customers to browse the restaurant's offerings while enabling staff to easily update the menu in real time.
            </p>
            <div className="project-languages">
              <span className="language-tag">Laravel</span>
              <span className="language-tag">HTML</span>
              <span className="language-tag">CSS</span>
              <span className="language-tag">PHP</span>
              <span className="language-tag">MySQL</span>
            </div>
          </div>
          <div className="project-card">
            <h3 className="project-title">Study Planner Application</h3>
            <img
              src={studyplanner}
              alt="Project Screenshot"
              className="project-image"
            />
            <p className="project-description">
              A productivity app to help students plan their study schedules and track progress.
            </p>
            <div className="project-languages">
              <span className="language-tag">Android Studio</span>
              <span className="language-tag">Kotlin</span>
              <span className="language-tag">XML</span>
            </div>
          </div>
          <div className="project-card">
            <h3 className="project-title">To Do List</h3>
            <img
              src={todolist}
              alt="Project Screenshot"
              className="project-image"
            />
            <p className="project-description">
              This is a fun and interactive to-do list application built with PHP and MySQL, offering a simple yet engaging user interface for managing tasks and storing data in a MySQL database.
            </p>
            <div className="project-languages">
              <span className="language-tag">PHP</span>
              <span className="language-tag">HTML</span>
              <span className="language-tag">CSS</span>
              <span className="language-tag">MySQL</span>
            </div>
          </div>
          <div className="project-card">
            <h3 className="project-title">Lemonade Clicker Game</h3>
            <img
              src={lemonade}
              alt="Project Screenshot"
              className="project-image"
            />
            <p className="project-description">
              This is a little interactive lemonade clicker game where players earn coins by selling lemonade, upgrade their recipe, and purchase lemonade stands and multipliers to boost their earnings.
            </p>
            <div className="project-languages">
              <span className="language-tag">HTML</span>
              <span className="language-tag">CSS</span>
              <span className="language-tag">JavaScript</span>
            </div>
          </div>
          <div className="project-card">
            <h3 className="project-title">First Person Shooter</h3>
            <img
              src={gunandrun}
              alt="Project Screenshot"
              className="project-image"
            />
            <p className="project-description">
              This is a simple FPS game in Unity where players must shoot bots that roam the map, attempting to kill the player while navigating through dynamic gameplay.
            </p>
            <div className="project-languages">
              <span className="language-tag">Unity</span>
              <span className="language-tag">C#</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
