import styled from "styled-components";
const themeColor = (props) => props.theme.colors.green;
const textColor = (props) => props.theme.colors.grey;

import { Section } from "@/styles/GlobalComponents";

export const FormSection = styled(Section)`
  width: 100%;
`;
export const FormContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  border: 2 px solid ${(props) => props.theme.colors.green};
  display: flex;
  padding: 10em 0;
`;

export const Form = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  border-bottom: 2px solid ${themeColor};
  display: flex;
  cursor: pointer;
  gap: 2em;
  width: 100%;
  cursor: text;
`;
export const Label = styled.label`
  font-size: 3.4em;
  font-weight: bold;
  color: ${textColor};
  cursor: text;
`;

export const TextInput = styled.input`
  font-size: 2.4em;
  color: ${textColor};
  padding-left: 0.5em;
  border: transparent;
`;
