import styled from 'styled-components';

export const BestWrapper = styled.section`
  margin-top: 5rem;
`;

export const BestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const BestSubHeading = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0;
  text-transform: uppercase;
`;

export const BestHeading = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  margin: 0;
`;

export const CardContainer = styled.div`
  margin-top: 4rem;
  align-items: flex-start;
  justify-items: center;
`;

export const BestCard = styled.div`
  width: auto;
  height: auto;
`;

export const CardImg = styled.img`
  max-width: 100%;
`;

export const CardTitle = styled.h4`
  padding: 0 1rem;
  font-size: 1.125rem;
  font-weight: 500;
  max-width: 80%;
`;

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardFooterText = styled.p`
  font-size: 1rem;
  color: var(--primary);
  font-weight: 500;
  padding: 0 1rem;
`;

export const IconWrapper = styled.span`
  vertical-align: middle;
  margin-right: 5px;
`;
