// Helpers

function estaEnElUmbral(salario, personasEnDependencia) {
  const umbralPobreza = 84.71;
  const umbralPobrezaExtrema = 47.74;

  const ingresoFamiliarPerCapita = salario / personasEnDependencia;

  // Analisis de pobreza
  let msg;

  if (ingresoFamiliarPerCapita < umbralPobrezaExtrema) {
    msg = `Su ingreso familiar por persona es $ ${ingresoFamiliarPerCapita} es menor al umbral de pobreza extrema en Ecuador de $ ${umbralPobrezaExtrema}`;
  } else if (ingresoFamiliarPerCapita < umbralPobreza) {
    msg = `Su ingreso familiar por persona es $ ${ingresoFamiliarPerCapita} es menor al umbral de pobreza en Ecuador de $ ${umbralPobreza}`;
  } else {
    msg = `Felicidades se encuentra fuera del umbral de pobreza`;
  }

  return msg;
}

// Interaccion con el HTML
function verificarUmbral() {
  const input_salario = document.getElementById("InputSalario");
  const input_personasEnDependencia = document.getElementById(
    "InputPersonasEnDependencia"
  );

  const sueldo = input_salario.value;
  const personasEnDependencia = input_personasEnDependencia.value;

  const msg = estaEnElUmbral(sueldo, personasEnDependencia);

  const elem_resultado = document.getElementById("Resultado");
  elem_resultado.innerText = msg;
}
