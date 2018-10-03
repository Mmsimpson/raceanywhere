CREATE TABLE users (
    id serial primary key,
    username character varying (200),
    password character varying (200),
    email character varying (200),
    first character varying (200),
    last character varying (200)
);