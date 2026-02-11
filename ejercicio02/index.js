'use strict';
//ejercicio 2
let nums = [0, 2, 4, 8];

for (let i = 0; i < nums.length; i++) {
   let fila = "";

   for (let j = i; j < nums.length; j++) {
       fila = fila + nums[i] + "" + nums[j] + " ";
   }

   alert(fila);
}
