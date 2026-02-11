'use strict';
let nums = [0, 0, 0, 0];
let x = 1;

// Recorremos desde el último índice hacia el primero
for (let i = nums.length - 1; i >= 0; i--) {
   nums[i] = x;
   x = x * 2;
}

console.log(nums);