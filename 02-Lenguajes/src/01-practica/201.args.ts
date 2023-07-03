// # Args

// Dada la siguiente función:

function fi(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
}

// ## Apartado A

// ¿Qué muestra por consola esta llamada?

fi('JS rocks!', { b: 'b' });
// 2
//  JS rocks! true
//  b false, porque en este caso el b es 1 pero arguments[1] es el objeto que paso
//  100 false, false porque no paso ningun argumento como tercero

// ## Apartado B

// ¿Y con estos argumentos?

fi({ b: 'b' });
//1.
//b, true. En este caso el objeto pasa como argumento a por lo que es el mismo que el argumento.
// undefined, true. No paso argumento por lo que undefined es igual a undefined
//  100 false, false porque no paso ningun argumento como tercero

// ## Apartado C

// ¿Y ahora?

fi('JS sucks!', null, 13);
// error al intentar hacer destructuring de null
