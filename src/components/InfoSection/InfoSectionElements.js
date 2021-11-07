import styled, { css } from 'styled-components';

export const InfoWrapper = styled.section`
  margin-top: 2rem;
  grid-auto-columns: minmax(auto, 1fr);
  position: relative;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col1' 'col2'` : `'col1' 'col2'`};

  @media screen and (min-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `"col2 col1"` : `"col1 col2"`};
    margin-top: 5rem;
  }
`;

export const InfoContent = styled.div`
  align-self: center;
  grid-area: col1;
`;

export const InfoImageWrapper = styled.div`
  grid-area: col2;
  justify-self: ${({ imgStart }) => (imgStart ? 'start' : 'end')};
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
  }
`;

export const InfoImage = styled.img`
  max-width: 400px;
  width: 100%;
  height: auto;
`;

export const InfoHeading = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
`;

export const InfoText = styled.p`
  font-size: 1.2rem;
  color: var(--body);
`;

export const InfoPattern = styled.img`
  position: absolute;
  bottom: 0;
  ${({ imgStart }) =>
    imgStart &&
    css`
      right: 0;
    `};

  z-index: -2;
`;
