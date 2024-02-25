import BonusDropdown from "./BonusDropdown";
import DropdownRow from "./DropdownRow";
import "./WelcomeBonus.scss";

const WelcomeBonus = () => {
  return (
    <div className="welcome-bonus">
      <BonusDropdown />
      <DropdownRow />
      <button className="button yellow start">Start with your 100% bonus</button>
    </div>
  )
}

export default WelcomeBonus