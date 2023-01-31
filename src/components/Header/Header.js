import Link from "next/link";
import Image from "next/image";

import React, { useEffect, useState } from "react";
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

const Header = (props) => {
  const [mobileToggle, setMobileToggle] = useState(false);

  // change nav color when scrolling
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeColor);
  });

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
            <Link
              href="#home"
              onClick={() => {
                setMobileToggle(false);
              }}
            >
              <NavLink color="black" size="5em">
                Home
              </NavLink>
            </Link>
            <Link
              href="#about"
              onClick={() => {
                setMobileToggle(false);
              }}
            >
              <NavLink color="black" size="5em">
                Beliefs
              </NavLink>
            </Link>
            <Link href={"https://pushpay.com/g/livingstones"} target="_blank">
              <NavLink color="black" size="5em">
                Give
              </NavLink>
            </Link>
            <Link
              href={"#contact"}
              onClick={() => {
                setMobileToggle(false);
              }}
            >
              <NavLink color="black" size="5em">
                Contact
              </NavLink>
            </Link>
          </MobileMenu>
        </SideBar>
      ) : null}

      <Container background={color ? `#a3afa7` : "transparent"}>
        <SvgContainer desktop={"35em"} mobile="41em" margin={"2em 10em"}>
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
        <NavBar>
          <Link href={"#about"}>
            <NavLink>Beliefs</NavLink>
          </Link>
          <Link href={"https://pushpay.com/g/livingstones"} target="_blank">
            <NavLink>Give</NavLink>
          </Link>
          <Link href={"#location"}>
            <NavLink>Location</NavLink>
          </Link>
          <Link href={"#contact"}>
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
