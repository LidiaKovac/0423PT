const immagini = [
  "./assets/amsterdam.webp",
  "./assets/auckland.jpg",
  "./assets/barcelona.avif",
  //   ????
];

const carousel = document.querySelector(".carousel");
for (let i = 0; i < immagini.length; i++) {
  carousel.innerHTML += `<img id="img_${i}" class="${
    i !== 0 ? "d-none" : null
  }" src="${immagini[i]}" />`;
}

const nextPage = function () {
  const visiblePage = document.querySelector(".carousel img:not(.d-none)");
  visiblePage.classList.add("d-none");
  const pageNo = parseInt(visiblePage.id.split("_")[1]); //0
  let nextPage = pageNo + 1; //1
  if (nextPage >= immagini.length) {
    nextPage = 0;
  }
  const nextImg = document.querySelector(`.carousel img#img_${nextPage}`);
  nextImg.classList.remove("d-none");
};

const prevPage = function () {
  const visiblePage = document.querySelector(".carousel img:not(.d-none)");
  visiblePage.classList.add("d-none");
  const pageNo = parseInt(visiblePage.id.split("_")[1]); //0
  let prevPage = pageNo - 1; //1
  if (prevPage < 0) {
    prevPage = immagini.length - 1;
  }
  const nextImg = document.querySelector(`.carousel img#img_${prevPage}`);
  nextImg.classList.remove("d-none");
};
