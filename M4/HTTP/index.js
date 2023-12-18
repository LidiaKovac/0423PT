const url = "https://striveschool-api.herokuapp.com/books";

// GET
//
const getBooks = function () {
  fetch(url, {
    method: "GET",
    // headers: {}, //
    // body: {} //solo POST e PUT
  })
    .then(function (books) {
      return books.json();
    })
    .then(function (realBooks) {
      console.log(realBooks);
    });
};

// getBooks();

const strToJson = '{"name": "Lidia", "hair": "brown"}';
console.log(JSON.parse(strToJson));

// https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem

// fetch(url, option)

const url2 =
  "https://deezerdevs-deezer.p.rapidapi.com/search?q=francesco guccini";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2ecd7c2fb5msh0fa167f544e5b1fp16bf79jsnc31bc5a31efa",
    "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
  },
};

fetch(url2, options)
  .then(function (response) {
    const songs = response.json();
    return songs;
  })
  .then(function (music) {
    // console.log(music);
    const ul = document.querySelector("ul");
    for (const song of music.data) {
      ul.innerHTML += `<li> ${song.title} </li>`;
    }
  });


// fetch("https://lidiakovac.it").then(function(res) {
//   const text = res.text()
//   return text 
// }).then(function(text) {
//     console.log(text)
// })