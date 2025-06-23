import React from "react";
import Header from "./components/Header";
import { Globalcss } from "./Styles";
import Lista from "./components/lista";

function App() {
  return (
    <>
      <Globalcss />
      <div>
        <Header />
        <Lista/>
      </div>
    </>
  );
}

export default App;
