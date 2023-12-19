window.onload = function () {
  fetch("https://striveschool-api.herokuapp.com/books", {
    method: "GET",
    // headers
  })
    .then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        throw response.status;
      }
    })
    .then(function (books) {
      //books => risultato di response.json()
      console.log(books);
      const row = document.querySelector(".row#books");
      for (const book of books) {
        row.innerHTML += `<div class="col-3 book" id="${book.asin}" onclick="selectCard(event)"> <div class="card">
        <img src="${book.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${book.title}</h5>
        </div>
      </div> </div>`;
      }
    })
    .catch(function (err) {
      console.error(err);
    });
};

const selectCard = function (event) {
  const card = event.target.closest(".book");
  card.classList.toggle("border-4");
  document.querySelector(".col-4").classList.remove("d-none");
  fetch(`https://striveschool-api.herokuapp.com/books/${card.id}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (book) {
      document.querySelector("#details h1").innerText = book.title;
      document.querySelector("#details h3").innerText = book.price;
      document.querySelector("#details h4").innerText = book.category;
      document.querySelector("#details img").src = book.img;
    });
};

const closeSidebar = function(event) {
    event.target.closest("#details").classList.add("d-none")
}