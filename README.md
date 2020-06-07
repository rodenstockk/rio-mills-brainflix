# rio-mills-brainflix
Full stack app using Node Express and React to build API and App

Front-End Functionality;

<ul>
<li>Using the componet lifecycle componentDidMount - axios API request, and state - data is passed down as props to generate side videos, all main video content including comments</li>
<li>3 routes exist for Home/On video page with comments, Video Upload Page, and Side vidoe list</li>
<li>Clicking videos in "Next Video" displays Video Details - using componentDidUpdate lifecycle for the selected video to apply dynamic URL and displays all the information from stored back-end server(likes, view, author, description, comments, etc.)</li>
<li>Event handlers was used to POST videos in Upload page and POST new comments in main page for each videos</li>
</ul>  
  
Back-End Functionality;

<ul>
<li>The end-point and reponse structure of back-end server contains GET/video, GET/video/:id, POST/video</li>
<li>Submitting a new video from the form (Upload Page) POSTs to the API</li>
<li>Submitting a comment from the displaying video detail page POSTs to the API</li>
</ul>

Demo screensht: 

1. Brainflix is a web app that ables the user to go through videos and update comments
![1](https://user-images.githubusercontent.com/59574143/83926549-1f299180-a758-11ea-9d66-2385258942e3.png)

2. Browsing through list of videos
![2](https://user-images.githubusercontent.com/59574143/83926552-22248200-a758-11ea-8f17-8bfec4e3e4db.png)

3. Can click upload button to upload new video to backend API - via POST request
![3](https://user-images.githubusercontent.com/59574143/83926557-251f7280-a758-11ea-8bc0-98eaf6604358.png)

4. New video uploaded
![4](https://user-images.githubusercontent.com/59574143/83926562-281a6300-a758-11ea-970d-6dd940757b2a.png)

5. New video will show up in the list once user chooses another video 
![5](https://user-images.githubusercontent.com/59574143/83926566-2b155380-a758-11ea-9db0-d5a856fee337.png)
