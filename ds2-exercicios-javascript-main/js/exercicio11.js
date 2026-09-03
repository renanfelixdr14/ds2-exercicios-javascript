const botao11 = document.getElementById("exercicio11");
export function somar(numero1, numero2) {
    const resultadoSoma = numero1 + numero2;
    return resultadoSoma;
}

export function calcularMedia(nota1, nota2) {
    const resultadoMedia = (nota1 + nota2) / 2;
    return resultadoMedia;
}

export function classificarMedia(media) {
    if (media < 5) {
        return "Reprovado";
    } else if (media < 7) {
        return "Recuperação";
    } else {
        return "Aprovado";
    }
}

export function criarSaudacao(nome) {
    return `Olá ${nome}, todas as funções estão funcionando perfeitamente!`;
}

botao11.addEventListener("click", () => {
    alert("Executando Exercício 11");

    let nomeAluno = prompt("Escreva o nome do Aluno");
    let nota1 = parseFloat(prompt("Digite a primeira nota (ex: 8)"));
    let nota2 = parseFloat(prompt("Digite a segunda nota (ex: 6)"));

    if (nomeAluno !== "" && !isNaN(nota1) && !isNaN(nota2)) {
        let saudacao = criarSaudacao(nomeAluno);
        let somaDasNotas = somar(nota1, nota2);
        let mediaDoAluno = calcularMedia(nota1, nota2);
        let situacaoFinal = classificarMedia(mediaDoAluno);

        console.log(saudacao);
        console.log(`Soma das notas: ${somaDasNotas}`);
        console.log(`Média calculada: ${mediaDoAluno}`);
        console.log(`Status do Aluno: ${situacaoFinal}`);
        
        alert("Resultados enviados para o console! (Aperte F12 para ver)");
    } else {
        alert("Dados inválidos. Por favor, tente novamente preenchendo todos os campos.");
    }
});