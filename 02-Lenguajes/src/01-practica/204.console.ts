//  # Console

// ## Apartado A

// Intenta razonar cual será el resultado de la consola al ejecutar este código:

/* var a1 = 1;
let b1 = 2;

{
  try {
    console.log(a1, b1); //1, undefined, b1 esta declarada dentro de los {}, y no usa la de global
  } catch (error) {}
  let b1 = 3;
  console.log(a1, b1); //1,3, ya la he declarado y le he dado valor a b
}

console.log(a1, b1); //1, 2, aquí b, es b del global

() => { // no se ejecuta nada de dentro de la función porque no la estoy invocando
  console.log(a1);
  var a1 = 5;
  let b1 = 6;
  console.log(a1, b1);
};

console.log(a1, b1); //1,2 */

//con modificaciones
var a1 = 1;
let b1 = 2;

{
  try {
    let b1 = 3;
    console.log(a1, b1);
  } catch (error) {}
  console.log(a1, b1);
}

console.log(a1, b1);

(() => {
  var a1 = 5;
  console.log(a1);
  let b1 = 6;
  console.log(a1, b1);
})();

console.log(a1, b1);

//  ## Apartado B

// Sin tocar ninguno de los `console.log` anteriores, modifica ligeramente el código para que muestre la siguiente secuencia:

// 1 3
// 1 3
// 1 2
// 5
// 5 6
// 1 2
