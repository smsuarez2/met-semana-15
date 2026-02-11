'use strict';
let binaryNumber = [0, 1, 0, 1];
let decimal = 0;
let potencia = 1; // 2^0

// Recorremos desde el último elemento
for (let i = binaryNumber.length - 1; i >= 0; i--) {

   if (binaryNumber[i] === 1) {
       decimal = decimal + potencia;
   }

   potencia = potencia * 2;
}

console.log("Número decimal:", decimal);