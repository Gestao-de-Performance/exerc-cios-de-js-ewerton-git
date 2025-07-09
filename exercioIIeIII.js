// Exercício 2 

// Crie um vetor contendo 10 números e faça a média de todos os valores. 


// Exercício 3 

// Pegue os mesmos 10 números do exercício anterior e mostre no console apenas os números primos.

// constante com uma lista de numeros
const numeros = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// variavel soma zerada
let soma = 0;

//primeiro laço de repetição somando todos os itens da listal "Length" percorre todos os itens da lista.
for (let i = 0; i <numeros.length; i++){
    soma += numeros[i];
}
console.log(soma)

// constante media, soma de todos os intens da lista dividido pela quantidade de intens.
const media = soma / numeros.length

console.log(media)

//segundo laço de repetição para saber se é primo, "%" divide a soma pela variavel i, onde vai passando por cada item da lista e se o resto da divisão for igual a 0 quer dizer que ele é primo.
for (let i = 0; i < numeros.length; i++) {
    if (soma%i == 0){
        console.log(i)
    }
}
