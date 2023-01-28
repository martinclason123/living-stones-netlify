import { Section } from "@/styles/GlobalComponents";
import styled from "styled-components";

export const FooterSection = styled(Section)`
  width: 100%;
  background: ${(props) => props.theme.colors.green};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterList = styled.ul`
  display: flex;
  padding: 4em;
  gap: 1em;
`;

export const FooterItem = styled.li`
  text-decoration: none;
  color: #ffffff;
  font-size: 3em;

  a {
    color: #ffffff;
  }
  @media (max-width: 640px) {
    font-size: 1.6em;
    white-space: nowrap;
  }
`;
