/**
 * 1. Replace regular functions with arrow functions
 * 2. Fix callback hell by rewriting it with async/await
 * 3. Make sure the "Finish" is logged after all the data is converted
**/

const timeout = async (ms) => {
	return new Promise((resolve) => {
		resolve();
	}, ms);
};

const generateRandomNumber = () => {
	return Math.floor(Math.random() * 40);
};

const generateData = async () => {
	await timeout(200);
	const data = Array.from({ length: 20 }, generateRandomNumber);
	return data;
};

const convertToFeet = async(meters) => {
	await timeout(200)
	return new Promise((resolve) => {
		resolve( meters * 3.2808);
	});
};

const processData = async (data, converterFn) =>
	await Promise.all(
		data.map(async (value) => {
			return { val: value, res: await converterFn(value) };
		})
	);

const logResult = (meters, feet) =>
	console.log(`Converted ${meters}m to ${feet}ft`);

const main = async () => {
	console.log("Start");
	let data = await generateData();
	let processedData = await processData(data, convertToFeet);
	processedData.forEach((element) => {
		logResult(element.val, element.res);
	});
	console.log("Finish");
};

main();
