import './Title.css';
import React from 'react';
import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import weepingCat from '../../images/WeepingCatTitle/weepingcatlogo_text_black.png';

export class Title extends Component{ 
    
    render(){
        return(
            <Container>
                        <Col lg={4}
                     md={4}
                     sm={12}
                     xs={12}
                     className="title-name-container">
                        <div className="">
                            <img src={weepingCat} alt="weepingCat" className="title-name"/>
                        </div>
                </Col>
            </Container>
        );
    }
} 