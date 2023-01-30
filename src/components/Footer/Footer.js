import React from "react";
import Image from "next/image";
import { SvgContainer } from "@/styles/GlobalComponents";
import { images } from "@/constants/constants";
import {
  FooterItem,
  FooterList,
  FooterSection,
  FooterText,
} from "./FooterStyles";

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
      <SvgContainer desktop={"35em"} mobile="41em" margin={"2em auto"}>
        <Image
          fill
          src={images.logoWhite}
          alt="Living Stones Church Logo"
          className="image"
          onClick={() => {
            window.location.href = "#home";
          }}
        ></Image>
      </SvgContainer>
      <FooterText>
        {new Date().getFullYear()} Living Stones Church, All Rights Reserved
      </FooterText>
    </FooterSection>
  );
};

export default Footer;
