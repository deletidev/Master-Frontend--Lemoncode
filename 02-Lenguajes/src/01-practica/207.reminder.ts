// # Reminder

// El siguiente código implementa una sencilla clase que actúa como reminder, es decir, dado un mensaje, lo muestra por consola transcurrido (al menos) el tiempo indicado por el usuario:

class Reminder {
  constructor(text) {
    this.text = text;
  }

  remindMe(delay) {
    setTimeout(
      () =>
        console.log(`Your reminder after ${delay} seconds is: ${this.text}`),
      delay * 1000
    );
  }
}

// Te animamos a que crees una nueva instancia de reminder y la utilices. Escribe el mensaje que tu quieras y añade unos pocos segundos de retardo.
// Comprueba la salida por consola ... algo no funciona como esperábamos ¿verdad? ¿Sabrías decirnos que está pasando aquí? ¿Cómo lo arreglarías?

//Lo que está pasando es que this.texto, no funciona dentro de la funcion del setTimeout,ya que la función es un callback y this aquí se refiere a window al ser una función declarada con la palabra function
//Con una arrow function esto no sucede ya que el this siempre es el contexto léxico donde ha sido definida, hay otras soluciones como guardarme en remindMe el this en una varibble o llamar a la funcion con .bind(this)

const mioq = new Reminder('hola');
mioq.remindMe(1);
