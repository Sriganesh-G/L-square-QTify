import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SongsCard from "./components/SongsCard/SongsCard";
import Section from "./components/Section/Section";
import Carousel from "./components/Carousel/Carousel";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
      <Carousel />
    </>
  );
}

export default App;
