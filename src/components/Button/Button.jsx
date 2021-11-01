import React from 'react';
import { Btn, ButtonRounded, ButtonShaped } from './ButtonElements';

const Button = (props) => {
  if (props.variant === 'shaped') {
    return <ButtonShaped {...props}>{props.children}</ButtonShaped>;
  } else if (props.variant === 'rounded') {
    return <ButtonRounded {...props}>{props.children}</ButtonRounded>;
  }
  return <Btn {...props}>{props.children}</Btn>;
};

export default Button;
