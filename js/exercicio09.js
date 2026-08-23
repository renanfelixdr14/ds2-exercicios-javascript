const botao9 = document.getElementById("exercicio09");

botao9.addEventListener("click", () => {
    alert("executando Exercicio 09");
    
    let numero = "";
    let i = 0;
    let sair = false;

        while(sair != true) {
            numero = prompt("Digite um numero, 0 = sair");
            if (numero === "0" || numero === null) {
               sair = true;
               alert("Saindo...");
               break;
            }

            i++;
            console.log("numero digitado = " +numero);
            console.log("quatidade digitada = " +i);

        }
})
