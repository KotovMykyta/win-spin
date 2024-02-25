import ButtonGroupItem from "./ButtonGroupItem";
import "./ButtonGroup.scss";
import { buttonsData } from "./buttonsData";

const ButtonGroup = () => {
  return (
    <div className="button-panel">
      {buttonsData.map((button) => (
        <ButtonGroupItem
          key={button.label}
          label={button.label}
          bgColor={button.bgColor}
          icon={button.icon}
        />
      ))}
    </div>
  );
};

export default ButtonGroup;
