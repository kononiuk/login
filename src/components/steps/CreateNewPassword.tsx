import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import styled from 'styled-components';
import validator from 'validator';
import { Input, Button, ErrorMessage } from '../../utils/StyledComponents';

/**
 * Interface for CreateNewPasswordProps
 * @interface
 * @property {React.Dispatch<React.SetStateAction<string>>} setStep - Function to set the current step
 */
interface CreateNewPasswordProps {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}

/**
 * Interface for FormErrors
 * @interface
 * @property {string} password - Error message for the password field
 * @property {string} confirmPassword - Error message for the confirm password field
 */
interface FormErrors {
  password: string;
  confirmPassword: string;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
`;

const PasswordToggle = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const PasswordTitle = styled.span`
  font-size: 1rem;
  font-weight: 500;;
  line-height: 1.25rem;
  margin-bottom: 8px;
`;

const ConfirmPasswordTitle = styled(PasswordTitle)`
  margin-top: 16px;
`;

const PasswordWrapper = styled.div`
  position: relative;
`;

const SubmitButton = styled(Button)`
  margin-top: 25px;
`;

const HiddenInput = styled(Input)`
  display: none;
`;

/**
 * Component for resetting the password
 * @component
 * @param {CreateNewPasswordProps} props - Props for the component
 */
const ForgotPassword: React.FC<CreateNewPasswordProps> = ({ setStep }) => {
  const [formErrors, setFormErrors] = useState<FormErrors>({ password: '', confirmPassword: ''});
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  /**
   * Toggles the visibility of the password
   * @param {React.MouseEvent<HTMLButtonElement>} e - The mouse event
   */
  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  /**
   * Handles the form submission
   * @param {React.FormEvent} e - The form event
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let errors = { password: '', confirmPassword: '' };
  
    if (!password.length) {
      errors.password = 'Password is required';
    } else if (!validator.isLength(password, { min: 8 })) {
      errors.password = 'Password must be at least 8 characters long';
    } else {
      errors.password = '';
    }

    if (!confirmPassword.length) {
      errors.confirmPassword = 'Password is required';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    } else {
      errors.confirmPassword = '';
    }
    
    setFormErrors(errors);
  
    if (!errors.password && !errors.confirmPassword ) {
      console.log('Passwords are valid');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <HiddenInput type="text" id="username" name="username" autoComplete="username" style={{ display: 'none' }} />
      <PasswordTitle>Password</PasswordTitle>
      <PasswordWrapper>
        <Input type={showPassword ? 'text' : 'password'} placeholder="Password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <PasswordToggle onClick={togglePasswordVisibility}>
          {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
        </PasswordToggle>
      </PasswordWrapper>
      <ErrorMessage $length={formErrors.password.length}>{formErrors.password}</ErrorMessage>
      <ConfirmPasswordTitle>Confirm Password</ConfirmPasswordTitle>
      <PasswordWrapper>
        <Input type={showPassword ? 'text' : 'password'} placeholder="Password" autoComplete="current-password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <PasswordToggle onClick={togglePasswordVisibility}>
          {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
        </PasswordToggle>
      </PasswordWrapper>
      <ErrorMessage $length={formErrors.confirmPassword.length}>{formErrors.confirmPassword}</ErrorMessage>
      <SubmitButton type="submit">Reset Password</SubmitButton>
    </Form>
  );
}

export default ForgotPassword;