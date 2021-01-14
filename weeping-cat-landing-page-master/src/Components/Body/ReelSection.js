import './ReelSection.css';
import React from 'react';
import{ Component } from 'react';



export class ReelSection extends Component{ 


    render(){
        return(
            <div class='center'>
            <div class='video-wrapper' align='center'>
                <iframe src="https://player.vimeo.com/video/391396213" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div>
            </div>
        );
    }


}