const dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');
const express = require('express');
const ex = express();
const JwtPassword = 'jsonwebtokenPassword'
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const cors = require('cors');
const dbq = require('./queries.js');
ex.use(bodyParser.json({limit:'50mb'}))
ex.use('/api/uploads',express.static('./videos'));
ex.use(express.static('../client/build'));
ex.use(bodyParser.urlencoded({extended:true, limit:'50mb'}));
ex.use(cors());
ex.use(jsonParser);
let multer = require('multer');
let upload = multer({dest: './videos'});

let newUser = (req, res) => {
    console.log(req.body)
    dbq.createUser(req.body.username, req.body.password, req.body.email, req.body.first, req.body.last)  
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            console.log(err);
            res.send({ error: err });
        });
    };

let createVideo = (req, res)  =>  {
    console.log("DOWNHERE")
    console.log(req.body);
    let userid = req.params.id;
    let river = req.body.river;
    let riverlevel = req.body.riverlevel;
    let racetime = req.body.racetime;
    let classvalue = req.body.classvalue;
    let videoFile = req.body.video;
    //console.log(req.file.filename)
    dbq.addUserVideo(userid, req.file.filename, river, riverlevel, racetime, classvalue)
    .then(data => {
        console.log(data)
        res.send(data)  
    })
}

let createToken = (req, res) => {
    let credentials = req.body;
    let password = credentials.password;
    let id = credentials.id;
    let username = credentials.username;
    console.log(credentials);    

    dbq.usernameLogin(username, password, id)
        .then(data => {
            console.log(data)
            if (data.password === password && data.username === username) {
                console.log("im here");
                let token = jwt.sign(
                    {name: data.username,
                    id: data.id},
                    JwtPassword,
                    {expiresIn: '7d'})
                    console.log(token);
                    console.log({token: token, user: data})
                    res.send({token: token, user:data});
                    
            } else {
                res.send("Sorry, invalid login");
            }
        }).catch(error=> {console.log(error); res.send({response: "bad login"})});
    };

let getUser = (req, res) => {
    let id = req.body.id;
    dbq.getUserInfo(id)
        .then(data => {
            res.send(data)  
        })
};

let getVideosForUser = (req, res) => {
    dbq.userVideos(req.params.id)
        .then(data => {
            res.send(data)
        }).catch(err => {
            res.send({error: err});
        })
};  

ex.get('/api/users/:id/videos', getVideosForUser);
ex.get('/api/users/:id', getUser);
ex.post('/api/users/:id/videos', upload.single('video'), createVideo)  
ex.post('/api/tokens', createToken);
ex.post('/api/users', newUser);

ex.listen(5000);