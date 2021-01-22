import './ProjectsSection.css'; 
import '../../App.css';
import React from 'react';
import{ Component } from 'react'
import { Container, Col, Row } from "react-bootstrap";
import orbit from '../../images/Projects/project_image_orbit.png';
import crayonFace from '../../images/Projects/project_image_crayonface.png';
import mubu from '../../images/Projects/project_image_mubu.png';

export class ProjectsSection extends Component{ 
    render(){
        return(
            <div class="white-text top-padding">
            
                <h4 class="header">PROJECTS</h4>            
            
            <div class= "top-padding test-alt">
                <Col lg={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
                                                
                        <div class="row d-flex justify-content-center no-gutters">
            
                            {/* crayon face*/}
                                <Col lg={4} md={4} sm={8} xs={8}>                                    
                                    <div class="test">
            
                                            <div class="flex-container">
                                            <div class="center-element">
                                            <img src={orbit} alt="orbit" className="project-image"/>  
                                            </div>
                                            <div class="text-block"><h6>Orbit (2020)</h6> <br></br> <a href="https://calcruikshank.itch.io/orb-it">itch.io</a> <br></br> music, sound design</div>
                                            
                                        </div>
                                    </div>
                                </Col>
            
                            {/* crayon face*/}
                                <Col lg={4} md={4} sm={8} xs={8}>                                    
                                    <div class="test">
            
                                            <div class="flex-container">
                                            <div class="center-element">
                                            <img src={crayonFace} alt="crayonFace" className="project-image"/>  
                                            </div>
                                            <div class="text-block"><h6>Crayon Face (2020)</h6> <br></br> <a href="https://apps.apple.com/us/app/crayon-face/id1485684532">iOS</a>, <a href="https://play.google.com/store/apps/details?id=com.hecticStudios.CrayonFaces">Android</a> <br></br> music, sound design, Wwise implementation</div>
                                            
            
                                        </div>
                                    </div>
                                </Col>
            
                            {/* crayon face*/}
                                <Col lg={4} md={4} sm={8} xs={8}>                                    
                                    <div class="test">
            
                                            <div class="flex-container">
                                            <div class="center-element">
                                            <img src={mubu} alt="mubu" className="project-image"/>  
                                            </div>
                                            <div class="text-block"><h6>Makeup Breakup (2020)</h6> <br></br> <a href="https://apps.apple.com/us/app/makeup-breakup/id1498274784?ls=1">iOS</a>, <a href="https://play.google.com/store/apps/details?id=com.BestTeamNA.MakeUpBreakUp">Android</a> <br></br> music, sound design</div>
                                            
            
                                        </div>
                                    </div>
                                </Col>
            
                        </div>
                    </Col>
                </div>
            </div>
        );
    };
}
