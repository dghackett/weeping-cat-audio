import './Menu.css';
import React from 'react';
import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export class Menu extends Component{ 
    
    render(){
        return(
            <div class="menu-padding white-text">
            <Container>
                        <div class="row d-flex justify-content-around no-gutters">
                        
                        {/* <div>|</div> */}
                        <div><a href="#showreel">SHOWREEL</a></div>
                        <div>|</div>
                        <div><a href="#projects">PROJECTS</a></div>
                        <div>|</div>
                        <div><a href="#about-me">ABOUT ME</a></div>
                        {/* <div>|</div> */}
            </div>
            </Container>
            </div>
        );
    }
} 