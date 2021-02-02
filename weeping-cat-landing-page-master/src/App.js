import React from "react";
import "./App.css";
import { NavLink, Router } from "react-router-dom";
import { Provider, Heading, Subhead } from "rebass";
import { Component } from "react";
import { Title } from "./Components/Title/Title.js";
import { ReelSection } from "./Components/Body/ReelSection.js";
import { ProjectsSection } from "./Components/Body/ProjectsSection.js";
import { BioSection } from "./Components/Body/BioSection.js";
import { Socials } from "./Components/Socials/Socials.js";
import { Menu } from "./Components/Title/Menu.js";
import { Metatags } from "./Components/Metatags.js";
import { Container, Col, Row } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
                  <Metatags />
      </header>
      {/* <div>
        <Socials />
      </div> */}
            <Title className="top" />
            <Menu/>
            <a id=""><ReelSection /></a>
            <a id="projects"><ProjectsSection /></a>
            <a id="about-me"><BioSection /></a>
      <div class="bottom-padding"/>
    </div>
  );
}

export default App;
