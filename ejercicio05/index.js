'use strict';
let nums = [3, 5, 6, 7, 3, 5, 6, 7];
let contadorImpares = 0;

for (let i = 0; i < nums.length; i++) {
   if (nums[i] % 2 !== 0) {
       contadorImpares = contadorImpares + 1;
   }
}

alert("Cantidad de números impares: " + contadorImpares);