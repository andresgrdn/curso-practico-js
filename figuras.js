// Cuadrado
console.group("Cuadrado");
/* const ladoCuadrado = 4;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`); */

/* const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es: ${areaCuadrado} cm^2`); */

// Perimetro cuadrado
function perimetroCuadrado(lado) {
  return lado * 4;
}

// Area cuadrado
function areaCuadrado(lado) {
  return lado * lado;
}
console.groupEnd();

// Triangulo
console.group("Triangulo");
/* const lado1Triangulo = 4;
const lado2Triangulo = 4;
const baseTriangulo = 2;
const alturaTriangulo = 3.8729;

console.log(
  `El lado 1 del triangulo mide: ${lado1Triangulo} cm` +
    `\n` +
    `El lado 2 del triangulo mide: ${lado2Triangulo} cm` +
    `\n` +
    `La base del triangulo mide: ${baseTriangulo} cm` +
    `\n` +
    `La altura del triangulo mide: ${alturaTriangulo} cm`
); */

/* const perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`); */

/* const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triangulo es: ${areaTriangulo} cm^2`); */

// Perimetro triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + ladoBase;
}

// Area triangulo
function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.groupEnd();

// Circulo
console.group("Circulo");
const PI = Math.PI;
/* const diametroCirculo = 5;
const radioCirculo = diametroCirculo / 2;

console.log(`El valor de pi es: ${PI}`);
console.log(`El diametro del circulo es: ${diametroCirculo}`);
console.log(`El radio del circulo es: ${radioCirculo}`); */

/* const perimetroCirculo = PI * diametroCirculo;
console.log(`El perimetro del circulo es: ${perimetroCirculo}`); */

/* const areaCirculo = PI * radioCirculo * radioCirculo;
console.log(`El area del circulo es: ${areaCirculo}`); */

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
console.groupEnd();
