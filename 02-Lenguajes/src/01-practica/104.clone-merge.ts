// ## Apartado A

// Implementa una función `clone` que devuelva un objeto clonado a partir de otro:

const mio = {
  mira: 'hola'
};

function cloneEj(obj) {
  let dio = { ...obj };
  return dio;
}
const clonado = clone(mio);
clonado.dios = true;

console.log(mio);
console.log(clonado);

// ## Apartado B

// Dados dos objetos cualesquiera, implementa una función `merge` que mezcle uno sobre otro. El objeto resultante debe ser la mezcla de las propiedades del objeto `source` sobre las del objeto `target`.

// **TIP**: Usa la función `clone` del apartado A.

function mergeEj(source, target) {
  // const returnedTarget = Object.assign(target, source);
  // return returnedTarget;
  return { ...source, ...target };
}

// function merge(...arr) {
//   return arr.reduce((acc, val) => {
//     return { ...acc, ...val };
//   }, {});
// }

// Por ejemplo, dados estos 2 objetos:
const aEj = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const bEj = { name: 'Luisa', age: 31, married: true };

// El resultado de mezclar a sobre b sería:
mergeEj(a, b); // {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}

console.log(mergeEj(b, a));

var obj = Object.create(
  { foo: 1 },
  {
    // foo es una propiedad heredada.
    bar: {
      value: 2 // bar es una propiedad no enumerable.
    },
    baz: {
      value: 3,
      enumerable: true // baz es una propiedad propia enumerable.
    }
  }
);
console.log(obj);
var copy = Object.assign({}, obj);
console.log(copy);
console.log(mergeEj({}, obj));
