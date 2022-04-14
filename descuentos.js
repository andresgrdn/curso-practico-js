const precioOriginal = 120;
const descuento = 18; // 20%

const porcentajePrecioOriginalConDescuento = 100 - descuento;

const precioConDescuento =
  (precioOriginal * porcentajePrecioOriginalConDescuento) / 100;

console.log({
  precioOriginal,
  descuento,
  porcentajePrecioOriginalConDescuento,
  precioConDescuento,
});

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}
