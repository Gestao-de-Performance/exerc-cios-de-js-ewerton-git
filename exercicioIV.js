/*Exercício 4
Crie um jogo de par ou impar.*/

const primeiroJogador = 'Jogador1';

const numeroPrimeiroJogado = 3;
const numeroSegundoJogador = 4;

const soma = (numeroPrimeiroJogado + numeroSegundoJogador)

console.log(soma)

if (soma % 2 == 0){
    console.log('O número é PAR')
    console.log('Jogador1 é o vecendor')
}else {
    console.log('O número é IMPAR')
    console.log("Jogador2 é o vencerdor")
}
