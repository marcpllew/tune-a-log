CREATE TABLE music(
    id SERIAL PRIMARY KEY,  
    artist_name TEXT not null,
    style Text not null,   
    miscellaneous TEXT
);

insert into music (artist_name, style, miscellaneous) values ('The Lazy Eyes', 'psych-rock', 'Local Sydney band doing some sweet psych');

insert into music (artist_name, style, miscellaneous) values ('Khruangbin', 'Laid back groove', 'Super chill');

insert into music (artist_name, style, miscellaneous) values ('Monty alexander', 'regge jazz', 'check album where he covers monk tunes');

insert into music (artist_name, style, miscellaneous) values ('Jacco Gardner', 'psych-rock', 'Baroque psych-rock');

insert into music (artist_name, style, miscellaneous) values ('Aphex twin', 'Electro', 'Contemporary, experimenal, impro electronic');

insert into music (artist_name, style, miscellaneous) values ('Forq', 'Electro jazz', 'Contemporary, experimental, improv');

