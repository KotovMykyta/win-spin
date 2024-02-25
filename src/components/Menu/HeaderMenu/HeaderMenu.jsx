import "./HeaderMenu.scss";
import shevronDown from "@/assets/chevron_down.svg";
import langBg from "@/assets/lang_gb.svg";
import promo from '@/assets/promoMenuHeader.svg'

const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <img src={promo} alt="promo" style={{"paddingRight" : "20px"}}/>
      <img src={langBg} alt="lang" />
      <img src={shevronDown} alt="dropdown" />
    </div>
  );
};

export default HeaderMenu;
