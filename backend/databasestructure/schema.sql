CREATE TABLE users (
    id serial primary key,
    username character varying (200),
    password character varying (200),
    email character varying (200),
    first character varying (200),
    last character varying (200)
);

CREATE TABLE videos (
    id serial primary key,
    river character varying (200),
    riverlevel CHARACTER varying (200),
    racetime INTEGER,
    classvalue CHARACTER varying (200),
    video CHARACTER varying (255),
    userid integer REFERENCES users(id)
);