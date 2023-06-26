/* Empleando el concepto de _closure_, emula el comportamiento de 2 dados.

Utiliza un _closure_ para almacenar el resultado de tirar 2 dados, y encapsula junto a estos datos, métodos que implementen la siguiente funcionalidad:

- Hacer reset, poner a `undefined` o `null` ambos resultados.
- Tirar los dados. **TIP**: Usa `Math.random()` para tiradas aleatorias.
- Imprimir el resultado por consola. Ten en cuenta lo siguiente:
  - Informa al usuario que debe tirar primero cuando corresponda.
  - Si saca doble 6, ¡dale un premio! */
console.log('************** Sin terminar, clousure *********************');

function newThrow() {
  let i = 0;
  let dado1: number;
  let dado2: number;
  return {
    reset: function () {
      dado1 = undefined;
      dado2 = undefined;
    },
    tirar: function () {
      dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
      dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    },
    print: function () {
      console.log(dado1, dado2);
    }
  };
}

let partida = newThrow();
partida.tirar();
partida.print();
