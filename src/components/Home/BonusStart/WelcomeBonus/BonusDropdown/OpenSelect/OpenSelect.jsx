/* eslint-disable react/prop-types */
import BonusCard from "../BonusCard";
import "./OpenSelect.scss";

const OpenSelect = ({ handleClick, bonusData, selectedId }) => {
  return (
    <div className="open-select">
      {bonusData.map((bonus) => (
        <BonusCard key={bonus.id} handleClick={handleClick} bonus={bonus} isSelected={selectedId === bonus.id}/>
      ))}
    </div>
  );
};

export default OpenSelect;
