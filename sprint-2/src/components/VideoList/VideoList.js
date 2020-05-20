import React from 'react';
import VideoSide from '../VideoSide/VideoSide'
import './VideoList.scss'
import { Link } from 'react-router-dom';

const VideoList = props => {
    
      return (
        <section>
        <h4>NEXT VIDEO</h4>
        
        <div id="sidevideo" >{
            props.nextVideos.map((sideArray, index) =>
                <Link to={`/${sideArray.id}`} className="sidevideo__link"> 
                <VideoSide 
                    key={index}
                    title={sideArray.title}
                    channel={sideArray.channel}
                    image={sideArray.image}
                />
                </Link>
            )
        }
        </div>
        </section>
          )
    };  



export default VideoList;