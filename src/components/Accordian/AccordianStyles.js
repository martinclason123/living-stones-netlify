const { default: styled } = require("styled-components");
import { keyframes } from "styled-components";

export const AccordianItem = styled.li`
  border-bottom: 1px solid #ffffff;
  font-size: 1em;
  padding: 0.25em 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1em 0;
  }
`;

export const AccordianTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.4em;
  }
`;
const slideInAnimation = keyframes`
0% { opacity: 0; }
100% { opacity: 1; }
`;

export const AccordianContent = styled.div`
  color: #000000;
  background: #ffffff;
  transition: "all 2s ease";
  border: 0.1em solid ${(props) => props.theme.colors.grey};

  width: 100%;
`;

export const AccordianP = styled.p`
  font-size: 0.8em;
  width: 80%;
  margin: 0 auto;
  padding: 0.5em 0;
  animation-name: ${slideInAnimation};
  animation-duration: 1s;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1em;
  }
`;
