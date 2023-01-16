import React from "react";
import Image from "next/image";
import { images } from "../../constants/constants";
import { ImageContainer, AbsoluteContent } from "../../styles/GlobalComponents";

import { Container } from "../Header/HeaderStyles";
import {
  Section,
  HeroTitle,
  HeroSubtitle,
  DetailsDiv,
  DetailsTitle,
  DetailsP,
} from "./HeroStyles";

const Hero = () => (
  <Section>
    <Container>
      <ImageContainer width={"100%"} lgOnly>
        <Image
          fill
          src={images.hero}
          alt="Man preaching"
          className="image"
        ></Image>
      </ImageContainer>
      <ImageContainer width={"100%"} smOnly>
        <Image
          fill
          src={images.heroSmall}
          alt="Man preaching"
          className="image"
        ></Image>
      </ImageContainer>
    </Container>
    <AbsoluteContent
      mobileTop="20em"
      mobileLeft="2em"
      desktopTop="10em"
      desktopLeft="12em"
    >
      <HeroTitle>Living stones church</HeroTitle>
      <HeroSubtitle>Worship Jesus with us</HeroSubtitle>
    </AbsoluteContent>
    <AbsoluteContent
      mobileTop="77em"
      mobileLeft="25em"
      desktopTop="77em"
      desktopLeft="132em"
    >
      <DetailsDiv>
        <DetailsTitle>Worship Times</DetailsTitle>
        <DetailsP>Sundays 10:00am</DetailsP>
        <DetailsP>Wednesdays 6:30pm (youth)</DetailsP>
      </DetailsDiv>
    </AbsoluteContent>
  </Section>
);

export default Hero;
