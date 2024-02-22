// Questao 01 (imprimir números de 1 a 10)

/*for (let i = 1; i <= 10; i++) {
  console.log(${i});
}
*/
/* Questao 02 (Soma dos números de 1 a 10)
for (let i = 1; i <= 10; i++) {
  let res = i + i;
  console.log(`A soma de: ${i} + ${i} = ${res}`);
}
*/
/* Questão 03 (Soma dos cem primeiros números inteiros)
for (let i = 0; i <= 100; i++) {
  let res = i + i;
  console.log(`A soma de: ${i} + ${i} = ${res}`);
}
*/
/* Questão 04 (quadrado dos números inteiros de 15 a 200)
for (let i = 15; i <= 200; i++) {
  let res = i * i;
  console.log(`O quadrado de: ${i} é igual: ${res}`);
}
*/
/* Questão 05 (Números impares de 0 a 20)
for (let i = 1; i <= 20; i+=2) {
  console.log(`${i}`);
}
*/
/* Questão 6 (Números impares menores de 100)
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}
*/
/* Questão 7 (Números divisíveis por 4 menores que 200)
for (let i = 0; i < 200; i++) {
  if (i % 4 === 0) {
    console.log(i);
  }
}
*/
/* Questão 08 (Tabuada do 8)
for (let i = 0; i <= 10; i++) {
  let numero = 8;
  let res = i * i;
  console.log(`${i} X ${numero} = ${res}`);
}
*/
/* Questão 09 (Calcular o fatoria de 10)
let fatorial = 10;
let resultado = fatorial;
for (let i = 1; i <= 10; i++) {
  resultado *= i;
  
}
console.log(resultado);
*/
/* Questão 10 (Soma dos números impares > 10 e <30)
for (let i = 9; i < 30; i+=2) {
  let soma = i + i
  console.log(` A soma de ${i} + ${i} = ${soma} `)
  
}
*/
// Contagem progressiva
/* Questao 11 (Crie um loop que conta de 1 a 10 e imprima cada número no console.)
for (let i = 1; i <= 10; i++) {
  console.log(i)
}
*/
// Contagem regressiva
/* Questão 12 (Crie um loop que conta de 10 a 1 e imprima cada número no console
Contagem de Números Pares)
for (let i = 10; i >= 1; i -=2) {
  console.log(i);
}
*/
/* Questão 13 (oop para imprimir todos os números pares de 1 a 20 no console.
Contagem de Números pares)
for (let i = 0; i <= 20; i+=2) {
  console.log(i)
}
*/
/* Questão 14 ( números ímpares de 1 a 20 no console)
for (let i = 1; i < 20; i+=2) {
  console.log(i)
  
}
*/
/* Questão 15 ( loop que imprime a tabuada do 5 (de 1 a 10) no console.) soma
for (let i = 1; i <= 10; i++) {
  let tabuada = 5
  let res = i + tabuada
  console.log(`${i} + ${tabuada} = ${res} `)
}
*/
/* Questão 16 (loop para somar todos os números de 1 a 100 e imprima o resultado no console.
Média de Números)
for (let i = 1; i <= 100; i++) {
  let soma = i + i
  let media = soma / 100
  console.log(`${i} + ${i} = ${soma} com a média de: ${media}`)
  
}
*/
/* Questão 17 (calcula a média de todos os números de 1 a 50 e imprima o resultado no console)
for (let i = 0; i <= 50; i++) {
  let media = i / 50;
  console.log(`A média de ${i} é igual a: ${media}`)
}
*/
/* Questão 18 (calcular o fatorial de um número especificado e imprima o resultado no console.)
let n = 10;
let fatorial = n;
for (let i = 0; i < n; i++) {
  fatorial = fatorial * (n - i);
}
console.log(`O fatorial de ${n}! é = a ${fatorial}`);
*/
/* Questão 19 (calcula a soma de todos os números pares de 1 a 50 e imprima o resultado no console.)
for (let i = 2; i <= 50; i+=2) {
  let soma = i + i
  console.log(`${i} + ${i} = ${soma}`)
}
*/
/* Questao 20 (para verificar e imprimir todos os números primos de 1 a 100)
function numPrimo(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num !== 1;
}

for (let i = 2; i <= 100; i++) {
  if (numPrimo(i)) {
    console.log(i);
  }
}
*/
/* Questão 21 (imprime os primeiros 20 números da sequência de Fibonacci)
let fibo = [0,1]
for (let i = 2; i <20; i++) {
  fibo[i] = fibo[i-1] + fibo[i-2]
  
  console.log(fibo)
}
*/
// Questão 22 (loop duplo para multiplicar duas matrizes e imprima o resultado no console)
