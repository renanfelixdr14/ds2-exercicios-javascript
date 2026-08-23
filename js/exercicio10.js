const botao10 = document.getElementById("exercicio10");

botao10.addEventListener("click", () => {
    alert("executando Exercicio 10");
    
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
        
      // Não sabia que o 10 ia continuar a 07 então só copiei o meu codigo!!!
})
