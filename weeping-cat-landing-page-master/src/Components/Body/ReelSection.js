import './ReelSection.css';
import '../../App.css';
import React from 'react';
import{ Component } from 'react';

export class ReelSection extends Component{ 


    render(){
        return(
            <div class="white-text top-padding">
            
            {/* <h4 class="header">Reel</h4> */}            

            <div class="container">
            <div class="videoWrapper">
                <iframe src="https://player.vimeo.com/video/391396213" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            </div>
            
            <div class="container">
            <div class="videoWrapper">
                <iframe src="https://player.vimeo.com/video/433003591" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            </div>
            </div>
        );
    }


}