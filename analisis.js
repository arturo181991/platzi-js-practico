const salariosCol = colombia.map(function(ele){
    return ele.salary;
});

const salariosColSorted = salariosCol.sort(function (item1, item2){
    return item1 - item2;
});

function esPar (num) {
    return num % 2 === 0;
}

function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedio = sumaLista / lista.length;
    return promedio;
}

function medianaSalariosCol (lista) {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const salarioMitad1 = lista[mitad - 1];
        const salarioMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([salarioMitad1, salarioMitad2]);
        return mediana;
    } else {
        const salarioMitad = lista[mitad];
        return salarioMitad;
    }
}

console.log(medianaSalariosCol (salariosColSorted));
