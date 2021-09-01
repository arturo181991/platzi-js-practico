function calcularMediaAritmetica (lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;

    return promedio;
}

const lista1 = [
    100,
    200,
    500,
    800
];

const mitadLista = parseInt(lista1.length / 2 );  

function isPar (numero) {
    return numero % 2 === 0;    
}
function calcularMediana(lista) {
    let mediana; 
    if (isPar(lista.length)) {
        console.log("mediana Par..")
        const variable1 = lista[mitadLista - 1];
        const variable2 = lista[mitadLista];
        console.log("Var 1: "+variable1);
        console.log("Var 2: "+variable2);
        mediana = calcularMediaAritmetica([variable1, variable2]);
    } else {
        mediana = lista[mitadLista];
        console.log("mediana imPar..")
    }
    return mediana;
}
