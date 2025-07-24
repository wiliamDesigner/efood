import React from "react";
import Header from "./components/Header";
import Cardlist from "./components/Cardlista";
import { Globalcss } from "./Styles";
import Footer from "./components/footer";


function App() {
  return (
    <>
      <Globalcss />
      <div>
        <Header />
      </div>
      <Footer/>
    </>
  );
}

export default App;
