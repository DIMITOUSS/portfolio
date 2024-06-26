import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const FormContainer = styled(motion.form)`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SubmitButton = styled(motion.button)`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Contact = () => {
  const [status, setStatus] = useState("Submit");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((response) => {
        if (response.ok) {
          setStatus("Form Submitted!");
          form.reset();
        } else {
          setStatus("Oops! There was a problem submitting your form");
        }
      })
      .catch((error) => {
        setStatus("Oops! There was a problem submitting your form");
      });
  };

  return (
    <FormContainer
      name="contact"
      method="POST"
      action="thank-you"
      data-netlify="true"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <input type="hidden" name="form-name" value="contact" />
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Input type="text" name="name" id="name" /> {/* added id */}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="email">Email address</Label>
        <Input type="email" name="email" id="email" /> {/* added id */}
      </FormGroup>
      <FormGroup>
        <Label htmlFor="message">Message</Label>
        <TextArea rows="5" name="message" id="message" /> {/* added id */}
      </FormGroup>
      <SubmitButton
        type="submit"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {status}
      </SubmitButton>
      <SocialIconsContainer>
        <SocialIcon target="_blank" url="https://www.linkedin.com/in/oussama-kechairi-871445109/" />
        <SocialIcon target="_blank" url="https://github.com/DIMITOUSS" />
      </SocialIconsContainer>
    </FormContainer>
  );
};

export default Contact;
