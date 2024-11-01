import React from 'react';
import Counter from './counter';
import './style.css';

function App() {
    return (
    <div class = "counter">
        <h1 style = {{backgroundColor: 'rgb(230, 185, 193)', color: 'black', maxWidth: '100%'}}>My Counter</h1>
        <Counter />
    </div>
);
}
export default App;
