/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько сериалов Вы посмотрели за этот месяц?', '');

    while (numberOfFilms = '' || isNaN(numberOfFilms) || numberOfFilms == null) {
        numberOfFilms = +prompt('Сколько сериалов Вы посмотрели за этот месяц?', '');
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    titles: {},
    actors: {},
    genres: [],
    private: false
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = +prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

detectPersonalLevel();

function shoMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

shoMyDB(personalMovieDB.private);

function writeYourGenres () {
    for (let i = 0; i < 4; i++) {
        personalMovieDB.genres[i=1] = +prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();