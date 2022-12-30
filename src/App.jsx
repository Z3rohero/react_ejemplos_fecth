import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Primero from "./components/Primero";
import Segundo from "./components/Segundo";
import { Ajax } from "./components/Ajax";

function App() {
  return (
    <div>
      <Ajax></Ajax>
      <hr />
    </div>
  );
}

export default App;
