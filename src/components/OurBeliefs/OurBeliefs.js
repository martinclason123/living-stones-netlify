import React, { useState } from "react";
import Accordion from "../Accordian/Accordian";

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
    </Container>
  );
};
export default OurBeliefs;
