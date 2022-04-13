let seq = [1, 1];

let one_num = seq[0];
let two_num = seq[1];

function AddANumber(one, two) {
	seq.push(one + two);
}

do {
	 AddANumber(one_num, two_num);
	 one_num = seq[seq.length - 1];
	 two_num = seq[seq.length - 2];
} while (one_num + two_num < 500);

console.log(seq);