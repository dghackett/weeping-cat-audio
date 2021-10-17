import './ReelSectionMar21.css';
import '../../App.css';
import React from 'react';
import{ Component } from 'react';

export class ReelSectionMar21 extends Component{ 


    render(){
        return(    
            
            <div class="shrink-video">
            
            <div class="container border">
            <a id="showreel"><div class="videoWrapper">
                <iframe src="https://player.vimeo.com/video/391396213?byline=false&title=false" width="640" height="564" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
            </div></a>
            
            {/* <a id=""><div class="videoWrapper">
                <iframe src="https://player.vimeo.com/video/530552575?byline=false&title=false" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen " allowfullscreen title="GoatStory - Gameplay Trailer"></iframe>
            </div></a> */}
            
            </div>
            </div>
        );
    }


}