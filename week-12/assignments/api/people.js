const products = require("../data/data");

const getAll = ({ name, city, state } = {}) =>
	new Promise((resolve) => {
		let result = Array.from(products);

		resolve({ code: 200, data: result });
	});

const getById = (id) =>
	new Promise((resolve) => {
		const product = products.find((product) => product.id === id);

		if (product) {
			resolve({ code: 200, data: product });
		} else {
			resolve({
				code: 404,
				data: { message: `No product found for id ${id}` },
			});
		}
	});

module.exports = {
	getAll,
	getById,
};
