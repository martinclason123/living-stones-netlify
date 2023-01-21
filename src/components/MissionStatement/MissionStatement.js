import React from "react";
import Image from "next/image";
import { images } from "../../constants/constants";
import {
  ImageContainer,
  Section,
  DesktopBreak,
  MobileBreak,
} from "../../styles/GlobalComponents";

import {
  Container,
  Title,
  Stroke,
  FloatingText,
} from "./MissionStatementStyles";

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
        <FloatingText desktopTop="26em" desktopLeft="5em" background="#ffffff">
          <Title>
            Bringing <Stroke>Jesus</Stroke> <DesktopBreak />
            to <MobileBreak /> Generations <DesktopBreak /> by the{" "}
            <MobileBreak />
            Power of&nbsp;
            <DesktopBreak />
            the <Stroke>Holy Spirit</Stroke>
          </Title>
        </FloatingText>
      </Container>
    </Section>
  );
};

export default MissionStatement;
