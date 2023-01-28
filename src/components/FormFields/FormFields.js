import { useEffect, useRef, useState } from "react";
import React from "react";
import {
  InputContainer,
  Label,
  TextInput,
  InvalidForm,
} from "../Contact/ContactStyles";

const FormField = ({ type, label, id, handler, message, clickHandler }) => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };

  return (
    <>
      <InputContainer
        onClick={() => {
          handleClick();
        }}
      >
        <Label htmlFor={id}>{label}</Label>
        <TextInput
          ref={ref}
          type={type}
          id={id}
          onChange={(e) => {
            handler(e.target.value);
          }}
          onClick={() => {
            {
              clickHandler ? clickHandler(null) : null;
            }
          }}
        ></TextInput>
        {}
      </InputContainer>

      {message ? <InvalidForm>{message}</InvalidForm> : null}
    </>
  );
};

export default FormField;
