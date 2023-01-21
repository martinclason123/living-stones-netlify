import React from "react";
import Accordion from "../Accordian/Accordian";

import { Title, Container, BeliefsList } from "./OurBeliefsStyles";

import { beliefs } from "@/constants/beliefs";
const OurBeliefs = () => {
  return (
    <Container>
      <Title>What we believe </Title>
      <BeliefsList>
        {beliefs.map(({ title, content }) => (
          <Accordion title={title} content={content} />
        ))}
      </BeliefsList>
    </Container>
  );
};
export default OurBeliefs;
