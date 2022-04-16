const animals = require("../data/animals");

const getAll = (data = {}) =>
	new Promise((resolve) => {
		let result = Array.from(animals);
		if (data.id) {
			result = result.filter((x) => x.id === parseInt(data.id));
		}
		if (data.common_name) {
			result = result.filter((x) => x.common_name.toLowerCase().includes(data.common_name));
		}
		if (data.scientific_name) {
			result = result.filter((x) => x.scientific_name.toLowerCase().includes(data.scientific_name));
		}
		if (data.origin) {
			result = result.filter((x) => x.origin === data.origin);
		}
		resolve({ code: 200, data: result });
	});

const getById = (id) =>
	new Promise((resolve) => {
		const animal = animals.find((animal) => animal.id === id);

		if (animal) {
			resolve({ code: 200, data: animal });
		} else {
			resolve({
				code: 404,
				data: { message: `No animal found for id ${id}` },
			});
		}
	});

module.exports = {
	getAll,
	getById,
};
