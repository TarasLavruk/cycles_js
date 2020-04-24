// CLASSWORK 

// CW 1

// for (let i = 0; i <= 20; i++) {
//   if (i % 2 === 0) {
//     alert( i );
//   }
// }

// CW 2

// let num;
// do {
// 	num = prompt('Please enter the number bigger than 100');
// }
// while (num <= 100 && num);
	
// CW 3

let array = [0, 1];
let i;
while((array[array.length - 1] + array[array.length - 2]) < 100) {
i = array[array.length - 1] + array[array.length - 2];
array.push(i);
console.log(i);
}

// HOMEWORK

// HW 1

// 1st variant
// let sum = 0;
// for ( let j = 1; j < 100; j++) {
// 	sum = sum + j;
// }
// alert(sum);

// 2nd variant
// let sum = 0;
// let i = 1;
// while (i < 100) {
// 	sum = sum + i;
// 	i++;
// }
// alert(sum);

// HW 2

// let arr = [1, 2, 3, 4, 5]
// for (let j = 0; j < arr.length; j++) {
// 	alert(arr[j]);
// }

// HW 3

// let max = 0;
// let array = [-1, 22, 3, 44, 5];
// for (let j=0; j < array.length; j++) {
// if (array[j] > max) {
// 	max = array[j];
// }
// }
// alert(max);

// HW 4

// let arr = [];
// let zero = 0;
// let neg = 0;
// let pos = 0;
// for(let i = 1; i <= 8; i++) {
// 	let x = +prompt('Please enter the number');
// 	arr.push(x)
// }
// for(let j=0; j < 7; j++) {
// 	if(arr[j] == 0 ) {
// 			zero = zero + 1;
// 	}
// 	else if(arr[j] < 0) {
// 			neg = neg + 1;
// 	}
// 			pos = pos + 1;
// }
// alert(`You have entered ${zero} zeroes, ${neg} negative values and ${pos} positive values`);


// HW 5

// let res;
// for(i=1; i <= 9; i++) {
// 	res = 8 * i;
// 	alert(`8 * ${i} = ${res}`)
// }

// HW 6

// let arr = [2, 5, 9, 15, 0, 4];
// for(i = 0; i < arr.length; i++){
// 	if(arr[i] > 3 && arr[i] < 10) {
// 		alert(arr[i]);
// 	}
// }

// HW 7

// let y;
// let res;
// do {
// 	let a = +prompt('please, enter the first number');
// 	let b = +prompt('please, enter the second number');
// 	let x = +prompt('what action do you want to do: adding - enter "1", substraction - enter "2", multiplication - enter "3", division - enter "4"');

// 	switch(x) {
// 		case(1):
// 			res = a + b;
// 			break;
// 		case(2):
// 			res = a - b;
// 			break;
// 		case(3):
// 			res = a * b;
// 			break;
// 		case(4):
// 			res = a / b;
// 			break;
// 	}
// 		y = confirm(`Your result is ${res}. Do you want to do another calculations? If yes, press "Ok"`)
// } while (y = true);