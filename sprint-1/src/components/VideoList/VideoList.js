import React from 'react';
import VideoSide from '../VideoSide/VideoSide'
import './VideoList.scss'

const VideoList = props => {

      return (
        <section>
        <h4>NEXT VIDEO</h4>
        <div id="sidevideo">{
            props.nextVideos.map((sideArray, index) =>
                <VideoSide 
                    key={index}
                    title={sideArray.title}
                    channel={sideArray.channel}
                    image={sideArray.image}
                />
            )
        }
        </div>
        </section>
          )
    };  



export default VideoList;