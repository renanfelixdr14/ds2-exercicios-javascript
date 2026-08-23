const botao = document.getElementById("exercicio01");

botao.addEventListener("click", () => {
    alert("executando Exercicio01");
    
    const nome = prompt("Nome Completo");
    const curso = prompt("Curso");
    const funcionalidade = prompt("O que gostaria de desenvolver com JavaScript?");

if (nome != "" & curso != "" & funcionalidade != "") {

    alert("JavaScript carregado com sucesso!");

    Console.log(`Nome: ${nome}`);
    Console.log(`Curso: ${curso}`);
    Console.log(`O que gostaria de aprender: ${funcionalidade}`);
};
})
