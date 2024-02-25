/* eslint-disable react/prop-types */
import "./Dropdown.scss";
import Select from "react-select";

const Dropdown = ({ options, styles, placeholder, defaultValue }) => {
  return (
    <div className="dropdown">
      <Select
        options={options}
        isClearable
        isSearchable
        placeholder={placeholder}
        defaultValue={defaultValue}
        className="custom-select"
        classNamePrefix="custom-select"
        styles={styles}
      />
    </div>
  );
};

export default Dropdown;
