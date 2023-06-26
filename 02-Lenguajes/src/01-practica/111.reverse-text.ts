// # Reverse Text

// Dado un texto cualquiera, invierte el orden de las palabras.

// **TIP**: Se hace en 1 sola línea.

// ```
// Ejemplo: "Uno dos tres" --> "tres dos Uno"
// ```;

function reverseText(text) {
  return console.log(text.split(' ').reverse().join(' '));
}

reverseText('Uno dos tres');
