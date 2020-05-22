import React from 'react';
import viewIcon from '../../assets/Icon/Icon-views.svg';
import likeIcon from '../../assets/Icon/Icon-likes.svg';
import Comment from '../Comment/Comment'

import './VideoDetail.scss';

const timeConverter = (timeStampFromApi) => {
  var seconds = Math.floor((new Date() - timeStampFromApi) / 1000);
  var interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + " years ago";
  }
  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + " months ago";
  }
  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + " days ago";
  }
  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + " hours ago";
  }
  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + " minutes ago";
  }
  return Math.floor(seconds) + " seconds ago";
}



const VideoDetail = props => {

      return (
        <>

        <main>
          <div className="heading">
            <h1>{props.onVideoDetail.title}</h1>
            <div className="bottom">
              <div className="bottom__left">
                <span className="bottom__left--by">By {props.onVideoDetail.channel}</span>
                <span className="bottom__left--date">{timeConverter(props.onVideoDetail.timestamp)}</span>
              </div>
              <div className="bottom__right">
                <span className="bottom__right--view"><img src={viewIcon} alt="viewIcon"/>{props.onVideoDetail.views}</span>
                <span className="bottom__right--like"><img src={likeIcon} alt="likeIcon"/>{props.onVideoDetail.likes}</span>
              </div>
            </div> 
          </div>
          <p className="description">{props.onVideoDetail.description}</p>
          

          <h3>{props.onVideoDetail.comments.length} Comments</h3>
          <div className="conversation">
              <div className="conversation-image"></div>
              <form className="conversation-content">
                  <label htmlFor="comment-input">JOIN THE CONVERSATION</label>
                  <div className="conversation-content__boxes">
                  <textarea id="comment-input" rows="5" cols="20" placeholder="Write comment here" name="inputValue"></textarea> 
                  <button type="submit" id="submit">COMMENT</button>
                  </div>
              </form>
          </div>
          <div id = 'comments'>{
            props.onVideoDetail.comments.map((commentArray, index)=>
            <Comment 
              key={index}
              name={commentArray.name}
              timestamp={commentArray.timestamp}
              comment={commentArray.comment}
            />
            )
          }
          </div>
        </main>
        
        </>
          )
    };  


export default VideoDetail;