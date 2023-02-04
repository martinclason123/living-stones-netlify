import { productionBrowserSourceMaps } from "next.config";
import styled from "styled-components";

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
