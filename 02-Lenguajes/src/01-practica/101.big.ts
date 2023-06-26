/* Biggest Word
Crea una función que reciba una frase en formato string y devuelva la palabra más larga.
 En caso de haber varias con longitud máxima que devuelva siempre la primera.
  Ten en cuenta que consideramos una palabra a aquello que esté separado por espacios.

TIP: Consulta la documentación en MDN sobre los strings,
 verás que incorporan muchas funciones de utilidad para el manejo y manipulación de strings.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/prototype
 */

// function biggestWord(phrase) {
//   const array = phrase.split(' ');
//   let newRaay = [];

//   for (const item of array) {
//     newRaay.push(item.length);
//   }

//   let position = 0;
//   for (let i = 0; i < newRaay.length; i++) {
//     if (newRaay[i] === Math.max.apply(null, newRaay)) {
//       position = i;
//       break;
//     }
//   }

//   return array[position];
// }

function biggestWord(phrase) {
  const array = phrase.split(' ').sort((a, b) => b.length - a.length);
  return array[0];
}

// Ejemplo
console.log(biggestWord('Esta frase puede contener muchas palabras')); // "contener"
console.log(biggestWord('Ejercicios básicos de JavaScript')); // "Ejercicios"
