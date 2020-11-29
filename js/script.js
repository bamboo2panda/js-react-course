"use strict";

const numberOfMovies = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfMovies,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

const a = prompt('Один из последних просмотренных фильмов?', ''), 
        b = prompt('На колько вы его оцените?', ''),
        c = prompt('Один из последних просмотренных фильмов', ''),
        d = prompt('На сколько вы его оцениваете?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
console.log(personalMovieDB);