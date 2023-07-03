/* Values
Escribe una función que devuelva una lista de
valores de todas las propiedades de un objeto: */

function values1(obj) {
  // let value = [];

  // for (const key in obj) {
  //   if (Object.hasOwnProperty.call(obj, key)) {
  //     value.push(element);
  //   }
  // }

  // return value;
  //versión corta solo devolver esto
  return Object.values(obj);
}

// Ejemplo:
console.log(
  values1({ id: 31, duration: 310, name: 'long video', format: 'mp4' })
); // [31, 310, "long video", "mp4"]

/* Challenge
Evita añadir las propiedades heredadas en caso de ser instancia de una clase: */

// Ejemplo:
function Person(name) {
  this.name = name;
}

Person.prototype.walk = function () {
  console.log("I'm walking");
};

var john = new Person('John');
console.log(values1(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
