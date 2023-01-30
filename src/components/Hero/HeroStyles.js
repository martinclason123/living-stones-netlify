import styled from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.flex ? "flex" : "initial")};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  background: ${(props) =>
    props.background ? `${props.background}` : "transparent"};
  padding: ${(props) => (props.padding ? "32px 48px 0" : "0")};
  margin: 0 auto;
  max-width: 1920px;
  box-sizing: content-box;
  position: relative;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  overflow: hidden;
  padding-bottom: 5em;

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
export const HeroTitle = styled.h1`
  color: ${(props) => props.theme.colors.green};
  text-transform: uppercase;
  line-height: 0.9;
  margin-bottom: 0.1em;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 8em;
    width: 7em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 11.7em;
    width: 6em;
  }
`;
export const HeroSubtitle = styled.h2`
  color: #ffffff;
  text-transform: uppercase;
  margin: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 4.2em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 6.6em;
  }
`;

export const DetailsDiv = styled.div`
  background: #ffffff;
  margin-bottom: 1em;
  border: 1px solid ${(props) => props.theme.colors.grey};
  padding: 3em;
  border-radius: 4em;

  @media ${(props) => props.theme.breakpoints.sm} {
    border-radius: 4em;
    text-align: left;
    padding: 3em;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    -webkit-box-shadow: -5px 7px 14px 0px rgba(173, 164, 173, 0.51);
    -moz-box-shadow: -5px 7px 14px 0px rgba(173, 164, 173, 0.51);
    box-shadow: -5px 7px 14px 0px rgba(173, 164, 173, 0.51);
  }
`;

export const DetailsTitle = styled.h1`
  color: ${(props) => props.theme.colors.grey};
  font-weight: 900;
  margin: 0;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 3.2em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 5.3em;
  }
`;

export const DetailsP = styled.p`
  color: #000000;
  font-weight: 400;
  white-space: nowrap;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 2.6em;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 4.2em;
  }
`;

export const LeftSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;
