/*Efetuar a leitura de um valor inteiro positivo ou negativo e apresentar o número lido como sendo um
valor positivo, ou seja, o programa deverá apresentar o módulo de um número fornecido. Lembre-se 
de verificar se o número fornecido é menor que zero; sendo, multiplique-o por -1. */
var conversao, valor;

var valor = parseInt(prompt("Digite um valor positivo ou negativo:"))

if (valor < 0){
    conversao = (valor * -1)
    alert("Conversão do valor negativo: "+conversao)
}
else{
    alert("Valor ja é positivo! "+valor)
}


