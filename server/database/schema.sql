CREATE TABLE music(
    id SERIAL PRIMARY KEY,  
    artist_name TEXT not null,
    style Text not null,   
    miscellaneous TEXT
);
    
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username varchar(30) not null unique,
    password varchar(255) not null,
    email varchar(255) not null unique
    );