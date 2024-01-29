'use strict'
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

// const arr = [0, 1, 2, 3, 4, 5];
// // arr.push(7);
// // console.log(arr);
// for (let i = 0 ; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for (let val23ue of arr) {
//     console.log(val23ue);
// }
// arr.forEach(function (item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const product = str.split(', ');
// console.log(product);
//
// let a = 5,
//     b = a;
// b = b+5;
// console.log(b);
// console.log(a);
//

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj;
// copy.a = 10;
// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// }
// const Newnumbers= copy(numbers);
// console.log(Newnumbers);
// Newnumbers.a = 10;
// console.log(Newnumbers);

// let number = 5; debugger
// function logNumber() {
//     let number = 4; debugger
//     console.log(number);
// }
//
// number = 6;
//
// logNumber(); debugger
// number = 8;
//
// logNumber(); debugger


function createCounter () {
    let counter = 0;
    const myFunction = function (){
        counter = counter + 2;
        return counter;
    }
    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);
