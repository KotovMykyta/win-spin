import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ButtonGroup from "./components/ButtonGroup";
import RecentWinners from "./components/RecentWinners";
import Menu from "./components/Menu";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <>
      <Header />
      {showMenu ? (
        <Menu />
      ) : (
        <>
          <Home />
          <ButtonGroup />
          <RecentWinners />
        </>
      )}

      <Footer toggleMenu={toggleMenu} />
    </>
  );
}

export default App;
