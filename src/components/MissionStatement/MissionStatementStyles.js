import styled from "styled-components";
import { AbsoluteContent } from "@/styles/GlobalComponents";

export const Container = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 8em;
  color: #c6d5cb;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 4.75em;
  }
`;

export const Stroke = styled.span`
  -webkit-text-stroke: 0.03em black;
  color: #ffffff;
`;

export const FloatingText = styled(AbsoluteContent)`
  border-radius: 4em;
  padding: 0 6em;
  border: 1px solid ${(props) => props.theme.colors.grey};
  @media ${(props) => props.theme.breakpoints.sm} {
    border: transparent;
    padding: 0;
    border-radius: 0;
    margin: 0;
    text-align: center;
    top: 33em;
    left: 7.5em;
    background: transparent;
  }
`;
