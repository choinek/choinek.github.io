import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';

const FloatingWords: React.FC = () => {
  const words = [
    'iluzja', 'więzienie', 'ego', 'dusza', 'ciało', 'prawda', 
    'projekcja', 'Demiurg', 'świadomość', 'pułapka', 'sens', 
    'szczęście', 'czas', 'zmiana', 'bycie', 'myśl'
  ];

  const [floatingWords, setFloatingWords] = useState<Array<{
    id: number;
    text: string;
    left: number;
    top: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    const createFloatingWord = () => {
      const id = Date.now() + Math.random();
      const text = words[Math.floor(Math.random() * words.length)];
      const left = Math.random() * 90 + 5; // 5-95% from left
      const top = Math.random() * 90 + 5; // 5-95% from top
      const duration = Math.random() * 5 + 8; // 8-13 seconds
      const delay = Math.random() * 2;

      setFloatingWords(prev => [...prev, { id, text, left, top, duration, delay }]);

      // Remove word after animation completes
      setTimeout(() => {
        setFloatingWords(prev => prev.filter(w => w.id !== id));
      }, (duration + delay) * 1000);
    };

    // Create initial words
    for (let i = 0; i < 3; i++) {
      setTimeout(createFloatingWord, i * 1000);
    }

    // Create new words periodically
    const interval = setInterval(createFloatingWord, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.floatingContainer} aria-hidden="true">
      {floatingWords.map(word => (
        <div
          key={word.id}
          className={styles.floatingWord}
          style={{
            left: `${word.left}%`,
            top: `${word.top}%`,
            animationDuration: `${word.duration}s`,
            animationDelay: `${word.delay}s`
          }}
        >
          {word.text}
        </div>
      ))}
    </div>
  );
};

export default FloatingWords;
