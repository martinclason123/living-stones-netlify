import { useState } from "react";
import axios from "axios";

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
  InvalidForm,
  StatusMessage,
} from "./ContactStyles";

const Contact = () => {
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [phone, updatePhone] = useState("");
  const [message, updateMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [messageError, setMessageError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [success, setSuccess] = useState(false);
  const includedFields = [
    { type: "text", label: "Name", id: "name", handler: updateName },
    {
      type: "text",
      label: "Email",
      id: "email",
      handler: updateEmail,
      message: emailError,
      clickHandler: setEmailError,
    },
    { type: "text", label: "Phone", id: "phone", handler: updatePhone },
  ];
  const formValidator = () => {
    let errors = false;
    if (message.length < 10) {
      errors = true;
      setMessageError("Message must be at least 10 characters");
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setEmailError("Valid Email is required");
      errors = true;
    }

    return errors;
  };
  const handleSubmit = () => {
    let errors = formValidator();
    if (!errors) {
      let formMessage = `New message from ${name}:
        ${message}

        contact Information:
        Email: ${email}
        Phone: ${phone}
        `;
      setSubmitting(true);

      axios
        .post("https://submit-form.com/tVomusY5", {
          message: formMessage,
        })
        .then(function (response) {
          if (response.status === 200) {
            setSubmitting(false);
            setSuccess(true);
          }
        })
        .catch(function (response) {
          console.error(response);
        });
    }
  };

  return (
    <>
      <FormSection id="contact">
        <FormContainer>
          <Form>
            <FormTitle>Contact Us</FormTitle>
            {submitting ? (
              <StatusMessage>Submitting...</StatusMessage>
            ) : (
              <>
                {success ? (
                  <StatusMessage>Your Message has been sent.</StatusMessage>
                ) : (
                  <>
                    {includedFields.map((data, index) => (
                      <FormField
                        type={data.type}
                        label={data.label}
                        id={data.id}
                        handler={data.handler}
                        message={data.message}
                        clickHandler={data.clickHandler}
                        key={index}
                      />
                    ))}

                    <TextAreaContainer>
                      <Label htmlFor="name">Message</Label>
                      <TextArea
                        type={"textarea"}
                        id="message"
                        onClick={() => {
                          setMessageError(null);
                        }}
                        onChange={(e) => {
                          updateMessage(e.target.value);
                        }}
                      ></TextArea>
                    </TextAreaContainer>
                    {messageError ? (
                      <InvalidForm>{messageError}</InvalidForm>
                    ) : null}
                    <SubmitButton
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Submit
                    </SubmitButton>
                  </>
                )}
              </>
            )}
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
