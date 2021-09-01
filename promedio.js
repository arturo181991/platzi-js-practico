const lista1 = [
    100,
    200,
    300,
    500
];


const mediaArtimetica = calcularMediaAritmetica(lista1);
console.log("Promedio", mediaArtimetica);   


function calcularMediaAritmetica (lista) {
    /*let suma = 0;

    lista.forEach(function (item) {
        suma += item;
    });*/

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;

    return promedio;
}

