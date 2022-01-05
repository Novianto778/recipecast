import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

export const WishlistIcon = styled(FaHeart)`
  width: 42px;
  height: 42px;
  fill: red;
`;

export const WishlistWrapper = styled.span`
  width: 52px;
  height: 52px;
  padding: 1rem;
  position: absolute;
  right: 20px;
  top: 20px;
  background-color: #fff;
  border-radius: 50%;
  transition: all 0.5s ease-in-out;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  position: relative;
  background-color: #fff;
  width: 300px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  cursor: pointer;

  &:hover ${WishlistWrapper} {
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }
`;

export const CardImage = styled.img`
  height: 160px;
  width: 100%;
  background-size: cover;
`;

export const CardContent = styled.div`
  padding: 1rem;
  background-color: #fff;
`;

export const CardTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-top: 0;
  margin-bottom: 0.5rem;
`;

export const CardText = styled.p`
  font-size: 0.925rem;
  color: var(--accent);
  font-weight: 500;
`;
export const CardInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

export const InfoWrapper = styled.div`
  justify-self: center;
`;

export const InfoTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0;
  margin-top: 0.5rem;
`;
