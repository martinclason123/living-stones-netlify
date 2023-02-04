import styled from "styled-components";
import Image from "next/image";

const themeColor = (props) => props.theme.colors.grey;
const textColor = (props) => props.theme.colors.grey;

import { ImageContainer, Section } from "@/styles/GlobalComponents";
import { Title } from "../MissionStatement/MissionStatementStyles";

export const FormSection = styled(Section)`
  width: 100%;
  display: flex;
  padding: 10em 0;
  position relative;
  overflow: hidden;
`;
export const FormContainer = styled.div`
  width: 65%;
  margin: 0 auto;
  border: 2px solid ${(props) => props.theme.colors.grey};
  display: flex;
  padding: 10em;
  border-radius: 5em;
  gap: 1em;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90%;
    padding: 5em 5em 10em 5em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    -webkit-box-shadow: -5px 7px 14px 0px rgba(173, 164, 173, 0.51);
    -moz-box-shadow: -5px 7px 14px 0px rgba(173, 164, 173, 0.51);
    box-shadow: -5px 7px 14px 0px rgba(173, 164, 173, 0.51);
  }
`;

export const Form = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 3em;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
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
  padding-top: 0.5em;

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
  color: ${(props) => props.theme.colors.grey};
  margin: 0;
`;

export const FormImageContainer = styled(ImageContainer)`
  width: 50%;
  border-top-right-radius: 80px 80px;
`;

export const StyledImage = styled(Image)`
  border-top-right-radius: 2em;
  border-bottom-right-radius: 2em;
`;

export const SubmitButton = styled.button`
  position: absolute;
  bottom: 5.2em;
  left: 18em;
  font-size: 2.4em;
  border: 2px solid ${(props) => props.theme.colors.grey};
  color: ${(props) => props.theme.colors.grey};
  background-color: #ffffff;
  padding: 0.5em 2em;
  border-radius: 1em;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #fff;
    background: ${(props) => props.theme.colors.green};
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    color: #fff;
    background: ${(props) => props.theme.colors.grey};
    border: transparent;
    left: 9.5em;
  }
`;

export const InvalidForm = styled.p`
  color: red;
  font-size: 1.8em;
  margin: 0;
  padding: 0;
`;

export const StatusMessage = styled.h1`
  font-size: 3.2em;
  color: ${themeColor};
`;
