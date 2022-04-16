const { getAll } = require("./controller/animals.js");

const renderTable = (data, nameTerm) => {
	const tableBody = document.getElementById("table-data");

	if (!tableBody) {
		throw new Error("No table element found");
	}

	let source = data;

	if (nameTerm) {
		source = source.filter(({ name }) => name.toLowerCase().includes(nameTerm));
	}

	const rows = source.reduce(
		(acc, { id, common_name, scientific_name, origin }) =>
			acc +
			`<tr id="table-row-${id}"><td>${id}</td><td>${common_name}</td><td>${scientific_name}</td><td>${origin}</td></tr>`,
		``
	);

	tableBody.innerHTML = rows;
};

const fillDropdown = (data) => {
	const dropdown = document.getElementById("origin");

	if (!dropdown) {
		throw new Error("No dropdown found");
	}
	let countries = data.map((elm) => {
		return elm.origin;
	});
	countries = [...new Set(countries)];
	const options = countries.reduce(
		(acc, origin) => acc + `<option value="${origin}">${origin}</option>`,
		`<option value="">Select country</option>`
	);
	dropdown.innerHTML = options;
};

getAll().then(({ data }) =>  {
  renderTable(data)
  fillDropdown(data)
});

window.onSubmit = (event) => {
	event.preventDefault();

	const id = event.target.id.value;
	const common_name = event.target.common_name.value;
	const scientific_name = event.target.scientific_name.value;
	const origin = event.target.origin.value;

	getAll({ id, common_name, scientific_name, origin }).then(({ data }) =>
		renderTable(data)
	);
};

window.onReset = () => {
	getAll().then(({ data }) => renderTable(data));
};
