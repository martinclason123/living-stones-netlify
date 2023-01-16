import Link from "next/link";
import Image from "next/image";
import React from "react";
import { images } from "../../constants/constants";
import { ImageContainer, SvgContainer } from "../../styles/GlobalComponents";
import { Section, Container, NavBar, NavLink } from "./HeaderStyles";

const Header = () => (
  <Section>
    <Container>
      <SvgContainer desktop={"35em"} mobile="41em" margin={"2em 10em"}>
        <Image
          fill
          src={images.logoWhite}
          alt="Living Stones Church Logo"
          className="image"
        ></Image>
      </SvgContainer>
      <NavBar>
        <Link href={"#about"}>
          <NavLink>About</NavLink>
        </Link>
        <Link href={"https://pushpay.com/g/livingstones"} target="_blank">
          <NavLink>Give</NavLink>
        </Link>
        <Link href={"#contact"} target="_blank">
          <NavLink>Contact</NavLink>
        </Link>
      </NavBar>
      <ImageContainer width={"12em"} margin={"2em"} smOnly>
        <Image
          fill
          src={images.hamburger}
          alt="menu icon"
          className="image"
        ></Image>
      </ImageContainer>
    </Container>
  </Section>
);

export default Header;
