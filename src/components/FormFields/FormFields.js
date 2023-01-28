import { useRef } from "react";
import React from "react";
import { InputContainer, Label, TextInput } from "../Contact/ContactStyles";

const FormField = ({ type, label, id }) => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <InputContainer onClick={handleClick}>
      <Label htmlFor={id}>{label}</Label>
      <TextInput ref={ref} type={type} id={id}></TextInput>
    </InputContainer>
  );
};

export default FormField;
