import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import SongsCard from "./components/SongsCard/SongsCard";
import Section from "./components/Section/Section";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
    </>
  );
}

export default App;
