	// create 3 different layouts? dependent on number of members

	//statuses: Active, Inactive, Disbanded, Hiatus 

	// member status: active, former
const groups = {
	heartgold: {
		name: "Heartgold", // color palette determined in CSS
		label: "The Gold Brand", 
		status: "Active",
		members: [ 
			{
				name: "poku", 
				roles: ["l", "mv"],
				status: "active",
				popularity: 1
			}, 
			{
				name: "basil", 
				roles: ["sv", "r", "visual"],
				status: "active"
				popularity: 2
			},
			{
				name: "bobi", 
				roles: ["ld", "maknae"],
				status: "active",
				popularity: 3
			},
			{
				name: "nala", 
				roles: ["lv"],
				status: "inactive",
				popularity: 4
			},
			{
				name: "milo", 
				roles: ["md"],
				status: "active",
				popularity: 5
			},
			{
				name: "ruffio", 
				roles: ["ld", "lv"],
				status: "inactive",
				popularity: 6
			}

		]

	},
	heartgoldk: {
		name: "Heartgold-K", // color palette determined in CSS
		label: "The Gold Brand", 
		status: "Inactive",
		members: [ 
			{
				name: "ruffio", 
				roles: ["l", "ld", "sv"],
				status: "active",
				popularity: 3
			}, 
			{
				name: "nala", 
				roles: ["mv"],
				status: "active"
				popularity: 2
			},
			{
				name: "honey", 
				roles: ["md", "lv"],
				status: "active",
				popularity: 1
			},
			{
				name: "mimo", 
				roles: ["sv", "v", "mr"],
				status: "active",
				popularity: 4
			},
			{
				name: "bebe", 
				roles: ["mv"],
				status: "active",
				popularity: 6
			},
			{
				name: "kit", 
				roles: ["lv", "maknae"],
				status: "active",
				popularity: 5
			}

		]

	},
	lunar: {
		name: "Lunar", // color palette determined in CSS
		label: "Alola Moon", 
		status: "Inactive",
		members: [ 
			{
				name: "bisharp", 
				roles: ["l", "md", "r"],
				status: "active",
				popularity: 6
			}, 
			{
				name: "express", 
				roles: ["ld", "maknae"],
				status: "active"
				popularity: 4
			},
			{
				name: "goodra", 
				roles: ["lv", "ld", "r"],
				status: "active",
				popularity: 1
			},
			{
				name: "bubbles", 
				roles: ["lv"],
				status: "active",
				popularity: 2
			},
			{
				name: "alakazam", 
				roles: ["mv"],
				status: "active",
				popularity: 3
			},
			{
				name: "greninja", 
				roles: ["ld", "sv"],
				status: "active",
				popularity: 5
			}

		]

	},
	solegirls: {
		name: "Sole Girls", // color palette determined in CSS
		label: "Nexus Diamond", 
		status: "Disbanded",
		members: [ 
			{
				name: "recycle", 
				roles: ["l", "mv"],
				status: "former",
				popularity: 1
			}, 
			{
				name: "kev", 
				roles: ["ld", "v"],
				status: "active"
				popularity: 3
			},
			{
				name: "amy", 
				roles: ["mr", "sv"],
				status: "active",
				popularity: 2
			}
		]

	},
	pikaclub: {
		name: "Pikaclub", // color palette determined in CSS
		label: "Kanto Series", 
		status: "Active",
		members: [ 
			{
				name: "pika", 
				roles: ["l", "mv", "fotg"],
				status: "active",
				popularity: 1
			}, 
			{
				name: "charizard", 
				roles: ["mv", "ld"],
				status: "active"
				popularity: 9
			},
			{
				name: "squirtle", 
				roles: ["sv"],
				status: "active",
				popularity: 6
			},
			{
				name: "vaporeon", 
				roles: ["sv", "visual", "r"],
				status: "active",
				popularity: 3
			},
			{
				name: "vileplume", 
				roles: ["lv"],
				status: "active",
				popularity: 11
			},
			{
				name: "clefable", 
				roles: ["lv", "visual"],
				status: "active",
				popularity: 2
			},
			{
				name: "jami", 
				roles: ["lv", "visual"],
				status: "active",
				popularity: 4
			},
			{
				name: "vini", 
				roles: ["md"],
				status: "active",
				popularity: 7
			},
			{
				name: "jimin", 
				roles: ["md"],
				status: "active",
				popularity: 5
			},
			{
				name: "tulu", 
				roles: ["ld"],
				status: "active",
				popularity: 12
			},
			{
				name: "minu", 
				roles: ["d"],
				status: "active",
				popularity: 8
			},
			{
				name: "kasi", 
				roles: ["sv", "visual"],
				status: "active",
				popularity: 10
			}

		],
		subunit: [
			{
				name: "BRB", 
				members: "charizard,jimin,clefable,minu,vini,vaporeon,kasi"
			}
		]


	},
	mintypop: {
		name: "Minty Pop", // color palette determined in CSS
		label: "Alola Moon", 
		status: "Active",
		members: [ 
			{
				name: "flora", 
				roles: ["l", "mv"],
				status: "active",
				popularity: 1
			}, 
			{
				name: "culli", 
				roles: ["mv"],
				status: "active"
				popularity: 2
			},
			{
				name: "faya", 
				roles: ["md", "sv"],
				status: "active",
				popularity: 4
			},
			{
				name: "roku", 
				roles: ["sv", "fotg"],
				status: "active",
				popularity: 3
			},
			{
				name: "beau", 
				roles: ["lv"],
				status: "active",
				popularity: 6
			},
			{
				name: "fini", 
				roles: ["sv"],
				status: "active",
				popularity: 5
			}

		]

	},
	splash: {
		name: "Splash!", // color palette determined in CSS
		label: "Pixel Ent.", 
		status: "Disbanded",
		members: [ 
			{
				name: "kami", 
				roles: ["l", "md"],
				status: "active",
				popularity: 1
			}, 
			{
				name: "charm", 
				roles: ["ld"],
				status: "active"
				popularity: 2
			},
			{
				name: "quackers", 
				roles: ["lv"],
				status: "active",
				popularity: 3
			}
		]

	},
	xoxo: {
		name: "XOXO", // color palette determined in CSS
		label: "Hoenn Ent.", 
		status: "Active",
		members: [ 
			{
				name: "micha", 
				roles: ["l", "md"],
				status: "active",
				popularity: 5
			}, 
			{
				name: "misha", 
				roles: ["sv", "visual"],
				status: "active"
				popularity: 4
			},
			{
				name: "finn", 
				roles: ["mv"],
				status: "active",
				popularity: 1
			},
			{
				name: "cori", 
				roles: ["mv"],
				status: "active",
				popularity: 2
			},
			{
				name: "luka", 
				roles: ["ld"],
				status: "active",
				popularity: 3
			},
			{
				name: "suki", 
				roles: ["sd"],
				status: "active",
				popularity: 6
			}

		],
		subunit: [
			{
				name: "Cori x Finn",
				members: "cori,finn"
			}
		]

	},
	sodapop: {
		name: "Soda Pop!", // color palette determined in CSS
		label: "Kalos Music", 
		status: "Active",
		members: [ 
			{
				name: "nyle", 
				roles: ["l", "md", "lv"],
				status: "active",
				popularity: 5
			}, 
			{
				name: "gengar", 
				roles: ["mv"],
				status: "active"
				popularity: 4
			},
			{
				name: "phi phi", 
				roles: ["ld"],
				status: "active",
				popularity: 6
			},
			{
				name: "ollie", 
				roles: ["lv"],
				status: "active",
				popularity: 1
			},
			{
				name: "ro ro", 
				roles: ["mv"],
				status: "active",
				popularity: 2
			},
			{
				name: "lele", 
				roles: ["lv", "r"],
				status: "active",
				popularity: 3
			}

		],
		subunit: [
			{
				name: "3 Wishes",
				members: "ollie,ro ro,lele"
			}
		]

	},
	eclips3: {
		name: "Eclips3", // color palette determined in CSS
		label: "Alola Moon", 
		status: "Disbanded",
		members: [ 
			{
				name: "silky", 
				roles: ["l", "md", "visual"],
				status: "active",
				popularity: 3
			}, 
			{
				name: "felicity", 
				roles: ["sd"],
				status: "former"
				popularity: 4
			},
			{
				name: "char char", 
				roles: ["mv", "r", "visual"],
				status: "active",
				popularity: 1
			},
			{
				name: "krou", 
				roles: ["ld", "maknae"],
				status: "active",
				popularity: 2
			}

		]

	},
	royalblue: {
		name: "Royal Blue", // color palette determined in CSS
		label: "Hoenn Ent.", 
		status: "Disbanded",
		members: [ 
			{
				name: "kev", 
				roles: ["l", "md"],
				status: "active",
				popularity: 1,
				formergroup: "Sole Girls"
			}, 
			{
				name: "kami", 
				roles: ["md"],
				status: "active"
				popularity: 2,
				formergroup: "Splash!"
			},
			{
				name: "quackers", 
				roles: ["lv"],
				status: "active",
				popularity: 4,
				formergroup: "Splash!"
			},
			{
				name: "teku", 
				roles: ["mv"],
				status: "active",
				popularity: 3,
				formergroup: "Rap.ID"
			},
			{
				name: "nugget", 
				roles: ["ld"],
				status: "active",
				popularity: 6,
				formergroup: "Breeze"
			},
			{
				name: "krou", 
				roles: ["ld"],
				status: "active",
				popularity: 5,
				formergroup: "Eclips3"
			}

		]

	},
	krush: {
		name: "KRUSH", // color palette determined in CSS
		label: "Kalos Music", 
		status: "Active",
		members: [ 
			{
				name: "bora", 
				roles: ["l", "md", "sv"],
				status: "active",
				popularity: 3
			}, 
			{
				name: "rogue", 
				roles: ["ld", "r"],
				status: "active"
				popularity: 4
			},
			{
				name: "erick", 
				roles: ["ld", "mr"],
				status: "active",
				popularity: 2
			},
			{
				name: "winston", 
				roles: ["md", "r"],
				status: "active",
				popularity: 6
			},
			{
				name: "candy", 
				roles: ["mv", "r"],
				status: "active",
				popularity: 5
			},
			{
				name: "mimi", 
				roles: ["lv", "maknae"],
				status: "active",
				popularity: 1
			}

		]

	},
	raven: {
		name: "Raven", // color palette determined in CSS
		label: "Black Label Ent.", 
		status: "Active",
		members: [ 
			{
				name: "wilby", 
				roles: ["l", "md", "r"],
				status: "active",
				popularity: 5
			}, 
			{
				name: "dasher", 
				roles: ["lv"],
				status: "active"
				popularity: 3
			},
			{
				name: "toto", 
				roles: ["ld"],
				status: "active",
				popularity: 6
			},
			{
				name: "mamba", 
				roles: ["ld", "lv"],
				status: "active",
				popularity: 2
			},
			{
				name: "nana", 
				roles: ["ld"],
				status: "active",
				popularity: 4
			},
			{
				name: "frost", 
				roles: ["mv", "maknae"],
				status: "active",
				popularity: 1
			}

		]

	},
	cherrysisters: {
		name: "Cherry Sisters", // color palette determined in CSS
		label: "Alola Moon", 
		status: "Hiatus",
		members: [ 
			{
				name: "ovaltine", 
				roles: ["l", "ld", "r"],
				status: "active",
				popularity: 5
			}, 
			{
				name: "jojo", 
				roles: ["md"],
				status: "active"
				popularity: 6
			},
			{
				name: "cyrus", 
				roles: ["lv", "visual"],
				status: "active",
				popularity: 4
			},
			{
				name: "scout", 
				roles: ["ld"],
				status: "active",
				popularity: 3
			},
			{
				name: "sylas", 
				roles: ["lv", "r", "visual"],
				status: "active",
				popularity: 2
			},
			{
				name: "watt", 
				roles: ["mv"],
				status: "active",
				popularity: 1
			}

		]

	},
	flowerbox: {
		name: "flowerbox", // color palette determined in CSS
		label: "Black Label Ent.", 
		status: "Disbanded",
		members: [ 
			{
				name: "eujin", 
				roles: ["l", "md"],
				status: "active",
				popularity: 2
			}, 
			{
				name: "minji", 
				roles: ["lv", "ld", "r"],
				status: "active"
				popularity: 1
			},
			{
				name: "soyeon", 
				roles: ["mv"],
				status: "active",
				popularity: 4
			},
			{
				name: "yuli", 
				roles: ["ld"],
				status: "active",
				popularity: 3
			}

		]

	},
	moonshine: {
		name: "Moonshine", // color palette determined in CSS
		label: "Alola Moon", 
		status: "Disbanded",
		members: [ 
			{
				name: "bewear", 
				roles: ["l", "md"],
				status: "active",
				popularity: 1
			}, 
			{
				name: "tatu", 
				roles: ["lv"],
				status: "active"
				popularity: 3
			},
			{
				name: "soybean", 
				roles: ["sd", "maknae"],
				status: "active",
				popularity: 4
			},
			{
				name: "pudd", 
				roles: ["sv"],
				status: "active",
				popularity: 2
			},
			{
				name: "yoogi", 
				roles: ["sd"],
				status: "active",
				popularity: 5
			},
			{
				name: "tye", 
				roles: ["sv"],
				status: "active",
				popularity: 6
			}

		]

	},
	sos: {
		name: "Secret of Sunshine (SOS)", // color palette determined in CSS
		label: "Solar Music Ent.", 
		status: "Disbanded",
		members: [ 
			{
				name: "luxray", 
				roles: ["l", "md"],
				status: "active",
				popularity: 6
			}, 
			{
				name: "jiwon", 
				roles: ["mv"],
				status: "active"
				popularity: 5
			},
			{
				name: "floatzel", 
				roles: ["ld"],
				status: "active",
				popularity: 4
			},
			{
				name: "jinni", 
				roles: ["sv", "d"],
				status: "active",
				popularity: 1
			},
			{
				name: "flippy", 
				roles: ["lv", "d"],
				status: "active",
				popularity: 2
			},
			{
				name: "creo", 
				roles: ["mv", "r", "maknae"],
				status: "active",
				popularity: 3
			}

		]

	},
	creamy: {
		name: "Creamy", // color palette determined in CSS
		label: "Galar Music", 
		status: "Active",
		gen: 2,
		members: [ 
			{
				name: "rubin", 
				roles: ["l", "lv"],
				status: "active",
				popularity: 4
			}, 
			{
				name: "skippy", 
				roles: ["ld", "mr"],
				status: "active"
				popularity: 3
			},
			{
				name: "tutti", 
				roles: ["md"],
				status: "active",
				popularity: 2
			},
			{
				name: "yogurt", 
				roles: ["sv", "visual"],
				status: "active",
				popularity: 1
			},
			{
				name: "pastel", 
				roles: ["mv"],
				status: "active",
				popularity: 6
			},
			{
				name: "trix", 
				roles: ["ld"],
				status: "active",
				popularity: 5
			}

		]

	},
	locket: {
		name: "locket", // color palette determined in CSS
		label: "Galar Music NL", 
		status: "Active",
		gen: 2,
		members: [ 
			{
				name: "erick", 
				roles: ["l", "md"],
				status: "active",
				popularity: 4
			}, 
			{
				name: "taemin", 
				roles: ["ld", "mv"],
				status: "active"
				popularity: 3
			},
			{
				name: "momo", 
				roles: ["ld", "mr"],
				status: "active",
				popularity: 1
			},
			{
				name: "allie", 
				roles: ["sv", "ld"],
				status: "active",
				popularity: 2
			},
			{
				name: "komo", 
				roles: ["md"],
				status: "active",
				popularity: 5
			}

		]

	},
	colorz: {
		name: "Colorz", // color palette determined in CSS
		label: "Galar Music E", 
		status: "Disbanded",
		gen: 2,
		members: [ 
			{
				name: "ember", 
				roles: ["l", "md"],
				status: "active",
				popularity: 4
			}, 
			{
				name: "light", 
				roles: ["mv"],
				status: "active"
				popularity: 1
			},
			{
				name: "herb", 
				roles: ["ld"],
				status: "active",
				popularity: 6
			},
			{
				name: "wai'i", 
				roles: ["sv", "mr", "visual"],
				status: "active",
				popularity: 2
			},
			{
				name: "telli", 
				roles: ["mv"],
				status: "active",
				popularity: 3
			},
			{
				name: "sorbi", 
				roles: ["lv"],
				status: "active",
				popularity: 5
			}

		]

	},
	threexthree: {
		name: "3x3", // color palette determined in CSS
		label: "Galar Music NL", 
		status: "Active",
		gen: 2,
		members: [ 
			{
				name: "lele", 
				roles: ["l", "md"],
				status: "active",
				popularity: 6
			}, 
			{
				name: "bini", 
				roles: ["md"],
				status: "active"
				popularity: 7
			},
			{
				name: "looli", 
				roles: ["lv"],
				status: "active",
				popularity: 5
			},
			{
				name: "miyeon", 
				roles: ["mv"],
				status: "active",
				popularity: 1
			},
			{
				name: "pink", 
				roles: ["sv"],
				status: "active",
				popularity: 9
			},
			{
				name: "rew", 
				roles: ["mr"],
				status: "active",
				popularity: 2
			},
			{
				name: "kali", 
				roles: ["lr", "visual"],
				status: "active",
				popularity: 4
			},
			{
				name: "nayeon", 
				roles: ["sv"],
				status: "active",
				popularity: 8
			},
			{
				name: "tae", 
				roles: ["lv"],
				status: "active",
				popularity: 3
			}

		],
		subunit: [
			{
				name: "3x1", 
				members: "miyeon,rew,tae"
			},
			{
				name: "3x2",
				members: "lele,bini,looli,pink,kali,nayeon"
			}
		]

	},
	mist: {
		name: "Mist", // color palette determined in CSS
		label: "Galar Music", 
		status: "Active",
		gen: 2,
		members: [ 
			{
				name: "timo", 
				roles: ["l", "md"],
				status: "active",
				popularity: 2
			}, 
			{
				name: "choa", 
				roles: ["lv", "r"],
				status: "active"
				popularity: 5
			},
			{
				name: "jina", 
				roles: ["lv"],
				status: "active",
				popularity: 6
			},
			{
				name: "bohyung", 
				roles: ["mr"],
				status: "active",
				popularity: 3
			},
			{
				name: "aori", 
				roles: ["sv"],
				status: "active",
				popularity: 8
			},
			{
				name: "yuni", 
				roles: ["mv", "visual"],
				status: "active",
				popularity: 1
			},
			{
				name: "taesun", 
				roles: ["mr"],
				status: "active",
				popularity: 4
			},
			{
				name: "sooya", 
				roles: ["lv"],
				status: "active",
				popularity: 7
			}

		]

	}
	sp1: {
		name: "SP1", // color palette determined in CSS
		label: "SP Ent.", 
		status: "Inactive",
		gen: 2,
		members: [ 
			{
				name: "beanbean", 
				roles: ["l", "ld"],
				status: "active",
				popularity: 4
			}, 
			{
				name: "minnie", 
				roles: ["lv", "r"],
				status: "active"
				popularity: 6
			},
			{
				name: "huni", 
				roles: ["mv"],
				status: "active",
				popularity: 5
			},
			{
				name: "tari", 
				roles: ["md"],
				status: "active",
				popularity: 3
			},
			{
				name: "sophie", 
				roles: ["sv", "visual"],
				status: "active",
				popularity: 1
			},
			{
				name: "handi", 
				roles: ["ld"],
				status: "active",
				popularity: 2
			}

		]

	},
	afterclass: {
		name: "Afterclass", // color palette determined in CSS
		label: "SP Ent.", 
		status: "Disbanded",
		gen: 2,
		members: [ 
			{
				name: "miles", 
				roles: ["l", "md"],
				status: "active",
				popularity: 4
			}, 
			{
				name: "triskele", 
				roles: ["mv", "md"],
				status: "active"
				popularity: 3
			},
			{
				name: "ploppy", 
				roles: ["lv", "visual"],
				status: "active",
				popularity: 1
			},
			{
				name: "bin", 
				roles: ["sv", "visual", "r"],
				status: "former",
				popularity: 2
			},
			{
				name: "oh puff", 
				roles: ["ld", "maknae"],
				status: "former",
				popularity: 5
			}

		]

	},
	twentyfiveand: {
		name: "25&", // color palette determined in CSS
		label: "Legends Music Records", 
		status: "Active",
		gen: 2,
		members: [ 
			{
				name: "hyuni", 
				roles: ["md", "sv"],
				status: "active",
				popularity: 1
			}, 
			{
				name: "wini", 
				roles: ["mv"],
				status: "active"
				popularity: 2
			}

		]

	},
	bopbop: {
		name: "BOPBOP!", // color palette determined in CSS
		label: "SP Ent.", 
		status: "Active",
		gen: 3,
		members: [ 
			{
				name: "hani", 
				roles: ["l", "ld", "mr"],
				status: "active",
				popularity: 1
			}, 
			{
				name: "toni", 
				roles: ["md"],
				status: "active"
				popularity: 9
			},
			{
				name: "jiyeon", 
				roles: ["sd", "visual"],
				status: "active",
				popularity: 2
			},
			{
				name: "toot", 
				roles: ["lv"],
				status: "active",
				popularity: 3
			},
			{
				name: "uni", 
				roles: ["sv", "ld", "visual"],
				status: "active",
				popularity: 4
			},
			{
				name: "bick bick", 
				roles: ["mv", "sr"],
				status: "active",
				popularity: 5
			},
			{
				name: "siyeon", 
				roles: ["lv", "visual"],
				status: "active",
				popularity: 8
			},
			{
				name: "mina", 
				roles: ["md", "lr"],
				status: "active",
				popularity: 6
			},
			{
				name: "chaerin", 
				roles: ["sv", "maknae"],
				status: "active",
				popularity: 7
			}

		]

	},
	solorix: {
		name: "SOLORIX", // color palette determined in CSS
		label: "Galar Music NL", 
		status: "Active",
		gen: 3,
		members: [ 
			{
				name: "lucky", 
				roles: ["l", "mv"],
				status: "active",
				popularity: 1
			}, 
			{
				name: "jinu", 
				roles: ["lv"],
				status: "active"
				popularity: 2
			},
			{
				name: "felicity", 
				roles: ["md"],
				status: "active",
				popularity: 4,
				formergroup: "Eclips3"
			},
			{
				name: "yana", 
				roles: ["sv", "ld", "maknae"],
				status: "active",
				popularity: 3
			}

		],
		subunit: [
			{
				name: "COSMIX",
				members: "lucky,yana"
			}
		]

	},
	glitzy: {
		name: "Glitzy", // color palette determined in CSS
		label: "VV Music", 
		status: "Active",
		gen: 3,
		members: [ 
			{
				name: "gigi", 
				roles: ["l", "md"],
				status: "active",
				popularity: 7
			}, 
			{
				name: "winnie", 
				roles: ["mv"],
				status: "active"
				popularity: 2
			},
			{
				name: "chaeyeon", 
				roles: ["sv", "ld"],
				status: "active",
				popularity: 6
			},
			{
				name: "yoona", 
				roles: ["md", "visual"],
				status: "active",
				popularity: 1
			},
			{
				name: "jiae", 
				roles: ["lv"],
				status: "active",
				popularity: 4
			},
			{
				name: "tabyeon", 
				roles: ["lv"],
				status: "active",
				popularity: 3
			},
			{
				name: "domo", 
				roles: ["ld", "r"],
				status: "active",
				popularity: 5
			}

		]

	},
	b1am3: {
		name: "b1Am3", // color palette determined in CSS
		label: "VV Music", 
		status: "Disbanded",
		gen: 3,
		members: [ 
			{
				name: "kiyo", 
				roles: ["l", "ld"],
				status: "active",
				popularity: 1
			}, 
			{
				name: "pugo", 
				roles: ["ld"],
				status: "active"
				popularity: 4
			},
			{
				name: "lily", 
				roles: ["mv", "v"],
				status: "active",
				popularity: 2
			},
			{
				name: "conqey", 
				roles: ["ld", "maknae"],
				status: "active",
				popularity: 5
			},
			{
				name: "ponpon", 
				roles: ["l", "md"],
				status: "former",
				popularity: 3
			}
		]

	},
	younity: {
		name: "Younity", // color palette determined in CSS
		label: "CM Ent.", 
		status: "Disbanded",
		gen: 3,
		members: [ 
			{
				name: "sorbi", 
				roles: ["l", "mv", "sr"],
				status: "active",
				popularity: 2,
				formergroup: "Colorz"
			}, 
			{
				name: "bubbles", 
				roles: ["mv", "center"],
				status: "active"
				popularity: 1,
				formergroup: "Lunar"
			},
			{
				name: "jiwon", 
				roles: ["lv", "ld"],
				status: "active",
				popularity: 4,
				formergroup: "Secret of Sunshine (SOS)"
			},
			{
				name: "mimi", 
				roles: ["lv", "visual"],
				status: "active",
				popularity: 3,
				formergroup: "KRUSH"
			},
			{
				name: "soyeon", 
				roles: ["lv"],
				status: "active",
				popularity: 6,
				formergroup: "Flowerbox"
			},
			{
				name: "ploppy", 
				roles: ["sv", "visual"],
				status: "active",
				popularity: 5,
				formergroup: "Afterclass"
			},
			{
				name: "tutti", 
				roles: ["ld"],
				status: "active",
				popularity: 8,
				formergroup: "Creamy"
			},
			{
				name: "kami", 
				roles: ["md"],
				status: "active",
				popularity: 7,
				formergroup: "Royal Blue"
			},
			{
				name: "char char", 
				roles: ["mr", "visual"],
				status: "active",
				popularity: 9,
				formergroup: "Eclips3"
			}

		]

	},
	gyoon: {
		name: "GYOON", // color palette determined in CSS
		label: "SP Ent.", 
		status: "Active",
		gen: 3,
		members: [ 
			{
				name: "hana", 
				roles: ["l", "mv", "visual"],
				status: "active",
				popularity: 2
			}, 
			{
				name: "yujun", 
				roles: ["lv", "sd", "fotg"],
				status: "active"
				popularity: 1
			},
			{
				name: "gabey", 
				roles: ["md"],
				status: "active",
				popularity: 4
			},
			{
				name: "dohu", 
				roles: ["ld", "maknae"],
				status: "active",
				popularity: 7
			},
			{
				name: "dahyun", 
				roles: ["md", "r"],
				status: "active",
				popularity: 6
			},
			{
				name: "dahi", 
				roles: ["mv"],
				status: "active",
				popularity: 5
			},
			{
				name: "seohyun", 
				roles: ["lv"],
				status: "active",
				popularity: 3
			},
			{
				name: "tzuyang", 
				roles: ["sv"],
				status: "active",
				popularity: 9
			},
			{
				name: "hajoon", 
				roles: ["ld"],
				status: "active",
				popularity: 8
			},
			{
				name: "jessica", 
				roles: ["sd"],
				status: "active",
				popularity: 10
			},
			{
				name: "plowie", 
				roles: ["mv"],
				status: "former",
				popularity: 11
			}

		]
	},
	popumonster: {
		name: "POPUMONSTER", // color palette determined in CSS
		label: "Galar Music", 
		status: "Active",
		gen: 3,
		members: [ 
			{
				name: "dodo", 
				roles: ["l", "lv", "md"],
				status: "active",
				popularity: 4
			}, 
			{
				name: "fani", 
				roles: ["lv", "lr", "visual"],
				status: "active"
				popularity: 3
			},
			{
				name: "sera", 
				roles: ["lv", "visual"],
				status: "active",
				popularity: 2
			},
			{
				name: "yuhi", 
				roles: ["md", "sr"],
				status: "active",
				popularity: 5
			},
			{
				name: "yam yam", 
				roles: ["mv"],
				status: "active",
				popularity: 1
			},
			{
				name: "haein", 
				roles: ["ld"],
				status: "active",
				popularity: 6
			}
		]

	},
	dreamday: {
		name: "DREAMDAY", // color palette determined in CSS
		label: "Galar Music", 
		status: "Active",
		gen: 3,
		members: [ 
			{
				name: "taeyoon", 
				roles: ["l", "mv"],
				status: "active",
				popularity: 1
			}, 
			{
				name: "whispy", 
				roles: ["mv", "visual"],
				status: "active"
				popularity: 2
			},
			{
				name: "ravi", 
				roles: ["md"],
				status: "active",
				popularity: 5
			},
			{
				name: "chaelin", 
				roles: ["sv", "ld"],
				status: "active",
				popularity: 3
			},
			{
				name: "nabi", 
				roles: ["lv", "ld"],
				status: "active",
				popularity: 4
			}
		]

	},
	staygirls: {
		name: "Stay Girls", // color palette determined in CSS
		label: "SP Ent.", 
		status: "Active",
		gen: 4,
		members: [ 
			{
				name: "fana", 
				roles: ["l", "mv"],
				status: "active",
				popularity: 1
			}, 
			{
				name: "juni", 
				roles: ["mv"],
				status: "active"
				popularity: 2
			},
			{
				name: "yona", 
				roles: ["lv"],
				status: "active",
				popularity: 5
			},
			{
				name: "chaeyeon", 
				roles: ["lv"],
				status: "active",
				popularity: 8
			},
			{
				name: "nori", 
				roles: ["sv", "mr"],
				status: "active",
				popularity: 4
			},
			{
				name: "way", 
				roles: ["md"],
				status: "active",
				popularity: 9
			},
			{
				name: "suhi", 
				roles: ["ld"],
				status: "active",
				popularity: 7
			},
			{
				name: "soya", 
				roles: ["ld", "visual"],
				status: "active",
				popularity: 3
			},
			{
				name: "cina", 
				roles: ["sd", "lr"],
				status: "active",
				popularity: 6
			}
		]

	}

};

const soloists = {
	poku: "heartgold",
	jazi: "n/a",
	pika: "pikaclub", 
	light: "colorz",
	nugget: "royalblue",
}

const pokemonAssoiated: {
	poku: "ampharos",
	basil: "meganium",
}

const roles = {
	l : "leader", 

	mv: "main vocal", 
	lv: "lead vocal", 
	sv: "support vocal", 
	v: "vocal", 

	md: "main dancer", 
	ld: "lead dancer", 
	sd: "support dancer", 
	d: "dancer", 

	mr: "main rapper", 
	lr: "lead rapper", 
	sr: "support rapper", 
	r: "rapper", 

	maknae: "maknae",
	visual: "visual", 
	fotg: "face of the group", 
	center: "center"
}