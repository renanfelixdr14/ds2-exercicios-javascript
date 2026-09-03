const botao3 = document.getElementById("exercicio03");

botao3.addEventListener("click", () => {
    alert("executando Exercicio03");
    
    const nome = prompt("Escreva seu Nome: ");
    const idade = prompt("Escreva sua idade: ");
    const curso = prompt("Escreva seu curso: ");
    const cidade = prompt("Escreva sua cidade: ");

    console.log("Olá meu nome é "+nome+", tenho "+idade+" anos, moro em "+cidade+" e estou cursando "+curso+".");
    console.log(`Olá meu nome é ${nome}, tenho ${idade} anos, moro em ${cidade} e estou cursando ${curso}.`);
    
})
