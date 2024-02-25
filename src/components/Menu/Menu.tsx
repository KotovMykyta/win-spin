import React from "react";
import "./Menu.scss";
import ButtonsMenu from "./ButtonsMenu";
import HeaderMenu from "./HeaderMenu";
import SearchMenu from "./SearchMenu";
import CategoriesMenu from "./CategoriesMenu";

const Menu = () => {
  return (
    <div className="menu-container">
      <HeaderMenu />
      <ButtonsMenu />
      <SearchMenu />
      <CategoriesMenu />
    </div>
  );
};

export default Menu;
