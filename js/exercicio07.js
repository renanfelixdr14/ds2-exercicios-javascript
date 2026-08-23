const botao7 = document.getElementById("exercicio07");

botao7.addEventListener("click", () => {
    alert("executando Exercicio 07");

        let sucesso = false;

        while (sucesso != true) {
        
            let usuario = prompt("Digite o nome de usuário:");
            let senha = prompt("Digite a senha:");

            if (usuario === "admin" && senha === "1234") {
                alert("Login bem-sucedido!");
                sucesso = true;
                break
            } else {
                alert("Usuário ou senha incorretos.");
            }
        };

        // fazendo Down grade no codigo por causa da atividade 10
        //A diferença fundamental é a inteção: "=" guarda um valor em uma variável, enquanto "===" compara dois valores para saber se são idênticos.
})
