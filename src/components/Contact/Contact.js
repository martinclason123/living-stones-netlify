import { images } from "../../constants/constants";
import FormField from "../FormFields/FormFields";
import {
  FormSection,
  FormContainer,
  Form,
  Label,
  TextArea,
  TextAreaContainer,
  FormTitle,
  FormImageContainer,
  StyledImage,
  SubmitButton,
} from "./ContactStyles";

const includedFields = [
  { type: "text", label: "Name", id: "name" },
  { type: "text", label: "Email", id: "email" },
  { type: "text", label: "Phone", id: "phone" },
];
const Contact = () => {
  return (
    <>
      <FormSection id="contact">
        <FormContainer>
          <Form>
            <FormTitle>Contact Us</FormTitle>
            {includedFields.map((data, index) => (
              <FormField
                type={data.type}
                label={data.label}
                id={data.id}
                key={index}
              />
            ))}

            <TextAreaContainer>
              <Label htmlFor="name">Message</Label>
              <TextArea type={"textarea"} id="message"></TextArea>
            </TextAreaContainer>
            <SubmitButton>Submit</SubmitButton>
          </Form>
          <FormImageContainer width={"50%"} lgOnly>
            <StyledImage
              fill
              src={images.contactPhoto}
              alt="Young woman"
              className="image"
            ></StyledImage>
          </FormImageContainer>
        </FormContainer>
      </FormSection>
    </>
  );
};

export default Contact;
