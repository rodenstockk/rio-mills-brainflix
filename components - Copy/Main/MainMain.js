import React from 'react';
import viewIcon from '../../assets/Icon/Icon-views.svg';
import likeIcon from '../../assets/Icon/Icon-likes.svg';
import Section1 from './Section1'
import commentIcon from '../../assets/Images/Mohan-muruge.jpg'

class MainMain extends React.Component {

    state= {
        // id: 'type of <string>',
        title: 'BMX Rampage: 2018 Highlights',
        description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
        channel: 'By Red Cow',
        image: commentIcon,
        views: '1,001,023',
        likes: '110,985',
        // duration: 'type of <string>',
        // video: 'type of <string>',
        timestamp: '12/18/2018',
        comments: [
            {"name":"Theodore Duncan", "date": "11/15/2018", "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"}, 
            {"name":"Gary Wong", "date": "12/12/2018", "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"}, 
            {"name":"Micheal Lyons", "date": "12/18/2018", "comment": "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."}
        ]
      }
     
    //   timeConverter = (timeStampSource) => {
    //     this.timestamp.setState() 
    //     {
    //     var seconds = Math.floor((new Date() - timeStampSource) / 1000);
    //     var interval = Math.floor(seconds / 31536000);
    //     if (interval > 1) {
    //       return interval + " years ago";
    //     }
    //     interval = Math.floor(seconds / 2592000);
    //     if (interval > 1) {
    //       return interval + " months ago";
    //     }
    //     interval = Math.floor(seconds / 86400);
    //     if (interval > 1) {
    //       return interval + " days ago";
    //     }
    //     interval = Math.floor(seconds / 3600);
    //     if (interval > 1) {
    //       return interval + " hours ago";
    //     }
    //     interval = Math.floor(seconds / 60);
    //     if (interval > 1) {
    //       return interval + " minutes ago";
    //     }
    //     return Math.floor(seconds) + " seconds ago";
    //   } 
    // } 


    render() {

      return (
        <>
        <main>

        <div>
          <div>
            
            <h1>{this.state.title}</h1>

            <div>
              <span>{this.state.channel}</span>
              <span>{this.state.timestamp}</span>
            </div>
            <div>
              <span><img src={viewIcon} alt="viewIcon"/>{this.state.views}</span>
              <span><img src={likeIcon} alt="likeIcon"/>{this.state.timestamp}</span>
            </div> 

          </div>

          <p>{this.state.description}</p>

        </div>

        <div>
          <h3>3 Comments</h3>
          <div className="conversation">
              <img className="conversation-image" src={this.state.image} alt="commentIcon"/>
              <form className="conversation-content">
                  <label htmlFor="comment-input">Join the Conversation</label>
                  <textarea id="comment-input" rows="5" cols="20" placeholder="That was easily the most spectacular BMX moment ever" name="inputValue"></textarea> 
                  <button type="submit" id="submit">COMMENT</button>
              </form>
          </div>
          <div id = 'comments'>{
            this.state.comments.map((commentFromArray, index)=>
            <Section1 
              key={index}
              name={commentFromArray.name}
              date={commentFromArray.date}
              comment={commentFromArray.comment}
            />
            )
          }
          </div>
        </div>
        </main>
        </>
          )
    };  
  }

export default MainMain;