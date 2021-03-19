import './TitleMar21.css';
import '../../App.css';
import React from 'react';
import { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import weepingCatHeader from '../../images/WeepingCatTitle/weepingcatheader_reposition.png';
import threeStars from '../../images/WeepingCatTitle/three-stars_reposition.png';

export class TitleMar21 extends Component{ 
    
    render(){
        return(
            <div class="title-top">
            <div class="container">
  <div class="row">
    <Col lg={6} md={6} sm={8} xs={8} className=""> 
      <img src={weepingCatHeader} alt="weepingCatHeader" className="img-fluid"/> 
    </Col>
    <Col className="adjust-position">
      <img src={threeStars} alt="threeStars" className="shrink-stars adjust-position anchor-right"/>
    </Col>
  </div>
</div>
            </div>
        );
    }
} 