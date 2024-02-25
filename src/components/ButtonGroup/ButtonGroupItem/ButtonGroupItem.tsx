import React from "react";
import fireLogo from "@/assets/fire-in-btn.svg";
import { StyledButton, Icon, Label } from "./ButtonGroupItem.styled";

const ButtonGroupItem = ({ label, bgColor, icon }) => {
  return (
    <StyledButton color={bgColor} className="link-button">
      <img src={fireLogo} alt="fireLogo" />
      <Icon src={icon} alt="icon" />
      <Label>{label}</Label>
    </StyledButton>
  );
};

export default ButtonGroupItem;
