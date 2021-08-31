//codigo del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");
function perimetroCuadrado (lado) {
    return lado * 4;
}
const permimetroCuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrado mide: " + permimetroCuadrado + " cms");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El area del cuadrado mide: " + areaCuadrado + " cms2");
areaCuadrado = (lado) => 
    lado * lado;
console.groupEnd();

console.group("Triangulos");
//codigo del triangulo
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log("Los lados del triangulo miden: "
 + ladoTriangulo1
 + " cms, "
 + ladoTriangulo2
 + " cms, "
 + baseTriangulo
 +" cms"
);

const alturaTriangulo = 5.5;
console.log("La altura del triangulo mide: " + alturaTriangulo + " cms");

//const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const perimetroTriangulo = (lado1, lado2, base) => {
    return lado1 + lado2 + base;
}
console.log("El perimetro del triangulo mide: " + perimetroTriangulo(3,5,8) + " cms");

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
const areaTriangulo = (base, altura) => {
    return (base * altura) / 2;
};
console.log("El Area del triangulo es de: " + areaTriangulo(5,8) + " cms2");

console.groupEnd();

//Ciculos
console.group("Circulos");
const radioCirculo = 4;
console.log("El radio del circulo mide: " + radioCirculo + " cms");

const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo mide: " + diametroCirculo + " cms");

const PI = Math.PI;
console.log("El valor de PI es: " + PI);

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo mide: " + perimetroCirculo + " cms");

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El area del circulo mide: " + areaCirculo + " cms2");

console.groupEnd();

//Aqui interactuamos con el HTML
calcularPerimetroCua = () => {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert("Perimetro: " + perimetro);
}

calcularAreaCua = () => {
    const input = document.getElementById("inputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert("Area: " + area);
}

calcularAlturaIsoceles = () => {
    const input1 = document.getElementById("lado1");
    const input2 = document.getElementById("lado2");
    const input3 = document.getElementById("lado3");

    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;

    const area = altutaIsoceles(value1, value2);
    alert("Altura Isoceles: " + area);
}