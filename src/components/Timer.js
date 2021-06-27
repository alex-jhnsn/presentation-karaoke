import {useEffect, useState} from 'react';

export function useTimer(initialTime, countDown) {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {

    if (time === 0)
      setTime(initialTime);

    if (countDown) {
      const timeLeft = setInterval(() => {
        setTime(c => c - 1);
      }, 1000);
      return () => clearInterval(timeLeft);
    }
  }, [initialTime, time, countDown]);

  return time;
}