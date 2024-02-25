import styled from "styled-components";

export const StyledButton = styled.div`
  background-color: ${(props) => props.color || "#ffffff"};
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  max-width: 300px;
  height: 53px;
`;

export const Label = styled.div`
  position: absolute;
  padding-left: 67px;
`;

export const Icon = styled.img`
  right: 47px;
  position: relative;
`;