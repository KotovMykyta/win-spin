import { countries } from "countries-list";
import currencyCodes from "currency-codes";

export const currenciesDropdownOptions = currencyCodes.data.map((currency) => ({
  value: currency.code,
  label: currency.code,
}));

export const defaultCurrency = currenciesDropdownOptions.find(currency => currency.value === 'EUR');

export const countryDropdownOptions = Object.entries(countries).map(
  ([code, country]) => ({
    value: code,
    label: country.name,
  })
);

export const countryDropdownStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#E0E1EA",
    borderRadius: "25px",
    border: "2px solid white",
    fontFamily: "Merriweather Sans, sans-serif",
    fontWeight: "400",
    color: "#000000",
  }),
  option: (provided) => ({
    ...provided,
    fontFamily: "Merriweather Sans, sans-serif",
    fontWeight: "400",
    color: "#A8A8A8",
  }),
  menu: (provided) => ({
    ...provided,
    width: "calc(200% + 8px)",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    display: "none",
  }),
};

export const currencyDropdownStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "#E0E1EA",
    borderRadius: "25px",
    border: "2px solid white",
    fontFamily: "Merriweather Sans, sans-serif",
    fontWeight: "400",
    color: "#000000",
  }),
  option: (provided) => ({
    ...provided,
    fontFamily: "Merriweather Sans, sans-serif",
    fontWeight: "400",
    color: "#A8A8A8",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
  clearIndicator: (provided) => ({
    ...provided,
    display: "none",
  }),
};
