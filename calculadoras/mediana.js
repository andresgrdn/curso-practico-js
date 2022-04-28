function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce((prevValue = 0, curValue) => {
    return prevValue + curValue;
  });

  const promedio = sumaLista / lista.length;

  return promedio;
}

const lista = [200, 10000, 300, 400];

lista.sort((firstNum, secondNum) => {
  return firstNum - secondNum;
});

const mitadLista = parseInt(lista.length / 2);

let mediana;

function esPar(numero) {
  return numero % 2 === 0;
}

if (esPar(lista.length)) {
  const elemento1 = lista[mitadLista - 1];
  const elemento2 = lista[mitadLista];

  mediana = calcularMediaAritmetica([elemento1, elemento2]);
} else {
  mediana = lista[mitadLista];
}

function calcularMediana(lista) {
  if (typeof lista != "object") {
    console.error("No es una lista");
    return;
  }

  lista.sort((firstNum, secondNum) => {
    return firstNum - secondNum;
  });

  const mitadLista = parseInt(lista.length / 2);

  let mediana;

  function esPar(numero) {
    return numero % 2 === 0;
  }

  if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista - 1];
    const elemento2 = lista[mitadLista];

    mediana = calcularMediaAritmetica([elemento1, elemento2]);
  } else {
    mediana = lista[mitadLista];
  }

  return mediana;
}
