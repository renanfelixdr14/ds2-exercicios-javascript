const botao12 = document.getElementById("desafio-final");
import { calcularMedia, classificarMedia } from './exercicio11.js';

botao12.addEventListener("click", () => {
    alert("executando Desafio Final");
    
    let cadastro = true;
    let contador = 0;

    while(cadastro = true) {
        alert("Cadastrando Aluno...")
        
        let classificacao = "";
        let media = "";
        
        const nomeAluno = prompt("Escreva o nome do Aluno:");
        const nomeCurso = prompt("Escreva o Curso do Aluno:");
        const nota1 = Number(prompt("Digite Nota 1"));
        const nota2 = Number(prompt("Digite Nota 2"));

        media = calcularMedia(nota1, nota2);
        classificacao = classificarMedia(media);
        
        if (nota1 >= 11 || nota1 <= 0 ||nota2 >= 11||nota2 <= 0){
            alert("Notas invalidas!!!")
            break;
        }
        
        console.log("_______________________________________________________");
        console.log(`Cadastro dos Alunos.`);
        console.log(`Nome Aluno: ${nomeAluno}.`);
        console.log(`Nome Curso: ${nomeCurso}.`);
        console.log(`Nota 1: ${nota1}.`);
        console.log(`Nota 1: ${nota2}.`);
        console.log(`Média: ${media}`);
        console.log(`Classificação: ${classificacao}.`);
        console.log("_______________________________________________________");
        
        contador++;
    }
        console.log("Alunos cadastrados: "+contador);
    
})
