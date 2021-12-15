import React from "react";
import "./App.css";
import { NavLink, Router } from "react-router-dom";
import { Provider, Heading, Subhead } from "rebass";
import { Component } from "react";
import { TitleMar21 } from "./Components/Title/TitleMar21.js";
import { ReelSectionMar21 } from "./Components/Body/ReelSectionMar21.js";
import { ProjectsSectionMar21 } from "./Components/Body/ProjectsSectionMar21.js";
import { MusicSection } from "./Components/Body/MusicSection.js";
import { BioSectionMar21 } from "./Components/Body/BioSectionMar21.js";
import { Socials } from "./Components/Socials/Socials.js";
import { Menu } from "./Components/Title/Menu.js";
import { Metatags } from "./Components/Metatags.js";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App small-screen">
      <header className="App-header">
      </header>
      {/* <div>
        <Socials />
      </div> */}
            <Metatags />
            <TitleMar21/>
      {/*<Menu/>*/}
            <a id=""><ReelSectionMar21 /></a>
            <a id="projects"><ProjectsSectionMar21 /></a>
      <a id="music"><MusicSection /></a> 
      <a id="about-me"><BioSectionMar21 /></a>
      {/*<div class="bottom-padding"/>*/}
    </div>
  );
}

export default App;
