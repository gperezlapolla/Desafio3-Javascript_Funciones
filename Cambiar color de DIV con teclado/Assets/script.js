// Variables globales
let colorKey = "";
let colorKey2 = "";

// Función que se ejecuta al presionar una tecla
function changeColor(event) {
  // Obtenemos la tecla presionada
  let key = event.key;

  // Cambiamos el color del div según la tecla presionada
  switch (key) {
    case "a":
      colorKey = "pink";
      break;
    case "s":
      colorKey = "orange";
      break;
    case "d":
      colorKey = "skyblue";
      break;
    default:
      // No hacemos nada
      break;
  }

  // Actualizamos el color del div
  document.getElementById("key").style.backgroundColor = colorKey;
}

// Función que se ejecuta al presionar una tecla
function changeColor2(event) {
  // Obtenemos la tecla presionada
  let key = event.key;

  // Cambiamos el color del div según la tecla presionada
  switch (key) {
    case "q":
      colorKey2 = "purple";
      break;
    case "w":
      colorKey2 = "gray";
      break;
    case "e":
      colorKey2 = "brown";
      break;
    default:
      // No hacemos nada
      break;
  }

  // Actualizamos el color del div
  document.getElementById("key2").style.backgroundColor = colorKey2;
}

// Asociamos la función al evento keyup
document.addEventListener("keyup", changeColor);
document.addEventListener("keyup", changeColor2);
