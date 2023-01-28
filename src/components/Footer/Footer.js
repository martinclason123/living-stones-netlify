import React from "react";
import { FooterItem, FooterList, FooterSection } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterSection>
      <FooterList>
        <FooterItem>
          <a href="tel:6167887017">616.788.7017</a>
        </FooterItem>
        <FooterItem>|</FooterItem>
        <FooterItem>
          <a href="mailto:info@living-stones.church">
            info@living-stones.church
          </a>
        </FooterItem>
        <FooterItem>|</FooterItem>
        <FooterItem>P.O. BOX 311, Sand Lake, MI 49343</FooterItem>
      </FooterList>
    </FooterSection>
  );
};

export default Footer;
