import React, { useState } from 'react';
import styled from 'styled-components';
import validator from 'validator';
import ApiController from '../../Api/ApiController';
import { Input, Button, ErrorMessage } from '../../utils/StyledComponents';

interface ForgotPasswordProps {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}

interface FormErrors {
  email: string;
  response: string;
}

const BASE_URL = 'https://auth-qa.qencode.com';
const RESET_ENDPOINT = '/v1/auth/password-reset';

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
  const [formErrors, setFormErrors] = useState<FormErrors>({ email: '', response: ''});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let errors = { email: '', response: '' };
  
    if (!email.length) {
      errors.email = 'Email is required';
    } else if (!validator.isEmail(email)) {
      errors.email = 'Invalid email';
    } else {
      errors.email = '';
    }
    
    setFormErrors(errors);
  
    if (!errors.email) {
      ApiController.postData(`${BASE_URL}${RESET_ENDPOINT}`, { email })
        .then(data => {
          console.log('Password reset successful:', data);
        })
        .catch(error => {
          setFormErrors({ ...errors, response: error.detail });
          console.error('Password reset failed:', error);
        });
    } else {
      setFormErrors(errors);
    }
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail('');
    setFormErrors({ email: '', response: ''});
    setStep('login');
  };

  return (
    <Form onSubmit={handleSubmit} onReset={handleReset}>
      <Input type="text" placeholder="Enter your email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />
      <ErrorMessage $length={formErrors.email.length}>{formErrors.email}</ErrorMessage>
      <SubmitButton type="submit">Send</SubmitButton>
      <ResetButton type="reset">Cancel</ResetButton>
      <ErrorMessage $length={formErrors.response.length}>{formErrors.response}</ErrorMessage>
    </Form>
  );
}

export default ForgotPassword;