const htmlToElement = (html) => {
	const template = document.createElement("template");
	html = html.trim(); // Never return a text node of whitespace as the result
	template.innerHTML = html;
	return template.content.firstChild;
};

const loadData = (path) =>
	new Promise((resolve) => {
		const xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = ({ target }) => {
			if (target.readyState == 4 && target.status == 200) {
				resolve(target.responseXML);
			}
		};
		xhttp.open("GET", path, true);
		xhttp.send();
	});

const generateTableRow = (item, searchTerm) => {
	const id = Array.from(item.getElementsByTagName(`id`))[0].textContent
	const firstname = Array.from(item.getElementsByTagName(`first_name`))[0].textContent
	const lastname = Array.from(item.getElementsByTagName(`last_name`))[0].textContent
	const gender = Array.from(item.getElementsByTagName(`gender`))[0].textContent
	const email = Array.from(item.getElementsByTagName(`email`))[0].textContent
	const ipAddress = Array.from(item.getElementsByTagName(`ip_address`))[0].textContent
	if (searchTerm) {
		searchTerm = searchTerm.toLowerCase();
		if(id.includes(searchTerm) || firstname.includes(searchTerm) || lastname.includes(searchTerm) || gender.includes(searchTerm) || email.includes(searchTerm) || ipAddress.includes(searchTerm)) {
            return `<tr>
            <td>${id}</td>
            <td>${firstname} ${lastname}</td>
            <td>${gender}</td>
            <td>${email}</td>
            <td>${ipAddress}</td>
        </tr>`;
        } else {
            return ``
        }
	}
	return `<tr>
        <td>${id}</td>
        <td>${firstname} ${lastname}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td>${ipAddress}</td>
    </tr>`;
};

const renderTable = (xmlData, searchTerm) => {
	const table = document.getElementById("table-people");

	if (!table) {
		throw new Error("No table element found");
	}

	const nodes = Array.from(xmlData.documentElement.childNodes).filter(
		({ nodeName }) => nodeName === `person`
	);

	let rows = nodes.reduce(
		(acc, studentNode) => acc + generateTableRow(studentNode, searchTerm),
		``
	);
	table.innerHTML = rows;
};

const onSubmit = (event) => {
	event.preventDefault();
	const searchTerm = event.target.search.value;
	loadData(`http://localhost:8080/week-6/assignments/people.xml`).then((data) =>
		renderTable(data, searchTerm)
	);
};

loadData(`http://localhost:8080/week-6/assignments/people.xml`).then((data) =>
	renderTable(data)
);

const onReset = () => {
	loadData(`http://localhost:8080/week-6/assignments/people.xml`).then((data) =>
		renderTable(data)
	);
};
