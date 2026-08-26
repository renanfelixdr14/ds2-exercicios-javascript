const botao11 = document.getElementById("exercicio11");
 export function calcularMedia(nota1,nota2){
        const resultadoMedia = (nota1+nota2)/2
        return resultadoMedia;
    }

    
 export function classificarMedia(media){
        let final = "";

        if (media < 5){
        final = "Reprovado";
        } else if (media <= 7) {
        final = "Recuperação";
        } else {
        final = "Aprovado";
        }

        const classificação = final;
        return classificação;
    }

botao11.addEventListener("click", () => {
    alert("executando Exercicio 11");
    let nomeAluno = prompt("Escreva o nome do Aluno");
    if(nomeAluno != ""){
        criarSaudacao(nomeAluno);
    };

    function somar(numero1, numero2) {
        const resultadoSoma = numero1 + numero2;
        return resultadoSoma;
    }
    
    function criarSaudacao(nomeAluno) {
        alert("Criando Saudação...");

        console.log(`Olá ${nomeAluno} Todas as funções estão funcionando perfeitamente.`);
    }
})
