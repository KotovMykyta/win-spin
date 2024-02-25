import "./CategoriesMenu.scss";
import { categoriesData } from "./categoriesData";
import styled from "styled-components";

const CategoryIcon = styled.img`
  left: 17px;
  position: relative;
`;

const Label = styled.div`
  position: absolute;
  padding-left: 72px;
`;

const CategoriesMenu = () => {
  return (
    <div className="categories-menu">
      <ul>
        {categoriesData.map((category) => (
          <li key={category.label}>
            <CategoryIcon src={category.icon} alt="icon" />
            <Label>{category.label}</Label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesMenu;
