import styled from "styled-components";
import { keyframes } from "styled-components";

export const Section = styled.section`
  display: ${(props) => (props.flex ? "flex" : "initial")};
  flex-direction: ${(props) => (props.column ? "column" : "row")};
  background: ${(props) =>
    props.background ? `${props.background}` : "transparent"};
  padding: ${(props) => (props.padding ? "32px 48px 0" : "0")};
  margin: 0 auto;
  max-width: 1920px;
  box-sizing: content-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  overflow: hidden;

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

const slideInAnimation = keyframes`
0% { width: 0px; }
100% { width: 40em; }
`;

export const SideBar = styled.div`
  background-color: #ffffff;
  height: 100vh;
  z-index: 1000;
  color: black;
  transition: width 600ms ease-out;
  position: sticky;
  margin-left: auto;
  top: 0;
  left: 0;
  animation-name: ${slideInAnimation};
  animation-duration: 300ms;
  width: 40em;
  @media ${(props) => props.theme.breakpoints.md} {
    display: none;
  }
`;

export const NavBar = styled.nav`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  margin-right: 10em;
  gap: 7em;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: none;
  }
`;
export const CloseButton = styled.button`
  background: transparent;
  margin-left: auto;
  font-size: 6.4em;
  font-weight: 700;
  border: transparent;
  display: block;
  padding: 0.5em;
  color: black;
`;

export const MobileMenu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40em;
  justify-content: center;
  gap: 5em;
  text-align: left;
`;
export const Container = styled.div`
  background: ${(props) =>
    props.background ? props.background : "transparent"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background 600ms ease;
`;

// Navigation Links
export const NavLink = styled.span`
  font-size: ${(props) => (props.size ? props.size : "3.2em")};
  color: ${(props) => (props.color ? props.color : "#ffffff")};
  text-transform: uppercase;
  font-weight: 700;
  transition: all 1s ease;
  &:hover {
    text-decoration: underline;
    text-underline-position: under;
  }
`;

/// DropDown Contact
export const ContactDropDown = styled.button`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0;
  }
`;

// Social Icons

export const SocialIcons = styled.a`
  transition: 0.3s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`;
