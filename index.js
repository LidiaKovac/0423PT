const gods = [
  {
    name: "Zeus",
    civilization: "Greek Mythology",
    country: "Greece",
  },
  {
    name: "Isis",
    civilization: "Egyptian Mythology",
    country: "Egypt",
  },
  {
    name: "Quetzalcoatl",
    civilization: "Aztec Mythology",
    country: "Mexico",
  },
  {
    name: "Brahma",
    civilization: "Hindu Mythology",
    country: "India",
  },
  {
    name: "Amaterasu",
    civilization: "Japanese Mythology",
    country: "Japan",
  },
  {
    name: "Thor",
    civilization: "Norse Mythology",
    country: "Norway",
  },
  {
    name: "Odin",
    civilization: "Norse Mythology",
    country: "Norway",
  },
  {
    name: "Horus",
    civilization: "Egyptian Mythology",
    country: "Egypt",
  },
  {
    name: "Vishnu",
    civilization: "Hindu Mythology",
    country: "India",
  },
  {
    name: "Athena",
    civilization: "Greek Mythology",
    country: "Greece",
  },
  {
    name: "Inti",
    civilization: "Incan Mythology",
    country: "Peru",
  },
  {
    name: "Anansi",
    civilization: "Ashanti Mythology",
    country: "Ghana",
  },
  {
    name: "Perun",
    civilization: "Slavic Mythology",
    country: "Russia",
  },
  {
    name: "Olokun",
    civilization: "Yoruba Religion",
    country: "Nigeria",
  },
  {
    name: "Tlaloc",
    civilization: "Aztec Mythology",
    country: "Mexico",
  },
  {
    name: "Freyja",
    civilization: "Norse Mythology",
    country: "Norway",
  },
  {
    name: "Lakshmi",
    civilization: "Hindu Mythology",
    country: "India",
  },
  {
    name: "Chaac",
    civilization: "Mayan Mythology",
    country: "Guatemala",
  },
  {
    name: "Amun",
    civilization: "Egyptian Mythology",
    country: "Egypt",
  },
  {
    name: "Jupiter",
    civilization: "Roman Mythology",
    country: "Italy",
  },
  // Add more deities as needed...
];

for (let i = 0; i < gods.length; i++) {
  // creare un ciclo for che stampi SOLO le divinità della civiltà nordica
  // stampare le civiltà
  // stampare SOLO quelle nordiche
  // gods[].civilization = a "Norse Mythology" => if
  if (gods[i].civilization === "Norse Mythology") {
    console.log(gods[i].name);
  }
}
