import React, { useState } from 'react';
import logo from '../logo.svg';
import Login from './steps/Login';
import Signup from './steps/Signup';
import ForgotPassword from './steps/ForgotPassword';
import CreateNewPassword from './steps/CreateNewPassword';
import styled from 'styled-components';

const LoginBlock = styled.div`
  align-items: stretch;
  color: #060E1E;
  display: flex;
  font-family: 'Basis Grotesque Pro', sans-serif;
  font-weight: normal;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
  max-width: 400px;
`;

const Logo = styled.img`
  height: 2rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  line-height: 2.375rem;
  margin: 80px auto 0;
`;

/**
 * Component for the login block
 * @component
 */
const LoginBlockComponent: React.FC = () => {
  const [step, setStep] = useState<string>('login');

  const titles: Record<string, string> = {
    login: 'Log in to your account',
    signup: 'Create an account',
    forgotPassword: 'Forgot Password?',
    createNewPassword: 'Create new Password?',
  };

  return (
    <LoginBlock>
      <Logo src={logo}/>
      <Title>{titles[step]}</Title>
      {/* Routers can also be used here */}
      {step === 'login' && <Login setStep={setStep} />}
      {step === 'signup' && <Signup setStep={setStep} />}
      {step === 'forgotPassword' && <ForgotPassword setStep={setStep} />}
      {step === 'createNewPassword' && <CreateNewPassword setStep={setStep} />}
    </LoginBlock>
  );
}

export default LoginBlockComponent;