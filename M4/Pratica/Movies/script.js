const url = "http://omdbapi.com/?apikey=9591c26e&s=christmas";

fetch(url)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else throw res.status;
  })
  .then((data) => {
    const movies = data.Search;
    const row = document.querySelector(".row");
    for (const movie of movies) {
      //     movies[i]
      row.innerHTML += `
                <div class="col col-3">
                 <div class="card">
                  <img src="${movie.Poster}" class="card-img-top" alt="...">
                  <div class="card-body">
                    <h5 class="card-title">${movie.Title}</h5>
                    <p class="card-text">${movie.Year}</p>
                  </div>
                 </div>
                </div>  
            `;
    }
  })
  .catch((err) => {
    console.error(err);
    const alert = document.querySelector(".alert");
    alert.classList.remove("d-none");
    alert.innerText = "ERRORE:" +err;
  });
