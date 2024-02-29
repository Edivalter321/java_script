/* Escreva uma função chamada soma que aceita dois números como parâmetros e retorna a soma deles.

function somarNum (a,b) {
  let resultado = a + b
  console.log(resultado)
}
somarNum(32,10) //invocar a função
*/
/* Escreva uma função chamada maiorNumero que aceita três números como parâmetros e retorna o maior deles.
function maiorNumero(array) {
  return Math.max(...array)
  
}
let numeros = [20,40,10]
let numeroMaior = maiorNumero(numeros)
console.log(numeroMaior)
*/
/*Escreva uma função chamada inverterString que aceita uma string como parâmetro e retorna a string invertida.
function inverterString(str) {
  let stringInvertida = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }
  return stringInvertida;
}

let strOriginal = "Bom dia à todos e todas";
let stringInvertida = inverterString(strOriginal);
console.log(stringInvertida);
*/
/* Escreva uma função chamada calcularFatorial que aceita um número como parâmetro e retorna o fatorial desse número.
function calcularFatorial(num) {
  let fatorial = 1;
  for (let i = 2; i <= num; i++) {
    fatorial *= i;
    
  }
  return fatorial;
}
let numero = 9
let resultado = calcularFatorial(numero);
console.log(resultado);
*/
/* Escreva uma função chamada contarVogais que aceita uma string como parâmetro e retorna o número de vogais na string.
function contarVogais(v) {
  let vogal = "aáàãeéiíoõuúAÁÀÃEÉIÍOÓÕUÚ";
  let contador = 0;
  for (let i = 0; i < v.length; i++) {
    if (
      vogal.includes(v[i])) {
      contador++;
    }
  }
  return contador;
}
let texto = "O amor é lindo, mas é de vidro";
let contadorVogais = contarVogais(texto);
console.log(`O texto possui ${contadorVogais} vogais`);
*/
/*Escreva uma função chamada calcularMedia que aceita um array de números como parâmetro e retorna a média desses números.
function calcularMedia(array) {
  if (array.length === 0) {
    return 0;
  }

  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma / array.length;
}

let numeros = [10, 7, 30, 50, 43, 32, 21, 12];
let media = calcularMedia(numeros);
console.log(` a média do array é ${media}`);
*/
//Escreva uma função chamada encontrarElemento que aceita um array e um valor como parâmetros, e retorna true se o valor estiver presente no array, e false caso contrário.
/*function encontrarElemento(array, valor) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === valor) {
      return true;
    }
  }

  return false;
}

let letras = ["casa", "mesa", "escada", 10];
let valor = 10;
let encontra = encontrarElemento(letras, valor);
console.log(`O valor encontrado é ${valor} e ${encontra}`);
*/
/*Escreva uma função chamada calcularPotencia que aceita dois números como parâmetros e retorna o primeiro número elevado à potência do segundo número.
function calcularPotencia(numero1,numero2){

  return numero1 ** numero2
}
let res = calcularPotencia(3,4)
console.log(res)
*/
//Escreva uma função chamada contarCaracteres que aceita uma string e um caractere como parâmetros, e retorna o número de vezes que o caractere aparece na string.

/*function contarCaracteres(string, caractere) {
  let contador = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === caractere) {
      contador++;
    }
  }

  return contador;
}

let myString = "Bom dia pessoas";
let myCaractere = "o";
let contagem = contarCaracteres(myString, myCaractere);
console.log(`O Caractere "${myCaractere}" se repete ${contagem} vezes na string`);
*/
/*Escreva uma função chamada filtrarPares que aceita um array de números como parâmetro e retorna um novo array contendo apenas os números pares do array original.

function filtrarPares(array) {
let pares = array.filter(function(numero) {
  return numero %2 === 0
})
return pares


}
let numeros = [1,4,22,32,45,65,12,80,43,22,33]
let numerosP = filtrarPares(numeros)
console.log(numerosP)
*/
/* Escreva uma função chamada somarArray que aceita um array de números como parâmetro e retorna a soma de todos os números do array.

function somarArray(array) {
  let soma = 0
  for (let i = 0; i < array.length; i++) {

    soma += array[i]
  }
  return soma
}
let lista = [10, 2, 3, 4, 5, 3, 5, 2];
let resultado = somarArray(lista);

console.log(resultado);
*/
//Escreva uma função chamada celsiusParaFahrenheit que aceita uma temperatura em graus Celsius como parâmetro e retorna essa temperatura convertida para graus Fahrenheit.
/*function celsiusParaFahrenheit() {
  
  let fahrenheit = "";

  return formula;
}
let celcius = 35;
let formula = (35 * 9) / 5 + 32;
celsiusParaFahrenheit(formula);
console.log(`A converção de ${celcius} °C para Fahrenheit é de ${formula} °F`);
*/
/*Escreva uma função chamada calcularIMC que aceita o peso (em quilogramas) e a altura (em metros) de uma pessoa como parâmetros e retorna o Índice de Massa Corporal (IMC) dessa pessoa.
function calcularIMC(peso, altura) {
  let formula = peso / (altura * altura);

  return formula;
}
let resultado = calcularIMC(80, 1.6);
console.log(`Seum IMC é de ${resultado}kg/m²`);
*/
// Escreva uma função chamada gerarPrimos que aceita um número n como parâmetro e retorna um array contendo os números primos até o número n.

function gerarPrimos(n) {
  let primos = new Array();
  for (let i = 0; i <= n; i++) {
    if (PrimosNumeros(i)) {
      primos.push(i);
    }
  }
  return primos;
}
function PrimosNumeros(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

console.log(gerarPrimos(50));
