/* const precioOriginal = 120;
const descuento = 18; // 20%

const porcentajePrecioOriginalConDescuento = 100 - descuento;

const precioConDescuento =
  (precioOriginal * porcentajePrecioOriginalConDescuento) / 100;

console.log({
  precioOriginal,
  descuento,
  porcentajePrecioOriginalConDescuento,
  precioConDescuento,
}); */

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

  return precioConDescuento;
}

// Interaccion con HTML

function onClickButtonPriceDiscount() {
  const input_price = document.getElementById("InputPrice");
  const input_discount = document.getElementById("InputPrice");

  const price_value = input_price.value;
  const discount_value = input_discount.value;

  const precio_con_descuento = calcularPrecioConDescuento(
    price_value,
    discount_value
  );

  const resultPrice = document.getElementById("ResultPrice");
  resultPrice.innerHTML = `El precio con descuento es: $ ${precio_con_descuento}`;
}
