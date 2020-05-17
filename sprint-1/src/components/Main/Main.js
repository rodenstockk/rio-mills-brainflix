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
          poster={this.state.onVideo.image}
          videoSample={this.state.onVideo.video}
        />
        <div className="belowVideo">
        <VideoDetail 
          comments={this.state.onVideo.comments}
          title={this.state.onVideo.title}
          channel={this.state.onVideo.channel}
          description={this.state.onVideo.description}
          views={this.state.onVideo.views}
          likes={this.state.onVideo.likes}
          timestamp={this.state.onVideo.timestamp}
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