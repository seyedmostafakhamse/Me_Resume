import React, { useState, useEffect } from "react";

const TypingEffect = ({
  skills,
  typingSpeed = 100,
  deleteSpeed = 75,
  pauseDuration = 2000,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [skillIndex, setSkillIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSkill = skills[skillIndex];
    let timeout;

    if (isDeleting) {
      if (displayText === "") {
        setIsDeleting(false);
        setSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
        timeout = setTimeout(() => {}, 0);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, deleteSpeed);
      }
    } else {
      if (displayText === currentSkill) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      } else {
        timeout = setTimeout(() => {
          setDisplayText(currentSkill.slice(0, displayText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    displayText,
    isDeleting,
    skillIndex,
    skills,
    typingSpeed,
    deleteSpeed,
    pauseDuration,
  ]);

  return (
    <h2>
      {displayText}
      <span className="cursor">|</span>
    </h2>
  );
};

export default TypingEffect;