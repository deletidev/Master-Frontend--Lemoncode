// # Fibonacci

// Implementa una función para calcular el n-enésimo termino de la sucesión de Fibonacci. Esta sucesión tiene sus dos primeros términos prefijados:

// fib(0) = 0
// fib(1) = 1

// Y a partir de aqui, el siguiente término se calcula a partir de los dos anteriores:

// fib(2) = fib(1) + fib(0)
// ...
// fib(n + 1) = fib(n) + fib(n - 1)

// **TIP**: Es el clásico problema donde el término siguiente depende del actual y el anterior.

// **TIP**: También se puede abordar con recursividad, pero buscamos una solución iterativa para hacer uso de destructuring con múltiples asignaciones.

const fib = n => {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
    console.log(b);
    // let c = a + b;
    // a = b;
    // b = c;
  }
  //por si alguien pone 0?
  if (n === 0) {
    return n;
  }
  return b;
};

console.log(fib(7));
