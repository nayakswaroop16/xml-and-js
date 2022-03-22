const http = require("http");

const product = require("./controllers/product");

const server = http.createServer(async (req, res) => {
	const [basePath, paramsString] = req.url.split("?");
	console.log(basePath);
	if (basePath === "/api/products") {
		const params = new URLSearchParams(paramsString);
		const parameters = Array.from(params.entries()).reduce(
			(acc, [key, value]) => ({ ...acc, [key]: value }),
			{}
		);
		const { data, code } = await product.getAll(parameters);
		res.writeHead(code, { "Content-Type": "application/json" });
		res.end(data);
	} else if (basePath.match(/\/api\/products\/\w+/)) {
		const id = basePath.split("/")[3];
		console.log("here", id);
		const { data, code } = await product.getById(id);
		res.writeHead(code, { "Content-Type": "application/json" });
		res.end(data);
	}
});

server.listen(8000);
