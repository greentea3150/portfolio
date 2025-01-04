import React, { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import MoreAboutMe from "./components/MoreAboutMe";

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Optional: Try to auto-play the audio when the app first loads (if allowed)
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.play().catch((e) => console.log("Autoplay failed"));
    }
  }, []);

  return (
    <div>
      {/* Background audio */}
      <audio
        ref={audioRef}
        src="/sans.mp3"  // Ensure this file is in the public folder
        loop
        muted={false}
        preload="auto"
      />

      {/* Navbar with music control */}
      <Navbar audioRef={audioRef} />

      {/* Your other components */}
      <AboutMe />
      <Skills />
      <Projects />
      <MoreAboutMe />
    </div>
  );
};

export default App;
