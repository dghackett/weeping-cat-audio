import './ReelSection.css';
import '../../App.css';
import React from 'react';
import{ Component } from 'react';

export class ReelSection extends Component{ 


    render(){
        return(
            <div class="white-text reel-section-padding">
            
            <h4 class="header">SHOWREEL</h4>           

            <div class="reels-container">
            <div class="container">
            <a id="showreel"><div class="videoWrapper">
                <iframe src="https://player.vimeo.com/video/391396213" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div></a>
            </div>
            
            <div class="container">
            <div class="videoWrapper">
                <iframe src="https://player.vimeo.com/video/433003591" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            </div>
            </div>
            </div>
        );
    }


}