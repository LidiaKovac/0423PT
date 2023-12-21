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

const cart = [];

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
      document.querySelector("#details button#addToCart").onclick =
        function () {
          addToCart(book);
        };
    });
};

const closeSidebar = function (event) {
  event.target.closest("#details").classList.add("d-none");
};

const addToCart = function (book) {
  // nell'array cart, NON ci sia il libro che abbia aggiunto
  const ids = [];
  for (const libro of cart) {
    ids.push(libro.asin);
  }
  if (!ids.includes(book.asin)) {
    cart.push(book);
  }
  console.log(cart);
  renderCart(cart);
};

const renderCart = function (cartArr) {
  let tot = 0;
  const ul = document.querySelector("#cart-items");
  ul.innerHTML = "";
  for (const book of cartArr) {
    ul.innerHTML += `<li> <img src="${book.img}"/> | ${book.title} | ${book.price} </li>`;
    tot += book.price;
  }
  document.querySelector("#cart-total").innerText = tot.toFixed(2) + "|" + "€";
};
