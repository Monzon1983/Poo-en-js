// Nivel 1
const auto = {
  marca: "Toyota",
  modelo: "Corolla",
  arrancar() {
    return `El ${this.modelo} ha arrancado.`;
  }
};

//  Nivel 2
function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
  this.saludar = function() {
    return `Hola, soy ${this.nombre}`;
  };
}
const persona1 = new Persona("Mauro", 42);
const persona2 = new Persona("Karina", 40);

//  Nivel 3
Persona.prototype.caminar = function() {
  return "Estoy caminando";
};

//  Nivel 4
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hacerSonido() {
    return "Sonido genérico";
  }
}

class Perro extends Animal {
  hacerSonido() {
    return "Guau!";
  }
}

//  Nivel 5 (Desafío)
class CuentaBancaria {
  #saldo; 
  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }
  depositar(monto) {
    this.#saldo += monto;
  }
  retirar(monto) {
    if (monto <= this.#saldo) {
      this.#saldo -= monto;
    } else {
      console.error("Saldo insuficiente");
    }
  }
  verSaldo() {
    return this.#saldo;
  }
}

// --- TEST DE EJECUCIÓN ---

console.log("--- Nivel 1: Objeto Literal ---");
console.log(auto.arrancar()); 

console.log("\n--- Nivel 2 y 3: Prototipos ---");
console.log(persona1.saludar());
console.log(persona2.saludar());
console.log(`${persona1.nombre} dice: ${persona1.caminar()}`);

console.log("\n--- Nivel 4: Herencia ---");
const miPerro = new Perro("Firulais");
console.log(`${miPerro.nombre} hace: ${miPerro.hacerSonido()}`);

console.log("\n--- Nivel 5: Encapsulamiento ---");
const miCuenta = new CuentaBancaria(1000);
miCuenta.depositar(500);
miCuenta.retirar(200);
console.log(`Saldo actual: $${miCuenta.verSaldo()}`);

// Intento de hackeo (esto debería fallar o dar error de sintaxis si intentás acceder directo)
// console.log(miCuenta.#saldo); // Si descomentás esto, Node te va a dar un error privado.