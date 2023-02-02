import Hero from "@/components/Hero/Hero";
import MissionStatement from "@/components/MissionStatement/MissionStatement";
import React from "react";
import Location from "@/components/Location/Location";
import OurBeliefs from "@/components/OurBeliefs/OurBeliefs";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Header from "../components/Header/Header";
import { Container } from "./layoutStyles";
import Testimony from "@/components/Testimony/Testimony";

export const Layout = ({ children }) => {
  return (
    <Container>
      <Header />
      <Hero />
      <MissionStatement />
      <Location />
      <OurBeliefs />
      <Testimony />
      <Contact />
      <Footer />
    </Container>
  );
};
