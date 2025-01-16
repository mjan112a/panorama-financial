"use client";

import React, { useEffect, useState } from "react";

interface TypeWriterProps {
  sentences: string[];
  speed?: number;
  delay?: number;
}

export function TypeWriter({ sentences, speed = 60, delay = 2000 }: TypeWriterProps): JSX.Element {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isPausing, setIsPausing] = useState<boolean>(false);

  useEffect(() => {
    const sentence = sentences[currentSentenceIndex];
    let timeout: NodeJS.Timeout;

    if (isPausing) {
      // Pause after completing sentence
      timeout = setTimeout(() => {
        setIsPausing(false);
        setIsDeleting(true);
      }, 1000);
    } else if (isDeleting) {
      // Deleting text with fade animation
      timeout = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText.length === 0) {
          setIsDeleting(false);
          setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
        }
      }, speed / 3);
    } else {
      // Typing text
      timeout = setTimeout(() => {
        setCurrentText(sentence.slice(0, currentText.length + 1));
        if (currentText.length === sentence.length) {
          setIsPausing(true);
        }
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, isPausing, currentSentenceIndex, sentences, speed, delay]);

  return (
    <p className="text-3xl text-blue-600 font-medium">
      <span className={isDeleting ? "animate-fade-out" : ""}>
        {currentText}
      </span>
      <span className="animate-blink">|</span>
    </p>
  );
}