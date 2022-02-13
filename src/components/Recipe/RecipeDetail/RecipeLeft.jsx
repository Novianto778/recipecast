import React, { useEffect, useRef, useState } from "react";
import {
  ArrowIcon,
  FlexContainer,
  InstructionContainer,
  InstructionList,
  LoveCount,
  LoveIcon,
  RecipeLeftContainer,
  RecipeSubtitle,
  RecipeTitle,
} from "./RecipeDetailElements";

const RecipeLeft = () => {
  const [height, setHeight] = useState();
  const elRef = useRef();
  // const { offsetTop } = elRef.current;
  useEffect(() => {
    setHeight(elRef.current.offsetTop);
  }, []);
  return (
    <RecipeLeftContainer>
      <ArrowIcon />
      <RecipeSubtitle white>Desert</RecipeSubtitle>
      <RecipeTitle>Moist Chocolate Cupcakes</RecipeTitle>
      <FlexContainer>
        <LoveIcon />
        <LoveCount>1.2K</LoveCount>
      </FlexContainer>
      <RecipeSubtitle>Instructions</RecipeSubtitle>
      <InstructionContainer ref={elRef} height={height}>
        <InstructionList>
          Preheat the oven to 350°F (177°C). Line a 12-cup muffin pan with
          cupcake liners. Line a second pan with 2 liners – this recipe makes
          about 14 cupcakes. Set aside.
        </InstructionList>
        <InstructionList>
          Cupcakes: Whisk the flour, cocoa powder, baking powder, baking soda,
          and salt together in a large bowl until thoroughly combined. Set
          aside. In a medium bowl, whisk the eggs, granulated sugar, brown
          sugar, oil, and vanilla together until combined. Pour half of the wet
          ingredients into the dry ingredients. Then half of the buttermilk.
          Gently whisk for a few seconds. Repeat with the remaining wet
          ingredients and buttermilk. Stir until *just* combined; do not
          overmix. The batter will be thin.
        </InstructionList>
        <InstructionList>
          Pour or spoon the batter into the liners. Fill only halfway (this is
          imperative! only halfway!) to avoid spilling over the sides or
          sinking.
        </InstructionList>
        <InstructionList>
          Bake for 18-21 minutes, or until a toothpick inserted in the center
          comes out clean. Allow to cool completely before frosting. I usually
          let them cool in the pan.
        </InstructionList>
        <InstructionList>
          Frost cooled cupcakes however you’d like. I used chocolate buttercream
          and Wilton 1M piping tip for these pictured cupcakes. Top with
          sprinkles, if desired. Store leftovers in the refrigerator for up to 5
          days.
        </InstructionList>
      </InstructionContainer>
    </RecipeLeftContainer>
  );
};

export default RecipeLeft;
