import React from "react";
import * as Styled from "./input.styles";

export const Input = ({
  type,
  placeholder,
  name,
  value,
  handleChange,
  register,
  error,
  ...rest
}) => {
  return (
    <>
      <Styled.Input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        ref={register}
        {...rest}
      />
      {error && <p class="text-red-800 mb-4">{error.message}</p>}
    </>
  );
};

export default Input;
