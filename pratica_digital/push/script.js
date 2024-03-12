//prototype.push()
// sintaxe array.push()
// adiciona um ou mais elementos no final do Array
/*
let numeros = [1, 2, 3, 4, 5];
let total = numeros.push("não é numeros");

//console.log(numeros);
//console.log(`${numeros.length} elementos`);
//console.log(`${total} elementos`);
let cores = ["amarelo", "verde", "azul", "branco"];
let letras = ["a", "b", "c", "d"];
//Array.prototype.push.apply(numeros,letras)
//numeros.push(letras,cores)
console.log(numeros);
console.log(numeros.length); //tamanho do Array
*/
let iCarros = [
  {
    fabricante: "volkswagem",
    ano: 2018,
    modelo: "atraction",
    valor: 50.0,
  },
  { fabricante: "fiat", ano: 2020, modelo: "strada", valor: 40.0 },
  {
    fabricante: "pegeout",
    ano: 2019,
    modelo: "pegeout 307",
    valor: 35.0,
  },
];
let iCasas = [
  {
    modelo: "duplex",
    anoContrução: 2021,
    tamanho: "400m²",
    valor: 500.0,
  },
  { modelo: "apartamento", anoContrução: 2019, tamanho: "60m²", valor: 200.0 },
  {
    modelo: "casa plana",
    anoContrução: 2023,
    tamanho: "200m²",
    valor: 350.0,
  },
];
//Array.prototype.push.apply(iCarros,iCasas)
iCarros.push(iCasas);
//iCasas.push(iCarros)
//console.log(iCasas);
//console.log(iCasas.length)
console.log(iCarros);
