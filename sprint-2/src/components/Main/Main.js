import React from 'react';
// import videoListsData from '../../videoListsData';
//Merged two objects into one -> All in videoDetailData
// import videoDetailData from '../../videoDetailData';
import './Main.scss'
import axios from 'axios';

import VideoPlaying from '../VideoPlaying/VideoPlaying';
import VideoDetail from '../VideoDetail/VideoDetail';
import VideoList from '../VideoList/VideoList';


// https://project-2-api.herokuapp.com/videos?api_key=b5c0dbae-f440-4369-9169-8baa9b60cfb8

const API_URL = 'https://project-2-api.herokuapp.com';
const API_KEY = '?api_key=1749a3e2-2fcc-49c3-b8c4-9cc4d27a9a88';
const MAIN_URL = '1af0jruup5gu'


class Main extends React.Component {
    state = {
      // videoData: videoDetailData,
      onVideo: {
        comments: []
      },
      
      videoList: [],
    }


    componentDidMount() {
      // console.log(this.props)

      axios
      .get(`${API_URL}/videos/${MAIN_URL}${API_KEY}`)
      .then(response => {
        // console.log(response)
        this.setState({
          onVideo: response.data
        });
      })
        
      axios
        .get(`${API_URL}/videos${API_KEY}`)
        .then(response => {
          console.log(response)
          this.setState({
            videoList: response.data
          });
        })  
    }
    
    

    componentDidUpdate() {
      console.log(this.props)
      axios
      .get(`${API_URL}/videos/${this.props.match.params.id}${API_KEY}`)
      
      // .then(response => {
      //   console.log(response)
      //   this.setState({
      //     onVideo: response.data
      //   });
      // })

          .then(response => {
            console.log(response)
              if (this.state.onVideo.id !== response.data.id) {
                  this.setState({
                    onVideo: response.data,});
              }   
          })      
  }

  // componentDidUpdate() {
  //   axios
  //     .get(`${API_URL}/videos/${MAIN_URL}${API_KEY}`)
  //     .then(response => {
  //       // console.log(response)
  //       this.setState({
  //         onVideo: response.data
  //       });
  //     })
  // }


  // componentWillUnmount() {
    
  // }


    
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
          nextVideos={this.state.videoList.filter(data => data.id !== this.state.onVideo.id)}
        />
        </div>
        </>
          )
    };  
  }

export default Main;