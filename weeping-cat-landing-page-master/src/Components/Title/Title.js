import './Title.css';
import React from 'react';
import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import weepingCat from '../../images/WeepingCatTitle/weepingcatlogo_x4_white.png';

export class Title extends Component{ 
    
    render(){
        return(
            <div class="top-padding">
            <Container>
                        <Col lg={4}
                     md={4}
                     sm={8}
                     xs={8}
                     className="title-name-container">
                        <div className="">
                            <img src={weepingCat} alt="weepingCat" className="title-name"/>
                        </div>
            {/*<div class="title-text">
            <h4>Weeping Cat Audio</h4>
            </div>*/}
                </Col>
            </Container>
            </div>
        );
    }
} 