import "./Typewriter.css" 

import React, { useEffect, useState } from "react";

const Typewriter = ({ words, typeSpeed = 100, deleteSpeed = 1000, pause = 1000 }) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[wordIndex];

    let timeout;

    if (!isDeleting && charIndex <= currentWord.length) {
      setText(currentWord.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex + 1), typeSpeed);
    } else if (isDeleting && charIndex >= 0) {
      setText(currentWord.substring(0, charIndex));
      timeout = setTimeout(() => setCharIndex(charIndex - 1), deleteSpeed);
    }

    // Pause when word is fully typed
    if (!isDeleting && charIndex === currentWord.length + 1) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    }

    // Pause when word is fully deleted
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return (
    <span className="typewriter">{text}<span className="cursor">|</span></span>
  );
};

export default Typewriter;
