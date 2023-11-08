const characters = [
    {
        name: "Katie Bell",
        dob: {
            type: "range",
            start: "1 September 1978",
            end: "31 August 1979",
        },
        bloodStatus: "Pure-blood or Half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: ["Chaser"],
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/3/32/Katie_Bell_infobox.jpg",
        house: "Gryffindor",
        id: "5441xkap0llw5nvnp",
    },
    {
        name: "Lavender Brown",
        dob: {
            type: "range",
            start: "1 September 1979",
            end: "22 April 1980",
        },
        bloodStatus: "Pure-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: ["Lav-Lav ", "Lav "],
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/b/b6/Lavender_Brown_HBP.jpg",
        died: true,
        house: "Gryffindor",
        id: "5441xkap0llw5nvqt",
    },
    {
        name: "Sirius Black",
        dob: {
            type: "date",
            date: "3 November 1959",
        },
        bloodStatus: "Pure-blood",
        marital: "Single",
        nationality: ["English"],
        altNames: ["Padfoot ", "Snuffles ", "Stubby Boardman "],
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/b/bc/OOTP_promo_front_closeup_Sirius_Black.jpg",
        died: true,
        house: "Gryffindor",
        id: "5441xkap0llw5nvre",
    },
    {
        name: "Cadogan",
        dob: null,
        bloodStatus: "Pure-blood or half-blood",
        marital: "Divorced",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: ["Sir"],
        race: "Human",
        gender: "Male",
        job: ["Knight of the Round Table", "Gryffindor Tower door guard"],
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/d/d3/Sir_Cadogan.JPG",
        died: true,
        house: "Gryffindor",
        id: "5441xkap0llw5nvuj",
    },
    {
        name: "Colin Creevey",
        dob: {
            tdpe: "date",
            date: "3 May",
        },
        bloodStatus: "Muggle-born",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/6e/Colin_Creevey_OOTPG.jpg",
        died: true,
        house: "Gryffindor",
        id: "5441xkap0llw5nw1h",
    },
    {
        name: "Ben Copper",
        dob: {
            type: "range",
            start: "1 September 1972",
            end: "31 August 1973",
        },
        bloodStatus: "Muggle-born",
        marital: null,
        nationality: ["English"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: ["Obliviator"],
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/1/11/HM_friendships_Ben_Copper.png",
        house: "Gryffindor",
        id: "5441xkap0llw5nw24",
    },
    {
        name: "Polly Chapman",
        dob: {
            type: "range",
            start: "1 September 2005",
            end: "31 August 2006",
        },
        bloodStatus: "Pure-blood or half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/3/39/Polly_Chapman_Cursed_Child.png",
        house: "Gryffindor",
        id: "5441xkap0llw5nw2i",
    },
    {
        name: "Dennis Creevey",
        dob: {
            type: "range",
            start: "1 September 1982",
            end: "31 August 1983",
        },
        bloodStatus: "Muggle-born",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/8/86/DennisCreeveyPM.png",
        house: "Gryffindor",
        id: "5441xkap0llw5nw48",
    },
    {
        name: "Albus Dumbledore",
        dob: {
            type: "date",
            date: "1881",
        },
        bloodStatus: "Half-blood",
        marital: "Single",
        nationality: ["English"],
        altNames: null,
        titles: [
            "Prefect",
            "Head Boy",
            "Professor",
            "Head of Transfiguration (formerly)",
            "Headmaster",
            "Grand Sorcerer",
            "Supreme Mugwump (formerly)",
            "Chief Warlock",
        ],
        race: "Human",
        gender: "Male",
        job: [
            "Professor of Defence Against the Dark Arts at Hogwarts",
            "Head of Transfiguration department",
            "Columnist for Transfiguration Today",
            "Headmaster of Hogwarts",
            "Supreme Mugwump of the International Confederation of Wizards",
        ],
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/4/40/Albus_Dumbledore_%28HBP_promo%29_3.jpg",
        died: true,
        house: "Gryffindor",
        id: "5441xkap0llw5nw7e",
    },
    {
        name: "Fay Dunbar",
        dob: {
            type: "range",
            start: "1 September 1978",
            end: "31 August 1979",
        },
        bloodStatus: "Pure-blood or half-blood (possibly)",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/8/8b/Fay_Dunbar.jpg",
        house: "Gryffindor",
        id: "5441xkap0llw5nwaw",
    },
    {
        name: "Badeea Ali",
        dob: {
            type: "range",
            start: "1 September 1972",
            end: "31 August 1973",
        },
        bloodStatus: "Half-blood or Muggle-born",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: ["Magical tea shop employee"],
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/0/05/Badeea_Ali_HM8.png",
        house: "Ravenclaw",
        id: "5441xkap0llw5o3tj",
    },
    {
        name: "Marcus Belby",
        dob: {
            type: "range",
            start: "1 September 1978",
            end: "31 August 1979",
        },
        bloodStatus: "Pure-blood or half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/d/d4/Robert_knox.jpg",
        house: "Ravenclaw",
        id: "5441xkap0llw5o4ij",
    },
    {
        name: "Mandy Brocklehurst",
        dob: {
            type: "range",
            start: "1 September 1979",
            end: "31 August 1980",
        },
        bloodStatus: "Half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image: "",
        house: "Ravenclaw",
        id: "5441xkap0llw5o4ky",
    },
    {
        name: "Terry Boot",
        dob: {
            type: "date",
            date: "1979",
        },
        bloodStatus: "Pure-blood or half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/7/77/Terry_Boot_HP5_PC.jpg",
        house: "Ravenclaw",
        id: "5441xkap0llw5o4pf",
    },
    {
        name: "Cho Chang",
        dob: {
            type: "range",
            start: "1 September 1978",
            end: "31 August 1979",
        },
        bloodStatus: "Pure-blood or half-blood",
        marital: "Married",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: ["Seeker"],
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/1/1e/Cho_Chang.jpg",
        house: "Ravenclaw",
        id: "5441xkap0llw5o4xg",
    },
    {
        name: "Michael Corner",
        dob: {
            type: "range",
            start: "1 September 1979",
            end: "31 August 1980",
        },
        bloodStatus: "Half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/f/f5/Michael_1995.jpg",
        house: "Ravenclaw",
        id: "5441xkap0llw5o53i",
    },
    {
        name: "Penelope Clearwater",
        dob: {
            type: "range",
            start: "1 September 1975",
            end: "31 August 1976",
        },
        bloodStatus: "Muggle-born or half-blood (likely)",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: ["Penny "],
        titles: ["Prefect"],
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/3/37/Penelope_Clearwater_COSF.jpg",
        house: "Ravenclaw",
        id: "5441xkap0llw5o540",
    },
    {
        name: "Everett Clopton",
        dob: {
            type: "range",
            start: "1 September 1874",
            end: "31 August 1875",
        },
        bloodStatus: "Half-blood[citation needed]",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/2/21/Everett_Clopton2.png",
        house: "Ravenclaw",
        id: "5441xkap0llw5o5de",
    },
    {
        name: "Andre Egwu",
        dob: {
            type: "range",
            start: "1 September 1972",
            end: "31 August 1973",
        },
        bloodStatus: "Pure-blood, half-blood or Muggle-born",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: ["Style Wizard"],
        titles: ["Reserve Seeker", "Keeper"],
        race: "Human",
        gender: "Male",
        job: ["Employee of Gladrags Wizardwear"],
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/c/c8/Andre_Egwu_HM8.png",
        house: "Ravenclaw",
        id: "5441xkap0llw5o5i5",
    },
    {
        name: "Hector Fawley",
        dob: {
            type: "range",
            start: "1 September 1872",
            end: "31 August 1879",
        },
        bloodStatus: "Pure-blood",
        marital: null,
        nationality: ["British"],
        altNames: ["Flamboyant Fawley"],
        titles: ["Minister for Magic"],
        race: "Human",
        gender: "Male",
        job: ["British Minister for Magic "],
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/e/eb/Hector_Fawley_HL.png",
        house: "Ravenclaw",
        id: "5441xkap0llw5o5r8",
    },
    ,
    {
        name: "Hannah Abbott",
        dob: {
            type: "range",
            start: "1 September 1979",
            end: "31 August 1980",
        },
        bloodStatus: "Half-blood",
        marital: "Married",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: ["Prefect", "Charms Tutor"],
        race: "Human",
        gender: "Female",
        job: ["Landlady of the Leaky Cauldron", "Healer"],
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/b/b7/Harry-potter-goblet-of-fire-hannah.jpg",
        house: "Hufflepuff",
        id: "5441xkap0llw5npyh",
    },
    {
        name: "Eunon Blackwood",
        dob: {
            type: "date",
            date: "15th century",
        },
        bloodStatus: "Muggle-born",
        marital: "Widowed",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: ["Horticulturalist"],
        image: "",
        house: "Hufflepuff",
        id: "5441xkap0llw5nq3s",
    },
    {
        name: "Noreen Blainey",
        dob: {
            type: "date",
            date: "1870s",
        },
        bloodStatus: "Muggle-born",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: ["Nurse Blainey"],
        titles: ["Madam"],
        race: "Human",
        gender: "Female",
        job: ["Healer", "Matron at Hogwarts School"],
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/8/88/Noreen_Blainey_HL_2.png",
        house: "Hufflepuff",
        id: "5441xkap0llw5nq5h",
    },
    {
        name: "Susan Bones",
        dob: {
            type: "range",
            start: "1 September 1979",
            end: "31 August 1980",
        },
        bloodStatus: "Half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/7/77/Susan01.png",
        house: "Hufflepuff",
        id: "5441xkap0llw5nq60",
    },
    {
        name: "Diego Caplan",
        dob: {
            type: "range",
            start: "1 September 1972",
            end: "31 August 1973",
        },
        bloodStatus: "Pure-blood, half-blood or Muggle-born",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: ["Best Dueller at Hogwarts", "Dancer Extraordinaire"],
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/a/ac/Diego_Caplan.png",
        house: "Hufflepuff",
        id: "5441xkap0llw5nqa1",
    },
    {
        name: "Eldritch Diggory",
        dob: {
            type: "date",
            date: "1716",
        },
        bloodStatus: "Pure-blood or half-blood",
        marital: null,
        nationality: ["British"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: ["Minister for Magic"],
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/9/90/Eldritch_Diggory_portrait_-_HL.png",
        died: true,
        house: "Hufflepuff",
        id: "5441xkap0llw5nqdd",
    },
    {
        name: "Cedric Diggory",
        dob: {
            type: "date",
            date: "1 September",
        },
        bloodStatus: "Pure-blood or half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: ["Ced "],
        titles: ["Quidditch Captain", "Seeker", "Prefect", "Triwizard Champion"],
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/9/90/Cedric_Diggory_Profile.png",
        died: true,
        house: "Hufflepuff",
        id: "5441xkap0llw5nqdw",
    },
    {
        name: "Annabel Entwhistle",
        dob: {
            type: "date",
            date: "31 August 1982",
        },
        bloodStatus: "Muggle-born (possibly)",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image: "",
        house: "Hufflepuff",
        id: "5441xkap0llw5nqek",
    },
    {
        name: "Sullivan Fawley",
        dob: {
            type: "date",
            date: "31 August 1982",
        },
        bloodStatus: "Pure-blood or Half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image: "",
        house: "Hufflepuff",
        id: "5441xkap0llw5nqhg",
    },
    {
        name: "Amelia Fittleworth",
        dob: {
            type: "date",
            date: "31 August 1982",
        },
        bloodStatus: "Pure-blood or half-blood (possibly)",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/6b/Amelia_Fittleworth.webp",
        house: "Hufflepuff",
        id: "5441xkap0llw5nqin",
    },
    {
        name: "Avery I",
        dob: {
            type: "range",
            start: "1926",
            end: "1932",
        },
        bloodStatus: "Pure-blood or half-blood (likely)",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/6a/Avery_%28Riddle-era%29.png",
        house: "Slytherin",
        id: "5441xkap0llw5nn8a",
    },
    {
        name: "Avery II",
        dob: {
            type: "date",
            date: "1950s",
        },
        bloodStatus: "Pure-blood or Half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/7/78/Death_Eater_-_Avery_presumed_-_GOF.jpg",
        house: "Slytherin",
        id: "5441xkap0llw5nn8o",
    },
    {
        name: "Alphard Black",
        dob: {
            type: "range",
            start: "1925",
            end: "1938",
        },
        bloodStatus: "Pure-blood",
        marital: null,
        nationality: ["British"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/9/9f/UncleAlphard.png",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnib",
    },
    {
        name: "Charis Black",
        dob: {
            type: "date",
            date: "1919",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/60/Charis_Black.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnir",
    },
    {
        name: "Araminta Meliflua Black",
        dob: null,
        bloodStatus: "Pure-blood",
        marital: null,
        nationality: [null],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image: "",
        house: "Slytherin",
        id: "5441xkap0llw5nnj2",
    },
    {
        name: "Callidora Black",
        dob: {
            type: "date",
            date: "1915",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/6e/Callidora_Black_2.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnjh",
    },
    {
        name: "Orion Black",
        dob: {
            type: "date",
            date: "1929",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: ["British"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/d/dc/Orion_Black_-_Pottermore.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnkw",
    },
    {
        name: "Cedrella Black",
        dob: {
            type: "range",
            start: "1915",
            end: "1919",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/4/4f/Cedrella_Weasley.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnlm",
    },
    {
        name: "Craig Bowker Junior",
        dob: {
            type: "range",
            start: "1 September 2005",
            end: "31 August 2006",
        },
        bloodStatus: "Pure-blood or half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/5/53/Craig.png",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnly",
    },
    {
        name: "Lucretia Black",
        dob: {
            type: "date",
            date: "1925",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: [null],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/69/Lucretia.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnmc",
    },
    {
        name: "Avery I",
        dob: {
            type: "range",
            start: "1926",
            end: "1932",
        },
        bloodStatus: "Pure-blood or half-blood (likely)",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/6a/Avery_%28Riddle-era%29.png",
        house: "Slytherin",
        id: "5441xkap0llw5nn8a",
    },
    {
        name: "Avery II",
        dob: {
            type: "date",
            date: "1950s",
        },
        bloodStatus: "Pure-blood or Half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/7/78/Death_Eater_-_Avery_presumed_-_GOF.jpg",
        house: "Slytherin",
        id: "5441xkap0llw5nn8o",
    },
    {
        name: "Alphard Black",
        dob: {
            type: "range",
            start: "1925",
            end: "1938",
        },
        bloodStatus: "Pure-blood",
        marital: null,
        nationality: ["British"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/9/9f/UncleAlphard.png",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnib",
    },
    {
        name: "Charis Black",
        dob: {
            type: "date",
            date: "1919",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/60/Charis_Black.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnir",
    },
    {
        name: "Araminta Meliflua Black",
        dob: null,
        bloodStatus: "Pure-blood",
        marital: null,
        nationality: [null],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image: "",
        house: "Slytherin",
        id: "5441xkap0llw5nnj2",
    },
    {
        name: "Callidora Black",
        dob: {
            type: "date",
            date: "1915",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/6e/Callidora_Black_2.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnjh",
    },
    {
        name: "Orion Black",
        dob: {
            type: "date",
            date: "1929",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: ["British"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/d/dc/Orion_Black_-_Pottermore.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnkw",
    },
    {
        name: "Cedrella Black",
        dob: {
            type: "range",
            start: "1915",
            end: "1919",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/4/4f/Cedrella_Weasley.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnlm",
    },
    {
        name: "Craig Bowker Junior",
        dob: {
            type: "range",
            start: "1 September 2005",
            end: "31 August 2006",
        },
        bloodStatus: "Pure-blood or half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/5/53/Craig.png",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnly",
    },
    {
        name: "Lucretia Black",
        dob: {
            type: "date",
            date: "1925",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: [null],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/69/Lucretia.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnmc",
    },
    {
        name: "Avery I",
        dob: {
            type: "range",
            start: "1926",
            end: "1932",
        },
        bloodStatus: "Pure-blood or half-blood (likely)",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/6a/Avery_%28Riddle-era%29.png",
        house: "Slytherin",
        id: "5441xkap0llw5nn8a",
    },
    {
        name: "Avery II",
        dob: {
            type: "date",
            date: "1950s",
        },
        bloodStatus: "Pure-blood or Half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/7/78/Death_Eater_-_Avery_presumed_-_GOF.jpg",
        house: "Slytherin",
        id: "5441xkap0llw5nn8o",
    },
    {
        name: "Alphard Black",
        dob: {
            type: "range",
            start: "1925",
            end: "1938",
        },
        bloodStatus: "Pure-blood",
        marital: null,
        nationality: ["British"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/9/9f/UncleAlphard.png",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnib",
    },
    {
        name: "Charis Black",
        dob: {
            type: "date",
            date: "1919",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/60/Charis_Black.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnir",
    },
    {
        name: "Araminta Meliflua Black",
        dob: null,
        bloodStatus: "Pure-blood",
        marital: null,
        nationality: [null],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image: "",
        house: "Slytherin",
        id: "5441xkap0llw5nnj2",
    },
    {
        name: "Callidora Black",
        dob: {
            type: "date",
            date: "1915",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/6e/Callidora_Black_2.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnjh",
    },
    {
        name: "Orion Black",
        dob: {
            type: "date",
            date: "1929",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: ["British"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/d/dc/Orion_Black_-_Pottermore.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnkw",
    },
    {
        name: "Cedrella Black",
        dob: {
            type: "range",
            start: "1915",
            end: "1919",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/4/4f/Cedrella_Weasley.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnlm",
    },
    {
        name: "Craig Bowker Junior",
        dob: {
            type: "range",
            start: "1 September 2005",
            end: "31 August 2006",
        },
        bloodStatus: "Pure-blood or half-blood",
        marital: null,
        nationality: ["British", "Irish"],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Male",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/5/53/Craig.png",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnly",
    },
    {
        name: "Lucretia Black",
        dob: {
            type: "date",
            date: "1925",
        },
        bloodStatus: "Pure-blood",
        marital: "Married",
        nationality: [null],
        altNames: null,
        titles: null,
        race: "Human",
        gender: "Female",
        job: null,
        image:
            "https://static.wikia.nocookie.net/harrypotter/images/6/69/Lucretia.jpg",
        died: true,
        house: "Slytherin",
        id: "5441xkap0llw5nnmc",
    }]


//1. Array
// Array.push()
// Array.pop()
// Array.includes()
// Array.join() => ["a", "b", "c"] => "a,b,c"
// String.split()

//! DATI
// - loop
//! - ul
//! - li

//array da 5 elementi
// [a,b,c,d,e]
// .length => 5
// arr[4] => "e"

//const arr =[a,b,c,d,e,f]
//console.log(arr[4])

//character.length = 1180

characters[0]
characters[1]

const ul = document.querySelector("ul.list")

//min 3 caratteri
//cercare carattere per carattere, non al click o all'invio

//includes, toLowerCase, ciclo
const searchCharacter = function (keyUpEvent) {
    //keyUpEvent => oggetto che rappresenta l'azione del "keyup", cioe' il click sulla la tastiera
    /* 
         Event {
              key: "o",
              target: {
                  id: "query",
                  value: "ciao"
              }
          }
        */
    //keyUpEvent.key => il pulsante premuto  (compreso Shift, Alt, Control, Enter etc)
    //keyUpEvent.target => oggetto che rappresenta l'input con cui abbiamo interagito
    //keyUpEvent.target.value => stringa nell'input
    //if
    //value.length

    //   'ciao'.includes('ci') //true
    //   'pippo'.includes('a') //false
    const inputValue = keyUpEvent.target.value.toLowerCase()
    ul.innerHTML = ""
    if (inputValue.length >= 3) {
        for (let i = 0; i < characters.length; i++) {
            //inizio, fine, direzione
            //ingredienti:
            //.includes
            //.toLowerCase
            //.name
            //characters[i]

            if (characters[i].name.toLowerCase().includes(inputValue)) {
                //ul
                const characterName = characters[i].name
                ul.innerHTML += `<li> ${characterName} </li>`
            }
            //
            //.innerHTML
            //li
        }
    }
}

// const pippo = 'pippo'

// pippo = "paperino"

// const utente = {
//     nome: "pippo"
// }

// utente.nome = 'paperino'

// const input = document.querySelector("#query")
// input.addEventListener("keyup", searchCharacter)

//ul => oggetto
// proprieta' che si chiama "innerHTML" ed e' di tipo stringa

// for(let i = 0; i < characters.slice(0, 100).length; i++) {
//   //inizio       fine                direzione
//   const singleChar = characters[i]
//   // console.log(singleChar)
//   //
//   ul.innerHTML += `<li>${singleChar.name}</li>`
//   //0 - 1179
// }
