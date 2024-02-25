import Dropdown from "./Dropdown/Dropdown";
import "./DropdownRow.scss";
import {
  countryDropdownOptions,
  countryDropdownStyles,
  currencyDropdownStyles,
  currenciesDropdownOptions,
  defaultCurrency,
} from "./helpers";

const DropdownRow = () => {
  return (
    <div className="dropdown-row">
      <Dropdown
        options={countryDropdownOptions}
        styles={countryDropdownStyles}
        placeholder="Country"
      />
      <Dropdown
        options={currenciesDropdownOptions}
        styles={currencyDropdownStyles}
        defaultValue={defaultCurrency}
      />
    </div>
  );
};

export default DropdownRow;
