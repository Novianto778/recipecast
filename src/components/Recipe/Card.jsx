import React from 'react';
import Recipe from 'src/assets/images/best1.webp';
import {
  CardImage,
  CardContainer,
  CardTitle,
  CardContent,
  CardText,
  CardInfo,
  InfoTitle,
  InfoWrapper,
  WishlistIcon,
  WishlistWrapper,
} from './CardElements';

const Card = () => {
  return (
    <CardContainer>
      <WishlistWrapper>
        <WishlistIcon />
      </WishlistWrapper>
      <CardImage src={Recipe} alt="" />
      <CardContent>
        <CardTitle>Chocolate Pancake with Maple Syrup</CardTitle>
        <CardText>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore dicta
          ab impedit nesciunt, maiores excepturi.
        </CardText>
        <CardInfo>
          <InfoWrapper>
            <InfoTitle>Serving</InfoTitle>
            <InfoTitle>2</InfoTitle>
          </InfoWrapper>
          <InfoWrapper>
            <InfoTitle>Cooktime</InfoTitle>
            <InfoTitle>40min</InfoTitle>
          </InfoWrapper>
        </CardInfo>
      </CardContent>
    </CardContainer>
  );
};

export default Card;
