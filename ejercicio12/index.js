'use strict';

let nums = [1, 8, 2, 5, 5];
let m = nums[0]; // asumimos que el primero es el mayor

// Recorrer el vector
for (let i = 1; i < nums.length; i++) {
   if (nums[i] > m) {
       m = nums[i];
   }
}

console.log("El número mayor es:", m);