console.log('************** DELIVERABLE 02 *********************');
/* 2. Concat
Implementa una función concat (inmutable) tal que,
dados 2 arrays como entrada, devuelva la concatenación de ambos.
 Utiliza rest / spread operators. */
const myArrayC: string[] = ['hola', 'mañana', 'pasado'];
// const myArrayD: string[] | any = [
//   'adios',
//   'ayer',
//   ,
//   ['adios', 'ayer', 'futuro']
// ];
const myArrayD: string[] = ['adios', 'ayer', 'futuro'];
const concat = <T>(a: T[], b: T[]): T[] => a.concat(b);
console.log(concat(myArrayC, myArrayD));

/* Opcional
Implementa una versión del ejercicio anterior donde
 se acepten múltiples arrays de entrada (más de 2). */

//Con flat()
const concatDos = <T>(...array: T[][]) => {
  return array.flat(1);
};
// Si tengo elementos vacios los elimina
// si no sé el nivel de profundidad del array
// return array.flat(Infinity);

//Con reduce
//solo un nivel
const concatTres = <T>(...arr: T[][]): T[] =>
  arr.reduce((acc: T[], b: T[]): T[] => [...acc, ...b], []);

//no sé el numero de niveles (solucion con ayuda) con recursividad
// Si tengo elementos vacios los elimina como con flat
const aplanarArray = <T>(...arr: T[][]): T[] => {
  let resultado = [];

  const aplanar = elemento =>
    Array.isArray(elemento)
      ? elemento.forEach(aplanar)
      : resultado.push(elemento);

  arr.forEach(aplanar);
  return resultado;
};

console.log(concatDos(myArrayC, myArrayD, myArrayC, myArrayD));
console.log(concatTres(myArrayC, myArrayD, myArrayC, myArrayD));
console.log(aplanarArray(myArrayC, myArrayD, myArrayC, myArrayD));
