const numeros =[4,26,75,300,50,150];

var mayor =0;

for(var i=0; i<numeros.length; i++){
    if(numeros[i] > mayor){
        mayor = numeros [i]
    }
}

console.log(`El mayor de ${numeros} es ${mayor}`)