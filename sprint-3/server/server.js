const express = require('express');
const app = express();
const cors = require('cors');
const videosRoutes = require('./routes/videos');


app.use(cors());

app.use((req, res, next) => {
    console.log("request: ", req.path, Date.now());
    next();
})

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });

app.use(express.json());

app.use('/', videosRoutes)



app.use(express.static('public'));

app.listen(8080, () => {
    console.log('Listening on 8080 local server yay!')
})