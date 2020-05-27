import React from 'react';
import videoPlay from '../../assets/Icon/Icon-play.svg';
import videoFull from '../../assets/Icon/Icon-fullscreen.svg';
import videoSound from '../../assets/Icon/Icon-volume.svg';

import './VideoPlaying.scss';


const VideoPlaying = props => {

      return (
        <>
        
        <div className='hero'>
            <video poster={props.poster}>
                <source src={props.videoSample} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='controls'>
                <img src={videoPlay} id='play' alt="videoPlay"/>
                <div className='videoProcess'>
                    <div id='progressbar'></div>
                    <span>0:00 / {props.duration}</span>
                </div>
                <div id='side'><img src={videoFull} alt="videoFull"/><img src={videoSound} alt="videoSound"/></div>
            </div>
        </div>
       
        
        </>
          )
    };  


export default VideoPlaying;