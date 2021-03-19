import './BioSectionMar21.css'; 
import '../../App.css';
import '../Socials/Socials.css'; 
import React from 'react';
import{ Component } from 'react'
import { Container, Col, Row } from "react-bootstrap";
import portrait from '../../images/Bio/profile_simple.png';
import gmail from '../../images/SocialIcons/gmail.png';
import instagram from '../../images/SocialIcons/Instagram_Social_Icon_Circle_BW.png';
import twitter from '../../images/SocialIcons/Twitter_Social_Icon_Circle_BW.png';
import linkedin from '../../images/SocialIcons/linkedin.png';
import discord from '../../images/SocialIcons/discord.png';

export class BioSectionMar21 extends Component{ 
    render(){
        return(
            <div class="bio-padding">
            
               {/* <h4 class="header header-font"></h4>*/}
                
            <div class="container">
            
        <div class="row d-flex justify-content-center no-gutters border">
          
            {/* Profile Image */}
          <Col lg={6} md={6} sm={8} xs={8} className="align-self-center">
            <div class="center-element">
            <img src={portrait} alt="portrait" className="portrait-image"/>
            </div>
          </Col>
  
          {/* Description*/}
          <Col className="align-self-center">
            <div class="row d-flex justify-content-center bio-text">
                        <div class="col">
            <div class="bio-text"><h8>Hello! I'm Dylan. I do sound, music, and audio implementation for games as Weeping Cat Audio. Currently based in San Diego, Ca. Reach me at <a href="mailto:weepingcataudio@gmail.com" target="_blank" className="link" rel="noopener">weepingcataudio@gmail.com</a> or anywhere below to get in touch. Discord: weepingcat#9636.</h8></div> 
            </div>
           
            <div class="w-100"></div>
            
            <div class=""><br></br></div>
            
            <div class="w-100"></div>
            
            <div class="">
            
            <div class="d-flex flex-row justify-content-center col">            
            
            <div class="socials-icons center-element">
            <a href="weepingcataudio@gmail.com" target="_blank">
            <img
            src={gmail}
            alt="gmail"
            className="img-fluid"
          /></a>
            </div>
            
            <div class="socials-icons center-element">
            <a href="https://www.linkedin.com/in/dylan-hackett-murgas-13139943/" target="_blank">
            <img
            src={linkedin}
            alt="linkedin"
            className="img-fluid"
          /></a>
            </div>
            
            <div class="socials-icons center-element">
            <a href="https://discord.com/invite/vweVRmh" target="_blank">
            <img
            src={discord}
            alt="discord"
            className="img-fluid"
          /></a>
            </div>
            
            <div class="socials-icons center-element">
            <a href="https://www.instagram.com/weepingcat__/" target="_blank">
            <img
            src={instagram}
            alt="instagram"
            className="img-fluid"
          /></a>
            </div>
            
            <div class="socials-icons center-element">
            <a href="https://twitter.com/weepingcataudio" target="_blank">
            <img
            src={twitter}
            alt="twitter"
            className="img-fluid"
          /></a>
            </div>
            
            
            </div>
            
            </div>
            
            <div class="w-100"></div>
            
            <div class=""><br></br></div>
                        
             </div>
            
            
          </Col>
            </div>
            </div>
            </div>
        );
    };
}
