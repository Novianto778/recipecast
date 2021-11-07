import styled from 'styled-components';

export const Btn = styled.button`
  padding: 0.75rem 2rem;
  outline: 0;
  border: 0;
  cursor: pointer;
  background-color: ${(props) =>
    props.primary ? 'var(--accent)' : 'var(--primary)'};
  color: ${(props) => (props.primary ? 'white' : 'black')};
  font-size: 1rem;
  font-family: 'Montserrat';
  margin-top: ${(props) => props.mt + 'rem' || 0};
  font-weight: 500;
  display: inline-block;
`;

export const ButtonRounded = styled(Btn)`
  border-radius: 40px;
`;

export const ButtonShaped = styled(Btn)`
  border-radius: 12px 0 12px 0;
`;
