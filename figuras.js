// Cuadrado
console.group("Cuadrado");
let ladoCuadrado = 4;
console.log(`Los lados del cuadrado miden: ${ladoCuadrado} cm`);

let perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perimetro del cuadrado es: ${perimetroCuadrado} cm`);

let areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(`El area del cuadrado es: ${areaCuadrado} cm^2`);
console.groupEnd();

// Triangulo
console.group("Triangulo");
let lado1Triangulo = 4;
let lado2Triangulo = 4;
let baseTriangulo = 2;
let alturaTriangulo = 3.8729;

console.log(
  `El lado 1 del triangulo mide: ${lado1Triangulo} cm` +
    `\n` +
    `El lado 2 del triangulo mide: ${lado2Triangulo} cm` +
    `\n` +
    `La base del triangulo mide: ${baseTriangulo} cm` +
    `\n` +
    `La altura del triangulo mide: ${alturaTriangulo} cm`
);

let perimetroTriangulo = lado1Triangulo + lado2Triangulo + baseTriangulo;
console.log(`El perimetro del triangulo es: ${perimetroTriangulo} cm`);

let areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El area del triangulo es: ${areaTriangulo} cm^2`);
console.groupEnd();

// Circulo
console.group("Circulo");
const PI = Math.PI;
let diametroCirculo = 5;
let radioCirculo = diametroCirculo / 2;

console.log(`El valor de pi es: ${PI}`);
console.log(`El diametro del circulo es: ${diametroCirculo}`);
console.log(`El radio del circulo es: ${radioCirculo}`);

let perimetroCirculo = PI * diametroCirculo;
console.log(`El perimetro del circulo es: ${perimetroCirculo}`);

let areaCirculo = PI * radioCirculo * radioCirculo;
console.log(`El area del circulo es: ${areaCirculo}`);
console.groupEnd();
