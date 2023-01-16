import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { images } from "../../constants/constants";
import { ImageContainer, SvgContainer } from "../../styles/GlobalComponents";
import {
  Section,
  Container,
  NavBar,
  NavLink,
  SideBar,
  CloseButton,
  MobileMenu,
} from "./HeaderStyles";

const Header = () => {
  const [mobileToggle, setMobileToggle] = useState(false);

  return (
    <Section>
      {mobileToggle ? (
        <SideBar>
          <CloseButton
            onClick={() => {
              setMobileToggle(false);
            }}
          >
            X
          </CloseButton>
          <MobileMenu>
            <Link href={"#about"}>
              <NavLink color="black" size="5em">
                About
              </NavLink>
            </Link>
            <Link href={"https://pushpay.com/g/livingstones"} target="_blank">
              <NavLink color="black" size="5em">
                Give
              </NavLink>
            </Link>
            <Link href={"#contact"} target="_blank">
              <NavLink color="black" size="5em">
                Contact
              </NavLink>
            </Link>
          </MobileMenu>
        </SideBar>
      ) : null}

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
        <ImageContainer
          width={"12em"}
          margin={"2em"}
          smOnly
          onClick={() => {
            setMobileToggle(true);
          }}
        >
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
};

export default Header;
