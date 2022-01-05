import React from 'react';
import Navbar from 'src/components/Navbar/Navbar';
import Input from 'src/components/Input/Input';
import styled from 'styled-components';
import CategoriesList from 'src/components/Categories/CategoriesList';
import CategoriesMenu from 'src/components/Categories/CategoriesMenu';
import { CategoriesContent, GridContainer } from 'src/components/Categories/CategoriesElements';
import Card from 'src/components/Recipe/Card';

const Categories = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <CategoriesHeading>Discover Our Recipes</CategoriesHeading>
        <CategoriesMenu />
        <CategoriesContent>
          <CategoriesList />
          <GridContainer>
            <Card />
            <Card />
            <Card />
          </GridContainer>
        </CategoriesContent>
      </div>
    </>
  );
};

export default Categories;

const CategoriesHeading = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-top: calc(var(--nav-height) + 2rem);
`;
