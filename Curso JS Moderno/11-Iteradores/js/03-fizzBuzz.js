/**Reto Fizz Buzz 
 * En una serie del 1 al 100
 * Multiplos de 3 imprimen Fizz
 * Multiplos de 5 imprimen Buzz
 * Multiplos de 3 y 5 imprimen Fizz Buzz
 */

for(let i = 1; i <= 100; i++) {
    if( i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} Fizz Buzz`);
        continue;
    }else if ( i % 3 === 0) {
        console.log(`${i} Fizz`);
        continue;
    }else if ( i % 5 === 0) {
        console.log(`${i} Buzz`);
        continue;
    }
    console.log(i);
}

//Profe resol:
for(let i = 1; i < 100; i++) {
    if( i % 15 === 0 ){
        console.log(`${i} FIZZ BUZZ!!`);
    } else if ( i % 5 === 0 ){
        console.log(`${i} buzz`);
    } else if ( i % 3 === 0 ){
        console.log(`${i} buzz`);
    }
    console.log(i);
}