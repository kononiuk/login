import React from 'react';
import styled from 'styled-components';

/**
 * Interface for SocialLoginButtonProps
 * @interface
 * @property {string} src - The source of the image
 * @property {string} alt - The alt text for the image
 * @property {string} provider - The name of the social login provider
 */
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

/**
 * Component for a social login button
 * @component
 * @param {SocialLoginButtonProps} props - Props for the component
 */
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