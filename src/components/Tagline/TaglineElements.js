import styled from 'styled-components';

export const TaglineWrapper = styled.section`
  margin-top: 4rem;
  position: relative;
`;

export const TaglineHeading = styled.h1`
  font-weight: 600;
  text-align: center;
  margin-bottom: 0;
  margin: 0 auto;
  font-size: 1.8rem;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
    max-width: 400px;
    line-height: 1.4;
  }
`;

export const TaglineText = styled.p`
  color: var(--body);
  text-align: center;
  margin-top: 0.2rem;
`;

export const TaglinePattern = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 0;

  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;
