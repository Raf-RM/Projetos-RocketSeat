/*
  Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:
  nome;
   - nota da primeira prova;
   - nota da segunda prova.

  Depois de criada a lista:

   [] Crie uma função que irá calcular a média das notas de cada aluno;
   [] Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela. 
*/

let studentsList = [
  {
    name: "Rafael",
    firstGrade: 8.95,
    secondGrade: 7.31,
  },{
    name: "Juliano",
    firstGrade: 8.0,
    secondGrade: 5.58,
  },{
    name: "Valéria",
    firstGrade: 9,
    secondGrade: 8.34,
  },{
    name: "Jonas",
    firstGrade: 5.98,
    secondGrade: 7,
  },{
    name: "Denise",
    firstGrade: 6.4,
    secondGrade: 7.2,
  },
]

function averageGrades(firstGrade, secondGrade){
  let average = Number(((firstGrade + secondGrade) / 2).toFixed(1))
  let aproved = average >= 7
  if(aproved) {
    return [average, true]
  }
  else{
    return [average, false]
  }
}

for(student of studentsList){
  let result = averageGrades(student.firstGrade, student.secondGrade)

  alert(result[1] ? `A nota do(a) estudante ${student.name} é: ${result[0]}
Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`: `A nota do(a) estudante ${student.name} é: ${result[0]}
Não foi dessa vez, ${student.name}! Tente novamente!`)
}