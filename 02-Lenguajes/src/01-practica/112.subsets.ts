// # Subsets

// Escribe una función que acepte un string como argumento
// y devuelva todas las partes finales de dicha palabra:

function subsets(word) {
  //[...str.slice(1)].map((n, i) => (n = str.slice(1 + i))) no me deja typescript[...word]

  // return Array.from(word, (val, index) => word.slice(1 + index)).filter(
  //   Boolean
  // );
  return Array.from(word.slice(1), (val, index) => word.slice(1 + index));
  //primer valor es para la longitud del array de salida, con la funcion doy valor a los elementos del array
}

console.log(subsets('message')); // ["essage", "ssage", "sage", "age", "ge", "e"]

// ## Challenge

// Repite el ejercicio anterior sin utilizar arrays auxiliares ni bucles for/do/while.

// TIP: Una forma válida de "iterar" es utilizando algún método de los Arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/prototype
