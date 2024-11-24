let numeros = []; 
let fibonacci = [0, 1]; 
let SumaNumero = 0; 

// For para rellenar array con números de 0 a 1000
for (let i = 0; i <= 1000; i++) {
    numeros.push(i);
    console.log("b " + numeros[i]);
}


for (let i = 2; true; i++) {
    SumaNumero = fibonacci[i - 1] + fibonacci[i - 2]; 
    if (SumaNumero > 1000) break; 
    fibonacci.push(SumaNumero); 
    console.log("entrada " + SumaNumero); 
}


let pares = fibonacci.filter(num => num % 2 === 0);
let impares = fibonacci.filter(num => num % 2 !== 0);


console.log("Secuencia de Fibonacci entre 0 y 1000:");
console.log(fibonacci);

console.log("Números pares de la secuencia de Fibonacci entre 0 y 1000:");
console.log(pares);

console.log("Números impares de la secuencia de Fibonacci entre 0 y 1000:");
console.log(impares);
