import React, { useEffect, useRef, useState } from "react";
import "./MoreAboutMe.css";
import certificategenshin from "../images/certificategenshin.jpg";

const MoreAboutMe = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const skillsContainerRef = useRef(null);
  const certificateSectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false); // Track visibility of the section

  const handleScroll = () => {
    const section = sectionRef.current;
    const content = contentRef.current;
    const title = titleRef.current;
    const description = descriptionRef.current;
    const skillsContainer = skillsContainerRef.current;
    const certificateSection = certificateSectionRef.current;

    if (!section || !content || !title || !description || !skillsContainer || !certificateSection) return;

    // Get the position of the section relative to the viewport
    const sectionTop = section.getBoundingClientRect().top;
    const sectionBottom = section.getBoundingClientRect().bottom;
    const contentTop = content.getBoundingClientRect().top;
    const contentBottom = content.getBoundingClientRect().bottom;
    const titleTop = title.getBoundingClientRect().top;
    const descriptionTop = description.getBoundingClientRect().top;
    const skillsContainerTop = skillsContainer.getBoundingClientRect().top;
    const certificateSectionTop = certificateSection.getBoundingClientRect().top;

    // Check if the section or content is within the viewport
    const isSectionVisible = sectionTop < window.innerHeight && sectionBottom > 0;
    const isContentVisible = contentTop < window.innerHeight && contentBottom > 0;
    const isTitleVisible = titleTop < window.innerHeight && titleTop > 0;
    const isDescriptionVisible = descriptionTop < window.innerHeight && descriptionTop > 0;
    const isSkillsContainerVisible = skillsContainerTop < window.innerHeight && skillsContainerTop > 0;
    const isCertificateSectionVisible = certificateSectionTop < window.innerHeight && certificateSectionTop > 0;

    // Update visibility based on scroll
    setIsVisible(isSectionVisible && isContentVisible);

    // Apply "in-view" or "out-of-view" class based on visibility
    if (isTitleVisible) {
      title.classList.add('in-view');
      title.classList.remove('out-of-view');
    } else {
      title.classList.add('out-of-view');
      title.classList.remove('in-view');
    }

    if (isDescriptionVisible) {
      description.classList.add('in-view');
      description.classList.remove('out-of-view');
    } else {
      description.classList.add('out-of-view');
      description.classList.remove('in-view');
    }

    if (isSkillsContainerVisible) {
      skillsContainer.classList.add('in-view');
      skillsContainer.classList.remove('out-of-view');
    } else {
      skillsContainer.classList.add('out-of-view');
      skillsContainer.classList.remove('in-view');
    }

    if (isCertificateSectionVisible) {
      certificateSection.classList.add('in-view');
      certificateSection.classList.remove('out-of-view');
    } else {
      certificateSection.classList.add('out-of-view');
      certificateSection.classList.remove('in-view');
    }
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`more-about-me ${isVisible ? "in-view" : "out-of-view"}`}
      id="moreaboutme"
      ref={sectionRef}
    >
      <div
        className={`content ${isVisible ? "in-view" : "out-of-view"}`}
        ref={contentRef}
      >
        <h1
          className="section-title-2"
          ref={titleRef}
        >
          More About Me
        </h1>
        <div
          className="description"
          ref={descriptionRef}
        >
          <p>
            I have honed my programming skills over the years and am proud of
            the growth and challenges I’ve tackled. Below is a list of my
            strongest skills and additional expertise gained during my university
            journey.
          </p>
        </div>
        <div
          className="skills-container"
          ref={skillsContainerRef}
        >
          <div className="skills-list">
            <h3>Strongest Skills</h3>
            <ul>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Responsive Design</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="skills-list">
            <h3>Extra Skills</h3>
            <ul>
              <li>Android Studio</li>
              <li>Laravel</li>
              <li>PHP</li>
              <li>Unity</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
        <div
          className="certificate-section"
          ref={certificateSectionRef}
        >
          <h3>Achievement Certificate</h3>
          <p>First Place - Project Showcase</p>
          <img
            src={certificategenshin}
            alt="Certificate"
            className="certificate-image"
          />
        </div>
      </div>
    </section>
  );
};

export default MoreAboutMe;
