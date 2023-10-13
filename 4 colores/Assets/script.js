// Agregar evento click a cada div
const divs = document.querySelectorAll("div");
for (const div of divs) {
  div.addEventListener("click", function() {
    // Cambiar el color del div a negro
    div.style.backgroundColor = "black";
  });
}
