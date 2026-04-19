import { useEffect, useState } from "react";

export const IntroAnimation = ({ onComplete }) => {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setDone(true), 900);
    const finishTimer = setTimeout(onComplete, 1200);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  return (
    <div className={`intro-screen ${done ? "intro-fade-out" : ""}`}>
      <div className="intro-content">
        <div className="intro-loader" />
        <div className="intro-text show">
          <h1>🌿 Farm<span>Stack</span></h1>
          <p>Loading...</p>
        </div>
      </div>
    </div>
  );
};
