const datos = [100, 200, 515, 225, 1, 1, 1, 20, 2];

const frecuencias = {};

console.groupCollapsed("Calculo de las frecuencias");

datos.forEach((elemento) => {
  console.groupCollapsed(`Iteracion del elemento: ${elemento}`);

  // Si el elemento existe como atributo del objeto
  if (frecuencias[elemento]) {
    frecuencias[elemento] += 1;
  } else {
    frecuencias[elemento] = 1;
  }

  console.log("El objeto frecuencia generado actual es: ", frecuencias);
  console.groupEnd();
});

console.groupEnd();

console.groupCollapsed("Ordenando de la lista de frecuencias");

console.log("El objeto frecuencia actual: ", frecuencias);

const parejas_elementoFrecuencia = Object.entries(frecuencias);

console.log(
  "Objeto frecuencias transformado en una lista de listas: ",
  parejas_elementoFrecuencia
);

parejas_elementoFrecuencia.sort((anterior, actual) => {
  // pareja = ["llave", valor -> indice es 1]
  return anterior[1] - actual[1];
});

console.log(
  "Lista de listas ordenado de menor a mayor: ",
  parejas_elementoFrecuencia
);

console.groupEnd();

console.groupCollapsed("Resultado final [moda]");

const indiceUltimoElemento = parejas_elementoFrecuencia.length - 1;

const moda = parejas_elementoFrecuencia[indiceUltimoElemento];

console.log(
  "La moda de los datos ",
  datos,
  "\nes el elemento ",
  moda[0],
  " con una frecuencia de ",
  moda[1]
);

console.groupEnd();
