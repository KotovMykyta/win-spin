/* eslint-disable react/prop-types */
import "./BonusCard.scss";
import radio from "@/assets/radio.svg";
import selectedRadio from "@/assets/radio_selected.svg";
import bonusArrow from "@/assets/bonus-arrow.svg";
import verticalLine from "@/assets/vertical-line.svg";

const BonusCard = ({ handleClick, bonus, isSelected }) => {
  return (
    <div
      className="bonus-card"
      onClick={handleClick ? () => handleClick(bonus.id) : () => {}}
      style={{ background: `${bonus.bg}` }}
    >
      <img src={bonus?.icon} className="bonus-icon" alt="icon" />
      <div className="bonus-info">
        <span>{bonus?.title}</span>
        <br />
        {bonus?.desc.split("\n").map((line, index) => (
          <span key={index} className="bonus-desc">
            {line}
            {index !== bonus?.desc.split("\n").length - 1 && <br />}{" "}
          </span>
        ))}
      </div>
      {handleClick === null ? (
        <>
          <img src={verticalLine} className="line-icon" alt="line" />
          <img src={bonusArrow} className="bonus-arrow" alt="arrow" />
        </>
      ) : (
        <img
          src={isSelected ? selectedRadio : radio}
          alt="radio"
          className="bonus-radio"
        />
      )}
    </div>
  );
};

export default BonusCard;
