const botao2 = document.getElementById("exercicio02");

botao2.addEventListener("click", () => {
    alert("executando Exercicio02");
    
    const nome = prompt("Nome:");
    let idade = Number(prompt("Idade:"));
    const cidade = prompt("Cidade:");
    const matriculado = Boolean(confirm("Se matriculado click em OK se não Cancelar:"));
    const avaliacao = prompt("Nota:");

    console.log("Nome: " + nome + " Tipo: " + typeof(nome));
    console.log("Idade: " + idade + " Tipo: " + typeof(idade));
    console.log("Cidade: " + cidade + " Tipo: " + typeof(cidade));
    console.log("Matriculada(o): " + matriculado + " Tipo: " + typeof(matriculado));
    console.log("Avaliação: " + avaliacao + " Tipo: " + typeof(avaliacao));
})

//O motivo de algumas variáveis foram declaradas como "const" e outras como "let" é a reatribuição,
//Variáveis com "let" permite alterar o valor da variavel pelo decorer do programa.
//Enquanto a variável "const" impede de ser recebida um novo valor após ser declarada.