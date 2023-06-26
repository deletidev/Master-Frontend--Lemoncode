/* # Includes

En ES7 ya existe una función de manejo de arrays llamada `Array.includes()`
que indica si un determinado valor figura entre los items de un array dado.
Crea una función en ES5 con el mismo comportamiento, es decir, una función 
que reciba un array y un valor y devuelva un `boolean` indicando si el valor
 está dentro del array.
 */

function includes(array: number[], value: number) {
  // Implementation here
  let encuentro: boolean;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    encuentro = element === value ? true : false;
    if (encuentro) {
      return encuentro;
    }
  }

  return encuentro;
}

// Ejemplo:
console.log(includes([1, 2, 3], 2)); // true
console.log(includes([1, 2, 3], 0)); // false

/* ## Challenge

El ejercicio anterior puede quedar simplificado si utilizas una función de los arrays
que devuelve el índice de un elemento dado. */
// const existe = (array: number[], value: number) =>
//   array.indexOf(value) === -1 ? false : true;
// console.log(existe([1, 2, 3], 1)); // true
// console.log(existe([1, 2, 3], 0));

const existe = (array: number[], value: number) => array.includes(value);
console.log(existe([1, 2, 3], 1)); // true
console.log(existe([1, 2, 3], 0));
