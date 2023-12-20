'use strict'

// Запросить алертом ответ от пользователя сколько фильмов уже посмотрели?
const moviesWatched = prompt("Сколько фильмов вы уже посмотрели?");

if (moviesWatched == null) {
    console.log("Отменено пользователем");
} else if (moviesWatched > 0) {
    console.log("Пользователь уже посмотрел " + moviesWatched + " фильмов");
}

// Создать объект personalMovieBD и поместить в него следующие свойства:
let personalMovieBD = {
    count: moviesWatched,
    movies: {},
    actors: {},
    genres: [],
    pivat: false
}

// Задать пользователю по 2 раза вопросы
for (let i = 0; i < 2; i++) {
    let questFilm = prompt("Один из последних просмотренных фильмов?");
    let questFilmRet = prompt("На сколько оцените его?");
    personalMovieBD.movies[questFilm] = questFilmRet;
}
// let questLastFilm1 = prompt("Один из последних просмотренных фильмов?");
// let questLastFilmReyt = prompt("На сколько оцените его?");
// personalMovieBD.movies[questLastFilm1] = questLastFilmReyt;
// let questLastFilm3 = prompt("Один из последних просмотренных фильмов?");
// let questLastReyt2 = prompt("На сколько оцените его?");
// personalMovieBD.movies[questLastFilm3] = questLastReyt2;
// console.log(personalMovieBD)