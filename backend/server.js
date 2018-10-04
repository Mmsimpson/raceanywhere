const jwt = require('jsonwebtoken');
const express = require('express');
const ex = express();
const JwtPassword = 'jsonwebtokenPassword'
const bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
const cors = require('cors');
const dbq = require('./queries.js');
ex.use(bodyParser.json({limit:'50mb'}))
ex.use(express.static('./videos'));
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



let videoPost = (req, res)  =>  {
    console.log("DOWNHERE")
    console.log(req.body);
    let userid = req.body.userid;
    let river = req.body.river;
    let riverlevel = req.body.riverlevel;
    let racetime = req.body.racetime;
    let classvalue = req.body.classvalue;
    let videoFile = req.body.video;
    upload.single(videoFile);
    //console.log(req.file.filename)
    dbq.addUserVideo(userid, './videos/' + " ", river, riverlevel, racetime, classvalue)
    .then(data => {
        console.log(data)
        res.send(data)  
    })
}

let validateToken = (req, res) => {
    let responseObject = {response: null,
                            payload: null}
    let token = req.body.webtoken
    let isValid;
    let payload;
    try {
            let decoded = jwt.verify(token, priv.signature, {"alg": "HS256", "typ": "JWT"});
            isValid = true;
            req.user = decoded.payload;
            responseObject.payload = payload;
    } catch (err) {
            isValid = false;
    }
        //creates a new property for the request object, called user
    if (isValid) {
        responseObject.response = "Logged in";
        res.send(responseObject);
    } else {
        responseObject.response = "Invalid login";
        res.send(responseObject);
    }
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
                    res.send({token: token, user:data});
            } else {
                res.send("Sorry, invalid login");
            }
        }).catch(error=> res.send({response: "bad login"}));
    };

ex.post("/videoupload", upload.single(''), videoPost)  
ex.post('/checktoken', validateToken);
ex.post('/login', createToken);
ex.post('/signup', newUser);

ex.listen(5000);