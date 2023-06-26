/* # Deep Equal

## Apartado A

Suponiendo objetos sin anidamiento y con propiedades primitivas,
 construye una función que compare el contenido de 2 objetos.

**TIP**: Recuerda, los objetos tienen un método `hasOwnProperty` 
que nos indica si dicho objeto tiene o no una propiedad concreta. 
Ejemplo `a.hasOwnProperty("name")`, si `a` tiene una propiedad `name` nos devolverá `true`,
 en caso contrario `false`. */

const user = { name: 'María', age: 30 };
const clonedUser = { age: 30, name: 'María' };

console.log(user === clonedUser); // false

function isEqual(a, b) {
  // Implementation here
  let keyA = Object.getOwnPropertyNames(a).sort();
  let keyB = Object.getOwnPropertyNames(b).sort();

  if (keyA.every((element, index) => element === keyB[index])) {
    let valA = Object.values(a).sort();
    let valB = Object.values(b).sort();
    console.log();
    console.log(valB);
    if (valA.every((element, index) => element === valB[index])) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// console.log(isEqual(user, clonedUser)); // true

// ## Apartado B

// Vamos a mejorar la solución del apartado A suponiendo
// ahora que si puede existir anidamiento de objetos.

// **TIP**: Recuerda que el operador `typeof` en Javascript
// nos devuelve un string indicando el tipo de una variable de entre tipos primitivos,
//  objetos o funciones. Ejemplo, `typeof 12 // "number"` o `typeof {} // "object"`.

const flattenObj = ob => {
  // The object which contains the
  // final result
  let result = {};

  // loop through the object "ob"
  for (const i in ob) {
    // We check the type of the i using
    // typeof() function and recursively
    // call the function again
    if (typeof ob[i] === 'object') {
      const temp = flattenObj(ob[i]);

      for (const j in temp) {
        // Store temp in result
        result[i + '.' + j] = temp[j];
      }
    }
    // Else store ob[i] in result directly
    else {
      result[i] = ob[i];
    }
  }
  return result;
};

// console.log(flattenObj(clonedUser));

const userTwo = {
  name: 'María',
  age: 30,
  address: { city: 'Málaga', code: { dios: 'no termina' } },
  friends: ['Juan']
};
const clonedUserTwo = {
  name: 'María',
  age: 30,
  address: { city: 'Málaga', code: { dios: 'no termina' } },
  friends: ['Juan']
};

function isDeepEqual(a, b) {
  const aAplanado = flattenObj(a);
  const bAplanado = flattenObj(b);

  return isEqual(aAplanado, bAplanado);
}

console.log(isDeepEqual(userTwo, clonedUserTwo)); // true
