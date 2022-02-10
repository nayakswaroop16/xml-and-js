let data = [
	{
		id: 1,
		first_name: "Husain",
		last_name: "Zeale",
		email: "hzeale0@odnoklassniki.ru",
		gender: "Male",
		ip_address: "143.237.191.245",
	},
	{
		id: 2,
		first_name: "Michale",
		last_name: "Delgado",
		email: "mdelgado1@paginegialle.it",
		gender: "Male",
		ip_address: "144.2.126.19",
	},
	{
		id: 3,
		first_name: "Gaspard",
		last_name: "Upwood",
		email: "gupwood2@fastcompany.com",
		gender: "Male",
		ip_address: "147.85.27.165",
	},
	{
		id: 4,
		first_name: "Gussy",
		last_name: "Dowzell",
		email: "gdowzell3@ox.ac.uk",
		gender: "Male",
		ip_address: "22.201.167.239",
	},
	{
		id: 5,
		first_name: "Alida",
		last_name: "Macias",
		email: "amacias4@slate.com",
		gender: "Female",
		ip_address: "166.62.41.24",
	},
	{
		id: 6,
		first_name: "Tess",
		last_name: "Sainte Paul",
		email: "tsaintepaul5@xinhuanet.com",
		gender: "Female",
		ip_address: "58.80.74.111",
	},
	{
		id: 7,
		first_name: "Germaine",
		last_name: "Winnett",
		email: "gwinnett6@parallels.com",
		gender: "Genderqueer",
		ip_address: "224.15.42.167",
	},
	{
		id: 8,
		first_name: "Mei",
		last_name: "Swansbury",
		email: "mswansbury7@uol.com.br",
		gender: "Female",
		ip_address: "191.235.203.177",
	},
	{
		id: 9,
		first_name: "Brietta",
		last_name: "Greenfield",
		email: "bgreenfield8@qq.com",
		gender: "Male",
		ip_address: "72.108.253.70",
	},
	{
		id: 10,
		first_name: "Guinna",
		last_name: "Dagnan",
		email: "gdagnan9@thetimes.co.uk",
		gender: "Female",
		ip_address: "108.233.202.64",
	},
];

const renderData = () => {
	const table = document.getElementById("html-table");
	if (window.location.search) {
		const params = new URLSearchParams(window.location.search);
		const searchBy = params.get(`search`).toLowerCase();
		document.getElementById(`search`).value = params.get(`search`);

		data = data.filter(
			({ first_name, last_name, email, gender, ip_address }) =>
				last_name.toLowerCase().includes(searchBy) ||
				first_name.toLowerCase().includes(searchBy) ||
				email.toLowerCase().includes(searchBy) ||
				gender.toLowerCase().includes(searchBy) ||
				ip_address.includes(searchBy)
		);
	}

	data.map((row) => {
		let tableRow = `<tr id="table-row-${row.id}"><td>${row.id}</td><td>${row.first_name}</td><td>${row.last_name}</td><td>${row.email}</td><td>${row.gender}</td><td>${row.ip_address}</td></tr>`;
		table.innerHTML += tableRow;
	});
};

renderData(data);

const onReset = () => {
	window.location.replace(window.location.pathname);
};
