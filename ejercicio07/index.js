'use strict';
let world = ['o','ñ','e','l','i','u','q','a','y','a','u','g'];
let aux;

// Recorremos solo hasta la mitad del array
for (let i = 0; i < world.length / 2; i++) {

   aux = world[i];
   world[i] = world[world.length - 1 - i];
   world[world.length - 1 - i] = aux;
}

console.log(world);