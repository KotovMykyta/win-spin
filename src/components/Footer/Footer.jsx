import "./Footer.scss";
import fireMenu from "@/assets/fireMenu.svg";

const Footer = ({ toggleMenu }) => {
  return (
    <footer className="footer">
      <div className="button-container">
        <button className="button">Sign in</button>
        <img
          src={fireMenu}
          alt="fireLogo"
          className="button-menu"
          onClick={toggleMenu}
        />
        <button className="button yellow shadow">Sign up</button>
      </div>
    </footer>
  );
};

export default Footer;
