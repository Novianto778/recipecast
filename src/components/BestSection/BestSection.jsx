import React from 'react';
import Button from 'src/components/Button/Button';
import {
  BestCard,
  BestHeader,
  BestHeading,
  BestSubHeading,
  BestWrapper,
  CardContainer,
  CardFooter,
  CardFooterText,
  CardImg,
  CardTitle,
  IconWrapper,
} from './BestElements';
import { FaRegClock } from 'react-icons/fa';
import Best1 from 'src/assets/images/best1.webp';

const BestSection = () => {
  return (
    <BestWrapper className="container">
      <BestSubHeading>Explore</BestSubHeading>
      <BestHeader>
        <BestHeading>Our Best Recipe</BestHeading>
        <Button variant="rounded">More</Button>
      </BestHeader>
      <CardContainer className="grid grid-cols-3">
        <BestCard>
          <CardImg src={Best1} />
          <CardTitle>Chocolate Pancake with Maple Syrup</CardTitle>
          <CardFooter>
            <CardFooterText>Desert</CardFooterText>
            <CardFooterText>
              <IconWrapper>
                <FaRegClock />
              </IconWrapper>
              40min
            </CardFooterText>
          </CardFooter>
        </BestCard>
        <BestCard>
          <CardImg src={Best1} />
          <CardTitle>Special Salad with Veggie and Eggs</CardTitle>
          <CardFooter>
            <CardFooterText>Desert</CardFooterText>
            <CardFooterText>
              <IconWrapper>
                <FaRegClock />
              </IconWrapper>
              40min
            </CardFooterText>
          </CardFooter>
        </BestCard>
        <BestCard>
          <CardImg src={Best1} />
          <CardTitle>Steak with Special Chilli Sauce</CardTitle>
          <CardFooter>
            <CardFooterText>Desert</CardFooterText>
            <CardFooterText>
              <IconWrapper>
                <FaRegClock />
              </IconWrapper>
              40min
            </CardFooterText>
          </CardFooter>
        </BestCard>
      </CardContainer>
    </BestWrapper>
  );
};

export default BestSection;
