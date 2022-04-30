/**
 * Voy a obtener el elemento con la ayuda de la clase “menu”. Con la función de getElementsByClass.
 * Después escojo el elemento que necesite.
 **/

/* // Obtener la lista de elementos que cunplen con tener la clase temas

const options_list = document.getElementsByClassName("temas");

// Después escojo el elemento que necesite.

let option;
if (!(options_list.length === 1)) {
  console.log(options_list);
} else {
  option = options_list[0];
}

// DOMTokenList.toggle()
// Removes the token from the list if it exists, or adds it to the list if it doesn't. Returns a boolean indicating whether the token is in the list after the operation.

// Con la ayuda de classList del elemento se va ha concatenar la clase
// “hidden” al elemento

option.classList.toggle("hidden"); */

function toggleClass(target, classToToggle) {
  // Obtener la lista de elementos que cunplen con tener la clase target

  const options_list = document.getElementsByClassName(target);

  // Después escojo el elemento que necesite.

  let option;
  // Solo funciona con un elemento
  if (!(options_list.length === 1)) {
    console.log(options_list);
  } else {
    option = options_list[0];
  }

  // DOMTokenList.toggle()
  // Removes the token from the list if it exists, or adds it to the list if it doesn't. Returns a boolean indicating whether the token is in the list after the operation.

  // Con la ayuda de classList del elemento se va ha concatenar la clase
  // classToToggle al elemento

  option.classList.toggle(classToToggle);
}
