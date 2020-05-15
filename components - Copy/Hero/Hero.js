import React from 'react';
import './Hero.scss';
import posterVideo from '../../assets/Images/video-list-0.jpg' 
import videoPlay from '../../assets/Icon/Icon-play.svg';
import videoFull from '../../assets/Icon/Icon-fullscreen.svg';
import videoSound from '../../assets/Icon/Icon-volume.svg';
import videoSample from '../../assets/Video/BrainStationSampeVideo.mp4';


const Hero = () => {
    return (
        <div className='hero'>
            <video poster={posterVideo}>
                <source src={videoSample} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className='controls'>
                <img src={videoPlay} id='play' alt="videoPlay"/>
                <div className='videoProcess'>
                    <div id='progressbar'></div>
                    <span>0:00/0:42</span>
                </div>
                <div id='side'><img src={videoFull} alt="videoFull"/><img src={videoSound} alt="videoSound"/></div>
            </div>
        </div>
    );
  }

export default Hero;