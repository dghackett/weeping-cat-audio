import './Socials.css';
import React from 'react';
import { Component } from 'react';
//import { Container, Col, Row } from 'react-bootstrap';
import tumblr from '../../images/SocialIcons/Tumblr_Social_Icon_Circle_BW.png';
import instagram from '../../images/SocialIcons/Instagram_Social_Icon_Circle_BW.png';
import twitter from '../../images/SocialIcons/Twitter_Social_Icon_Circle_BW.png';

export class Socials extends Component{ 
    
    render(){
        return(
            <div className="socials-container">
            <a href="" target="_blank">
            <img
            src={tumblr}
            alt="tumblr"
            className="socials-icons"
          />
            </a>
            <a href="" target="_blank">
             <img
            src={instagram}
            alt="instagram"
            className="socials-icons"
          />
            </a>
            <a href="" target="_blank">
             <img
            src={twitter}
            alt="twitter"
            className="socials-icons"
          />
            </a>
            </div>
            );
    }
}