// // 'use strict'
// //
// // let numberofFilms = 0;
// // function start() {
// //     numberofFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// //     while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms)) {
// //         numberofFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
// //     }
// // }
// //
// // start();
// //
// // let personalMovieDB = {
// //     count: 0,
// //     movies: {},
// //     actors: {},
// //     genres: [],
// //     privat: false
// // };
// //
// // function rememberMyFilms() {
// //     for (let i = 0; i < 2; i++) {
// //         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
// //             b = prompt('На сколько оцените его?', '');
// //         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
// //             personalMovieDB.movies[a] = b;
// //             console.log('done');
// //         } else {
// //             console.log('error');
// //             i--;
// //         }
// //     }
// // }
// //
// // rememberMyFilms();
// //
// //
// // function detectPersonalLevel() {
// //     if (personalMovieDB.count < 10) {
// //         console.log('Просмотрено довольно мало фильмов');
// //     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
// //         console.log('Вы классический зритель');
// //     } else if (personalMovieDB.count > 30) {
// //         console.log('Вы киноман');
// //     } else {
// //         console.log('Произошла ошибка');
// //     }
// // }
// // detectPersonalLevel();
// //
// //
// // function ShowMyDB(hiden) {
// //     if (!hiden) {
// //         console.log(personalMovieDB);
// //     }
// // }
// //
// // ShowMyDB(personalMovieDB.privat);
// //
// // function writeYourGenres() {
// //     for (let i = 1; i <= 3; i++) {
// //         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
// //     }
// // }
// // writeYourGenres();
// //
//
//
//
// function first() {
//     // Do something
//     setTimeout(function (){
//         console.log('1');
//     }, 500);
// }
//
// function second() {
//     console.log('2');
// }
// first();
// second();
//
// function learningJs(lang, callback) {
//
//     console.log(`Я учу ${lang}`);
//     callback();
// }
// learningJs('Python', function (){
//     console.log('Я прошел этот урок');
// });
//
// const option = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// }
//  console.log(option.name);
//
// delete option.name;
//
// console.log(option);
//
// for (let key in option) {
//     console.log(`Свойство ${key} имеет значение ${option[key]}`);
// }

const arr = [0, 1, 2, 3, 4, 5];
// // arr.push(7);
// // console.log(arr);
// for (let i = 0 ; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let val23ue of arr) {
//     console.log(val23ue);
// }
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
})