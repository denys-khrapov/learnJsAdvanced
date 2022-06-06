//Методы перебора массивов

//метод forEach перебирает массиов, но не возвращает новый
//filter
// этот метод фильтрует элементы внутри массива

// const names = ['Denys', 'Ivan', 'Katya', 'Ksenia', 'Voldemart'];



// const shortNames = names.filter(function (name) {
// 	return name.length < 5;
// });

// console.log(shortNames);


// map - позволяет взять каждый элемент в массиве и изменить его
// на выходе получается новый массив уже с изменнеными данными

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(item => {
	return item.toLowerCase();
});

console.log(result);

// every/some


// const some = [4, 6, 8];

// console.log(some.some(item => typeof (item) === 'number'));


// console.log(some.every(item => typeof (item) === 'number'));


// reduce

// const arr = [4, 5, 1, 3, 2, 6];
//подставиться 3			4
// 4			5
// 9			1
// 10			3
// 13			2
// 15			6
// 21
// const res = arr.reduce((sum, current) => sum + current, 3);

// console.log(res);


// const arr = ['apple', 'pear', 'plum'];


// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);



const obj = {
	ivan: 'persone',
	ann: 'persone',
	dog: 'animal',
	cat: 'animal'
};


const newArr = Object.entries(obj)
	.filter(item => item[1] === 'persone')
	.map(item => item[0]);

console.log(newArr);