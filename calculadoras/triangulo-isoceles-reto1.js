/* 
En este ejercicio debes crear una función para calcular la altura de un triángulo isósceles.

- La función debe recibir, como parámetros, la longitud de los 3 lados del triángulo.
- La función debe validar que la longitud de los 3 lados del triángulo corresponden a un triángulo isósceles.
- La función debe retornar la altura del triángulo.

Pista: la función Math.sqrt de JavaScript puede ayudarte a calcular raíces cuadradas.
*/

// Triangulo isoceles: codigo puro

console.group("Triangulo isoceles");
const lado1 = 12;
const lado2 = 12;
const base = 13;

console.log(
  `El lado 1 es de: ${lado1}`,
  `\nEl lado 2 es de: ${lado2}`,
  `\nLa base es de: ${base}`
);

const esIsoceles = lado1 === lado2 && base != lado1;
console.log(`Es un triangulo isoceles: ${esIsoceles}`);

if (esIsoceles) {
  const altura = Math.sqrt(lado1 * lado1 - (base / 2) * (base / 2));
  console.log(`La altura es de: ${altura}`);
}
console.groupEnd();

// Triangulo isoceles: encapsulado en una funcion

function alturaTrianguloIsoceles(lado1, lado2, base) {
  let altura;
  if (lado1 != lado2) {
    console.error("Los lados 1 y 2 no son iguales.");
  } else if (base > lado1 * 2) {
    console.error("La base no puede ser mayor a la suma de sus lados.");
  } else {
    const adjacent = base / 2;
    const hipotenusa_sq = lado1 * lado1;
    const adjacent_sq = adjacent * adjacent;

    // valores negativos invalidos -> altura = NaN
    const diference = hipotenusa_sq - adjacent_sq;

    altura = Math.sqrt(diference);
  }
  return altura;
}
