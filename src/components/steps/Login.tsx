import React, { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import styled from 'styled-components';
import validator from 'validator';
import SocialLoginButton from '../../utils/SocialLoginButton';
import { Input, Button, ErrorMessage } from '../../utils/StyledComponents';

interface LoginProps {
  setStep: React.Dispatch<React.SetStateAction<string>>;
}

interface EmailValidWrapperProps {
  $shown: boolean;
}

interface FormErrors {
  email: string;
  password: string;
}

const SocialLogin = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-top: 40px;
`;

const Divider = styled.div`
  align-items: center;
  display: flex;
  color: #BEC5CC;
  line-height: 1rem;
  margin-top: 30px;
  text-align: center;
  width: 100%;

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #BEC5CC;
  }

  &::before {
    margin-right: .5em;
  }

  &::after {
    margin-left: .5em;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  width: 100%;
`;

const EmailValidWrapper = styled.div<EmailValidWrapperProps>`
  display: ${(props) => (props.$shown ? 'block' : 'none')};
`

const PasswordToggle = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
`;

const PasswordWrapper = styled.div`
  margin-top: 16px;
  position: relative;
`;

const SubmitButton = styled(Button)`
  margin-top: 30px;
`;

const CallToAction = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const Link = styled.button`
  background: none;
  border: none;
  color: #316FEA;
  cursor: pointer;
  font-size: 1rem;
  padding: 0;
  text-decoration: underline;
`;

const ForgotPasswordWrapper = styled.div`
  margin-top: 20px;
  text-align: right;
`;

const Login: React.FC<LoginProps> = ({ setStep }) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isEmailValid, setIsEmailValid] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [formErrors, setFormErrors] = useState<FormErrors>({ email: '', password: '' });

  const togglePasswordVisibility = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let errors = { email: '', password: '' };
  
    if (!email.length) {
      errors.email = 'Email is required';
    } else if (!validator.isEmail(email)) {
      errors.email = 'Invalid email';
    } else {
      errors.email = '';
      setIsEmailValid(true);
    }
  
    if (!password.length && isEmailValid) {
      errors.password = 'Password is required';
    } else if (!validator.isLength(password, { min: 8 }) && isEmailValid) {
      errors.password = 'Password must be at least 8 characters long';
    } else {
      errors.password = '';
    }
    
    setFormErrors(errors);
  
    if (!errors.email && password.length && !errors.password) {
      console.log('Email and password are valid');
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <div>
      <SocialLogin>
        <SocialLoginButton src={'Google.png'} alt="google login" provider="Google" />
        <SocialLoginButton src={'Github.png'} alt="github login" provider="Github" />
      </SocialLogin>
      <Divider>or</Divider>
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Work email" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} />
        <ErrorMessage $length={formErrors.email.length}>{formErrors.email}</ErrorMessage>
        {/* Block hiding with styles was used to avoid warnings related to accessibility */}
        <EmailValidWrapper $shown={isEmailValid}>
          <PasswordWrapper>
            <Input type={showPassword ? 'text' : 'password'} placeholder="Password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <ErrorMessage $length={formErrors.password.length}>{formErrors.password}</ErrorMessage>
            <PasswordToggle onClick={togglePasswordVisibility}>
              {showPassword ? <FiEyeOff size={20} /> : <FiEye size={20} />}
            </PasswordToggle>
          </PasswordWrapper>
          <ForgotPasswordWrapper>
            <Link onClick={(e) => {e.preventDefault(); setStep('forgotPassword')}}>Forgot your password?</Link>
          </ForgotPasswordWrapper>
        </EmailValidWrapper>
        <SubmitButton type="submit">Log in to Qencode</SubmitButton>
      </Form>
      <CallToAction>
        <span>Is your company new to Qencode? </span>
        <Link onClick={() => setStep('signup')}>Sign up</Link>
      </CallToAction>
    </div>
  );
}

export default Login;