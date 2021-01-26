import './Title.css';
import '../../App.css';
import React from 'react';
import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import weepingCat from '../../images/WeepingCatTitle/weepingcatlogo_x4_white.png';

export class Title extends Component{ 
    
    render(){
        return(
            <div class="top-padding">
            <div class="container-fluid">
                <div class="row d-flex justify-content-around no-gutters">
                        <Col lg={4}
                     md={4}
                     sm={8}
                     xs={8}
                     className="">
                        <div class="flex-container">
                                <img src={weepingCat} alt="weepingCat" className="center-element title-image"/>
            <div class="title-text">
            <p className="title">Weeping Cat Audio</p>
            </div>
                        </div>
            
                </Col>
            
            </div>
            </div>
            </div>
        );
    }
} 