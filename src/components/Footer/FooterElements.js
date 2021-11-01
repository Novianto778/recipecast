import styled, { css } from 'styled-components';

export const FooterSection = styled.footer`
  margin-top: 5rem;
  width: 100%;
  background-color: var(--secondary);
  padding: 2rem 0;
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem 0;
  }

  @media screen and (max-width: 478px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const FooterLogo = styled.img`
  width: 140px;
  align-self: center;
`;

export const FooterList = styled.p`
  color: var(--body);
  font-size: 1rem;
  margin-bottom: 1rem;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FooterItem = styled.div`
  align-self: center;
  display: flex;
  flex-direction: ${(props) => (props.row ? 'row' : 'column')};
  justify-content: space-between;
  max-width: ${(props) => (props.maxWidth ? '200px' : '100%')};
  ${(props) =>
    props.row &&
    css`
      ${FooterList} {
        margin-bottom: 0;
      }
    `}
`;
