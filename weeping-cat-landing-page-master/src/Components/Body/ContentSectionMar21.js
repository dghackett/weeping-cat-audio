import './ContentSectionMar21.css'; 
import '../../App.css';
import React from 'react';
import{ Component } from 'react'
import { Container, Col, Row } from "react-bootstrap";
import orbit from '../../images/Projects/project_image_orbit_rounded.png';
import crayonFace from '../../images/Projects/project_image_crayonface_rounded_428x428.png';
import mubu from '../../images/Projects/project_image_mubu.png';

export class ContentSectionMar21 extends Component{ 
    render(){
        return(
            <div class="content-section-padding">
           
                <div class="container">
  
                    <div class="row">
            
                        <div class="col border">
                            <p>projects</p>
            
                                <div class="test-alt container no-gutters">
                                
                                    <div class="col">
                                        
                                        <div class="container">
            
                                        <div class="row no-gutters">
                                            
                                            <div class="col">
                                            <img src={orbit} alt="orbit" className="test project-image"/>
                                            </div>
            
                                            <div>
            
                                            <div class="col test noPadding">
                                            <p class="noPadding">title</p>
                                            </div>
                                            
                                            <div class="col test">
                                            <p>subtitle</p>
                                            </div>
            
                                            </div>
            
                                            <div class="col">
                                            <p class="description">description</p>
            {/*<img src={orbit} alt="orbit" className="project-image test"/>*/}
                                            </div>
            
                                             
                                        </div>
            
                                        </div>
            
                                    </div>
            
                                    <div class="w-100"></div> 
            
                                   
                                    
                                    <div class="w-100"></div> 
            
                                   
            
                                </div>
            
            
                        </div>
            
                        <div class="col border">
                            <p>contentcontentcontent</p>
                        </div>
            
                    </div>
            
                </div>
            
            </div>
        );
    };
}
