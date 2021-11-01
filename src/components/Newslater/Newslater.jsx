import React from 'react';
import {
  NewslaterHeading,
  NewslaterInput,
  NewslaterInputContainer,
  NewslaterSection,
  InputButton,
} from './NewlaterElements';

const Newslater = () => {
  return (
    <NewslaterSection classNames="container">
      <NewslaterHeading>
        Join Us to Receive Weekly Popular Recipe
      </NewslaterHeading>
      <NewslaterInputContainer>
        <NewslaterInput placeholder="Enter your email address" />
        <InputButton variant="rounded">Submit</InputButton>
      </NewslaterInputContainer>
    </NewslaterSection>
  );
};

export default Newslater;
