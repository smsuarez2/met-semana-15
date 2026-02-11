'use strict';
let nums = [1, 2, 3, 2, 1];
let esPalindrome = true;

// Recorremos solo hasta la mitad del vector
for (let i = 0; i < Math.floor(nums.length / 2); i++) {

   if (nums[i] !== nums[nums.length - 1 - i]) {
       esPalindrome = false;
   }

}

console.log("¿Es palíndromo?", esPalindrome);
