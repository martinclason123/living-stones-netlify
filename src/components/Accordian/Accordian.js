import React, { useEffect, useState } from "react";
import {
  AccordianItem,
  AccordianTitle,
  AccordianContent,
  AccordianP,
} from "./AccordianStyles";

const Accordion = ({ title, content, expanded }) => {
  const [isActive, setIsActive] = useState(expanded);
  const [localActive, setLocalActive] = useState(false);

  useEffect(() => {
    setIsActive(expanded);
  });
  return (
    <>
      <AccordianItem className="accordion-item">
        <AccordianTitle onClick={() => setLocalActive(!localActive)}>
          <div>{title}</div>
          <div>{isActive || localActive ? "-" : "+"}</div>
        </AccordianTitle>
      </AccordianItem>
      {isActive || localActive ? (
        <AccordianContent>
          {" "}
          {content.map((paragraph, index) => {
            return <AccordianP key={index}> {paragraph}</AccordianP>;
          })}
        </AccordianContent>
      ) : null}
    </>
  );
};

export default Accordion;
