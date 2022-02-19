import React, { useState, useEffect, useRef } from "react";
import {
  RecipeRightWrapper,
  RecipeRightContainer,
  TimerIcon,
  FlexContainer,
  LevelIcon,
  IconText,
  ServingIcon,
  RecipeSubtitle,
  InstructionList,
  InstructionContainer,
} from "./RecipeDetailElements";

const RecipeRight = () => {
  const [height, setHeight] = useState();
  const elRef = useRef();
  // const { offsetTop } = elRef.current;
  useEffect(() => {
    setHeight(elRef.current.offsetTop);
  }, []);
  return (
    <RecipeRightWrapper>
      <RecipeRightContainer>
        <FlexContainer>
          <TimerIcon />
          <IconText>45min</IconText>
        </FlexContainer>
        <FlexContainer>
          <LevelIcon />
          <IconText>Beginner</IconText>
        </FlexContainer>
        <FlexContainer>
          <ServingIcon />
          <IconText>2 Servings</IconText>
        </FlexContainer>
        <RecipeSubtitle>Ingredients</RecipeSubtitle>
        <InstructionContainer ref={elRef} height={height + 40}>
          <InstructionList>
            3/4 cup (94g) all-purpose flour (spoon & leveled)
          </InstructionList>
          <InstructionList>
            1/2 cup (41g) unsweetened natural cocoa powder
          </InstructionList>
          <InstructionList>3/4 teaspoon baking powder</InstructionList>
          <InstructionList>1/2 teaspoon baking soda</InstructionList>
          <InstructionList>1/4 teaspoon salt</InstructionList>
          <InstructionList>2 large eggs, at room temperature</InstructionList>
          <InstructionList>1/2 cup (100g) granulated sugar</InstructionList>
          <InstructionList>
            1/2 cup (100g) packed light brown sugar
          </InstructionList>
          <InstructionList>
            1/3 cup (80ml) vegetable or canola oil (or melted coconut oil)
          </InstructionList>
        </InstructionContainer>
      </RecipeRightContainer>
    </RecipeRightWrapper>
  );
};

export default RecipeRight;
