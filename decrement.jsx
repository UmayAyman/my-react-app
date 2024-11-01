import React from 'react';

function Decrement({ onDecrement }) {
    return <button className='mybutton' onClick={onDecrement}>-</button>;
}

export default Decrement;
