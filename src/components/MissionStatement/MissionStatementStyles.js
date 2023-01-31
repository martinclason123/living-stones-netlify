import styled from "styled-components";
import { AbsoluteContent } from "@/styles/GlobalComponents";
import { Section } from "@/styles/GlobalComponents";

export const Container = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

export const Title = styled.h1`
  font-size: 8em;
  color: ${(props) => props.theme.colors.green};
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
  width: 72em;
  white-space: nowrap;

  border: 1px solid ${(props) => props.theme.colors.grey};
  @media ${(props) => props.theme.breakpoints.sm} {
    border: transparent;
    padding: 0;
    border-radius: 0;
    margin: 0;
    text-align: center;
    top: 33em;
    left: 5.6em;
    background: transparent;
    width: 52em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    -webkit-box-shadow: -5px 7px 14px 0px rgba(173, 164, 173, 0.51);
    -moz-box-shadow: -5px 7px 14px 0px rgba(173, 164, 173, 0.51);
    box-shadow: -5px 7px 14px 0px rgba(173, 164, 173, 0.51);
  }
`;
