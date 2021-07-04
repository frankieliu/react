import { useState } from "react";
import React from "react";
import './ClickedImage.css';

function ClickedImage(props) {
  const [hasBorder, setHasBorder] = useState(false)

  const changeBorder = () => {
    setHasBorder(!hasBorder)
  }

  return (
    <div className="App">
    <img className={hasBorder?"redBorder":"noBorder"} src={props.img}
      alt={props.img} width={props.width}
      onClick={changeBorder}/>
    <p>
    {props.img}
    </p>
    </div>
  );
}

export default ClickedImage;
