import styled, { keyframes } from 'styled-components';

const slide = keyframes`
  0% {
    right: 40%;
  }

  50% {
    right: 10%;
  }

  100% {
    right: 40%;
  }
`;

const slide30 = keyframes`
  0% {
    right: 30%;
  }

  50% {
    right: 10%;
  }

  100% {
    right: 30%;
  }
`;

export const BannerSection = styled.section`
  width: 100%;
  background: var(--primary);
  height: 300px;
  margin-top: 6rem;
  position: relative;
`;

export const BannerContainer = styled.div`
  height: 100%;
`;

export const BannerContent = styled.div`
  width: 100%;
  align-self: center;
  padding-right: 1rem;
`;

export const BannerHeading = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 0;
`;

export const BannerText = styled.p`
  color: var(--body);
  font-size: 1.25rem;
`;

export const BannerImgWrapper = styled.div`
  margin-left: 2rem;
  width: 220px;
  position: absolute;
  right: 40%;
  bottom: 20px;
  animation: ${slide} 4s ease-in-out infinite;

  @media screen and (max-width: 1024px) {
    animation: ${slide30} 3s ease-in-out infinite;
  }
`;

export const BannerImg = styled.img`
  width: 100%;
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;
