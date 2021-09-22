import { useEffect, useState } from 'react';
import './index.css';

const Timer = () => {
    const [time, setTime] = useState({
        sec: 0,
        min: 0,
        hr: 0,
    });

    const updateTimer = () => {
        setTime((prev) => {
            let newTime = { ...prev };
            if (newTime.sec < 59) newTime.sec += 1;
            else {
                newTime.min += 1;
                newTime.sec = 0;
            }
            if (newTime.min === 60) {
                newTime.min = 0;
                newTime.hr += 1;
            }

            return newTime;
        });
    };

    const pauseOrResume = () => {
        setInterval(updateTimer, 1000);
    };

    useEffect(() => {
        pauseOrResume();
        //eslint-disable-next-line
    }, []);
    return (
        <h2>{`${time.hr < 10 ? 0 : ''}${time.hr} : ${time.min < 10 ? 0 : ''}${time.min} : ${
            time.sec < 10 ? 0 : ''
        }${time.sec}`}</h2>
    );
};

export default Timer;
