import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { BsSuitHeartFill } from "react-icons/bs";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 4fr 3fr;
  gap: 30px;
`;

export const Wrapper = styled.div`
  background-color: var(--primary);
  height: 100vh;
  padding-top: 2rem;
`;

export const RecipeLeftContainer = styled.div`
  /* overflow: scroll; */
`;

export const ArrowIcon = styled(BsArrowLeft)`
  width: 32px;
  height: 32px;
  color: #fff;
`;

export const LoveIcon = styled(BsSuitHeartFill)`
  width: 18px;
  height: 18px;
  color: #ff1b1b;
`;

export const RecipeSubtitle = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${(props) => (props.white ? "#fff" : "#000")};
  margin-bottom: 0;
`;

export const RecipeTitle = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  margin-top: 0.25rem;
  margin-bottom: 0.5rem;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LoveCount = styled.p`
  font-size: 1.15rem;
  color: #ff1b1b;
  margin-left: 0.5rem;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 0;
`;

export const InstructionContainer = styled.ul`
  display: list-item;
  padding-left: 20px;
  overflow-y: scroll;
  max-height: calc(100vh - ${(props) => props.height}px - 10px);
`;

export const InstructionList = styled.li`
  list-style: circle;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;