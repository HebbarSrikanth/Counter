import React, { useState } from 'react';
import Timer from './Timer';
import './index.css';

const Cards = () => {
    const [showTimer, setTimer] = useState(false);
    const [counter, setCounter] = useState(0);
    return (
        <div className="box" onClick={() => setCounter(counter + 1)}>
            {showTimer ? <Timer /> : null}
            <h5>Card Counter {counter}</h5>
            <button onClick={() => setTimer(true)}>Start Counter</button>
        </div>
    );
};

export default Cards;
