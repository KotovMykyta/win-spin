import "./Header.scss";
import wsLogo from "@/assets/ws-logo.svg";
import searchLogo from "@/assets/search.svg";

const Header = () => {
  return (
    <header className="header">
      <img src={wsLogo} className="logo" alt="logo" />
      <img src={searchLogo} className="logo search" alt="search" />
    </header>
  );
};

export default Header;
