import React, { useState, useEffect } from 'react';

function Countdown() {
  const targetDate = new Date('2025-01-01T00:00:00');
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  function calculateTimeRemaining() {
    const currentTime = new Date();
    const difference = targetDate - currentTime;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const countdownStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: '20px',
    padding: '20px',
    border: '2px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f7f7f7',
  };

  const timeStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px',
    marginTop: '10px',
  };

  const timeItemStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={countdownStyles}>
      <div>HungryJacks In</div>
      <div style={timeStyles}>
        <div style={timeItemStyles}>
          <div>{timeRemaining.days}</div>
          <div>days</div>
        </div>
        <div style={timeItemStyles}>
          <div>{timeRemaining.hours}</div>
          <div>hours</div>
        </div>
        <div style={timeItemStyles}>
          <div>{timeRemaining.minutes}</div>
          <div>minutes</div>
        </div>
        <div style={timeItemStyles}>
          <div>{timeRemaining.seconds}</div>
          <div>seconds</div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
