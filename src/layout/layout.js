import Hero from "@/components/Hero/Hero";
import React from "react";

import Header from "../components/Header/Header";
import { Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Hero />
      <main>{children}</main>
      {/* <Footer /> */}
    </Container>
  );
};
