const frutas = ['palta','naranjas','manzanas','anana','bananas'];

console.log(frutas);
console.log(frutas.sort());

const numeros =[78, 10, 7, 1, 2];

console.log(numeros);
console.log(numeros.sort());

const num = numeros.sort(function(a,b){
    return a-b;
})
console.log(num)

const num2 =numeros.sort(function(a,b){
    return b-a;
})

console.log(num2);

const palabras = ['flavia','pablo','abeja','perro','animal'];

const palab = palabras.sort()

console.log(palab);

console.log(palabras.sort().reverse());
//posible solucion 

const palabrs = palabras.sort(function(b,a){
    if(b>a) return -1;
    return 0;
})

console.log(palabrs)