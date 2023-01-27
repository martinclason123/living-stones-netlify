import { useRef } from "react";
import { Title } from "../MissionStatement/MissionStatementStyles";
import {
  FormSection,
  FormContainer,
  Form,
  InputContainer,
  Label,
  TextInput,
} from "./ContactStyles";

const Contact = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <>
      <FormSection>
        <Title>Contact</Title>
        <FormContainer>
          <Form>
            <InputContainer onClick={handleClick}>
              <Label htmlFor="name">Name</Label>
              <TextInput ref={ref} type={"text"} id="name"></TextInput>
            </InputContainer>
          </Form>
        </FormContainer>
      </FormSection>
    </>
  );
};

export default Contact;
