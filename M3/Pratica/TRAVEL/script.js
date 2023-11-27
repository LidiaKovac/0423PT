const travels = [
  {
    destination: "Paris, France",
    price: 1500,
    start_date: "2023-05-01",
    end_date: "2023-05-07",
    image: "./assets/paris.jpg",
    description:
      "Experience the romance of Paris with its iconic landmarks and charming streets.",
  },
  {
    destination: "Tokyo, Japan",
    price: 2000,
    start_date: "2023-06-15",
    end_date: "2023-06-22",
    image: "./assets/tokyo.webp",
    description:
      "Explore the vibrant culture and modern marvels of Tokyo, from traditional temples to bustling technology hubs.",
  },
  {
    destination: "Barcelona, Spain",
    price: 1800,
    start_date: "2023-07-10",
    end_date: "2023-07-18",
    image: "./assets/barcelona.avif",
    description:
      "Enjoy the lively atmosphere and stunning architecture of Barcelona, from Gaudi's masterpieces to beautiful beaches.",
  },
  {
    destination: "New York City, USA",
    price: 2200,
    start_date: "2023-08-05",
    end_date: "2023-08-12",
    image: "./assets/new york.jpg",
    description:
      "Experience the hustle and bustle of New York City, from Broadway shows to iconic skyline views.",
  },
  {
    destination: "Rome, Italy",
    price: 1700,
    start_date: "2023-10-12",
    end_date: "2023-10-20",
    image: "./assets/rome.jpg",
    description:
      "Immerse yourself in the history and art of Rome, from the Colosseum to the Vatican City.",
  },
  {
    destination: "Cape Town, South Africa",
    price: 2800,
    start_date: "2023-11-08",
    end_date: "2023-11-16",
    image: "./assets/cape-town.jpg",
    description:
      "Experience the stunning landscapes and rich cultural heritage of Cape Town.",
  },
  {
    destination: "Bangkok, Thailand",
    price: 1900,
    start_date: "2023-12-03",
    end_date: "2023-12-10",
    image: "./assets/bangkok.jpg",
    description:
      "Explore the vibrant street life and historic temples of Bangkok.",
  },
  {
    destination: "Dubai, UAE",
    price: 3000,
    start_date: "2024-01-15",
    end_date: "2024-01-22",
    image: "./assets/dubai.webp",
    description: "Experience the luxury and futuristic architecture of Dubai.",
  },
  {
    destination: "Hanoi, Vietnam",
    price: 1600,
    start_date: "2024-03-05",
    end_date: "2024-03-12",
    image: "./assets/hanoi.jpg",
    description: "Discover the rich history and delicious cuisine of Hanoi.",
  },
  {
    destination: "Marrakech, Morocco",
    price: 2200,
    start_date: "2024-04-20",
    end_date: "2024-04-28",
    image: "./assets/marrakech.jpg",
    description:
      "Immerse yourself in the vibrant colors and flavors of Marrakech.",
  },
  {
    destination: "Seoul, South Korea",
    price: 2000,
    start_date: "2024-05-15",
    end_date: "2024-05-22",
    image: "./assets/seoul.webp",
    description:
      "Experience the perfect blend of traditional and modern in Seoul.",
  },
  {
    destination: "Auckland, New Zealand",
    price: 2600,
    start_date: "2024-06-10",
    end_date: "2024-06-18",
    image: "./assets/auckland.jpg",
    description: "Explore the natural beauty and Maori culture of Auckland.",
  },
  {
    destination: "Venice, Italy",
    price: 1800,
    start_date: "2024-07-05",
    end_date: "2024-07-12",
    image: "./assets/venice.jpg",
    description:
      "Experience the enchanting canals and historic architecture of Venice.",
  },
  {
    destination: "Cairo, Egypt",
    price: 2300,
    start_date: "2024-08-20",
    end_date: "2024-08-28",
    image: "./assets/cairo.jpg",
    description:
      "Explore the ancient wonders of Cairo, from the Pyramids to the Sphinx.",
  },
  {
    destination: "Buenos Aires, Argentina",
    price: 2000,
    start_date: "2024-09-15",
    end_date: "2024-09-22",
    image: "./assets/buenos aires.jpg",
    description:
      "Immerse yourself in the tango culture and vibrant street life of Buenos Aires.",
  },
  {
    destination: "Amsterdam, Netherlands",
    price: 1700,
    start_date: "2024-10-10",
    end_date: "2024-10-18",
    image: "./assets/amsterdam.webp",
    description:
      "Discover the charming canals and historic architecture of Amsterdam.",
  },
  {
    destination: "Singapore",
    price: 2100,
    start_date: "2024-11-05",
    end_date: "2024-11-12",
    image: "./assets/singapore.webp",
    description:
      "Experience the futuristic skyline and diverse cultural influences of Singapore.",
  },
];

const row = document.querySelector("#travels");
// .innerHTML
for (let i = 0; i < travels.length; i++) {
  row.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
    <div class="card h-100" >
      <div class="img-accent position-absolute w-100 z-index-0"></div> 
        <img src="${travels[i].image}" class="card-img-top" alt="${travels[i].description}">
        
        <div class="card-body h-50 d-flex flex-column justify-content-between ">
          <h5 class="card-title">${travels[i].destination}</h5>
          <p> ${travels[i].description} </p>
          <button onclick="openModal('${travels[i].destination}')" data-bs-toggle="modal" data-bs-target="#detailsModal" class="btn btn-primary mt-4">Volo via 🤡</button>
      </div> 
    </div> 
  </div>
  `;
}
const findTravel = function (destination) {
  let found;
  for (let i = 0; i < travels.length; i++) {
    if (destination === travels[i].destination) {
      found = travels[i];
      break;
    }
  }
  return found;
};
const addToCart = function (destination) {
  const found = findTravel(destination);
  const container = document.querySelector("#cart");
  container.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 col-lg-3">
  <div class="card h-100" >
    <div class="img-accent position-absolute w-100 z-index-0"></div> 
      <img src="${found.image}" class="card-img-top" alt="${found.description}">
      
      <div class="card-body h-50 d-flex flex-column justify-content-between ">
        <h5 class="card-title">${found.destination}</h5>
        <p> ${found.description} </p>
        <button onclick="openModal('${found.destination}')" data-bs-toggle="modal" data-bs-target="#detailsModal" class="btn btn-primary mt-4">Volo via 🤡</button>
    </div> 
  </div> 
</div>
  
  `;
};
const openModal = function (destination) {
  const found = findTravel(destination);
  const modalBody = document.querySelector(".modal-body");
  modalBody.innerHTML = `<div class="row">
  <div class="col-7">
    <img src="${found.image}" class="w-100" alt="${found.description}" />
  </div>
  <div class="col-5 d-flex flex-column gap-4 justify-content-around align-items-start">
    <h3>${found.destination}</h3>
    <p>
      ${found.description}
    </p>
      <div class="list-group-item">🛫 Leaving: ${found.start_date}</div>
      <div class="list-group-item">🛬 Back: ${found.end_date}</div>
    <button onclick="addToCart('${found.destination}')" class="price btn bg-warning">
     Aggiungi al carrello: €${found.price} <span class="badge bg-dark text-white"> BLACK FRIDAY! </span> 
    </button>
  </div>
</div>`;
};

// carrello

