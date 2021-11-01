import React from 'react';
import {
  TaglineHeading,
  TaglinePattern,
  TaglineText,
  TaglineWrapper,
} from './TaglineElements';
import Wave from 'src/assets/images/wave-pattern.webp';

const Tagline = () => {
  return (
    <TaglineWrapper>
      <TaglineHeading>Start Make Your Favorite Food</TaglineHeading>
      <TaglineText>
        Vivamus ac molestie orci. Integer maximus augue mauris.
      </TaglineText>
      <TaglinePattern src={Wave} />
    </TaglineWrapper>
  );
};

export default Tagline;
