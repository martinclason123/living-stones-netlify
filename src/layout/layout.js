import Hero from "@/components/Hero/Hero";
import MissionStatement from "@/components/MissionStatement/MissionStatement";
import React from "react";
import Location from "@/components/Location/Location";

import Header from "../components/Header/Header";
import { Container } from "./layoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Hero />
      <MissionStatement />
      <Location />
      <main>{children}</main>
      {/* <Footer /> */}
    </Container>
  );
};
