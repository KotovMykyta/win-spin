import "./SearchMenu.scss";
import zoomInput from "@/assets/zoomInput.svg";

const SearchMenu = () => {
  return (
    <div className="search-menu">
      <img src={zoomInput} alt="lang" className="zoom-icon" />
      <input type="text" className="custom-input" placeholder="Game name or provider"></input>
    </div>
  )
}

export default SearchMenu