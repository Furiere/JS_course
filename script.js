const numberOfFilms = +prompt('Сколько сериалов Вы посмотрели за этот месяц?', '');
let personalMovieDB = {
    count: numberOfFilms,
    titles: {},
    actors: {},
    genres: [],
    private: false
}

let lastTitle = prompt('Последний просмотренный сериал?', '');
let lastTitleRating = +prompt('Оцените его (0-5)', '');

personalMovieDB.titles[lastTitle] = lastTitleRating;

console.log(personalMovieDB);