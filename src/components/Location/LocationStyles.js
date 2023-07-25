import { productionBrowserSourceMaps } from "next.config";
import { Section } from "@/styles/GlobalComponents";
import styled from "styled-components";

export const LocationSection = styled(Section)`
  display: flex;
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  background: ${(props) =>
    props.background ? `${props.background}` : "transparent"};
  padding: ${(props) => (props.padding ? "32px 48px 0" : "0")};
  margin: ${(props) => (props.margin ? props.margin : "0 auto")};
  max-width: 1920px;
  box-sizing: content-box;
  position: ${(props) => (props.position ? props.position : "relative")};

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 1.563vw;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 0.521vw;
  }
  @media ${(props) => props.theme.breakpoints.max} {
    font-size: 10px;
  }
`;

export const Map = styled.iframe`
  width: 182.2em;
  height: 84.4em;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 90vw;
    height: 46.5em;
    margin: 0 auto;
  }
`;
export const Address = styled.a`
  text-align: center;
  color: #ffffff;
  background: ${(props) => props.theme.colors.grey};
  margin: 0;
  padding: 1em;
  font-size: 3.2em;
  display: block;
  cursor: pointer;
  font-weight: bold;
  @media ${(props) => props.theme.breakpoints.sm} {
  }
`;
