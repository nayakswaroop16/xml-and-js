const products = require("../data/products");

const getAll = ({ id, firstname, lastname, email, gender, ipaddress }) =>
	new Promise((resolve) => {
		let result = Array.from(products);
		if (id) {
			result = result.filter((x) => x.id === Number(id));
		}
		if(firstname) {
			result = result.filter((x) => x.first_name === firstname)
		}
		if(lastname) {
			result = result.filter((x) => x.last_name === lastname)
		}
		if(email) {
			result = result.filter((x) => x.email === email)
		}
		if(ipaddress) {
			result = result.filter((x) => x.ip_address === ipaddress)
		}
		if(gender) {
			result = result.filter((x) => x.gender === gender)
		}
        console.log(id)
		// result = result.filter((x) => x.first_name == firstname);
		resolve({ code: 200, data: JSON.stringify(result) });
	});

const getById = (id) =>
	new Promise((resolve) => {
		let result = products.find((x) => x.id === Number(id));
		console.log(result);
		if (result) {
			resolve({ code: 200, data: JSON.stringify(result) });
		} else {
			resolve({ code: 404, message: "No data found" });
		}
	});

module.exports = {
	getAll,
	getById,
};
