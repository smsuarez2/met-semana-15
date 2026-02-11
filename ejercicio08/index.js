'use strict';
let world = ['s','o','n','a','c','n','e','u','c'];
let aux;

// Recorremos solo hasta la mitad (entera) del array
for (let i = 0; i < Math.floor(world.length / 2); i++) {

   aux = world[i];
   world[i] = world[world.length - 1 - i];
   world[world.length - 1 - i] = aux;
}

console.log(world);
