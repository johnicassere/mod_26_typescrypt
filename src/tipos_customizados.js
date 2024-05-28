"use strict";
const alunos = [
    {
        nome: "Carlos",
        idade: 20,
        cursos: ["html"],
    },
    {
        nome: "Joao",
        idade: 20,
        cursos: ["html", "css"],
    },
    {
        nome: "Mauro",
        idade: 20,
        cursos: ["html", "css", "js"],
    }
];
alunos.push({
    nome: "Carol",
    cursos: ["artes"],
    idade: 25
});
const novoAluno = {
    nome: "Lucas",
    idade: 22
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
;
