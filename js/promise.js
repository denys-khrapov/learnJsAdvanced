// console.log('Запрос данных...');

// const req = new Promise(function (resolve, reject) {
// 	setTimeout(() => {
// 		console.log('Подготовка данных...');
// 		const product = {
// 			name: 'TV',
// 			price: 2000
// 		};
// 		resolve(product);
// 	}, 2000);
// });
//resolve - условно обозначает, что что-то выполнилось правильно
//reject - обозначает, что наше обещание не выполнилось,
//что-то пошло не так
//finally - действия которые должны произойти в любом случае
//метод then который выполняется на промисе в случае положительного исхода
// req.then((product) => {
// 	return new Promise((resolve, reject) => {
// 		setTimeout(() => {
// 			product.status = 'order';
// 			resolve(product);
// 		}, 2000);
// 	});

// }).then(data => {
// 	data.modify = true;
// 	return data;
// }).then((fdas) => {
// 	console.log(fdas);
// }).catch(() => {
// 	console.error('Произошла ошибка');
// }).finally(() => {
// 	console.log('finally');
// });


const test = time => {
	return new Promise(resolve => {
		setTimeout(() => resolve(), time)
	});
};

// test(1000).then(() => console.log('1000 ms'));
// test(2000).then(() => console.log('2000 ms')); 
//promise all ждет загрузку всех промисов которые были переданы в массив и только потом 
// он будет что-то выполнять
// Promise.all([test(1000), test(2000)]).then(() => {
// 	console.log('All');
// });


Promise.race([test(1000), test(2000)]).then(() => {
	console.log('All');
});