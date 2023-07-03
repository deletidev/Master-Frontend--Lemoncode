// # Curry Setter

// En un formulario tenemos un objeto con los campos `name`, `surname` y `age` que representan un usuario. Crea una función `set` que reciba un objeto con los campos de usuario, el nombre de una propiedad y su valor y actualice la propiedad del objeto con el valor pasado como argumento.

// El ejercicio debe cumplir la siguiente norma: la función debe ser pura, es decir, debe crear un nuevo objeto sin modificar el existente.

const julia = { name: 'Julia', surname: 'Álvarez', age: 19 };

const set = (
  user: Record<string, any>,
  propiedad: string,
  value: string | number
) => ({
  ...user,
  [propiedad]: value
});

const updatedJulia = set(julia, 'age', 25);
console.log(updatedJulia); // { name: 'Julia', surname: 'Álvarez', age: 25 }
console.log(julia); // { name: 'Julia', surname: 'Álvarez', age: 19 }
console.log(julia === updatedJulia); // false

// ## Opcional

// Currifica dicha función para que permita crear funciones donde el argumento del nombre de la propiedad esté configurado previamente.
// Es decir, modifica la función `set` para poder crear `setName`, `setSurname` y `setAge` que reciban sólo el objeto y el valor y sepan qué propiedad actualizar.

// **TypeScript**: Además, si quieres, puedes extraer la firma de la interfaz sin ponerla en línea con la implementación.

// const julia = { name: 'Julia', surname: 'Álvarez', age: 19 };

const currySet =
  (property: string) => (user: Record<string, any>, value: string | number) =>
    set(user, property, value);

const setName = currySet('name');
const setSurname = currySet('surname');
const setAge = currySet('age');

console.log(setName(julia, 'Ana')); // { name: 'Ana', surname: 'Álvarez', age: 19 };
console.log(setSurname(julia, 'González')); // { name: 'Julia', surname: 'González', age: 19 };
console.log(setAge(julia, 25)); // { name: 'Julia', surname: 'Álvarez', age: 25 }
