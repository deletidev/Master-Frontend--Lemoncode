// # Swap

// ¿Sabrías intercambiar el valor de estas 2 variables en una sola línea? //Destructuring

let a = 'A';
let b = 'B';

// Implementation here, one line, one shot!
[b, a] = [a, b];

console.log(a === 'B' && b === 'A' ? 'You did it!' : 'Keep trying!');
