import "./BonusStart.scss";
import depoAndPlay from "@/assets/deposit-and-play.svg";
import WelcomeBonus from "./WelcomeBonus";

const BonusStart = () => {
  return (
    <div className="bonus-start">
        <img src={depoAndPlay} alt="lang" className="deposit-and-play-text"/>
        <WelcomeBonus />
    </div>
  )
}

export default BonusStart