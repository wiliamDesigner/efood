import React from "react";
import Header from "./components/Header";
import Cardlist from "./components/Cardlista";
import { Globalcss } from "./Styles";


function App() {
  return (
    <>
      <Globalcss />
      <div>
        <Header />
      </div>
    </>
  );
}

export default App;
