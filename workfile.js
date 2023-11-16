"use strict";

/* 
1. создать переменную numberOfFilms и в нее поместить ответ ползователя на вопрос: 'Сколько фильмов уже посмотрели?'  
2. Создать объект personalOfMovieDB и в него поместить также свойства:
  - count - сюда передается ответ на первый вопрос
  - movies - в это свойство поместить пустой объект
  - actors - тоже поместить пустой объект
  - genres - сюда поместить пустой массив
  - privat - в это свойство поместить логическое значение false

3. Задайте пользователю по 2 вопроса: 
  - 'Один из последних просмотренных фильмов?'
  - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные 
Записть ответы и объект movies  в формате:
  movies: {
      'Logan': '8.1';
  }
Проверить, чтобы все работало без ошибок в консоли
*/

const numberOfFilms = prompt('Сколько фильмов уже посмотрели?', '');
const lastWatchingMovie = prompt('Один из последних просмотренных фильмов?', '');
const lastWatchingMovieMark = +prompt('На сколько оцените его?', 'Только цифры от 0 до 10');
const lastWatchingMovie1 = prompt('Один из последних просмотренных фильмов?', '');
const lastWatchingMovieMark1 = +prompt('На сколько оцените его?', 'Только цифры от 0 до 10');
const wharYouMostLikeActor = prompt('Какой ваш самый любимый актер', '');
const wharYouMostLikeActorMark = prompt('По 10 бальной шкале как вы его оцените?');
const personalOfMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};
personalOfMovieDB.movies[lastWatchingMovie] = lastWatchingMovieMark;
personalOfMovieDB.movies[lastWatchingMovie1] = lastWatchingMovieMark1;
personalOfMovieDB.actors[wharYouMostLikeActor] = wharYouMostLikeActorMark;
console.log(personalOfMovieDB);
console.log(personalOfMovieDB.movies);