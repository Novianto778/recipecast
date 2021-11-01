import React from 'react';
import {
  CardIcon,
  CardText,
  CategoriesCard,
  CategoriesContainer,
  CategoriesHeading,
  CategoriesSubHeading,
  CategoriesWrapper,
} from './CategoriesElements';
import Dessert from 'src/assets/images/dessert.webp';
import Salad from 'src/assets/images/salad.webp';
import Breakfast from 'src/assets/images/breakfast.webp';
import Meat from 'src/assets/images/meat.webp';

const CARD_DATA = [
  { id: 1, color: '#FFB802', title: 'dessert', icon: Dessert },
  { id: 2, color: '#84F468', title: 'salad', icon: Salad },
  { id: 3, color: '#B1E1ED', title: 'breakfast', icon: Breakfast },
  { id: 4, color: '#AE7E58', title: 'meat', icon: Meat },
];

const CategoriesSection = () => {
  return (
    <CategoriesWrapper className="container">
      <CategoriesSubHeading>Explore</CategoriesSubHeading>
      <CategoriesHeading>Our Recipes Categories</CategoriesHeading>
      <CategoriesContainer>
        {CARD_DATA.map((card) => {
          return (
            <CategoriesCard key={card.id} color={card.color}>
              <CardIcon src={card.icon} />
              <CardText>{card.title}</CardText>
            </CategoriesCard>
          );
        })}
      </CategoriesContainer>
    </CategoriesWrapper>
  );
};

export default CategoriesSection;
