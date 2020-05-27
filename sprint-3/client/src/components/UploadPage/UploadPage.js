import React from 'react';
import './UploadPage.scss';
import axios from 'axios';
import UploadForm from '../UploadForm/UploadForm'

const API_URL = 'http://localhost:8080';


class UploadPage extends React.Component {

    uploadHandler = (e) => {
        e.preventDefault();
        axios 
          .post(`${API_URL}/videos`, {
            "id": Date.now(),
            "title": e.target.titleinputValue.value,
            "channel":"Rio Mills",
            "image":"http://localhost:8080/preview.jpg",
            "description": e.target.desinputValue.value,
            "views":"3,092,284",
            "likes":"75,985",
            "duration":"4:20",
            "video":"http://localhost:8080/sample.mp4",
            "timestamp": Date.now(),
            "comments":[
                {"name":"Mike Lyons","comment":"They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.","id":"1ab6d9f6-da38-456e-9b09-ab0acd9ce818","likes":0,"timestamp":1545162149000},
                {"name":"Gary Wong","comment":"Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!","id":"cc6f173d-9e9d-4501-918d-bc11f15a8e14","likes":0,"timestamp":1544595784046},
                {"name":"Theodore Duncan","comment":"How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!","id":"993f950f-df99-48e7-bd1e-d95003cc98f1","likes":0,"timestamp":1542262984046}
            ]
        })
          e.target.reset();
      }


    render(){
        return (
            <div className="upload">
                <h1>Upload Video</h1>
                <UploadForm 
                    uploadHandler={this.uploadHandler}
                />
            </div>
        )
    }
    
}



export default UploadPage;