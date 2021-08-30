//codigo del cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");

const permimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + permimetroCuadrado + " cms");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + " cms2");
console.groupEnd();

console.group("Triangulo");
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

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El perimetro del triangulo mide: " + perimetroTriangulo + " cms");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El Area del triangulo es de: " + areaTriangulo + " cms2");

console.groupEnd();
/*const permimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado mide: " + permimetroCuadrado + " cms");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El area del cuadrado mide: " + areaCuadrado + " cms2");*/