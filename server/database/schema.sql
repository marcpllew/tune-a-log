-- CREATE TYPE music_style AS ENUM ('psych ', 'retro pop', 'bebop', 'alt rock', 'latin');
CREATE TABLE music(
    id SERIAL PRIMARY KEY,  
    artist_name TEXT not null,
    style Text not null,   
    miscellaneous TEXT
);
    
    