let products = [
	{ product: "Shirt", price: 10 },
	{ product: "Laptop", price: 2400 },
	{ product: "Bike", price: 450 },
	{ product: "Chair", price: 150 },
	{ product: "Phone", price: 1500 },
	{ product: "Shoes", price: 60 },
	{ product: "Car", price: 25000 },
	{ product: "Coffee Machine", price: 500 }
];

let sum = 0;

for (let i of products) {
	sum += i.price;
	let estimation = "";
	if ( i.price <= 100 ) {
		estimation = " - cheap";
	} else if ( i.price <= 500 ) {
		estimation = " - normal price";
	} else if ( i.price <= 3000 ) {
		estimation = " - expensive";
	} else {
		estimation = " - very expensive";
	}
	console.log(i.product + estimation);
}

console.log('The total price is $sum');