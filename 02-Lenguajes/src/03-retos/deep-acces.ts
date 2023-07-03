console.log('************** CHALLENGES 2 *********************');
/* # Acceso en profundidad

## Apartado A

Implementa un mecanismo `deepGet` para acceder en profundidad a objetos anidados,
 de modo que podamos recuperar una propiedad en cualquiera de sus niveles.
  Mira a continuación el comportamiento que debería seguir: */

const myObject = {
  a: 1,
  b: {
    c: null,
    d: {
      e: 3,
      f: {
        g: 'bingo'
      }
    }
  }
};

// const deepGet = (obj, ...key) => {
//   return key.length === 0 ? obj : key.reduce((o, x) => o[x], obj);
// };

const deepGet = (obj, ...props) => {
  let currentObj = obj;
  for (const prop of props) {
    currentObj = currentObj[prop];
  }
  return currentObj;
};

console.log(deepGet(myObject, 'x')); // undefined
console.log(deepGet(myObject, 'a')); // 1
console.log(deepGet(myObject, 'b')); // { c: null, d: {....}}
console.log(deepGet(myObject, 'b', 'c')); // null
console.log(deepGet(myObject, 'b', 'd', 'f', 'g')); // bingo
// console.log(deepGet(myObject)); // {a: 1, b: {...}}

/* ## Apartado B

Ahora implementa el complementario, `deepSet`, que permita guardar
 valores en profundidad. Su comportamiento debería ser:

 */
const myObject2 = {};

const deepSet2 = (valor, obj, ...key) => {
  if (key.length === 0) {
    return;
  }
  const lastProp = key.pop();
  let currentObj = obj;

  for (const prop of key) {
    if (!currentObj.hasOwnProperty(prop)) {
      currentObj[prop] = {};
    }
    currentObj = currentObj[prop];
  }

  currentObj[lastProp] = valor;
  return obj;
};
deepSet2(1, myObject2, 'a', 'b');
// console.log(myObject2);
console.log(JSON.stringify(myObject2)); // {a: { b: 1}}
deepSet2(2, myObject2, 'a', 'c');
console.log(JSON.stringify(myObject2)); // {a: { b: 1, c: 2}}
// deepSet2(5, myObject2, 'a', 'b', 'c');
// console.log(JSON.stringify(myObject2));
deepSet2(3, myObject2, 'a');
console.log(JSON.stringify(myObject2)); // {a: 3}
deepSet2(4, myObject2);
console.log(JSON.stringify(myObject2)); // Do nothing // {a: 3}
