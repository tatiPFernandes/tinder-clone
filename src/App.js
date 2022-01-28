import React from "react";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButton from "./SwipeButton";

function App() {
  return (
    //  BEM class naming convention
    <div className="app">
      {/* <h1>Lets build the MERN TINDER clone guys!!</h1> */}
      {/* Header */}
      <Header />

      {/* TinderCards */}
      <TinderCards />

      {/* SwipeButtons */}
      <SwipeButton />
    </div>
  );
}

export default App;
