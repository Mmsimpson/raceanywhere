const pg = require('pg-promise')();
const postGres = require('./private.js');
const db = pg(postGres.PG_LINK); 

let usernameLogin = (username, password) => {
    return db.one(`select username, password, id
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
    return db.one(`INSERT INTO videos (userid, video, river, riverlevel, racetime, classvalue, dateadded) values ($1, $2, $3, $4, $5, $6, NOW()) RETURNING *;`, [userid, video, river, riverlevel, racetime, classvalue])
}

let getUserInfo = (id) => {
    return db.one(`select username, email, first, last
    FROM users
    WHERE id = ` + id + `;`)
}

let userVideos = (userid) => {
    return db.query(`select * 
    FROM videos
    WHERE userid = ` + userid + `;`)
}

let recentVideos = () => {
    return db.query(`select usr.username, vid.river, vid.riverlevel, vid.racetime, vid.classvalue, vid.video  
    FROM videos vid
    LEFT JOIN users usr ON usr.id = vid.userid
    ORDER BY dateadded DESC
    LIMIT 6;`)
}


exports.recentVideos = recentVideos;
exports.userVideos = userVideos;
exports.getUserInfo = getUserInfo;
exports.usernameLogin = usernameLogin;
exports.createUser = createUser;
exports.addUserVideo = addUserVideo;