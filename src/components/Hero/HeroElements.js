import styled from 'styled-components';

export const HeroSection = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  background-color: var(--primary);
  margin-top: var(--nav-height);

  @media screen and (min-width: 768px) {
    border-bottom-left-radius: 8%;
    border-bottom-right-radius: 8%;
  }
`;

export const HeroWrapper = styled.div`
  height: 100%;
`;

export const HeroContent = styled.div`
  align-self: center;
`;

export const HeroImageWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const HeroImage = styled.img`
  width: 320px;
  display: block;
  margin: 0 auto;
`;

export const HeroHeading = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  font-weight: 700;
`;

export const HeroText = styled.p`
  color: var(--body);
  font-size: 1.125rem;
`;
