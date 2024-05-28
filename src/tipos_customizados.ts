type aluno = {
    nome: string;
    idade: number;
    cursos?: string[]
}


const alunos: aluno[] = [
    {
        nome : "Carlos",
        idade : 20,
        cursos : ["html"],

    },

    {
        nome : "Joao",
        idade : 20,
        cursos : ["html", "css"],

    },

    {
        nome : "Mauro",
        idade : 20,
        cursos : ["html", "css", "js"],

    }
]

alunos.push({
    nome : "Carol",
    cursos : ["artes"],
    idade : 25
})

const novoAluno: aluno = {
    nome : "Lucas",
    idade: 22
}

function exibeAluno (aluno: aluno){
    console.log(aluno.nome);
    
};

