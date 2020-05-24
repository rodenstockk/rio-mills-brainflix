import React from 'react';
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
      onVideo: {
        comments: []
      },
      videoList: [],
    }


    componentDidMount() {

      axios
      .get(`${API_URL}/videos/${MAIN_URL}${API_KEY}`)
      .then(response => {
        this.setState({
          onVideo: response.data
        });
      })
        
      axios
        .get(`${API_URL}/videos${API_KEY}`)
        .then(response => {
          this.setState({
            videoList: response.data
          });
        })  
    }
    
    
    componentDidUpdate() {
      let dynamicURL = this.props.match.params.id
      console.log(this.props)
      if (typeof this.props.match.params.id === "undefined") {
        dynamicURL = '1af0jruup5gu'}
      
      axios
      .get(`${API_URL}/videos/${dynamicURL}${API_KEY}`)
          .then(response => {
            console.log(response)
              if (this.state.onVideo.id !== response.data.id) {
                  this.setState({
                    onVideo: response.data,});
              }   
          })      
  }

    
    render() {

      return (
        <>
        <VideoPlaying
          poster={this.state.onVideo.image}
          videoSample={this.state.onVideo.video}
          duration={this.state.onVideo.duration}
        />
        <div className="belowVideo">
        <VideoDetail
          onVideoDetail={this.state.onVideo} 
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