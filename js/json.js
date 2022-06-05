// JSON - это набор пар (ключ-значение) как в объекте
// все строки должны быть в двойных кавычках


const persone = {
	name: 'Alex',
	tel: '+3809544221',
	parents: {
		mom: 'olga',
		dad: 'mike'
	}
};

// console.log(JSON.parse(JSON.stringify(persone)));

const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';

console.log(persone);
console.log(clone);