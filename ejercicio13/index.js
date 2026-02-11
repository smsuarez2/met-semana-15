'use strict';
let nums = [1, 2, 2, 3, 4];
let duplicado = false;

// Comparar cada elemento con los demás
for (let i = 0; i < nums.length; i++) {
   for (let j = i + 1; j < nums.length; j++) {

       if (nums[i] === nums[j]) {
           duplicado = true;
       }

   }
}

console.log("¿Hay números duplicados?", duplicado);