const botao6 = document.getElementById("exercicio06");

botao6.addEventListener("click", () => {
    alert("executando Exercicio 06");
    
    const nome = prompt("Digite seu nome:");
    let nota1 = Number(prompt("Digite Nota 1:"));
    let nota2 = Number(prompt("Digite Nota 2:"));
    
    const media = (nota1+nota2)/2;
    let final = "";
    let invalido = "";

    if (nota1 < 0 || nota1 >= 11 || nota2 < 0 || nota2 >= 11){
        alert("Nota invalida.");
        invalido = "sim";
    } else if (media < 5){
        final = "Reprovado";
    } else if (media < 7) {
        final = "Recuperação";
    } else {
        final = "Aprovado";
    }

    if(invalido == ""){
        console.log("Nome: "+nome+".");
            console.log(`Nota 1: ${nota1}.`);
            console.log(`Nota 2: ${nota2}.`);
            console.log("Media: "+media.toFixed(1)+".");
            console.log("Situação Final: "+final+".");
    }           
})
