import React, {useState} from 'react';

function App() {
    const [numbers, setNumbers] = useState([1,2,3,4])

    const addNumber = () => {
        const getRandomNumber = Math.round(Math.random()*10);
        setNumbers([...numbers, getRandomNumber])
    }

    return (
        <div className="App">
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}
            </ul>
            <button onClick={addNumber}>Generate new number</button>
        </div>
    );
}

export default App;
