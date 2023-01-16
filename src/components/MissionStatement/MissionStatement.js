import React from "react";
import Image from "next/image";
import { images } from "../../constants/constants";
import {
  ImageContainer,
  AbsoluteContent,
  Section,
} from "../../styles/GlobalComponents";

import { Container } from "./MissionStatementStyles";

const MissionStatement = () => {
  return (
    <Section>
      <Container>
        <ImageContainer width={"100%"} lgOnly>
          <Image
            fill
            src={images.missionStatementD}
            alt="Youth Group"
            className="image"
          ></Image>
        </ImageContainer>
        <ImageContainer width={"100%"} smOnly>
          <Image
            fill
            src={images.missionStatementM}
            alt="Youth Group"
            className="image"
          ></Image>
        </ImageContainer>
      </Container>
    </Section>
  );
};

export default MissionStatement;
