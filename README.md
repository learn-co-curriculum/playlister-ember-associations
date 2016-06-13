
# Ember Playlister Associations

(*It's baaaack*)

## Objectives

1. Generate ember models
2. Create the following relationships between them: has many, belongs to, many to many
3. Write routes that render templates that reflect these relationships

## Overview

In this lab you'll be working with the Playlister domain model, with a twist. Here, we have a `Songs`, `Artists` and `Albums` model. The relationships between them are as follows:

* A song has many artists and an artist has many songs. 
* A song belongs to an album and an album has many songs. 
* An album has many artists and an artist has many albums.

### Before You Begin 

You'll be connecting this Ember application to the Playlister API. This API is a Rails app. We'll have you run it on your own localhost:3000 to make the test suites run nice and fast. Go [here](https://github.com/learn-co-curriculum/ember-playlister-api) and clone down this Rails app. Bundle install, run `rake db:create`,  `rake db:migrate`, and `rake db:seed`. Then run `rails s` to get the API up and running. **Your Ember app will not work if your API is not running on localhost:3000. 

## Instructions

### Part I: Connecting to the API

* Install Active Model Adapter addon: `ember install active-model-adapter` in your terminal.
Generate an adapter with `ember generate adapter application`. Then, code your Active Model Adapter to connect to the `http://localhost:3000`, with a namespace of `api/v1`. 

### Defining The Models

* Define a songs, artists and albums model with the relationship described above. 
* Use this resource to learn how to build your associations: https://guides.emberjs.com/v2.6.0/models/relationships/

### Defining the Routes

* Define your router in `app/router.js` to have a route for `/artists` and a route for an indivual artist, nested under `/artist`. Do the same for albums and songs. 
* In `app/routes/artists.js`, define the route handler for the `/artists` route. Do the same for albums in `app/routes/albums.js` and songs in `app/routes/songs.js`. 
* Define a route handler for an individual song in `app/routes/songs/song.js`. Do the same for artists in `app/routes/artists/artist.js` and albums in `app/routes/albums/album.js`. 

### Building our Templates

**Note:** The template files have been provided for you. They include starter code that our test suite relies on so don't change any of the code you'll find there. 


* In `app/templates/application.hbs` you'll see a navbar with three list items. The list item with an `id` of `"artists"` should contain a link to the artists' index page. The same is true of the list items with `id`s of `"songs"` and `"albums"` respectively. 
* In `app/templates/songs/index.hbs` we'll iterate over all of the songs and render a list of song names. Each list item will contain a song name, which should link to that song's show page. 
* In `app/templates/songs/song.hbs`, we'll display the details of an individual song. Place the song's name inside the `<h4>` tags provides, render the song's album in the `<p>` tag provided. In the `<ul>` provided for you on, iterate over the song's artists and render the artist name, which should link to that artist's show page. 
* In `app/templates/artists/index.hbs`, we'll iterate over all of the artists and render a list of their names. Each list item will contain an artist name, which should link to that artist's show page. 
* In `app/templates/artists/artist.hbs`, we'll show the details of a given artist. This page will show their name, wrapped in the `<h4>` tags provided. Then, iterate over that artist's albums and render a list of album names. Each name should link to that album's show page.
* In `app/templates/albums/index.hbs`, we'll iterate over all of the albums and render a list of their names. Each list item will contain an album name, which should link to that album's show page. 
* In `app/templates/albums/album.hbs`, we'll show the details of a given album. This page will show the album name, in the `<h4>` tags provided. Then, iterave over that album's songs and render a list of song names. Each song name should link to that song's show page. 














<p data-visibility='hidden'>View <a href='https://learn.co/lessons/playlister-ember-associations' title='Ember Playlister Associations'>Ember Playlister Associations</a> on Learn.co and start learning to code for free.</p>

<p data-visibility='hidden'>View <a href='https://learn.co/lessons/playlister-ember-associations'>Ember Model Associations</a> on Learn.co and start learning to code for free.</p>
