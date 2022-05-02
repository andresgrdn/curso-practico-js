const lista1 = [100, 200, 515, 225];

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) {
  sumaLista1 = sumaLista1 + lista1[i];
}

const promedio = sumaLista1 / lista1.length;

function calcularMediaAritmetica(lista) {
  /* let sumaLista = 0;

  for (let i = 0; i < lista.length; i++) {
    sumaLista = sumaLista + lista[i];
  } */

  const sumaLista = lista.reduce((prevValue = 0, curValue) => {
    return prevValue + curValue;
  });

  const promedio = sumaLista / lista.length;

  return promedio;
}
