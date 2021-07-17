import React from "react";
import * as Styled from "./textarea.styles";

export const Textarea = ({
  type,
  placeholder,
  name,
  value,
  handleChange,
  ...rest
}) => {
  return (
    <Styled.Textarea
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={handleChange}
      {...rest}
    />
  );
};

export default Textarea;
