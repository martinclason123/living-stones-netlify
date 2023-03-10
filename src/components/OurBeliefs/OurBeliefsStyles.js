import styled from "styled-components";
import { Section } from "@/styles/GlobalComponents";

export const Title = styled.h1`
  font-size: 10em;
  color: #ffffff;
  -webkit-text-stroke: 0.03em #7d7f7d;
  text-transform: uppercase;
  margin: 0 0 0.5em 2.3em;
  text-align: left;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 6em;
    margin-left: 0em;
    text-align: center;
  }
`;

export const Container = styled(Section)`
  width: 100%;
  margin-top: 8em;
  margin-bottom: 8em;

  background: @media ${(props) => props.theme.breakpoints.sm} {
    margin-top: 5em;
  }
`;

export const BeliefsList = styled.ul`
  width: 28em;
  margin: 0 auto;
  font-size: 5.2em;
  color: #ffffff;
  font-weight: bold;
  background: ${(props) => props.theme.colors.grey};
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 25em;
    font-size: 2.4em;
  }
`;

export const Expand = styled.button`
  color: ${(props) => props.theme.colors.grey};
  font-weight: bold;
  border: transparent;
  background: transparent;
  font-size: 3.2em;
  display: block;
  margin-left: auto;
  margin-right: 8em;
  cursor: pointer;
  padding-bottom: 1em;
  text-decoration: underline;
  text-underline-position: under;

  @media ${(props) => props.theme.breakpoints.sm} {
    margin-right: 1em;
    font-size: 2.4em;
  }
`;
