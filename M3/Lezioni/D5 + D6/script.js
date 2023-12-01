const movies = [
  {
    Title: "Harry Potter and the Deathly Hallows: Part 2",
    Year: "2011",
    imdbID: "tt1201607",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMGVmMWNiMDktYjQ0Mi00MWIxLTk0N2UtN2ZlYTdkN2IzNDNlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  },
  {
    Title: "Harry Potter and the Sorcerer's Stone",
    Year: "2001",
    imdbID: "tt0241527",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_SX300.jpg",
  },
  {
    Title: "Harry Potter and the Chamber of Secrets",
    Year: "2002",
    imdbID: "tt0295297",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE0YjUzNDUtMjc5OS00MTU3LTgxMmUtODhkOThkMzdjNWI4XkEyXkFqcGdeQXVyMTA3MzQ4MTc0._V1_SX300.jpg",
  },
  {
    Title: "Harry Potter and the Prisoner of Azkaban",
    Year: "2004",
    imdbID: "tt0304141",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg",
  },
  {
    Title: "Harry Potter and the Goblet of Fire",
    Year: "2005",
    imdbID: "tt0330373",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg",
  },
  {
    Title: "Harry Potter and the Order of the Phoenix",
    Year: "2007",
    imdbID: "tt0373889",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOTA3MmRmZDgtOWU1Ny00ZDc5LWFkN2YtNzNlY2UxZmY0N2IyXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
  },
  {
    Title: "Harry Potter and the Deathly Hallows: Part 1",
    Year: "2010",
    imdbID: "tt0926084",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg",
  },
  {
    Title: "Harry Potter and the Half-Blood Prince",
    Year: "2009",
    imdbID: "tt0417741",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg",
  },
  {
    Title: "Harry Potter 20th Anniversary: Return to Hogwarts",
    Year: "2022",
    imdbID: "tt16116174",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTZkNWEyZTgtYzJlOS00OWNiLTgwZjMtZGU5NTRhNDNjOTRhXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
  },
  {
    Title: "Harry Potter and the Forbidden Journey",
    Year: "2010",
    imdbID: "tt1756545",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNDM0YzMyNGUtMTU1Yy00OTE2LWE5NzYtZDZhMTBmN2RkNjg3XkEyXkFqcGdeQXVyMzU5NjU1MDA@._V1_SX300.jpg",
  },
  {
    Title: "Supernatural",
    Year: "2005–2020",
    imdbID: "tt0460681",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzRmZWJhNjUtY2ZkYy00N2MyLWJmNTktOTAwY2VkODVmOGY3XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
  },
  {
    Title: "Camera Café",
    Year: "2003–2017",
    imdbID: "tt0831821",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDU0MDRiYTktZGY4YS00NzE5LWJlNTctNTc3YWNjZTM0N2FkXkEyXkFqcGdeQXVyNjU2OTUyODc@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZGMxZTdjZmYtMmE2Ni00ZTdkLWI5NTgtNjlmMjBiNzU2MmI5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Rings of Power",
    Year: "2022–",
    imdbID: "tt7631058",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNTg3NjcxYzgtYjljNC00Y2I2LWE3YmMtOTliZTkwYTE1MmZiXkEyXkFqcGdeQXVyNTY4NDc5MDE@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BOGExMjIxNTMtY2M2NS00YTg0LTgyMDMtZWMyNDZmODZjZTVkXkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0347436",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODI0Mzk3OTM4N15BMl5BanBnXkFtZTgwMTM4MTk4MDE@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0387360",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjE5NTQwMTY5MV5BMl5BanBnXkFtZTgwODcwNjUwMTE@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Battle for Middle-Earth",
    Year: "2004",
    imdbID: "tt0412935",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYWI5ODU0ZGEtYTA4YS00YzliLWJiZjEtYThkNTBkNTY1Y2FhXkEyXkFqcGdeQXVyNDAzNzA0MzE@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Battle for Middle-Earth II",
    Year: "2006",
    imdbID: "tt0760172",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZTFlNTg5NzgtZmUyNS00MWJjLWFmNDktZmNiODEzZWY2YjgwXkEyXkFqcGdeQXVyNDAzNzA0MzE@._V1_SX300.jpg",
  },
  {
    Title:
      "The Lord of the Rings: The Battle for Middle-earth II - The Rise of the Witch-king",
    Year: "2006",
    imdbID: "tt1058040",
    Type: "game",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjYwMDIxNjg3MV5BMl5BanBnXkFtZTgwMTk5MTE4MDE@._V1_SX300.jpg",
  },
];

movies.sort(() => Math.random() - 0.5);
console.log(movies.length); //22
// carosello: 5 elementi per pagina
// per ogni carousel item, non possiamo creare col tutte uguali,
// ma ogni col deve avere delle classi specifiche

// INGREDIENTI:
// ?  ciclo
// ?  innerHTML, querySelector
// ?  splice, slice (toSliced)
// ? if/else

const createColumn = function (movie, classString) {
  return `
    <div class="${classString}">
      <div class="movie__wrap position-relative">
        <img
          src="${movie.Poster}"
          class="position-relative w-100"
        />
        <span class="badge bg-primary position-absolute start-0 top-0"
          >PRIME</span
        >
        <div class="movie__details position-absolute w-100">
          <p>
            <ion-icon
              name="checkmark-circle"
              class="text-info"
            ></ion-icon>
            Incluso con Prime
          </p>
          <div
            class="movie__controls d-flex align-items-center justify-content-start justify-content-md-between gap-2"
          >
            <button class="movie__play">
              <ion-icon name="play"></ion-icon>
            </button>
            <h4>
              Riprendi <br />
              S 3 E 41
            </h4>
            <div class="movie__options d-flex gap-1">
              <button>
                <ion-icon name="add-outline"></ion-icon>
              </button>
              <button>
                <ion-icon name="ban-outline"></ion-icon>
              </button>
            </div>
          </div>
          <h3 class="mt-2">${movie.Title}</h3>
          <span class="badge"> 13+ </span>
          <p>
                ${movie.Type.toUpperCase()}, ${movie.Year}
          </p>
        </div>
      </div>
    </div>
  `
}

const createCarouselItem = function(start, end) {
  let columns = "";
  console.log(
    `Iterazione loop principale, numero: ${i} \nStart: ${start}\nEnd: ${end}`
  );

  for (let y = start; y <= end; y++) {
    console.log(`Film:`, movies[y]);
    let classes = ""
    if (y === start) {
      classes = "col-9 col-sm-4 col-md-3 col-lg-2"
    } else if (y <= start + 2) {
      classes = "col-2 d-none d-lg-block"
    }
    if (y === end - 1) {
      classes = "col-3 col-lg-2 d-none d-md-block"
    }
    if (y === end) {
      classes = "col-4 col-md-3 col-lg-2 d-none d-sm-block"
    }
    columns += createColumn(movies[y], classes)
  }
  carousel.innerHTML += `
    <div class="carousel-item ${i === 0 ? "active" : ""}">
          <div class="row justify-content-center gx-2">
            ${columns}
          </div>
    </div>`;

}

// TODO: selezionare il carosello
const carousel = document.querySelector("#movies .carousel-inner");

const carouselItemsAmount = Math.round(movies.length / 5);

for (let i = 0; i < carouselItemsAmount; i++) {
  // TODO: creare X carousel items
  const start = i * 5;
  const end = start + 4;
  createCarouselItem(start, end)
  // i = 0; start => 0, end => 4
  // i = 1; start => 5, end => 9
  // i = 2; start => 10, end => 14
  // i = 3; start => 15, end => 19

  // start = i * 5
  // end = start + 4
}
