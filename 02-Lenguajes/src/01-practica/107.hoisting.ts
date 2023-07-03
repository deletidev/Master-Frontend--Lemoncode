// # Hoisting

// **NOTA**: Realiza estos ejercicios en vanilla JS.
// Si estás utilizando un playground de TypeScript obtendrás errores.

// ## Apartado A

// ¿Cual crees que será el resultado de la consola y porqué?

// **TIP**: escribe el código equivalente.

/* function fu() {
  console.log(a); //undefined, la variable a no tiene valor, ha creado una variable a sin valor porque sabe que luego va a existir a

  console.log(g()); //undefined, llamo a la funcion g pero a no tiene valor

  var a = 'good job!';
  function g() {
    return a;
  }
  console.log(a); //good job!, ya le he dado valor a a
}

fu(); //resultado por consola undefined, undefined, good job!

//código equivalente
function fu2() {
  var a;
  console.log(a); //undefined
  function g() {
    return a;
  }
  console.log(g()); //Undefined
  var a = 'good job!';
  console.log(a); //good job!, ya le he dado valor a a
} */

// ## Apartado B

// ¿Y ahora?

/* var a = 1;

(function () {
  console.log(a);
  var a = 2;
  b = 4;
  var c = 3;
})();

console.log(a);
console.log(b);
console.log(c); */

//resultado por consola orden, undefined, 1, 4 y error var c no está definida
//Código equivalente
/* var a = 1;
var b;
(function () {
  var a;
  console.log(a); // undefined porque dentro de la función  tengo una var a a la que le voy a dar valor por lo que me crea una var a, vacia, sobrescribiendo mi var a global dentro de la función
  var a = 2;
  b = 4;å
  var c = 3;
})();

console.log(a); // 1 porque la variable a de la función se queda dentro de la función
console.log(b); // 4 porque como le estoy dando un valor a b asume que en el global existe una variable llamada b, sin valor
console.log(c); // error var c no está definida, ya que var c sólo está declarada dentro de la función, no tengo acceso a ella desde fuera
 */
// ## Apartado C

// ¿Y con esta ligera variación?

/* f();
var a = 1;
function f() {
  console.log(a); // undefined, cuando se llama a la función y como sabe que luego la variable a va a existir, el valor de la variable es undefined
  b = 4;
  var c = 3;
}

console.log(a); // 1, cuando llamo al console.log ya le he dado valor a la variable a
console.log(b); // 4, al dar un nuevo valor a la variable b, y no tener
console.log(c); // error c no está definida, porque en el global no existe la variable c. */

//el código se vería así
// var a;
// var b;
// f();
// var a = 1;

// function f() {
//   console.log(a);
//   b = 4;
//   var c = 3;
// }

// console.log(a);
// console.log(b);
// console.log(c);
