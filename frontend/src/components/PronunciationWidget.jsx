import React from 'react';

const PronunciationWidget = () => {
  const word = 'mod you ops';

  const pronounceWord = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="pronunciation-widget">
      <button className="pronounce-btn" onClick={pronounceWord}>
        Pronounce ModuOps
      </button>
    </div>
  );
};

export default PronunciationWidget;
