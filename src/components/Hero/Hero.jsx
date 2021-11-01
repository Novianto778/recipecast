import React from 'react';
import {
  HeroSection,
  HeroContent,
  HeroImage,
  HeroImageWrapper,
  HeroHeading,
  HeroText,
  HeroWrapper,
} from './HeroElements';
import ImageHero from 'src/assets/images/hero-image.png';
import Button from 'src/components/Button/Button';

const Hero = () => {
  return (
    <HeroSection>
      <HeroWrapper className="grid grid-cols-2 container">
        <HeroContent>
          <HeroHeading>Let’s Cooking with Favorite Recipes</HeroHeading>
          <HeroText>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus voluptatem consectetur mollitia cum optio placeat,
            reiciendis, provident veniam odio, iure esse nostrum eveniet amet
            itaque.
          </HeroText>
          <Button variant="shaped" mt={2} primary to="/recipe">
            Get Started
          </Button>
        </HeroContent>
        <HeroImageWrapper>
          <HeroImage src={ImageHero} />
        </HeroImageWrapper>
      </HeroWrapper>
    </HeroSection>
  );
};

export default Hero;
