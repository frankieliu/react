import React from "react";
import { useState, useEffect } from 'react';

// Display the cards owned by a user 
function Card(props) {

  const [count, setCount] = useState(0);

  return (
    <div className="Card">
    <p>
    I am a card. {props.name} {count}
    </p>
    <button onClick={() => setCount(count + 1)}> Click me </button>
    </div>)
}

export default Card;
