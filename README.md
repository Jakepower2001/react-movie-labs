# Assignment 1 - ReactJS app

Jake Power

## Overview

Basic tmdb movie app with api integration

## features and endpoints

+ added an actors page that fetches the actors from the tmdb webpage and displays them 
+ added an upcoming page that fetches upcoming movies from tmdb, this page also contains a must watch button using the material UI playlist button
+ The api for my Discover movies homepage filters the movies it fetches in order of popularity
+ Actors page also has a clickable more info button with similar code to the movies more info button created in labs
+ Actor cards also include a whats hot icon from material UI

## API endpoints
+ Actors - /actors/popular
+ Movies in theatres(now playing movies) - /movies/nowplaying
+ Top rated - /movies/toprated
+ Details for actors also - /actors/:id
+ Must watch page - /movies/mustwatch

-More details on my routes

+ /actors/:id - (Actors page) This will display details on each actor according to each of their ids
+ /actors/popular - (Actors page) This filters actors and displays them in order of popularity, similar to how the top rated page works
+ /movies/mustwatch - (MustWatch page) displays all movies that were selected by user from the upcoming page, similar functionality to the favorites page
+ /movies/toprated - (Top rated movies page) displays all top rated movies and sorts them from highest to lowest rated, similar functionality to actors popularity feature
+ /movies/nowplaying - (Now playing movies page) this displays the movies currently being aired in cinemas
