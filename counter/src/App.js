import { useState } from 'react';
import Cards from './Cards';
import './App.css';
import Timer from './Timer';

const App = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div className="App" onClick={() => setCounter(counter + 1)}>
            <Timer />
            <h4>Counter : {counter}</h4>
            <div className="cards">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
            </div>
        </div>
    );
};

export default App;
