const botao5 = document.getElementById("exercicio05");

botao5.addEventListener("click", () => {
    alert("executando Exercicio 05");
    
    let idade = Number(prompt("Digite sua idade:"));

    if(idade == "" || idade < 1 || idade != Number){
        alert("Idade inválida.");
    } else if(idade < 16){
        alert("Não pode votar.");
    } else if (idade === 16 || idade === 17) {
        alert("Voto opcional.");
    } else {
        alert("Voto obrigatório.");
    }

})
