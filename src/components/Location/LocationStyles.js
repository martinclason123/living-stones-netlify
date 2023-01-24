import styled from "styled-components";

export const Map = styled.iframe`
  width: 182.2em;
  height: 84.4em;

  @media ${(props) => props.theme.breakpoints.sm} {
    width: 62em;
    height: 46.5em;
    margin: 0 auto;
  }
`;
