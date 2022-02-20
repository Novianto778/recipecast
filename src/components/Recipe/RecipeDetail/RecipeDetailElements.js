import styled, { css } from "styled-components";
import { BsArrowLeft, BsSuitHeartFill, BsFillPersonFill } from "react-icons/bs";
import { MdTimer, MdSignalCellular1Bar } from "react-icons/md";

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
  margin-top: 0.5rem;
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
  max-height: calc(100vh - ${(props) => props.height}px - 20px);
  scrollbar-width: thin;
  scrollbar-color: #6969dd #e0e0e0;
  padding-right: 3rem;
`;

export const InstructionList = styled.li`
  list-style: circle;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  font-weight: 500;
`;

export const RecipeRightWrapper = styled.div`
  height: calc(100vh - 4rem);
`;

export const RecipeRightContainer = styled.div`
  padding: 1rem;
  background-color: #fff;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  position: relative;
`;

const Icon = css`
  width: 28px;
  height: 28px;
  color: var(--primary);
  margin-right: 1rem;
`;

export const TimerIcon = styled(MdTimer)`
  ${Icon}
`;

export const LevelIcon = styled(MdSignalCellular1Bar)`
  ${Icon}
`;

export const ServingIcon = styled(BsFillPersonFill)`
  ${Icon}
`;

export const IconText = styled.p`
  font-size: 0.875rem;
  font-weight: 500;
`;

export const RecipeMenu = styled.div`
  width: calc(100% - 1.5rem);
  padding: 0.75rem 0.5rem;
  position: absolute;
  margin: 0 auto;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.75rem;
  background-color: #e2e2e2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const IconButton = styled.button`
  font-size: 1.25rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    color: #ff1b1b;
  }
`;
