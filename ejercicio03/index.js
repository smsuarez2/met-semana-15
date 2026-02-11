'use strict';
let nums = [0, 2, 4, 8];

for (let i = 0; i < nums.length; i++) {
   let fila = "";

   for (let j = i + 1; j < nums.length; j++) {
       fila = fila + nums[i] + "" + nums[j] + " ";
   }

   if (fila !== "") {
       alert(fila);
   }
}
