import React, { useState, useEffect } from 'react';
import './css/test.css'; // файл стилей

function Test() {
  const [textIndex, setTextIndex] = useState(0);
  const texts = ["Первый текст", "Второй текст", "Третий текст", "Четвертый текст", "Пятый текст"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex(prevIndex => (prevIndex + 1) % texts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [texts.length]);

  const colors = ["black", "blue", "red", "green", "orange"];
  const currentColor = colors[textIndex];

  return (
    <div className="changing-text" style={{ color: currentColor }}>
      {texts[textIndex]}
    </div>
  );
}

export default Test;
