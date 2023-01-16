import Hero from "@/components/Hero/Hero";
import MissionStatement from "@/components/MissionStatement/MissionStatement";
import React from "react";

import Header from "../components/Header/Header";
import { Container } from "./layoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Hero />
      <MissionStatement />
      <main>{children}</main>
      {/* <Footer /> */}
    </Container>
  );
};
