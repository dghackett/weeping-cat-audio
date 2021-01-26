import './Menu.css';
import React from 'react';
import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';

export class Menu extends Component{ 
    
    render(){
        return(
            <div class="menu-padding white-text">
            <Container>
                        <div class="row d-flex justify-content-center">
                        
                        {/* <div>|</div> */}
                        <div class="item-padding"><a href="#showreel" className="link">SHOWREEL</a></div>
                        <div>|</div>
                        <div class="item-padding"><a href="#projects" className="link">PROJECTS</a></div>
                        <div>|</div>
                        <div class="item-padding"><a href="#about-me" className="link">ABOUT ME</a></div>
                        {/* <div>|</div> */}
            </div>
            </Container>
            </div>
        );
    }
} 