import { useState } from "react";
import "./BonusDropdown.scss";
import OpenSelect from "./OpenSelect";
import SelectedBonus from "./SelectedBonus";
import { bonusData } from "./helpers";

const BonusDropdown = () => {
  const [isOpened, setIsOpened] = useState(false);
  const [selectedBonusId, setSelectedBonusId] = useState(1);
  console.log("selectedBonusId: ", selectedBonusId);

  const selectedBonus = bonusData.find((bonus) => bonus.id === selectedBonusId);

  const handleClick = (id) => {
    if (id) setSelectedBonusId(id);
    setIsOpened((prev) => !prev);
  };

  return (
    <div className="bonus-dropdown">
      {isOpened ? (
        <OpenSelect
          handleClick={handleClick}
          bonusData={bonusData}
          selectedId={selectedBonusId}
        />
      ) : (
        <SelectedBonus handleClick={handleClick} bonus={selectedBonus} />
      )}
    </div>
  );
};

export default BonusDropdown;
