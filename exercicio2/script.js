let numero = Number(prompt("Digite um número de 1 a 10"))
let contador; 

if(numero <=10) {
    for(let contador = 1; contador <=10; contador++) {
        console.log(numero * contador);
    }
}