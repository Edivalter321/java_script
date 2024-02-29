/* função
function soma(a,b) {
    
    return a + b
    
}
let resultado = soma(5,3)
console.log(resultado)
*/
/*Questao 1
function soma(numero1,numero2) {
    
    return numero1 + numero2
}
let resultado = soma (10,20)
console.log(resultado)
*/
// Questao 2 (Escreva uma função chamada maiorNumero que aceita três números como parâmetros e retorna o maior deles.)

/*let soma = 0
for (let i = 0; i <= 10; i++) {
    if(i % 2 === 0) {
        soma = soma + i
    }
    
}
console.log(soma)
*/
/* Contador de letras "a"
let frase = "banana"
let contador = 0
for (let i = 0; i < frase.length; i++) {
    if(frase[i] === "a" ) {
        contador ++
    }
    
}
console.log(contador)
*/
/*let frase = "Verifiquem se tem letra e"
let contador = 0
for (let i = 0; i < frase.length; i++) {
    if(frase[i] === "e" ) {
        contador ++
    }
    
}
console.log(contador)
*/
// - Percorrer um array de objetos e mostrar somente os que tem preço maior que 30:
/*const produtos = [
    { nome: "Camiseta", preco: 25.00 },
    { nome: "Calça", preco: 35.00 },
    { nome: "Boné", preco: 15.00 },
    { nome: "Jaqueta", preco: 50.00 }
];
for (let i = 0; i < produtos.length; i++) {
    if(produtos[i].preco > 30) {
        console.log(produtos[i])

    }
}
*/
// Somente o produto com nome Camiseta e produtos com preco menor ou igual a 25
/*
const produtos = [
    { nome: "Camiseta", preco: 25.00 },
    { nome: "Calça", preco: 35.00 },
    { nome: "Boné", preco: 15.00 },
    { nome: "Jaqueta", preco: 50.00 }
];
for (let i = 0; i < produtos.length; i++) {
    if(produtos[i].nome === "Camiseta") {
        console.log(produtos[i])

    }
    if(produtos[i].preco <= 25) {
        console.log(produtos[i])
    }
    
}
*/
// - Iterando sobre um array e verificando se os números são pares ou ímpares:

/*let pares = []
let impares = []
for (let i = 0; i <= 50; i++) {
    if (i % 2 === 0) {
        pares.push(i)
       
    } else {
        impares.push(i)
    }
    
}
console.log(impares,pares)
*/
/* - Maior numero de uma lista
let array = [2,5,10,1,50,34,100,22,34,56,33,600,800,1000]

let maior = array[0]

for (let i = 0; i < array.length; i++) {
    if(array[i] > maior)  {
        maior = array[i]
        
    }   
    
}
console.log(`O número maior no array é: ${maior}`)
*/
// Encontrar o menor número em uma lista de números
/*let array = [10,23,300,45,50,60,2,5,6]
let menor = array[0]

for (let i = -0; i < array.length; i++) {
    if(array[i] < menor) {
        menor = array[i]

    }
    
}
console.log(`O menor número do array é: ${menor}`)
*/
/* - Encontrar múltiplos de 5 em uma lista de números

let multiplos = []
let nMultiplos = []
for (let i = 1; i <= 50; i++) {
    if(i % 5 === 0){
        multiplos.push(i)

    } else {
        nMultiplos.push(i)
    }
    
}
console.log(multiplos,nMultiplos)
*/
/* Calcular e imprimir a média de números em uma lista
let lista = [20,10,12,32,4,6,5,3,2,33,45,65]
let soma = 0
let media =0
for (let i = 0; i < lista.length; i++) {
    soma = soma + lista[i]
    media = soma / lista.length
    
}
console.log(`A soma dos números da lista é de: ${soma} e a média é igual a: ${media}`)
*/
/*Escreva uma função chamada gerarPrimos que aceita um número n como parâmetro e retorna um array contendo os números primos até o número n.

function nPrimos(n) {
  let primos = [];

  function gerarPrimos(numeros) {
    for (let i = 2; i <= Math.sqrt(numeros); i++) {
      if (numeros % i === 0) {
        return false;
      }
    }
    return numeros > 1;
  }

  for (let i = 2; i <= n; i++) {
    if (gerarPrimos(i)) {
      primos.push(i);
    }
  }
  return primos;
}
const limite = 30;
const primosAteLimite = nPrimos(limite)
console.log(primosAteLimite)
*/
//Escreva uma função chamada somarArray que aceita um array de números como parâmetro e retorna a soma de todos os números do array.


