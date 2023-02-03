import { Section } from "@/styles/GlobalComponents";
import styled from "styled-components";

export const TestimonySection = styled(Section)`
  display: flex;
  margin: 5em auto;
  width: 155em;
  justify-content: space-between;
  @media (max-width: 640px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 55%;
  padding: 1em;
  margin: auto;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-size: 8em;
  white-space: nowrap;
  color: #ffffff;
  -webkit-text-stroke: 0.03em #7d7f7d;
  text-transform: uppercase;
  margin: 0 0 0 0.45em;

  text-align: center;

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 6em;
    margin: 0.5em 0;
    text-align: center;
  }
`;

export const TestimonyP = styled.p`
  font-size: 2.4em;
  max-width: 96%;
  color: #000000;
  font-weight: 500;
  margin: 0 auto;
  text-align: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    text-align: center;
  }
`;
