//  # This

// ¿Cual es la salida de los logs en el siguiente código? Intenta razonar, no te limites a ejecutar la solución.

var surname = 'Pérez';
var person = {
  name: 'Juan',
  surname: 'González',
  wife: {
    name: 'Ana',
    surname: 'Jiménez',
    getSurname: function () {
      return this.surname;
    }
  }
};

console.log(person.wife.getSurname());
//la salida del código de arriba es Jimenez, estoy ejecuntando la función getsurname, con respecto a wife
//this es wife

var surnameFunction = person.wife.getSurname;
console.log(surnameFunction());
//En modo estricto error no puede leer propiedades de una propiedad undefined
//En modo normal con javascript, la salida es Pérez, ya que this pasa a ser window y las variables
//son "almacenadas" como propiedades del objeto window

//la salida del código de arriba es un error
console.log(surnameFunction.call(person));
//la salida del código de arriba es Gonzalez, porque llamo a getsSurname pasando como argumento person,
// y el surname de person es Gonzalez
//this es person
