(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

},{"../data/animals":2}],2:[function(require,module,exports){
module.exports=[
	{
		"id": 1,
		"common_name": "Trotter, lily",
		"scientific_name": "Actophilornis africanus",
		"origin": "Sweden"
	},
	{
		"id": 2,
		"common_name": "Colobus, magistrate black",
		"scientific_name": "Colobus guerza",
		"origin": "Indonesia"
	},
	{
		"id": 3,
		"common_name": "White-browed sparrow weaver",
		"scientific_name": "Plocepasser mahali",
		"origin": "Indonesia"
	},
	{
		"id": 4,
		"common_name": "Collared lemming",
		"scientific_name": "Dicrostonyx groenlandicus",
		"origin": "Russia"
	},
	{
		"id": 5,
		"common_name": "Red-breasted cockatoo",
		"scientific_name": "Eolophus roseicapillus",
		"origin": "Ireland"
	},
	{
		"id": 6,
		"common_name": "American woodcock",
		"scientific_name": "Scolopax minor",
		"origin": "Dominican Republic"
	},
	{
		"id": 7,
		"common_name": "White-eye, cape",
		"scientific_name": "Zosterops pallidus",
		"origin": "Greece"
	},
	{
		"id": 8,
		"common_name": "Red meerkat",
		"scientific_name": "Cynictis penicillata",
		"origin": "China"
	},
	{
		"id": 9,
		"common_name": "Eagle, white-bellied sea",
		"scientific_name": "Haliaetus leucogaster",
		"origin": "Brazil"
	},
	{
		"id": 10,
		"common_name": "Skink, blue-tongued",
		"scientific_name": "Tiliqua scincoides",
		"origin": "China"
	},
	{
		"id": 11,
		"common_name": "Alpaca",
		"scientific_name": "Lama pacos",
		"origin": "Malaysia"
	},
	{
		"id": 12,
		"common_name": "Mandras tree shrew",
		"scientific_name": "Anathana ellioti",
		"origin": "Russia"
	},
	{
		"id": 13,
		"common_name": "Kiskadee, great",
		"scientific_name": "Pitangus sulphuratus",
		"origin": "Philippines"
	},
	{
		"id": 14,
		"common_name": "Screamer, southern",
		"scientific_name": "Chauna torquata",
		"origin": "France"
	},
	{
		"id": 15,
		"common_name": "Yak",
		"scientific_name": "Bos mutus",
		"origin": "Cameroon"
	},
	{
		"id": 16,
		"common_name": "Sage hen",
		"scientific_name": "Centrocercus urophasianus",
		"origin": "Colombia"
	},
	{
		"id": 17,
		"common_name": "Porcupine, indian",
		"scientific_name": "Hystrix indica",
		"origin": "Philippines"
	},
	{
		"id": 18,
		"common_name": "White-cheeked pintail",
		"scientific_name": "Anas bahamensis",
		"origin": "Indonesia"
	},
	{
		"id": 19,
		"common_name": "Egyptian vulture",
		"scientific_name": "Neophron percnopterus",
		"origin": "China"
	},
	{
		"id": 20,
		"common_name": "Cheetah",
		"scientific_name": "Acinynox jubatus",
		"origin": "China"
	},
	{
		"id": 21,
		"common_name": "Dog, bush",
		"scientific_name": "Speothos vanaticus",
		"origin": "Portugal"
	},
	{
		"id": 22,
		"common_name": "Golden-mantled ground squirrel",
		"scientific_name": "Spermophilus lateralis",
		"origin": "Russia"
	},
	{
		"id": 23,
		"common_name": "Egyptian cobra",
		"scientific_name": "Naja haje",
		"origin": "Afghanistan"
	},
	{
		"id": 24,
		"common_name": "Cat, jungle",
		"scientific_name": "Felis chaus",
		"origin": "South Sudan"
	},
	{
		"id": 25,
		"common_name": "Timber wolf",
		"scientific_name": "Canis lupus lycaon",
		"origin": "Mexico"
	},
	{
		"id": 26,
		"common_name": "Wallaby, euro",
		"scientific_name": "Macropus robustus",
		"origin": "Indonesia"
	},
	{
		"id": 27,
		"common_name": "Common dolphin",
		"scientific_name": "Delphinus delphis",
		"origin": "China"
	},
	{
		"id": 28,
		"common_name": "Galapagos sea lion",
		"scientific_name": "Zalophus californicus",
		"origin": "Indonesia"
	},
	{
		"id": 29,
		"common_name": "Squirrel, golden-mantled ground",
		"scientific_name": "Spermophilus lateralis",
		"origin": "Philippines"
	},
	{
		"id": 30,
		"common_name": "Pigeon, wood",
		"scientific_name": "Columba palumbus",
		"origin": "Croatia"
	},
	{
		"id": 31,
		"common_name": "American bison",
		"scientific_name": "Bison bison",
		"origin": "China"
	},
	{
		"id": 32,
		"common_name": "Blue-faced booby",
		"scientific_name": "Sula dactylatra",
		"origin": "China"
	},
	{
		"id": 33,
		"common_name": "Green-winged trumpeter",
		"scientific_name": "Psophia viridis",
		"origin": "China"
	},
	{
		"id": 34,
		"common_name": "Suricate",
		"scientific_name": "Suricata suricatta",
		"origin": "Indonesia"
	},
	{
		"id": 35,
		"common_name": "African polecat",
		"scientific_name": "Ictonyx striatus",
		"origin": "Sierra Leone"
	},
	{
		"id": 36,
		"common_name": "Robin, white-throated",
		"scientific_name": "Irania gutteralis",
		"origin": "China"
	},
	{
		"id": 37,
		"common_name": "Skua, great",
		"scientific_name": "Catharacta skua",
		"origin": "Uganda"
	},
	{
		"id": 38,
		"common_name": "Puku",
		"scientific_name": "Kobus vardonii vardoni",
		"origin": "Mexico"
	},
	{
		"id": 39,
		"common_name": "Francolin, coqui",
		"scientific_name": "Francolinus coqui",
		"origin": "Indonesia"
	},
	{
		"id": 40,
		"common_name": "Nuthatch, red-breasted",
		"scientific_name": "Sitta canadensis",
		"origin": "Mexico"
	},
	{
		"id": 41,
		"common_name": "Monkey, red howler",
		"scientific_name": "Alouatta seniculus",
		"origin": "Philippines"
	},
	{
		"id": 42,
		"common_name": "Little brown bat",
		"scientific_name": "Myotis lucifugus",
		"origin": "Mongolia"
	},
	{
		"id": 43,
		"common_name": "Snake, tiger",
		"scientific_name": "Notechis semmiannulatus",
		"origin": "Philippines"
	},
	{
		"id": 44,
		"common_name": "Silver-backed fox",
		"scientific_name": "Vulpes chama",
		"origin": "Philippines"
	},
	{
		"id": 45,
		"common_name": "Dove, little brown",
		"scientific_name": "Streptopelia senegalensis",
		"origin": "Russia"
	},
	{
		"id": 46,
		"common_name": "Mockingbird, galapagos",
		"scientific_name": "Nesomimus trifasciatus",
		"origin": "Poland"
	},
	{
		"id": 47,
		"common_name": "Skink, african",
		"scientific_name": "Mabuya spilogaster",
		"origin": "China"
	},
	{
		"id": 48,
		"common_name": "Cardinal, red-capped",
		"scientific_name": "Paroaria gularis",
		"origin": "Portugal"
	},
	{
		"id": 49,
		"common_name": "Small Indian mongoose",
		"scientific_name": "Herpestes javanicus",
		"origin": "Colombia"
	},
	{
		"id": 50,
		"common_name": "Dragon, netted rock",
		"scientific_name": "Ctenophorus ornatus",
		"origin": "Sweden"
	},
	{
		"id": 51,
		"common_name": "Greater blue-eared starling",
		"scientific_name": "Lamprotornis chalybaeus",
		"origin": "Sweden"
	},
	{
		"id": 52,
		"common_name": "American alligator",
		"scientific_name": "Alligator mississippiensis",
		"origin": "Portugal"
	},
	{
		"id": 53,
		"common_name": "Catfish, blue",
		"scientific_name": "Ictalurus furcatus",
		"origin": "Azerbaijan"
	},
	{
		"id": 54,
		"common_name": "White-bellied sea eagle",
		"scientific_name": "Haliaetus leucogaster",
		"origin": "Germany"
	},
	{
		"id": 55,
		"common_name": "Bateleur eagle",
		"scientific_name": "Terathopius ecaudatus",
		"origin": "China"
	},
	{
		"id": 56,
		"common_name": "Bush dog",
		"scientific_name": "Speothos vanaticus",
		"origin": "Russia"
	},
	{
		"id": 57,
		"common_name": "Little blue penguin",
		"scientific_name": "Eudyptula minor",
		"origin": "Sweden"
	},
	{
		"id": 58,
		"common_name": "Sloth, two-toed",
		"scientific_name": "Choloepus hoffmani",
		"origin": "China"
	},
	{
		"id": 59,
		"common_name": "Crab (unidentified)",
		"scientific_name": "unavailable",
		"origin": "Poland"
	},
	{
		"id": 60,
		"common_name": "Egret, cattle",
		"scientific_name": "Bubulcus ibis",
		"origin": "Philippines"
	},
	{
		"id": 61,
		"common_name": "African wild dog",
		"scientific_name": "Lycaon pictus",
		"origin": "China"
	},
	{
		"id": 62,
		"common_name": "Water moccasin",
		"scientific_name": "Agkistrodon piscivorus",
		"origin": "Pakistan"
	},
	{
		"id": 63,
		"common_name": "Dove, rock",
		"scientific_name": "Columba livia",
		"origin": "China"
	},
	{
		"id": 64,
		"common_name": "Kafue flats lechwe",
		"scientific_name": "Kobus leche robertsi",
		"origin": "China"
	},
	{
		"id": 65,
		"common_name": "Frog (unidentified)",
		"scientific_name": "Rana sp.",
		"origin": "Canada"
	},
	{
		"id": 66,
		"common_name": "Burrowing owl",
		"scientific_name": "Speotyte cuniculata",
		"origin": "Ukraine"
	},
	{
		"id": 67,
		"common_name": "Baboon, olive",
		"scientific_name": "Papio cynocephalus",
		"origin": "Central African Republic"
	},
	{
		"id": 68,
		"common_name": "Crane, brolga",
		"scientific_name": "Grus rubicundus",
		"origin": "Sweden"
	},
	{
		"id": 69,
		"common_name": "Mudskipper (unidentified)",
		"scientific_name": "unavailable",
		"origin": "Russia"
	},
	{
		"id": 70,
		"common_name": "Ostrich",
		"scientific_name": "Struthio camelus",
		"origin": "Brazil"
	},
	{
		"id": 71,
		"common_name": "Crow, pied",
		"scientific_name": "Corvus albus",
		"origin": "Indonesia"
	},
	{
		"id": 72,
		"common_name": "Squirrel, antelope ground",
		"scientific_name": "Ammospermophilus nelsoni",
		"origin": "China"
	},
	{
		"id": 73,
		"common_name": "Egret, great",
		"scientific_name": "Casmerodius albus",
		"origin": "China"
	},
	{
		"id": 74,
		"common_name": "Gemsbok",
		"scientific_name": "Oryx gazella",
		"origin": "Tunisia"
	},
	{
		"id": 75,
		"common_name": "Red-capped cardinal",
		"scientific_name": "Paroaria gularis",
		"origin": "China"
	},
	{
		"id": 76,
		"common_name": "Long-billed corella",
		"scientific_name": "Cacatua tenuirostris",
		"origin": "Indonesia"
	},
	{
		"id": 77,
		"common_name": "Barrows goldeneye",
		"scientific_name": "Bucephala clangula",
		"origin": "Poland"
	},
	{
		"id": 78,
		"common_name": "Pine snake (unidentified)",
		"scientific_name": "Pituophis melanaleucus",
		"origin": "Argentina"
	},
	{
		"id": 79,
		"common_name": "Eastern cottontail rabbit",
		"scientific_name": "Sylvilagus floridanus",
		"origin": "Japan"
	},
	{
		"id": 80,
		"common_name": "Marabou stork",
		"scientific_name": "Leptoptilos crumeniferus",
		"origin": "Belgium"
	},
	{
		"id": 81,
		"common_name": "Iguana, land",
		"scientific_name": "Conolophus subcristatus",
		"origin": "Portugal"
	},
	{
		"id": 82,
		"common_name": "Crane, black-crowned",
		"scientific_name": "Balearica pavonina",
		"origin": "China"
	},
	{
		"id": 83,
		"common_name": "Red-winged blackbird",
		"scientific_name": "Agelaius phoeniceus",
		"origin": "Croatia"
	},
	{
		"id": 84,
		"common_name": "Arctic lemming",
		"scientific_name": "Dicrostonyx groenlandicus",
		"origin": "France"
	},
	{
		"id": 85,
		"common_name": "Monitor, two-banded",
		"scientific_name": "Varanus salvator",
		"origin": "Poland"
	},
	{
		"id": 86,
		"common_name": "Nyala",
		"scientific_name": "Tragelaphus angasi",
		"origin": "Chile"
	},
	{
		"id": 87,
		"common_name": "Dik, kirk's dik",
		"scientific_name": "Madoqua kirkii",
		"origin": "Belgium"
	},
	{
		"id": 88,
		"common_name": "Buffalo, wild water",
		"scientific_name": "Bubalus arnee",
		"origin": "China"
	},
	{
		"id": 89,
		"common_name": "Quail, gambel's",
		"scientific_name": "Callipepla gambelii",
		"origin": "Portugal"
	},
	{
		"id": 90,
		"common_name": "Lark, horned",
		"scientific_name": "Eremophila alpestris",
		"origin": "Greece"
	},
	{
		"id": 91,
		"common_name": "Elk, Wapiti",
		"scientific_name": "Cervus canadensis",
		"origin": "Czech Republic"
	},
	{
		"id": 92,
		"common_name": "Oriental white-backed vulture",
		"scientific_name": "Gyps bengalensis",
		"origin": "Greece"
	},
	{
		"id": 93,
		"common_name": "Cormorant, king",
		"scientific_name": "Phalacrocorax albiventer",
		"origin": "Brazil"
	},
	{
		"id": 94,
		"common_name": "Spotted hyena",
		"scientific_name": "Crocuta crocuta",
		"origin": "Brazil"
	},
	{
		"id": 95,
		"common_name": "Cockatoo, red-tailed",
		"scientific_name": "Calyptorhynchus magnificus",
		"origin": "Guinea"
	},
	{
		"id": 96,
		"common_name": "Yellow-billed hornbill",
		"scientific_name": "Tockus flavirostris",
		"origin": "Philippines"
	},
	{
		"id": 97,
		"common_name": "Coqui francolin",
		"scientific_name": "Francolinus coqui",
		"origin": "Russia"
	},
	{
		"id": 98,
		"common_name": "South American puma",
		"scientific_name": "Felis concolor",
		"origin": "Indonesia"
	},
	{
		"id": 99,
		"common_name": "Osprey",
		"scientific_name": "Pandon haliaetus",
		"origin": "Indonesia"
	},
	{
		"id": 100,
		"common_name": "Gambel's quail",
		"scientific_name": "Callipepla gambelii",
		"origin": "Argentina"
	},
	{
		"id": 101,
		"common_name": "Squirrel, grey-footed",
		"scientific_name": "Paraxerus cepapi",
		"origin": "Brazil"
	},
	{
		"id": 102,
		"common_name": "Red and blue macaw",
		"scientific_name": "Ara chloroptera",
		"origin": "Luxembourg"
	},
	{
		"id": 103,
		"common_name": "Lemming, arctic",
		"scientific_name": "Dicrostonyx groenlandicus",
		"origin": "China"
	},
	{
		"id": 104,
		"common_name": "Blue crane",
		"scientific_name": "Anthropoides paradisea",
		"origin": "Brazil"
	},
	{
		"id": 105,
		"common_name": "Wolf spider",
		"scientific_name": "Lycosa godeffroyi",
		"origin": "Indonesia"
	},
	{
		"id": 106,
		"common_name": "Malachite kingfisher",
		"scientific_name": "Corythornis cristata",
		"origin": "Indonesia"
	},
	{
		"id": 107,
		"common_name": "Blue fox",
		"scientific_name": "Alopex lagopus",
		"origin": "United States"
	},
	{
		"id": 108,
		"common_name": "Mocking cliffchat",
		"scientific_name": "Thamnolaea cinnmomeiventris",
		"origin": "Norway"
	},
	{
		"id": 109,
		"common_name": "Paddy heron (unidentified)",
		"scientific_name": "unavailable",
		"origin": "Nepal"
	},
	{
		"id": 110,
		"common_name": "Asian openbill",
		"scientific_name": "Anastomus oscitans",
		"origin": "Venezuela"
	},
	{
		"id": 111,
		"common_name": "Common rhea",
		"scientific_name": "Rhea americana",
		"origin": "Nepal"
	},
	{
		"id": 112,
		"common_name": "Spotted deer",
		"scientific_name": "Axis axis",
		"origin": "China"
	},
	{
		"id": 113,
		"common_name": "Sarus crane",
		"scientific_name": "Grus antigone",
		"origin": "Greece"
	},
	{
		"id": 114,
		"common_name": "Red-knobbed coot",
		"scientific_name": "Fulica cristata",
		"origin": "China"
	},
	{
		"id": 115,
		"common_name": "Zebra, plains",
		"scientific_name": "Equus burchelli",
		"origin": "Russia"
	},
	{
		"id": 116,
		"common_name": "Cape cobra",
		"scientific_name": "Naja nivea",
		"origin": "Ireland"
	},
	{
		"id": 117,
		"common_name": "Asian foreset tortoise",
		"scientific_name": "Manouria emys",
		"origin": "Nigeria"
	},
	{
		"id": 118,
		"common_name": "Blue fox",
		"scientific_name": "Alopex lagopus",
		"origin": "China"
	},
	{
		"id": 119,
		"common_name": "Ox, musk",
		"scientific_name": "Ovibos moschatus",
		"origin": "Mali"
	},
	{
		"id": 120,
		"common_name": "Raven, cape",
		"scientific_name": "Corvus albicollis",
		"origin": "Netherlands"
	},
	{
		"id": 121,
		"common_name": "Cheetah",
		"scientific_name": "Acinynox jubatus",
		"origin": "Russia"
	},
	{
		"id": 122,
		"common_name": "Yellow-brown sungazer",
		"scientific_name": "Cordylus giganteus",
		"origin": "Indonesia"
	},
	{
		"id": 123,
		"common_name": "Pied avocet",
		"scientific_name": "Recurvirostra avosetta",
		"origin": "Ukraine"
	},
	{
		"id": 124,
		"common_name": "Fox, asian red",
		"scientific_name": "Vulpes vulpes",
		"origin": "China"
	},
	{
		"id": 125,
		"common_name": "Green-backed heron",
		"scientific_name": "Butorides striatus",
		"origin": "El Salvador"
	},
	{
		"id": 126,
		"common_name": "Scaly-breasted lorikeet",
		"scientific_name": "Trichoglossus chlorolepidotus",
		"origin": "United States"
	},
	{
		"id": 127,
		"common_name": "Weaver, red-billed buffalo",
		"scientific_name": "Bubalornis niger",
		"origin": "Indonesia"
	},
	{
		"id": 128,
		"common_name": "African pied wagtail",
		"scientific_name": "Motacilla aguimp",
		"origin": "Thailand"
	},
	{
		"id": 129,
		"common_name": "Spotted deer",
		"scientific_name": "Axis axis",
		"origin": "United States"
	},
	{
		"id": 130,
		"common_name": "Eagle, white-bellied sea",
		"scientific_name": "Haliaetus leucogaster",
		"origin": "Indonesia"
	},
	{
		"id": 131,
		"common_name": "Knob-nosed goose",
		"scientific_name": "Sarkidornis melanotos",
		"origin": "Russia"
	},
	{
		"id": 132,
		"common_name": "Brolga crane",
		"scientific_name": "Grus rubicundus",
		"origin": "Indonesia"
	},
	{
		"id": 133,
		"common_name": "Cockatoo, roseate",
		"scientific_name": "Eolophus roseicapillus",
		"origin": "Sweden"
	},
	{
		"id": 134,
		"common_name": "Dunnart, fat-tailed",
		"scientific_name": "Smithopsis crassicaudata",
		"origin": "Burundi"
	},
	{
		"id": 135,
		"common_name": "Buffalo, asian water",
		"scientific_name": "Bubalus arnee",
		"origin": "Portugal"
	},
	{
		"id": 136,
		"common_name": "Pied kingfisher",
		"scientific_name": "Ceryle rudis",
		"origin": "China"
	},
	{
		"id": 137,
		"common_name": "Otter, canadian river",
		"scientific_name": "Lutra canadensis",
		"origin": "Russia"
	},
	{
		"id": 138,
		"common_name": "Skunk, striped",
		"scientific_name": "Mephitis mephitis",
		"origin": "Russia"
	},
	{
		"id": 139,
		"common_name": "Monkey, vervet",
		"scientific_name": "Cercopithecus aethiops",
		"origin": "Indonesia"
	},
	{
		"id": 140,
		"common_name": "Savanna fox",
		"scientific_name": "Dusicyon thous",
		"origin": "United States"
	},
	{
		"id": 141,
		"common_name": "Rattlesnake, dusky",
		"scientific_name": "Crotalus triseriatus",
		"origin": "Poland"
	},
	{
		"id": 142,
		"common_name": "Iguana, land",
		"scientific_name": "Conolophus subcristatus",
		"origin": "Tanzania"
	},
	{
		"id": 143,
		"common_name": "Stanley bustard",
		"scientific_name": "Neotis denhami",
		"origin": "United States"
	},
	{
		"id": 144,
		"common_name": "Red kangaroo",
		"scientific_name": "Macropus rufus",
		"origin": "Sweden"
	},
	{
		"id": 145,
		"common_name": "White-eye, cape",
		"scientific_name": "Zosterops pallidus",
		"origin": "Kiribati"
	},
	{
		"id": 146,
		"common_name": "Paddy heron (unidentified)",
		"scientific_name": "unavailable",
		"origin": "China"
	},
	{
		"id": 147,
		"common_name": "Lizard, desert spiny",
		"scientific_name": "Sceloporus magister",
		"origin": "China"
	},
	{
		"id": 148,
		"common_name": "Oriental short-clawed otter",
		"scientific_name": "Aonyx cinerea",
		"origin": "Philippines"
	},
	{
		"id": 149,
		"common_name": "Cattle egret",
		"scientific_name": "Bubulcus ibis",
		"origin": "Kazakhstan"
	},
	{
		"id": 150,
		"common_name": "European stork",
		"scientific_name": "Ciconia ciconia",
		"origin": "Indonesia"
	},
	{
		"id": 151,
		"common_name": "Badger, honey",
		"scientific_name": "Mellivora capensis",
		"origin": "China"
	},
	{
		"id": 152,
		"common_name": "Porcupine, tree",
		"scientific_name": "Coendou prehensilis",
		"origin": "Albania"
	},
	{
		"id": 153,
		"common_name": "American alligator",
		"scientific_name": "Alligator mississippiensis",
		"origin": "China"
	},
	{
		"id": 154,
		"common_name": "Starling, greater blue-eared",
		"scientific_name": "Lamprotornis chalybaeus",
		"origin": "Netherlands"
	},
	{
		"id": 155,
		"common_name": "Swan, trumpeter",
		"scientific_name": "Cygnus buccinator",
		"origin": "France"
	},
	{
		"id": 156,
		"common_name": "Yellow-bellied marmot",
		"scientific_name": "Marmota flaviventris",
		"origin": "Canada"
	},
	{
		"id": 157,
		"common_name": "Capuchin, brown",
		"scientific_name": "Cebus apella",
		"origin": "Russia"
	},
	{
		"id": 158,
		"common_name": "Southern lapwing",
		"scientific_name": "Vanellus chilensis",
		"origin": "Philippines"
	},
	{
		"id": 159,
		"common_name": "Cat, kaffir",
		"scientific_name": "Felis silvestris lybica",
		"origin": "United Kingdom"
	},
	{
		"id": 160,
		"common_name": "Bonnet macaque",
		"scientific_name": "Macaca radiata",
		"origin": "Panama"
	},
	{
		"id": 161,
		"common_name": "Royal tern",
		"scientific_name": "Thalasseus maximus",
		"origin": "Germany"
	},
	{
		"id": 162,
		"common_name": "Vine snake (unidentified)",
		"scientific_name": "Oxybelis sp.",
		"origin": "Greece"
	},
	{
		"id": 163,
		"common_name": "Snake, carpet",
		"scientific_name": "Morelia spilotes variegata",
		"origin": "Indonesia"
	},
	{
		"id": 164,
		"common_name": "Ant (unidentified)",
		"scientific_name": "unavailable",
		"origin": "United States"
	},
	{
		"id": 165,
		"common_name": "European badger",
		"scientific_name": "Meles meles",
		"origin": "France"
	},
	{
		"id": 166,
		"common_name": "Dog, bush",
		"scientific_name": "Speothos vanaticus",
		"origin": "Philippines"
	},
	{
		"id": 167,
		"common_name": "Seven-banded armadillo",
		"scientific_name": "Dasypus septemcincus",
		"origin": "Colombia"
	},
	{
		"id": 168,
		"common_name": "Black-faced kangaroo",
		"scientific_name": "Macropus fuliginosus",
		"origin": "Estonia"
	},
	{
		"id": 169,
		"common_name": "Saddle-billed stork",
		"scientific_name": "Ephipplorhynchus senegalensis",
		"origin": "Philippines"
	},
	{
		"id": 170,
		"common_name": "Otter, african clawless",
		"scientific_name": "Aonyx capensis",
		"origin": "Czech Republic"
	},
	{
		"id": 171,
		"common_name": "Waved albatross",
		"scientific_name": "Diomedea irrorata",
		"origin": "Portugal"
	},
	{
		"id": 172,
		"common_name": "African lynx",
		"scientific_name": "Felis caracal",
		"origin": "Palestinian Territory"
	},
	{
		"id": 173,
		"common_name": "Klipspringer",
		"scientific_name": "Oreotragus oreotragus",
		"origin": "Indonesia"
	},
	{
		"id": 174,
		"common_name": "Spider, wolf",
		"scientific_name": "Lycosa godeffroyi",
		"origin": "China"
	},
	{
		"id": 175,
		"common_name": "Sacred ibis",
		"scientific_name": "Threskionis aethiopicus",
		"origin": "Czech Republic"
	},
	{
		"id": 176,
		"common_name": "Spotted wood sandpiper",
		"scientific_name": "Tringa glareola",
		"origin": "Russia"
	},
	{
		"id": 177,
		"common_name": "Langur, common",
		"scientific_name": "Semnopithecus entellus",
		"origin": "China"
	},
	{
		"id": 178,
		"common_name": "Killer whale",
		"scientific_name": "Orcinus orca",
		"origin": "Madagascar"
	},
	{
		"id": 179,
		"common_name": "Wolf, common",
		"scientific_name": "Canis lupus",
		"origin": "United States"
	},
	{
		"id": 180,
		"common_name": "Sage hen",
		"scientific_name": "Centrocercus urophasianus",
		"origin": "Peru"
	},
	{
		"id": 181,
		"common_name": "Yellow-bellied marmot",
		"scientific_name": "Marmota flaviventris",
		"origin": "Indonesia"
	},
	{
		"id": 182,
		"common_name": "Capuchin, white-fronted",
		"scientific_name": "Cebus albifrons",
		"origin": "Brazil"
	},
	{
		"id": 183,
		"common_name": "Mexican beaded lizard",
		"scientific_name": "Heloderma horridum",
		"origin": "Japan"
	},
	{
		"id": 184,
		"common_name": "Mockingbird, galapagos",
		"scientific_name": "Nesomimus trifasciatus",
		"origin": "Indonesia"
	},
	{
		"id": 185,
		"common_name": "House sparrow",
		"scientific_name": "Passer domesticus",
		"origin": "Colombia"
	},
	{
		"id": 186,
		"common_name": "Blue and gold macaw",
		"scientific_name": "Ara ararauna",
		"origin": "Thailand"
	},
	{
		"id": 187,
		"common_name": "Insect, stick",
		"scientific_name": "Leprocaulinus vipera",
		"origin": "Brazil"
	},
	{
		"id": 188,
		"common_name": "Boa, columbian rainbow",
		"scientific_name": "Epicrates cenchria maurus",
		"origin": "France"
	},
	{
		"id": 189,
		"common_name": "Heron, goliath",
		"scientific_name": "Ardea golieth",
		"origin": "Czech Republic"
	},
	{
		"id": 190,
		"common_name": "Yellow mongoose",
		"scientific_name": "Cynictis penicillata",
		"origin": "Iran"
	},
	{
		"id": 191,
		"common_name": "Sociable weaver",
		"scientific_name": "Philetairus socius",
		"origin": "Aland Islands"
	},
	{
		"id": 192,
		"common_name": "Bat-eared fox",
		"scientific_name": "Otocyon megalotis",
		"origin": "Indonesia"
	},
	{
		"id": 193,
		"common_name": "Black-backed magpie",
		"scientific_name": "Gymnorhina tibicen",
		"origin": "Azerbaijan"
	},
	{
		"id": 194,
		"common_name": "Wood pigeon",
		"scientific_name": "Columba palumbus",
		"origin": "China"
	},
	{
		"id": 195,
		"common_name": "Javan gold-spotted mongoose",
		"scientific_name": "Herpestes javanicus",
		"origin": "United States"
	},
	{
		"id": 196,
		"common_name": "Wallaby, dama",
		"scientific_name": "Macropus eugenii",
		"origin": "Nicaragua"
	},
	{
		"id": 197,
		"common_name": "Nelson ground squirrel",
		"scientific_name": "Ammospermophilus nelsoni",
		"origin": "Honduras"
	},
	{
		"id": 198,
		"common_name": "Brown lemur",
		"scientific_name": "Lemur fulvus",
		"origin": "Jamaica"
	},
	{
		"id": 199,
		"common_name": "Bird, magnificent frigate",
		"scientific_name": "Fregata magnificans",
		"origin": "Philippines"
	},
	{
		"id": 200,
		"common_name": "Southern sea lion",
		"scientific_name": "Otaria flavescens",
		"origin": "Azerbaijan"
	}
]

},{}],3:[function(require,module,exports){
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

},{"./controller/animals.js":1}]},{},[3]);
