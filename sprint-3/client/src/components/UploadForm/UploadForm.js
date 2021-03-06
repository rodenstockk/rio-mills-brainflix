import React from 'react';
import preview from '../../assets/Images/preview.jpg';


const UploadForm = (props) => {
    
    return (
        <form className="uploadform" onSubmit={props.uploadHandler}>
                <div className="top">

                    <div className="top__thumbnail">
                        <label htmlFor="comment-input">VIDEO THUMBNAIL</label>
                        <img src={preview} alt="preview"/>
                    </div>

                    <div className="top__left">
                        <div className="top__left-title">
                            <label htmlFor="title-input">TITLE YOUR VIDEO</label>
                            <textarea id="title-input" rows="1" cols="20" placeholder="Add a title to your video" name="titleinputValue"></textarea> 
                        </div>
                
                        <div className="top__left-description">
                            <label htmlFor="description-input">ADD A VIDEO DESCRIPTION</label>
                            <textarea id="description-input" rows="5" cols="20" placeholder="Add a description of your video" name="desinputValue"></textarea> 
                        </div>
                    </div>
                </div>


                <div className="btm">
                    
                    <button type="submit" id="publish">PUBLISH</button>
                    <button type="cancel" id="cancel">CANCEL</button>
                
                </div>


            </form>
    )
}


export default UploadForm;