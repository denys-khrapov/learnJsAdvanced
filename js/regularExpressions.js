//Любое регулярное выражение состоит из двух частей
// это патерн и флаги
//патерн - это по другому шаблон
//шаблон, что мы ищем в этой строке или что мы пытаемся удалить


// new RegExp('pattern', 'flags');


//шаблон проектирования регулярых выражений


// const answer = prompt('Введите ваше число', '');

// const reg = /\d/;
// console.log(answer.match(reg));

// \d - означает что мы ищем все цифры
// \w - означает что мы ищем все слова(буквы)
// \s - ищем все пробелы


// flags
// i
// g
// m


// console.log(answer.search(reg));
// console.log(answer.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, "*"));


// console.log('12-34-56'.replace(/-/g, ':'));


const str = 'My name is R2D2';

console.log(str.match(/\D/ig));


// \D - не числа
// \W - не буквы