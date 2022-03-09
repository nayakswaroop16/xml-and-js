const timeout = (delay) => {
	return new Promise(function (resolve) {
		setTimeout(resolve, delay);
	});
};

function inc(a) {
	return new Promise((resolve) => {
		timeout(300).then(() => {
			resolve(a + 1);
		});
	});
}

const sum = function (a, b) {
	return new Promise((resolve) => {
		timeout(300).then(() => {
			resolve(a + b);
		});
	});
};

const max = (a, b) => (a > b ? a : b);

const avg = (a, b) =>
	timeout(300)
		.then(() => sum(a, b))
		.then((s) => s / 2);

const obj = {
	name: "Marcus Aurelius",
	split(sep = " ") {
		return this.name.split(sep);
	},
};

class Person {
	constructor(name) {
		this.name = name;
	}

	static of(name) {
		return new Person(name);
	}

	split(sep = " ") {
		return this.name.split(sep);
	}
}

const person = Person.of("Marcus Aurelius");

const main = async () => {
	console.log("inc(5) =", await inc(5));
	console.log("sum(1, 3) =", await sum(1, 3));
	console.log("max(8, 6) =", await max(8, 6));
	console.log("avg(8, 6) =", await avg(8, 6));
	console.log("obj.split() =", obj.split());
	console.log("person.split() =", person.split());
};

main();
