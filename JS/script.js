/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* 'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */


/* Задание на урок: task_2

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


/* 'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


for (let i = 0; i<2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50)  {
        personalMovieDB.movies[a] = b;  
        console.log('done');    
    } else {
        console.log('error');
        i--;
    }

} 

if(personalMovieDB.count<10) {
    console.log('"Просмотрено довольно мало фильмов"');
} else if (personalMovieDB.count >=10 && personalMovieDB <=30) {
    console.log('"Вы классический зритель"');
} else if (personalMovieDB.count >30) {
    console.log('"Вы киноман"');
} else {
    console.log('"Произошла ошибка"');
}

console.log(personalMovieDB); */



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

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i<2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50)  {
            personalMovieDB.movies[a] = b;  
            console.log('done');    
        } else {
            console.log('error');
            i--;
        }
    } 
}
rememberMyFilms();


function detctPersonalLevel () {
    if(personalMovieDB.count<10) {
        console.log('"Просмотрено довольно мало фильмов"');
    } else if (personalMovieDB.count >=10 && personalMovieDB <=30) {
        console.log('"Вы классический зритель"');
    } else if (personalMovieDB.count >30) {
        console.log('"Вы киноман"');
    } else {
        console.log('"Произошла ошибка"');
    }
}
detctPersonalLevel();



function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);



function writeYourGenres() {
    for (let i=1; i<=3; i++){
/*         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i-1]= genre; */
        personalMovieDB.genres[i-1]= prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();




/* 1) Создайте функцию, которая будет вычислять объем и площадь полной поверхности куба  */

/* function calculateVolumeAndArea(length) {
    if(typeof(length) !== 'number' || length <=0  || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }
    let volume=0,
        area=0;

        volume = length * length * length;
        area = 6 * (length * length);
        return `Объём куба: ${volume}, площадь всей поверхности ${area}`;
}
calculateVolumeAndArea(6);

/* 2) Напишите функцию, которая будет определять номер купе по переданному ей номеру места. Наглядно: */

/* function getCoupeNumber(place) {
    if(typeof(place)!== 'number' || !Number.isInteger(place) || place < 0) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } 
    
    if(place === 0 || place > 36 ) {
        return "Таких мест в вагоне не существует";
    }

    let roomate = place / 4;
    return Math.ceil(roomate);
}
getCoupeNumber (13); */
