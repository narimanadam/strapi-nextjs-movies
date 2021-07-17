import React from "react";
import * as Styled from "./button.styles";

export const Button = ({ type, children, ...rest }) => {
  return (
    <Styled.Button type={type} {...rest}>
      {children}
    </Styled.Button>
  );
};

export default Button;
