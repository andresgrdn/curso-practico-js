// Helpers

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

const displayOptions = () => {
  toggleClass("temas", "hidden");
};

const changeIcon = () => {
  // cambiar la clase de hidden del icono del menu
  toggleClass("menu__icon--folded", "hidden");
  toggleClass("menu__icon--unfolded", "hidden");
};

const applyMenuStyles = () => {
  // 1. Obtener el elemento del menu
  let menu_tag = document.getElementsByClassName("menu")[0];

  // 2. Que clases tiene el elemento
  const classes = menu_tag.classList;

  // 3. Cambiar entre menu--folded y menu--unfolded
  if (classes.contains("menu--folded")) {
    classes.remove("menu--folded");
    classes.add("menu--unfolded");
  } else if (classes.contains("menu--unfolded")) {
    classes.remove("menu--unfolded");
    classes.add("menu--folded");
  }
};

// Toggle del menu

// Tiene un estado que me informa si esta unfolded o folded

// Cambiar de unfolded a folded
// 1. Ocultar el ul menu
// 2. Ocultar la img de la linea
// 3. Mostrar la img de flecha
// 4. Cambiar los estilos de menu--unfolded a menu--folded del nav con
//    menu menu--unfolded clases

// Cambiar de folded a unfolded
// 1. Mostrar el ul menu
// 2. Mostrar la img de flecha
// 3. Ocultar la img de la linea
// 4. Cambiar los estilos de menu--folded a menu--unfolded del nav con
//    menu menu--folded clases

const toggleMenuStyles = () => {
  applyMenuStyles();
  displayOptions();
  changeIcon();
};
