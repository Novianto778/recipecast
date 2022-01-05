import React from 'react';
import { ListItem, ListContainer } from './CategoriesElements';

const CategoriesList = () => {
  return (
    <ListContainer>
      <ListItem>Breakfast</ListItem>
      <ListItem>Lunch</ListItem>
      <ListItem>Dinner</ListItem>
      <ListItem>Seafood</ListItem>
    </ListContainer>
  );
};

export default CategoriesList;
