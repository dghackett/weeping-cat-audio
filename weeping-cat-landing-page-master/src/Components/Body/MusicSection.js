import './MusicSection.css';
import '../../App.css';
import React from 'react';
import{ Component } from 'react';
import { Container, Col, Row } from "react-bootstrap";
import orbit from '../../images/Projects/orbit_clip.gif';
import crayonFace from '../../images/Projects/crayonface_clip.gif';
import mubu from '../../images/Projects/mubu_clip.gif';
import goatstory from '../../images/Projects/goatstory_clip.gif'
import pillowfort from '../../images/Projects/pillowfort_clip.gif'

export class MusicSection extends Component{ 

    render(){
        return(    
            
            <div class="music-section-padding">
            
                            <h4 class="header header-font">MUSIC</h4>            

             <div class="music-module-padding">
            
            {/*<div class="flex-container">*/}
           
            <div class="container-fluid">
                        <div class="row d-flex justify-content-around no-gutters">
            
            <Col lg={6} md={9} sm={12} xs={12}>
            <div class="center-element">
            <div class="bandcamp-player">
                <iframe frameborder="0" width="100%" src="https://bandcamp.com/EmbeddedPlayer/album=2284237026/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://weepingcataudio.bandcamp.com/album/pillow-fort">Pillow Fort by Weeping Cat Audio</a></iframe>
            </div>
            </div>
            </Col>
            
             <Col lg={6} md={9} sm={12} xs={12}>
            <div class="center-element">
            <div class="bandcamp-player">
            <iframe frameborder="0" width="100%" src="https://bandcamp.com/EmbeddedPlayer/track=492045743/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://weepingcataudio.bandcamp.com/track/goatstory-demo">GoatStory Demo by Weeping Cat Audio</a></iframe>
            </div> 
            </div>
            </Col>
            
            </div>
                        
            {/* <a id=""><div class="videoWrapper">
                <iframe src="https://player.vimeo.com/video/530552575?byline=false&title=false" width="1920" height="1080" frameborder="0" allow="autoplay; fullscreen " allowfullscreen title="GoatStory - Gameplay Trailer"></iframe>
            </div></a> */}
            
            
            
            
                    {/*  <div class="container-fluid">
                        <div class="row d-flex justify-content-around no-gutters">
            
            
                            
                                <Col lg={4} md={5} sm={5} xs={12}>                                    
                                    <div class="">
                            <div class="flex-container">
                            <div class="center-element">
                                <iframe frameborder="0" height="470px" src="https://bandcamp.com/EmbeddedPlayer/album=2284237026/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://weepingcataudio.bandcamp.com/album/pillow-fort">Pillow Fort by Weeping Cat Audio</a></iframe>
                            </div>
                            </div>
                                            
                                        
                                    </div>
                                </Col>                
            
                            
                                <Col lg={4} md={5} sm={5} xs={12}>                                    
                                    <div class="">
                                <div class="flex-container">
                                    <div class="center-element">
                                <iframe frameborder="0" height="470px" src="https://bandcamp.com/EmbeddedPlayer/track=492045743/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/" seamless><a href="https://weepingcataudio.bandcamp.com/track/goatstory-demo">GoatStory Demo by Weeping Cat Audio</a></iframe>
                                     </div>
                                    </div>
            
                                    </div>
                                </Col>
            
                    </div> 
                    </div> */}
            
        </div>
        </div>
            </div>
            
        );
    }


}