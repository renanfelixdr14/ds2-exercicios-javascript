const botao = document.getElementById("exercicio01");

botao.addEventListener("click", () => {
    alert("executando Exercicio01");
    
    const nome = prompt("Nome Completo");
    const curso = prompt("Curso");
    const funcionalidade = prompt("O que gostaria de desenvolver com JavaScript?");

if (nome != "" & curso != "" & funcionalidade != "") {

    alert("JavaScript carregado com sucesso!");

    console.log(`Nome: ${nome}`);
    console.log(`Curso: ${curso}`);
    console.log(`O que gostaria de aprender: ${funcionalidade}`);
};
})
