import React from 'react';
import './VideoSide.scss'

class VideoSide extends React.Component {

    render() {
      let {title, channel, image } = this.props
      return (
        <article className="sidevideo">
            <div className="sidevideo-image"><img alt="sidevideoImage" src={image} /></div>
            <div className="sidevideo-content">
                <span className="sidevideo-content__title">{title}</span>
                <span className="sidevideo-content__channel">{channel}</span>
            </div>
        </article>

          )
    };  
  }

export default VideoSide;