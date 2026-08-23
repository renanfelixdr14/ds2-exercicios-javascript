const botao7 = document.getElementById("exercicio07");

botao7.addEventListener("click", () => {
    alert("executando Exercicio 07");
    
        numeroTentativas = 0;
        let acertou = false;

        while (numeroTentativas < 3) {
            let usuario = prompt("Digite o nome de usuário:");
            let senha = prompt("Digite a senha:");

            if (usuario === "admin" && senha === "1234") {
                alert("Login bem-sucedido!");
                acertou = true;
                break;
            } else {
                numeroTentativas++;
                alert("Usuário ou senha incorretos. Tentativa " + numeroTentativas + " de 3.");
            }
        };

        if (!acertou) {
            alert("Acesso negado! Você excedeu o limite de 3 tentativas.");
        }
        
        //A diferença fundamental é a inteção: "=" guarda um valor em uma variável, enquanto "===" compara dois valores para saber se são idênticos.
})
