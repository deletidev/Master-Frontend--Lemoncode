console.log('************** CHALLENGES 4 *********************');
// # Memoization

/* ## Apartado A

Implementa un mecanismo de _memoización_ para funciones costosas y tipalo con TypeScript.
 La memoización optimiza sucesivas llamadas del siguiente modo: */

const expensiveFunction = (): number => {
  console.log('Una única llamada');
  return 3.1415;
};

const memoize = <T>(funcionAGuardar: () => T): (() => T) => {
  const memo = funcionAGuardar();
  return () => memo;
};

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

/* **NOTA**: Puedes suponer que las funciones que van a ser memoizadas no llevan argumentos
 y tampoco devuelven valores `null` o `undefined`.
 */

// ## Apartado B

// ¿Podrías hacerlo en una sola línea?
//*No se simplificar más la función memoize

// ## Apartado C

// Contempla ahora la posibilidad de que la función
// a memoizar pueda tener argumentos. Por simplicidad supongamos sólo argumentos
//  primitivos: `string`, `number` o `boolean` y que no sean `undefined`.
//  ¿Podrías hacer una versión aceptando argumentos? ¿Cómo la tiparías con TS?
//   Un ejemplo de comportamiento podría ser:

let count = 0; // Comprobacion de nº de ejecuciones
const repeatText = (repetitions: number, text: string): string => (
  count++, `${text} `.repeat(repetitions).trim()
);

const memoize2 = <T>(
  funcionAGuardar: (arg1: number, arg2: string) => T
): ((arg1: number, arg2: string) => T) => {
  let diccionario = {};
  return (...args: [number, string]) => {
    const clave = args.join('_');
    if (diccionario.hasOwnProperty(clave)) {
      return diccionario[clave];
    }
    const result = funcionAGuardar(...args);
    diccionario[clave] = result;
    return result;
  };
};

const memoizedGreet = memoize2(repeatText);
console.log(memoizedGreet(1, 'pam')); // pam
console.log(memoizedGreet(3, 'chun')); // chun chun chun
console.log(memoizedGreet(1, 'pam')); // pam
console.log(memoizedGreet(3, 'chun')); // chun chun chun
console.log(count); // 2
