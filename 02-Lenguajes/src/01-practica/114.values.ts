/* Values
Escribe una función que devuelva una lista de
valores de todas las propiedades de un objeto: */

function values(obj) {
  let value = [];

  // for (const key in obj) {
  //   if (Object.hasOwnProperty.call(obj, key)) {
  //     const element = obj[key];
  //     value.push(element);
  //   }
  // }

  //versión corta solo devolver esto
  return Object.values(obj);

  // for (const key in obj) {
  //   value.push(obj[key]);
  //   //asi saco todas las propiedades incluso las heredadas
  // }
  // return value;
}

// Ejemplo:
console.log(
  values({ id: 31, duration: 310, name: 'long video', format: 'mp4' })
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
console.log(values(john)); // ["John"]; en vez de ["John"; function() { console.log("I'm walking"); }]
