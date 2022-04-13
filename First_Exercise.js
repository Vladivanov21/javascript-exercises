let numbers = [ -21, -12, -11, -9, -5, 0, 1, 6, 17, 20, 22 ];

let pos_numbers = [];

for (let num of numbers) {
	if (num > 0) {
		pos_numbers.push(num);
	}
}

console.log(pos_numbers);