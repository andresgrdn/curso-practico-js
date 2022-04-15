function checkCupon(cuponCode) {
  const cupones = [
    { code: "low_code", desc: 5 },
    { code: "456", desc: 10 },
    { code: "789", desc: 15 },
    { code: "101", desc: 20 },
  ];

  const cupon = cupones.find((cupon) => {
    return cupon.code === cuponCode;
  });

  return cupon;
}

function calcularPrecioConDescuento(precio, descuento, cuponCode) {
  const cuponAplicado = checkCupon(cuponCode);

  let sum_desc = Number(descuento);
  if (cuponAplicado) {
    sum_desc += cuponAplicado.desc;
  }

  const porcentaje_menosDescuento = 100 - sum_desc;
  const precioFinal = (precio * porcentaje_menosDescuento) / 100;

  return precioFinal;
}

// Interaccion con HTML

function onClickButtonPriceDiscount() {
  const input_price = document.getElementById("InputPrice");
  const input_discount = document.getElementById("InputDiscount");
  const input_cupon = document.getElementById("InputCupon");

  const price_value = input_price.value;
  const discount_value = input_discount.value;
  const cupon_value = input_cupon.value;

  const precio_con_descuento = calcularPrecioConDescuento(
    price_value,
    discount_value,
    cupon_value
  );

  const resultPrice = document.getElementById("ResultPrice");
  resultPrice.innerHTML = `Total con descuentos: $ ${precio_con_descuento}`;
}
