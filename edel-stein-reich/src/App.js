import React from "react";
import Events from "./Events/Events";
import Card from "./Card/Card";
import ClickedImage from "./ClickedImage/ClickedImage";

function App() {
  return (
    <div className="App">
    <Events />
    <Card />
    <ClickedImage img="/resources/event/edel_01.jpg" width="100" />
    </div>
  );
}

export default App;
