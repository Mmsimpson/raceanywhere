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



exports.usernameLogin = usernameLogin;
exports.createUser = createUser;