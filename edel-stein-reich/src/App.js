import React from "react";
import Events from "./Events/Events";
import Card from "./Card/Card";
import ClickedImage from "./ClickedImage/ClickedImage";
import Container from "./Container/Container.js";

function App() {
  /*
  let l = []
  for (let i = 1; i < 10; i++) {
    l.push("/resources/event/edel_0" + i + ".jpg")
  }
  */

  return (
    <div className="App">
    <Events />
    <Card />
    <ClickedImage img="/resources/event/edel_01.jpg" width="100" />
    </div>
  );
}

export default App;
