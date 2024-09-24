import React, { useState, useEffect, useCallback } from 'react';

function Timer({ duration, onFinish }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  const tick = useCallback(() => {
    setTimeLeft(prevTime => {
      if (prevTime <= 1) {
        onFinish();
        return 0;
      }
      return prevTime - 1;
    });
  }, [onFinish]);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => clearInterval(timerId);
  }, [tick]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="timer">
      Time remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}

export default Timer;