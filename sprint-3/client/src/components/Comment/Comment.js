import React from 'react';
import './Comment.scss'


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


class Comment extends React.Component {

    render() {
      let {name, timestamp, comment} = this.props
      return (
        <div className="comments">
            <div className="comments-image"></div>
            <div className="comments-content" >
                <div className="comments-content__top">
                    <div className="comments-content__top--name">{name}</div>
                    <div className="comments-content__top--date">{timeConverter(timestamp)}</div>
                </div>
                <div className="comments-content__btm">{comment}</div>
            </div>
        </div>

          )
    };  
  }

export default Comment;