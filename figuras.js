// Cuadrado

// Perimetro cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

// Area cuadrado
function areaCuadrado(lado) {
  return lado * lado;
}

// Triangulo

// Perimetro triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}

// Area triangulo
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// Circulo

const PI = Math.PI;

// Diametro circulo
function diametroCirculo(radio) {
  return radio * 2;
}

// Perimetro circulo
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);

  return diametro * PI;
}

// Area circulo
function areaCirculo(radio) {
  return radio * radio * PI;
}

// Aqui interactuamos con HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}

function calcularPerimetroTriangulo() {
  const input_lado1 = document.getElementById("InputTriangulo__lado1");
  const input_lado2 = document.getElementById("InputTriangulo__lado2");
  const input_base = document.getElementById("InputTriangulo__base");

  const value_lado1 = Number(input_lado1.value);
  const value_lado2 = Number(input_lado2.value);
  const value_base = Number(input_base.value);

  const perimetro = perimetroTriangulo(value_lado1, value_lado2, value_base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const input_lado1 = document.getElementById("InputTriangulo__lado1");
  const input_lado2 = document.getElementById("InputTriangulo__lado2");
  const input_base = document.getElementById("InputTriangulo__base");

  const value_lado1 = input_lado1.value;
  const value_lado2 = input_lado2.value;
  const value_base = input_base.value;

  const area = areaTriangulo(value_lado1, value_lado2, value_base);
  alert(area);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value);
  alert(area);
}
