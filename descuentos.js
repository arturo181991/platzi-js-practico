calcularPrecioConDescuento = (precioOriginal, descuento) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

onClickButtonPriceDiscount = () => {
    const precioBruto = document.getElementById("inputPrice").value;
    const descuento = document.getElementById("inputDiscount").value;
    const precioFinal = calcularPrecioConDescuento(precioBruto, descuento);
    const resul = document.getElementById("precioResultado");
    resul.innerHTML = "Precio a pagar es: $" + precioFinal;
}

/*console.log({
    precioOriginal,
    descuento,
    porcentajePrecioConDescuento,
    precioConDescuento
});*/