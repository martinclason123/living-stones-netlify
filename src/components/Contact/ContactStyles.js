import styled from "styled-components";
const themeColor = (props) => props.theme.colors.green;
const textColor = (props) => props.theme.colors.grey;

import { ImageContainer, Section } from "@/styles/GlobalComponents";
import { Title } from "../MissionStatement/MissionStatementStyles";

export const FormSection = styled(Section)`
  width: 100%;
  display: flex;
  padding-top: 10em;
`;
export const FormContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  border: 2px solid ${(props) => props.theme.colors.green};
  display: flex;
  padding: 10em;
  border-radius: 5em;
  gap: 1em;
`;

export const Form = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 3em;
`;

export const InputContainer = styled.div`
  border-bottom: 2px solid ${themeColor};
  display: flex;
  cursor: pointer;
  gap: 2em;
  width: 100%;
  cursor: text;
`;

export const TextAreaContainer = styled.div`
  display: flex;
  cursor: pointer;
  gap: 2em;
  width: 100%;
  cursor: text;
  flex-direction: column;
`;
export const Label = styled.label`
  font-size: 3.4em;
  font-weight: bold;
  color: ${textColor};
  cursor: text;
  margin-bottom: 0.25em;
`;

export const TextInput = styled.input`
  font-size: 2.4em;
  color: ${textColor};
  padding-left: 0.5em;
  border: transparent;
  width: 100%;
  &:focus {
    outline: none;
  }
`;

export const TextArea = styled.textarea`
  font-size: 2.4em;
  color: ${textColor};
  padding-left: 0.5em;
  border: 2px solid ${themeColor};
  width: 100%;
  border-radius: 0.5em;
  resize: none;
  height: 6em;
  &:focus {
    outline: none;
  }
`;

export const FormTitle = styled(Title)`
  margin: 0;
`;

export const FormImageContainer = styled(ImageContainer)`
  width: 50%;
`;