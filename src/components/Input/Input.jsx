import React from 'react';
import {
  BaseInput,
  InputWrapper,
  SearchIcon,
  InputButton,
} from './InputElements';

const Input = (props) => {
  return (
    <InputWrapper bg={props.bg}>
      {props.variant === 'icon' ? (
        <SearchIcon />
      ) : (
        <InputButton variant="rounded">{props.text}</InputButton>
      )}
      <BaseInput />
    </InputWrapper>
  );
};

export default Input;
