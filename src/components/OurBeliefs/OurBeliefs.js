import React, { useState } from "react";
import Accordion from "../Accordian/Accordian";
import Image from "next/image";

import { images } from "../../constants/constants";
import { ImageContainer } from "../../styles/GlobalComponents";
import { Title, Container, BeliefsList, Expand } from "./OurBeliefsStyles";

import { beliefs } from "@/constants/beliefs";
const OurBeliefs = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Container id="about">
      <Title>What we believe </Title>
      <Expand
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        {expanded ? "Collapse All" : "Expand all"}
      </Expand>
      <BeliefsList>
        {beliefs.map(({ title, content }, index) => (
          <Accordion
            key={index}
            title={title}
            content={content}
            expanded={expanded}
          />
        ))}
      </BeliefsList>
      <ImageContainer width={"50%"} margin={"10em auto 0 auto"} lgOnly>
        <Image
          fill
          src={images.divider}
          alt="divider"
          className="image"
        ></Image>
      </ImageContainer>
      <ImageContainer width={"80%"} margin={"10em auto 0 auto"} smOnly>
        <Image
          fill
          src={images.divider}
          alt="divider"
          className="image"
        ></Image>
      </ImageContainer>
    </Container>
  );
};
export default OurBeliefs;
