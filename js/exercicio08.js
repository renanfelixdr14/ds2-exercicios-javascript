const botao8 = document.getElementById("exercicio08");

botao8.addEventListener("click", () => {
    alert("executando Exercicio 08");
    
    let numero = Number(prompt("Escolha um numero de 1 a 10"));

        if ( numero <= 0 || numero >= 11 || numero == "" || isNaN(numero)) {
            alert("Numero inválido");
        } else {
            for (let i = 1; i < 11; i++) {
            let resultado = (numero * i);
            console.log(numero + " X " +i+ " = " +resultado);
        }
        }
})
