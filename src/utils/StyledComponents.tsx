import styled from 'styled-components';

interface ErrorMessageProps {
  $length: number;
}

export const Input = styled.input`
  border: 1px solid #D3D8DC;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 1rem;
  line-height: 1rem;
  padding: 16px;
  width: 100%;
  & + & {
    margin-top: 16px;
  }
`;

export const Button = styled.button`
  background-color: #316FEA;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1rem;
  cursor: pointer;
  padding: 16px;
  &:hover {
    background-color: #295bc1;
  }
`;

export const ErrorMessage = styled.span<ErrorMessageProps>`
  color: #FF5C5C;
  font-size: 0.875rem;
  line-height: 1rem;
  padding: ${(props) => (props.$length > 0 ? '0.5rem' : '0')} 0;
`;