const lista1 = [1,2,3,1,2,3,4,2,2,2,1];

const listaObject = {};

lista1.map(function (elemento) {
    if (listaObject[elemento]) {
        listaObject[elemento] += 1;
    } else {
        listaObject[elemento] = 1;
    }
});

const listArray = Object.entries(listaObject).sort(
    function (valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }
);

const moda = listArray[listArray.length - 1];