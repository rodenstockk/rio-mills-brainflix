import React from 'react';
import './Main.scss'
import axios from 'axios';
import VideoPlaying from '../VideoPlaying/VideoPlaying';
import VideoDetail from '../VideoDetail/VideoDetail';
import VideoList from '../VideoList/VideoList';


const API_URL = 'http://localhost:8080';
// const API_KEY = '?api_key=d1ea437e-93e6-49d6-be6e-d390f6da07b1';
const MAIN_URL = '1af0jruup5gu'



class Main extends React.Component {
    state = {
      onVideo: {
        comments: []
      },
      videoList: [],
    }

    firstMount = () => {
      axios
      .get(`${API_URL}/videos/${MAIN_URL}`)
      .then(response => {
        this.setState({
          onVideo: response.data,
        });
      })
      .catch(err => {
        console.log(err)
      })
      axios
        .get(`${API_URL}/videos`)
        .then(response => {
          this.setState({
            videoList: response.data
          });
        })
        .catch(err => {
          console.log(err)
        })  
    }


    componentDidMount() {
      this.firstMount();
    }

    componentDidUpdate() {      
      let dynamicURL = this.props.match.params.id
      if (typeof this.props.match.params.id === "undefined") {
        dynamicURL = '1af0jruup5gu'}
      
      axios
      .get(`${API_URL}/videos/${dynamicURL}`)
          .then(response => {
              if (this.state.onVideo.id !== response.data.id) {
                  this.setState({
                    onVideo: response.data,
                    });
              }   
          })
          .catch(err => {
            console.log(err)
          })  
    }



    commentHandler = (e) => {
      let dynamicURL = this.props.match.params.id
      e.preventDefault();

      if (typeof dynamicURL === "undefined") {
        dynamicURL = '1af0jruup5gu'}
      axios 
        .post(`${API_URL}/videos/${dynamicURL}/comments`, {
          "comment" : e.target.inputValue.value,
          "timestamp" : Date.now(),
          "name" : "Rio Mills"
        })
        .then(() => {
          this.firstMount();
        })
        .catch(err => {
          console.log(err)
        }) 
        e.target.reset();
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
          commentHandler={this.commentHandler}
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