const button = document.querySelector(".button__close");
const lines = document.querySelectorAll(".line");
button.onclick = function () {
  if (button.classList.contains("cross")) {
    for (let i = 0; i < lines.length; i++) {
      lines[i].style.animationDirection = "reverse";
      button.classList.remove("cross");
    }
  }
  button.classList.add("moving");
  setTimeout(function () {
    button.classList.remove("moving");
    if (lines[0].style.animationDirection !== "reverse") {
      button.classList.add("cross");
    } else {
      for (let i = 0; i < lines.length; i++) {
        lines[i].style = "";
      }
    }
  }, 500);
};

/* 
    setTimeout(fn, int)
    fn => codice da eseguire dopo un tot di secondi
    int => i millisecondi da aspettare
*/

document.querySelector("aside").onclick = function() {
    document.querySelector("aside").classList.toggle("show")
}