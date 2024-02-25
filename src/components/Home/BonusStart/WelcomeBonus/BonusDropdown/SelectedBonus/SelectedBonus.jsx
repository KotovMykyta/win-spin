/* eslint-disable react/prop-types */
import BonusCard from "../BonusCard";
import "./SelectedBonus.scss";

const SelectedBonus = ({ handleClick, bonus }) => {
  return (
    <div className="selected-bonus" onClick={() => handleClick(null)}>
      <BonusCard handleClick={null} bonus={bonus} />
    </div>
  );
};

export default SelectedBonus;
