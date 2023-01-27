import { useRef } from "react";
import Image from "next/image";
import { images } from "../../constants/constants";
import {
  FormSection,
  FormContainer,
  Form,
  InputContainer,
  Label,
  TextInput,
  TextArea,
  TextAreaContainer,
  FormTitle,
  FormImageContainer,
} from "./ContactStyles";

const Contact = () => {
  const ref = useRef(null);
  const handleClick = () => {
    ref.current.focus();
  };
  return (
    <>
      <FormSection>
        <FormContainer>
          <Form>
            <FormTitle>Contact Us</FormTitle>

            <InputContainer onClick={handleClick}>
              <Label htmlFor="name">Name</Label>
              <TextInput ref={ref} type={"text"} id="name"></TextInput>
            </InputContainer>
            <InputContainer onClick={handleClick}>
              <Label htmlFor="name">Email</Label>
              <TextInput ref={ref} type={"text"} id="email"></TextInput>
            </InputContainer>
            <InputContainer onClick={handleClick}>
              <Label htmlFor="name">Phone</Label>
              <TextInput ref={ref} type={"text"} id="phone"></TextInput>
            </InputContainer>
            <TextAreaContainer onClick={handleClick}>
              <Label htmlFor="name">Message</Label>
              <TextArea ref={ref} type={"textarea"} id="message"></TextArea>
            </TextAreaContainer>
          </Form>
          <FormImageContainer width={"50%"} lgOnly>
            <Image
              fill
              src={images.contactPhoto}
              alt="Young woman"
              className="image"
            ></Image>
          </FormImageContainer>
        </FormContainer>
      </FormSection>
    </>
  );
};

export default Contact;
