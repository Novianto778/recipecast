import React from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Wrapper,
} from "src/components/Recipe/RecipeDetail/RecipeDetailElements";
import RecipeLeft from "src/components/Recipe/RecipeDetail/RecipeLeft";
import RecipeRight from "src/components/Recipe/RecipeDetail/RecipeRight";
const RecipeDetail = () => {
  const { id } = useParams();
  return (
    <Wrapper>
      <Container className="container">
        <RecipeLeft />
        <RecipeRight />
      </Container>
    </Wrapper>
  );
};

export default RecipeDetail;
