const botao2 = document.getElementById("exercicio02");

botao2.addEventListener("click", () => {
    alert("executando Exercicio02");
    
    const nome = "Renan de Arruda Felix";
    let idade = Number(20);
    const cidade = "São Roque";
    const matriculado = true;
    const avaliacao = Number("10");

    console.log("Nome: " + nome + " Tipo: " + typeof(nome));
    console.log("Idade: " + idade + " Tipo: " + typeof(idade));
    console.log("Cidade: " + cidade + " Tipo: " + typeof(cidade));
    console.log("Matriculada(o): " + matriculado + " Tipo: " + typeof(matriculado));
    console.log("Avaliação: " + avaliacao + " Tipo: " + typeof(avaliacao));
})

//O motivo de algumas variáveis foram declaradas como "const" e outras como "let" é a reatribuição,
//Variáveis com "let" permite alterar o valor da variavel pelo decorer do programa.
//Enquanto a variável "const" impede de ser recebida um novo valor após ser declarada.