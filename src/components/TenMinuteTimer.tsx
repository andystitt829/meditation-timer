import React from 'react';
import { useTimer } from 'react-timer-hook';
import { IonButton } from '@ionic/react';

function TenMinuteTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called'), autoStart: false });


  return (
    <div className='ion-text-center ion-margin-vertical'>
      <h2>Ten Minute Timer</h2>
      <div style={{fontSize: '100px'}}>
        <span>{minutes}</span>:<span>{seconds}</span>
      </div>
      <p>{isRunning ? 'Running' : 'Not running'}</p>
      <IonButton onClick={start}>Start</IonButton>
      <IonButton onClick={pause}>Pause</IonButton>
      <IonButton onClick={resume}>Resume</IonButton>
      <IonButton onClick={() => {
        // Restarts to 10 minutes timer
        const time = new Date();
        time.setSeconds(time.getSeconds() + 600);
        restart(time)
      }}>Restart</IonButton>
    </div>
  );
}

export default function TenMinuteTimerComponent() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
  return (
    <div>
      <TenMinuteTimer expiryTimestamp={time} />
    </div>
  );
}