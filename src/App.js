import React from "react";
import LightSaber from "./Components/LigthSaber/LigthSaber";
import "./App.css";

function App() {
  return (
    <div className="App">
      <LightSaber></LightSaber>
      <audio id="saberOn">
        <source src="http://edbond.name/other/SaberOn.mp3"></source>
        <source src="http://edbond.name/other/SaberOn.ogg"></source>
        <source src="http://edbond.name/other/SaberOn.wav"></source>
      </audio>
    </div>
  );
}

export default App;
