# Tune-a-Log

# What is it?

Currently most of the music we listen to is consumed vier streaming services with no physical or digital copy required. When we want to take a trip down memory lane and take a listen to what we checked out in the last few of years, how do we do this? There is no record or cd collections to peruse, What we’ve listened to is just lost to the ether.

This app helps to quickly and easily catalogue the musical discoveries you’ve found and store them in order to look and retrieve them at a later time

# Take a look:

-   Github link: https://github.com/marcpllew/tune-a-log

# Tech Used

-   Git hub
-   TypeScript
-   React - Front end framework
-   Express: Framework use for the backend implementation
-   Postgres: For the storage and creation of the database
-   Material UI: Framework used to style the project

# Approach taken

-   I started with building out the backend. Creating the data base and testing my app was talking successfully to the DB.
-   Next was the basic UI and implementing the user requests to the database and displaying the info to screen.
-   From here was just building out all the MVP's
-   Finally giving the app some styling using Material UI. Which is the first time i have used tis styling framework.

# Future implementation

-   Connects to a Music API
    -   which can save all API's info to database
    -   This could create a clickable link when search to play the music directly from app
-   Directly link to shazam?
-   Create a USERS table in DB for user authentication
-   Page back button
-   Alert when deleting entries

![image](./Screen%20Shot%202022-04-28%20at%2020.05.45%20pm.png)

# Installation instructions

-   Clone down repository from the above link
-   Auto install all dependencies for client and server:
    -   npm install from client and server folder
    -   use: npm run dev to run development server for client and server

# data base

-   create a data base named 'music_app' and copy the following table into database. From schema.sql

    CREATE TABLE music(
    id SERIAL PRIMARY KEY,  
     artist_name TEXT not null,
    style Text not null,  
     miscellaneous TEXT
    );
