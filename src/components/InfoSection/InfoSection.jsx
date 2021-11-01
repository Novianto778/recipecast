import React from 'react';
import {
  InfoContent,
  InfoHeading,
  InfoText,
  InfoWrapper,
  InfoImageWrapper,
  InfoImage,
  InfoPattern,
} from './InfoSectionElements';
import Dot from 'src/assets/images/dot-pattern.webp';

import Button from '../Button/Button';

const InfoSection = (props) => {
  const { title, text, image, imgStart } = props;
  return (
    <InfoWrapper className="container grid" imgStart={imgStart}>
      <InfoContent>
        <InfoHeading>{title}</InfoHeading>
        <InfoText>{text}</InfoText>
        <Button variant="rounded" mt={2}>
          Read More
        </Button>
      </InfoContent>
      <InfoImageWrapper imgStart={imgStart}>
        <InfoImage src={image} />
      </InfoImageWrapper>
      <InfoPattern imgStart={imgStart} src={Dot} />
    </InfoWrapper>
  );
};

export default InfoSection;
