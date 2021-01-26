import './BioSection.css'; 
import '../../App.css';
import React from 'react';
import{ Component } from 'react'
import { Container, Col, Row } from "react-bootstrap";
import portrait from '../../images/Bio/2020_dylan_hackett_portrait_001.png';

export class BioSection extends Component{ 
    render(){
        return(
            <div class="white-text adjust-padding">
            
                <h4 class="header header-font">ABOUT ME</h4>
                
            <div class="bio-padding">
            <div>
            <div class="container">
        <div class="row d-flex justify-content-center no-gutters">
          
            {/* Profile Image */}
          <Col lg={4} md={"auto"} sm={6} xs={6}>
            <div class="center-element">
            <img src={portrait} alt="portrait" className="portrait-image"/>
            </div>
          </Col>
  
          {/* Description...TODO: vertically center text */}
          <Col lg={4} md={"auto"} sm={6} xs={6} className="d-flex">
                        <div class="align-self-center center-element">
            <div>Hello! I'm Dylan Hackett-Murgas and I do sound, music, and audio implementation for games as Weeping Cat Audio. Currently based in San Diego, Ca. Reach me at <a href="mailto:weepingcataudio@gmail.com" target="_blank" className="link" rel="noopener">weepingcataudio@gmail.com</a> to get in touch.</div> 
            </div>
          </Col>
            </div>
        </div>
      </div>
            </div>
            </div>
        );
    };
}
