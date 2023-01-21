import React, { useState } from "react";
import {
  AccordianItem,
  AccordianTitle,
  AccordianContent,
  AccordianP,
} from "./AccordianStyles";

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordianItem className="accordion-item">
      <AccordianTitle onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? "-" : "+"}</div>
      </AccordianTitle>
      {isActive ? (
        <AccordianContent>
          {" "}
          {content.map((paragraph, index) => {
            return <AccordianP key={index}> {paragraph}</AccordianP>;
          })}
        </AccordianContent>
      ) : null}
    </AccordianItem>
  );
};

export default Accordion;
