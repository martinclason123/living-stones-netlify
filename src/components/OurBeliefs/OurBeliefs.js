import React from "react";
import Accordion from "../Accordian/Accordian";

import { Title, Container, BeliefsList } from "./OurBeliefsStyles";

import { beliefs } from "@/constants/beliefs";
const OurBeliefs = () => {
  return (
    <Container id="about">
      <Title>What we believe </Title>
      <BeliefsList>
        {beliefs.map(({ title, content }, index) => (
          <Accordion key={index} title={title} content={content} />
        ))}
      </BeliefsList>
    </Container>
  );
};
export default OurBeliefs;
