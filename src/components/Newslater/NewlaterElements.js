import styled from 'styled-components';
import Button from 'src/components/Button/Button';

export const NewslaterSection = styled.section`
  margin-top: 5rem;
`;

export const NewslaterHeading = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  text-align: center;
`;

export const NewslaterInputContainer = styled.div`
  margin: 1rem auto;
  width: 90%;
  max-width: 500px;
  display: flex;
  position: relative;
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const NewslaterInput = styled.input`
  width: 100%;
  padding: 0.75rem 1.5rem;
  outline: 0;
  border: 0;
  border-radius: 40px;
  font-size: 1rem;
  background-color: #dedede;
  font-family: 'Montserrat', sans-serif;
  color: var(--body);
  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
`;

export const InputButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
`;
