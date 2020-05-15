import React from 'react';

class Section2 extends React.Component {

    render() {
      let {title, channel, image } = this.props
      return (
        <div className="sidevideo">
            <div className="sidevideo-image"><img alt="sidevideoImage" src={image} /></div>
            <div className="sidevideo-content">
                <div className="sidevideo-content__title">{title}</div>
                <div className="sidevideo-content__channel">{channel}</div>
            </div>
        </div>

          )
    };  
  }

export default Section2;