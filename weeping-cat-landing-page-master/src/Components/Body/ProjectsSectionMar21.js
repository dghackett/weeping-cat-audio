import './ProjectsSectionMar21.css'; 
import '../../App.css';
import React from 'react';
import{ Component } from 'react'
import { Container, Col, Row } from "react-bootstrap";
import orbit from '../../images/Projects/orbit_clip.gif';
import crayonFace from '../../images/Projects/crayonface_clip.gif';
import mubu from '../../images/Projects/mubu_clip.gif';
import goatstory from '../../images/Projects/goatstory_clip.gif'

export class ProjectsSectionMar21 extends Component{ 
    render(){
        return(
            <div class="project-section-padding">
            
            
                <h4 class="header header-font" >PROJECTS</h4>            
            
            
            {/*<Col lg={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>*/}
            
            {/* solution for having images with links not ruining flexbox is a bit involved but see here:
            https://stackoverflow.com/questions/57809321/wrapping-a-link-around-an-image-destroys-flexbox-layout-and-causes-browser-rende*/}
                          
            <div class="container-fluid">
                        <div class="row d-flex justify-content-around no-gutters">
            
            
                            {/* goatstory */}
                                <Col lg={4} md={5} sm={5} xs={12}>                                    
                                    <div class="project-element-spacing">
            
                                            <div class="flex-container">
                                            <div class="center-element">
                                            <img src={goatstory} alt="goatstory" className="project-image"/> 
                                            </div>
                                            <div class="text-block"><h6>GoatStory (In Development)</h6> <a href="https://twitter.com/hunterahackett" target="blank" className="link">GoatStory</a> <br></br>music, sound design, audio programming, gameplay trailer</div>
                                            
                                        </div>
                                    </div>
                                </Col>
                                        
                            {/* orbit*/}
                                <Col lg={4} md={5} sm={5} xs={12}>                                    
                                    <div class="project-element-spacing">
            
                                            <div class="flex-container">
                                            <div class="center-element">
                                            <img src={orbit} alt="orbit" className="project-image"/> 
                                            </div>
                                            <div class="text-block"><h6>Orbit (2020)</h6> <a href="https://calcruikshank.itch.io/orb-it" target="blank" className="link">itch.io</a> <br></br>sound design, audio programming</div>
                                            
                                        </div>
                                    </div>
                                </Col>
            
                            {/* crayon face*/}
                                <Col lg={4} md={5} sm={5} xs={12}>                                    
                                    <div class="project-element-spacing">
            
                                            <div class="flex-container">
                                            <div class="center-element">
                                            <img src={crayonFace} alt="crayonFace" className="project-image"/> 
                                            </div>
                                            <div class="text-block"><h6>Crayon Face (2020)</h6> <a href="https://apps.apple.com/us/app/crayon-face/id1485684532" target="blank" className="link">iOS</a>, <a href="https://play.google.com/store/apps/details?id=com.hecticStudios.CrayonFaces" target="blank" className="link">Android</a> <br></br> music, sound design, Wwise implementation</div>
                                            
            
                                        </div>
                                    </div>
                                </Col>
            
                            {/* mubu*/}
                                <Col lg={4} md={5} sm={5} xs={12}>                                    
                                    <div class="project-element-spacing">
            
                                            <div class="flex-container">
                                            <div class="center-element">
                                            <img src={mubu} alt="mubu" className="project-image"/>  
                                            </div>
                                            <div class="text-block"><h6>Makeup Breakup (2020)</h6> <a href="https://apps.apple.com/us/app/makeup-breakup/id1498274784?ls=1" target="blank" className="link">iOS</a>, <a href="https://play.google.com/store/apps/details?id=com.BestTeamNA.MakeUpBreakUp" target="blank" className="link">Android</a> <br></br> music, sound design, audio programming</div>
                                            
            
                                        </div>
                                    </div>
                                </Col>
                        </div>
                                            </div>
                                            {/*</Col>*/}
            </div>
        );
    };
}
