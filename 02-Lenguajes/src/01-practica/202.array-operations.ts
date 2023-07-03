// # Array Operations

// ## Apartado A
// Implementa una función `head` (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const word = ['h', 'o', 'l', 'a'];

const headA = array => {
  const [primer, ...resto] = array;
  return primer;
};
//Versión simplificada
// const headA = <T>([primer]: T[]) => primer;
console.log(headA(word));

// ## Apartado B
// Implementa una función `tail` (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tailA = array => {
  const [primer, ...resto] = array;
  return resto;
};
//Versión simplificada
// const tailA = <T>([, ...last]: T[]) => last;
console.log(tailA(word));

// ## Apartado C
// Implementa una función `init` (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece `Array.prototype`.

const initA = array => array.slice(0, -1); // Implementation here.
console.log(initA(word));

// ## Apartado D

// Implementa una función `last` (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const lastA = array => array.slice(-1).toString(); // Implementation here.
//const last = (array: string[]) => array[array.length - 1];
console.log(lastA(word));
