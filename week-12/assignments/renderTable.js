const { getAll } = require("./api/people.js");

const loadData = (path) =>
	new Promise((resolve) => {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = ({ target }) => {
			if (target.readyState == 4 && target.status == 200) {
				resolve(JSON.parse(target.response));
			}
		};
		xhttp.open("GET", path, true);
		xhttp.send();
	});

const renderTable = (data) => {
	const tableBody = document.getElementById("table-body");

	if (!tableBody) {
		throw new Error("No table element found");
	}

	let source = data;
	const params = new URLSearchParams(window.location.search);
	const name = params.get("name");
	const city = params.get("city");
	const state = params.get("state");
	if (name) {
		source = source.filter(({ first_name }) =>
			first_name.toLowerCase().includes(name)
		);
	}
	if (city) {
		source = source.filter((elm) => elm.city == (city));
	}
	if (state) {
		source = source.filter((elm) => elm.state == (state));
	}
	const rows = source.reduce(
		(
			acc,
			{
				id,
				first_name,
				last_name,
				gender,
				email,
				street_name,
				city,
				state,
				country,
				country_code,
			}
		) =>
			acc +
			`<tr><td>${id}</td><td>${first_name}</td><td>${last_name}</td><td>${gender}</td><td>${email}</td><td>${street_name}</td><td>${city}</td><td>${state}</td><td>${country}</td><td>${country_code}</td></tr>`,
		``
	);

	tableBody.innerHTML = rows;
};

const renderDropdown = (data) => {
	const cityDropdown = document.getElementById("city");
	const city = data.reduce(
		(acc, { city }) => acc + `<option value=${city}>${city}</option>`,
		`<option value="" disabled selected>Select City</option>`
	);
	cityDropdown.innerHTML = city;
	const stateDropdown = document.getElementById("state");
	const state = data.reduce(
		(acc, { state }) => acc + `<option value=${state}>${state}</option>`,
		`<option value="" disabled selected>Select State</option>`
	);
	stateDropdown.innerHTML = state;
};

getAll(`./data.json`).then((data) => {
	renderDropdown(data.data);
	renderTable(data.data);
});

const onSubmit = (event) => {
	event.preventDefault();

	const term = event.target.name.value;

	loadData(`./data.json`).then((data) => renderTable(data, term));
};

const onReset = () => {
	loadData(`./data.json`).then((data) => renderTable(data));
};
