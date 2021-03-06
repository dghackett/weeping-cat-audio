import React from 'react';
import MetaTags from 'react-meta-tags';

export class Metatags extends React.Component{ 
    
    render(){
        return(     
        <div className="wrapper">
          <MetaTags>
            <title>Weeping Cat Audio</title>
            <meta name="description" content="Sound design, music, and game audio implementation based out of San Diego, California." />
            <meta property="og:title" content="Weeping Cat Audio" />
            <meta property="og:image" content="../../images/WeepingCatTitle/weepingcatlogo_x4_white.png" />
          </MetaTags>
        </div>
        );
    }
} 