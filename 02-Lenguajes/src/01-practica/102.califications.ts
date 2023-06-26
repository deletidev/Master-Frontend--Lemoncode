/* Califications

Dada la calificación de alumnos de una clase en forma de objeto como el siguiente: */

const eso2o = {
  David: 8.25,
  Maria: 9.5,
  Jose: 6.75,
  Juan: 5.5,
  Blanca: 7.75,
  Carmen: 8
};

/* Implementa una función que muestre la media de la clase de forma textual,
 es decir, siguiendo el sistema de calificación español:

- Matrícula de Honor = 10
- Sobresaliente = entre 9 y 10
- Notable = entre 7 y 9
- Bien = entre 6 y 7
- Suficiente = entre 5 y 6
- Insuficiente = entre 4 y 5
- Muy deficiente = por debajo de 4 */
function values(obj) {
  let value = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      value.push(element);
    }
  }

  return value;
}
const MATRICULA_DE_HONOR = 0;
const SOBRESALIENTE = 1;
const NOTABLE = 2;
const BIEN = 3;
const SUFICIENTE = 4;
const INSUFICIENTE = 5;
const MUY_DEFICIENTE = 6;

const mediaState = media => {
  if (media === 10) {
    return MATRICULA_DE_HONOR;
  }
  if (media >= 9 && media < 10) {
    return SOBRESALIENTE;
  }
  if (media >= 7 && media < 9) {
    return NOTABLE;
  }
  if (media >= 6 && media < 7) {
    return BIEN;
  }
  if (media >= 5 && media < 6) {
    return SUFICIENTE;
  }
  if (media >= 4 && media < 5) {
    return INSUFICIENTE;
  }
  if (media < 4) {
    return MUY_DEFICIENTE;
  }
};

const mensaje = stado => {
  let mensaje = '';
  switch (stado) {
    case MATRICULA_DE_HONOR:
      mensaje = 'Matrícula de Honor';
      break;
    case SOBRESALIENTE:
      mensaje = 'Sobresaliente';
      break;
    case NOTABLE:
      mensaje = 'Notable';
      break;
    case BIEN:
      mensaje = 'Bien';
      break;
    case SUFICIENTE:
      mensaje = 'Suficiente';
      break;
    case INSUFICIENTE:
      mensaje = 'Insuficiente';
      break;
    case MUY_DEFICIENTE:
      mensaje = 'Muy deficiente';
      break;
  }
  return mensaje;
};

function printAverage(classResults) {
  const notas = values(eso2o);
  const sumanotas = notas.reduce((a, b) => a + b);
  // let sumanotas = notas.reduce((a, b) => {
  //   return a + b;
  // }, 10);
  const media = sumanotas / notas.length;
  const estado = mediaState(media);
  return mensaje(estado);
}

console.log(printAverage());
/* **TIP**: Rompe en tantas funciones auxiliares como necesites.

**TIP**: Utiliza el ejercicio "values" para extraer los valores de un objeto.
 En `Array.prototype` también cuentas con otro método que podría resultarte útil
  para transformar un array a un único valor. */
