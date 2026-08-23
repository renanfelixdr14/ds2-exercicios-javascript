const botao4 = document.getElementById("exercicio04");

botao4.addEventListener("click", () => {
    alert("executando Exercicio04");
    
    let idade = Number(prompt("Escreva sua Idade: "))

    console.log(`A idade digitada é: ${idade} anos.`)
    console.log("A idade que você terá daqui a 5 anos vai ser: "+(idade + 5)+" anos.")

})
