import { Section } from "@/styles/GlobalComponents";
import styled from "styled-components";

export const FooterSection = styled(Section)`
  width: 100%;
  background: ${(props) => props.theme.colors.grey};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const FooterList = styled.ul`
  display: flex;
  padding: 4em;
  gap: 1em;
  justify-content: center;
`;

export const FooterItem = styled.li`
  text-decoration: none;
  color: #ffffff;
  font-size: 3em;
  font-weight: bold;
  a {
    color: #ffffff;
  }
  @media (max-width: 640px) {
    font-size: 1.6em;
    white-space: nowrap;
  }
`;

export const FooterText = styled.p`
  font-size: 2em;
  margin-bottom: 2em;
  font-weight: bold;
`;
