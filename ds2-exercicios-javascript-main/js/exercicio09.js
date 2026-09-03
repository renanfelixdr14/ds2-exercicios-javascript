const botao9 = document.getElementById("exercicio09");

botao9.addEventListener("click", () => {
    alert("executando Exercicio 09");
    
    let entrada = "";
    let numero = 0;
    let quantidade = 0; 
    let soma = 0;
    let maior = 0;
    let menor = 0;

while (true) {
    entrada = prompt("Digite um número (0 para sair):");

    if (entrada === "0" || entrada === null) {
        alert("Saindo...");
        break;
    }
    numero = parseFloat(entrada);
    if (!isNaN(numero)) {
        quantidade++;
        soma += numero;
        
        if (quantidade === 1) {
            maior = numero;
            menor = numero;
        } else {
            if (numero > maior) {
                maior = numero;
            }
            if (numero < menor) {
                menor = numero;
            }
        }
    } else {
        alert("Valor inválido. Por favor, digite um número.");
    }
}

if (quantidade > 0) {
    let media = soma / quantidade;
    let mensagem = `Resultados:\n` +
                   `Quantidade de números: ${quantidade}\n` +
                   `Soma dos números: ${soma}\n` +
                   `Média dos valores: ${media.toFixed(2)}\n` +
                   `Maior número: ${maior}\n` +
                   `Menor número: ${menor}`;
                   
    console.log(mensagem);
    alert(mensagem);
} else {
    console.log("Nenhum número válido foi informado além do zero.");
    alert("Nenhum número válido foi informado além do zero.");
}
})
