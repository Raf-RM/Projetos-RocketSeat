/*
  Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:
  - [ ]  A soma dos dois números;
  - [ ]  A subtração dos dois números;
  - [ ]  A multiplicação dos dois números;
  - [ ]  A divisão dos dois números;
  - [ ]  O resto da divisão dos dois números;
  - [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
  - [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~.
*/

let firstNum = prompt("Digite o primeiro valor:")
let secondNum = prompt("Digite o segundo valor:")

let sum = Number(firstNum) + Number(secondNum)
let sub = Number(firstNum) - Number(secondNum)
let mult = Number(firstNum) * Number(secondNum)
let divi = Number(firstNum) / Number(secondNum)
let rest = Number(firstNum) % Number(secondNum)

let even = sum % 2 == 0
let equals = sub === 0

alert(`O resultado de soma do primeiro valor mais o segundo é: ${sum}`)
alert(`O resultado da subtração do primeiro valor menos o segundo é: ${sub}`)
alert(`O resultado da multiplicação do primeiro valor vezes o segundo é: ${mult}`)
alert(`O resultado da divisão do primeiro valor pelo segundo é: ${divi}`)
alert(`O resto da divisão do primeiro valor pelo segundo é: ${rest}`)

if(even){
  alert(`A soma de ${firstNum} + ${secondNum} é um número par: ${sum}`)
}
else{
  alert(`A soma de ${firstNum} + ${secondNum} é um número impar: ${sum}`)
}

if(equals){
  alert(`Os dois números inseridos são iguais.`)
}
else{
  alert(`Os dois números inseridos são diferentes.`)
}