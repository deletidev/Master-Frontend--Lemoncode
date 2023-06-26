console.log('************** DELIVERABLE 01 *********************');
/* Head
Implementa una función head (inmutable), tal que, 
dado un array como entrada extraiga y devuelva su primer elemento.
Utiliza destructuring.
 */

const myArray: string[] = ['hola', 'mañana', 'pasado'];
const head = ([first]: string[]) => first;

console.log(head(myArray));

/* Tail
Implementa una función tail (inmutable), tal que,
 dado un array como entrada devuelta todos menos el primer elemento.
  Utiliza rest operator.
 */
const tail = ([, ...array]: string[]): string[] => array; // Implementation here.
console.log(tail(myArray));

/* Init
Implementa una función init (inmutable), tal que, 
dado un array como entrada devuelva todos los elementos menos el último.
 Utiliza los métodos que ofrece Array.prototype.
 */
const init = (array: string[]) => array.slice(0, array.length - 1); // Implementation here.
console.log(init(myArray));

/* Last
Implementa una función last (inmutable), tal que,
 dado un array como entrada devuelva el último elemento.
 */
// const last = (array: string[]) => array.slice(-1).toString();
const last = (array: string[]) => array[array.length - 1];
console.log(last(myArray));
console.log(myArray);
