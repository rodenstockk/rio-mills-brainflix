import React from 'react';
import './Comment.scss'

class Comment extends React.Component {

    render() {
      let {name, date, comment} = this.props
      return (
        <div className="comments">
            <div className="comments-image"></div>
            <div className="comments-content" >
                <div className="comments-content__top">
                    <div className="comments-content__top--name">{name}</div>
                    <div className="comments-content__top--date">{date}</div>
                </div>
                <div className="comments-content__btm">{comment}</div>
            </div>
        </div>

          )
    };  
  }

export default Comment;