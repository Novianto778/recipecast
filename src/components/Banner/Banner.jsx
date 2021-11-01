import React from 'react';
import Button from '../Button/Button';
import {
  BannerContainer,
  BannerContent,
  BannerHeading,
  BannerImg,
  BannerImgWrapper,
  BannerSection,
  BannerText,
} from './BannerElements';
import Img from 'src/assets/images/chef.webp';

const Banner = () => {
  return (
    <BannerSection>
      <BannerContainer className="container grid grid-cols-2">
        <BannerContent>
          <BannerHeading>Everyone Can Be a Chef</BannerHeading>
          <BannerText>
            Cooking become so easily with top recipes. Let's try now!
          </BannerText>
          <Button variant="shaped" primary mt={1}>
            Find Recipe
          </Button>
        </BannerContent>
        <BannerImgWrapper>
          <BannerImg src={Img} />
        </BannerImgWrapper>
      </BannerContainer>
    </BannerSection>
  );
};

export default Banner;
