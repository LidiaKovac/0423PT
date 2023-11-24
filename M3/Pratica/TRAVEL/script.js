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

document.querySelector("#travels").innerHTML = travels
  .map(
    (t) => `
<div class="col-12 col-sm-6 col-md-4 col-lg-3">
<div class="card  h-100" >
<div class="img-accent"></div> 
  <img src="${t.image}" class="card-img-top" alt="${t.description}">
  
  <div class="card-body h-50 d-flex flex-column justify-content-between ">
    <h5 class="card-title">${t.destination}</h5>
    <p> ${t.description} </p>
    <button data-bs-target="#detailsModal" data-bs-toggle="modal"  onclick="openModal('${t.destination}')" class="btn btn-primary mt-4">Take me there! 🧳</button>
</div> </div> </div>

`
  )
  .join("");

const openModal = function (destination) {
  const travel = travels.find((t) => t.destination === destination);
  const modalImg = document.querySelector(".modal img");
  modalImg.src = travel.image;
  const modalDestination = document.querySelector(".modal h3");
  modalDestination.innerText = travel.destination;
  const modalDates = document.querySelectorAll(".modal .list-group-item");
  modalDates[0].innerText += travel.start_date;
  modalDates[1].innerText += travel.end_date;
  const modalPrice = document.querySelector(".modal .modal-body h3.price");
  modalPrice.innerHTML =
    travel.price +
    "€  " +
    `<span class="ms-2 badge bg-dark">BLACK FRIDAY!</span>`;
  const modalDescription = document.querySelector(".modal p");
  modalDescription.innerText = travel.description;
};
