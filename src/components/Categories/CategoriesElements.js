import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoriesWrapper = styled.section`
  margin-top: 5rem;
`;

export const CategoriesSubHeading = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0;
  text-transform: uppercase;
`;

export const CategoriesHeading = styled.h2`
  font-size: 1.7rem;
  font-weight: 600;
  margin-top: 0;
`;

export const CategoriesContainer = styled.div`
  margin-top: 4rem;
  display: grid;
  gap: 2rem;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 478px) {
    row-gap: 4rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const CardIcon = styled.img`
  width: 160px;
  position: absolute;
  bottom: 50%;
  left: 30%;
  right: 0;
  transition: all 0.3s ease-in-out;

  @media screen and (min-width: 768px) {
    width: 140px;
    right: -20px;
  }
`;

export const CategoriesCard = styled.div`
  width: calc(100% - 40px);
  height: 250px;
  background-color: ${(props) => props.color || 'var(--primary)'};
  position: relative;
  border-radius: 20px;
  cursor: pointer;

  &:hover ${CardIcon} {
    width: 180px;

    @media screen and (min-width: 768px) {
      width: 160px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 200px;
  }
`;

export const CardText = styled.p`
  position: absolute;
  color: #000;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  text-transform: capitalize;
  font-weight: 500;
`;

// categories list
export const ListContainer = styled.div`
  display: none;
  grid-template-columns: minmax(auto, 1fr) minmax(auto, 1fr);
  grid-auto-rows: max-content;
  max-width: 320px;
  margin: 1rem 4rem 0 0;

  @media screen and (min-width: 768px) {
    display: grid;
  }
`;

export const ListItem = styled.span`
  font-size: 0.875rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary);
  border-radius: 70px;
  width: max-content;
  height: max-content;
  font-weight: 500;
`;

export const CategoriesTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CategoriesContent = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;
  justify-items: center;

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;
