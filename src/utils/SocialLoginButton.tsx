import React from 'react';
import styled from 'styled-components';

interface SocialLoginButtonProps {
  src: string;
  alt: string;
  provider: string;
}

const SocialLoginButtonBlock = styled.div`
  align-items: center;
  border: 1px solid #D3D8DC;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-basis: 100%;
  font-weight: 500;
  padding: 15px 10px;
`;

const SocialLoginButtonLogo = styled.img`
  display: block;
  height: 1.125rem;
`;

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ src, alt, provider }) => {
  const handleClick = () => {
    console.log(`SSO with ${provider}`);
  };

  return (
    <SocialLoginButtonBlock onClick={handleClick}>
        <SocialLoginButtonLogo src={`/images/${src}`} alt={alt} />
        <span>{ provider }</span>
    </SocialLoginButtonBlock>
  );
};

export default SocialLoginButton;