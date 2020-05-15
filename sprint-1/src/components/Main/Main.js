import React from 'react';
// import videoListsData from '../../videoListsData';
//Merged two objects into one -> All in videoDetailData
import videoDetailData from '../../videoDetailData';
import './Main.scss'

import VideoPlaying from '../VideoPlaying/VideoPlaying';
import VideoDetail from '../VideoDetail/VideoDetail';
import VideoList from '../VideoList/VideoList';


class Main extends React.Component {
    state = {
      videoData: videoDetailData,
      onVideo: videoDetailData[0],

      // videoList: videoListData
      //Merged two objects into one -> All in videoDetailData
    }

    render() {

      return (
        <>
        <VideoPlaying
          poster={this.state.videoData[0].image}
          videoSample={this.state.videoData[0].video}
        />
        <div className="belowVideo">
        <VideoDetail 
          comments={this.state.videoData[0].comments}
          title={this.state.videoData[0].title}
          channel={this.state.videoData[0].channel}
          description={this.state.videoData[0].description}
          views={this.state.videoData[0].views}
          likes={this.state.videoData[0].likes}
          timestamp={this.state.videoData[0].timestamp}
        />
      
        <VideoList 
          nextVideos={this.state.videoData.filter(data => data !== this.state.onVideo)}
        />
        </div>
        </>
          )
    };  
  }

export default Main;