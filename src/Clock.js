import React, { useState, useEffect } from 'react';
import './Chatbot.css'
function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Adjusting format to "10:34 AM"
  const timeString = time.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });

  return <div className='time'>{timeString}</div>;
}

export default Clock;