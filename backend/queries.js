const pg = require('pg-promise')();
const postGres = require('./private.js');
const db = pg(postGres.PG_LINK); 

let usernameLogin = (username, password) => {
    return db.one(`select *
    FROM users
    WHERE username = '` + username + `'
    AND password = '` + password + `';`)
}

let createUser = (username, password, email, first, last) => {            
    return db.one(`INSERT INTO users (username, password, email, first, last) values    
    ('` + username + `', '` + password + `', '` + email + `', '` + first + `', '` + last + `')
    RETURNING *;`);  
} 

let addUserVideo = (userid, video, river, riverlevel, racetime, classvalue) => {
    return db.one(`INSERT INTO videos (userid, video, river, riverlevel, racetime, classvalue) values ($1, $2, $3, $4, $5, $6) RETURNING *;`, [userid, video, river, riverlevel, racetime, classvalue])
}

let getUserInfo = (id) => {
    return db.one(`select username, email, first, last
    FROM users
    WHERE id = ` + id + `;`)
}

let userVideos = (userid) => {
    return db.one(`select river, riverlevel, racetime, classvalue, video
    FROM videos
    WHERE userid = ` + userid + `;`)
}

exports.userVideos = userVideos;
exports.getUserInfo = getUserInfo;
exports.usernameLogin = usernameLogin;
exports.createUser = createUser;
exports.addUserVideo = addUserVideo;