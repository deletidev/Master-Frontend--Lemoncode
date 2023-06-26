console.log('************** DELIVERABLE 03 *********************');
/* 3. Clone Merge
Clone
Implementa una función clone que, a partir de un objeto de entrada
 source devuelva un nuevo objeto con las propiedades de source: */

interface object3 {}
function clone(source: object3) {
  return { ...source };
}
//resultado de prueba debajo de los objetos de la siguiente parte

/* Merge
Implementa una función merge que, dados dos objetos de entrada
 source y target, devuelva un nuevo objeto con todas las propiedades
  de target y de source, y en caso de propiedades con el mismo nombre,
   source sobreescribe a target. */

//si fuese tipado
interface object1 {
  name: string;
  surname: string;
  country: string;
}
interface object2 {
  name: string;
  age: number;
  married: boolean;
}

const a = { name: 'Maria', surname: 'Ibañez', country: 'SPA' };
const b = { name: 'Luisa', age: 31, married: true };

function merge(source: object1, target: object2): object1 {
  return { ...target, ...source };
}

console.log(merge(a, b));
// {name: "Maria", age: 31, married: true, surname: "Ibañez", country: "SPA"}
console.log(clone(a));
