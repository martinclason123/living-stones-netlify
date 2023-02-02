import React from "react";
import Image from "next/image";
import { images } from "../../constants/constants";
import { ImageContainer } from "../../styles/GlobalComponents";
import {
  TestimonySection,
  TextContainer,
  Title,
  TestimonyP,
} from "./TestimonyStyles";

const Testimony = () => {
  return (
    <TestimonySection id="testimony">
      <ImageContainer width={"60%"} lgOnly>
        <Image
          fill
          src={images.testimonyD}
          alt="Pastor and wife"
          className="image"
        ></Image>
      </ImageContainer>
      <ImageContainer width={"100%"} smOnly>
        <Image
          fill
          src={images.testimonyM}
          alt="Pastor and wife"
          className="image"
        ></Image>
      </ImageContainer>
      <TextContainer>
        <Title>Our testimony</Title>
        <TestimonyP>
          Mitch & Erica Taylor have been called by God to to bring Jesus to
          generations by the power of the Holy Spirit. Living Stones Church was
          birthed on July 10th, 2022 under a tent in their backyard. They have
          seen the hand of God on their lives and within the Family of Living
          Stones! Married in 2004 with 4 children, Mitch & Erica got radically
          saved by Jesus in 2011 and life has never been the same. They have
          seen revival take place in their lives and the lives of their
          children. Both Mitch & Erica have faithfully served within multiple
          ministries since being transformed by Jesus. Stepping out in faith,
          launching Living Stones, to trust God fully has been and will continue
          to be the most exciting time of their lives!
        </TestimonyP>
      </TextContainer>
    </TestimonySection>
  );
};

export default Testimony;
