// Solicita ao usuário um número inteiro
const numero = parseInt(prompt("Digite um número inteiro:"));

// Verifica se o número atende aos critérios
if (numero % 2 === 0 && numero > 0 && numero < 100) {
  alert("O número atende aos critérios.");
} else {
  alert("O número não atende aos critérios.");
}

//A expressão "numero % 2 === 0" é uma expressão em JavaScript que verifica se o valor da variável "numero" é um número par. Vamos analisar a expressão em partes:
//"numero": É uma variável que representa um número inteiro (ou que pode ser convertido para um número inteiro).
//"%": O operador de módulo, representado pelo símbolo "%", retorna o resto da divisão entre dois números. Neste caso, estamos usando "numero % 2", que retorna o resto da divisão de "numero" por 2.
//"===": O operador de igualdade estrita, representado por "===" em JavaScript, verifica se o valor à esquerda é igual ao valor à direita, tanto em valor quanto em tipo de dado.
//"0": O valor literal "0" representa o número zero.
//Agora, juntando tudo, a expressão "numero % 2 === 0" verifica se o valor de "numero" é um número inteiro par. Se o resto da divisão de "numero" por 2 for igual a zero, isso significa que "numero" é um número par, e a expressão retornará true. Caso contrário, se o resto for diferente de zero, isso significa que "numero" é um número ímpar, e a expressão retornará false.

//&& (“e” lógico)
