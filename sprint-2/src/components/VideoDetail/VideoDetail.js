import React from 'react';
import viewIcon from '../../assets/Icon/Icon-views.svg';
import likeIcon from '../../assets/Icon/Icon-likes.svg';
import Comment from '../Comment/Comment'

import './VideoDetail.scss';

const VideoDetail = props => {

      return (
        <>

        <main>
          <div className="heading">
            <h1>{props.title}</h1>
            <div className="bottom">
              <div className="bottom__left">
                <span className="bottom__left--by">{props.channel}</span>
                <span className="bottom__left--date">{props.timestamp}</span>
              </div>
              <div className="bottom__right">
                <span className="bottom__right--view"><img src={viewIcon} alt="viewIcon"/>{props.views}</span>
                <span className="bottom__right--like"><img src={likeIcon} alt="likeIcon"/>{props.likes}</span>
              </div>
            </div> 
          </div>
          <p className="description">{props.description}</p>
          

          <h3>3 Comments</h3>
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
            props.comments.map((commentArray, index)=>
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