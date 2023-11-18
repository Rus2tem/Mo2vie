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

const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '');
const whatLastFilmYouWatch = prompt('Один из последних фильмов?', '');
const whatLastFilmYouWatchMark = +prompt('На сколько оцените его?', '');
const whatLastFilmYouWatch2 = prompt('Еще один из последних фильмов?', '');
const whatLastFilmYouWatchMark2 = +prompt('На сколько оцените его?', '');
const personalOfMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};


personalOfMovieDB.movies[whatLastFilmYouWatch] = whatLastFilmYouWatchMark;
personalOfMovieDB.movies[whatLastFilmYouWatch2] = whatLastFilmYouWatchMark2;

console.log(personalOfMovieDB);