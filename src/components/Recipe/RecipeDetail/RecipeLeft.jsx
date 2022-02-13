import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import {
  ArrowIcon,
  FlexContainer,
  LoveCount,
  LoveIcon,
  RecipeSubtitle,
  RecipeTitle,
} from "./RecipeDetailElements";

const RecipeLeft = () => {
  return (
    <div>
      <ArrowIcon />
      <RecipeSubtitle>Desert</RecipeSubtitle>
      <RecipeTitle>Moist Chocolate Cupcakes</RecipeTitle>
      <FlexContainer>
        <LoveIcon />
        <LoveCount>1.2K</LoveCount>
      </FlexContainer>
    </div>
  );
};

export default RecipeLeft;
