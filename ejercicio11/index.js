'use strict';
let t = parseInt(prompt("Ingrese el tamaño del vector:"));
let x = parseInt(prompt("Ingrese el valor de x:"));

let v = [];

// Llenar el vector con múltiplos de x
for (let i = 0; i < t; i++) {
   v[i] = x * (i + 1);
}

// Mostrar resultado
console.log(v);