import styled from 'styled-components';
import Button from 'src/components/Button/Button';
import { FaSearch } from 'react-icons/fa';

export const BaseInput = styled.input`
  width: 100%;
  padding: 0.75rem 2.5rem;
  outline: 0;
  border: 0;
  border-radius: 40px;
  font-size: 1rem;
  font-family: 'Montserrat', sans-serif;
  color: var(--body);
`;

export const InputWrapper = styled.div`
  margin: 1rem auto;
  position: relative;
  /* width: ${(props) => props.width + '%'}; */
  width: 100%;
  max-width: 500px;
  ${BaseInput} {
    background-color: ${(props) => (props.bg === 'white' ? '#fff' : '#ececec')};
    box-shadow: ${(props) =>
      props.bg === 'white'
        ? 'rgba(149, 157, 165, 0.2) 0px 8px 24px'
        : 'rgba(33, 35, 38, 0.1) 0px 10px 10px -10px'};
  }
`;

export const SearchIcon = styled(FaSearch)`
  width: 32px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: var(--body);
`;

export const InputButton = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  height: 100%;
`;

export const SelectWrapper = styled.select`
  outline: 0;
  border: 0;
  padding: 0.5rem 1rem;
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const OptionItem = styled.option`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
`;
