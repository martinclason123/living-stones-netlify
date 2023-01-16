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

export const Container = styled.div`
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Navigation Links
export const NavLink = styled.span`
  font-size: 3.2em;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: 700;
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
