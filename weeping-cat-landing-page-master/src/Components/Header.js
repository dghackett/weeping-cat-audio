import React from 'react';
import {Helmet} from "react-helmet";

export class Header extends React.Component{ 
    
    render(){
        return(     
         <Helmet>
        <title>Weeping Cat Audio</title>
        <meta name="description" content="Sound design, music, and game audio implementation based out of San Diego, California." />
    </Helmet>
        );
    }
} 