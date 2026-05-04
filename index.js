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