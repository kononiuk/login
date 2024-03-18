import React, { useState } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import { Input, Button, ErrorMessage } from '../../utils/StyledComponents';

interface ForgotPasswordProps {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}

interface FormErrors {
  email: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
`;

const SubmitButton = styled(Button)`
  margin-top: 25px;
`;

const ResetButton = styled(Button)`
  background-color: transparent;
  border: 1px solid #D3D8DC;
  color: #060E1E;
  margin-top: 16px;
  &:hover {
    background-color: #F7F9FA;
  }
`;

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ setStep }) => {
  const [email, setEmail] = useState<string>('');
  const [formErrors, setFormErrors] = useState<FormErrors>({ email: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let errors = { email: '', password: '' };
  
    if (!email.length) {
      errors.email = 'Email is required';
    } else if (!validator.isEmail(email)) {
      errors.email = 'Invalid email';
    } else {
      errors.email = '';
    }
    
    setFormErrors(errors);
  
    if (!errors.email) {
      console.log('Email and password are valid');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Enter your email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />
      <ErrorMessage $length={formErrors.email.length}>{formErrors.email}</ErrorMessage>
      <SubmitButton type="submit">Send</SubmitButton>
      <ResetButton type="reset">Cancel</ResetButton>
    </Form>
  );
}

export default ForgotPassword;