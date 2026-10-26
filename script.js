// Script principal do projeto
console.log("Projeto carregado com sucesso!");

function mostrarMensagem() {
    console.log("Bem-vindo ao projeto de Gerência e Configuração de Serviços para Internet.");
}

function validarImagem(src) {
    if (!src) {
        console.error("Caminho da imagem não informado.");
        return false;
    }
    return true;
}

document.addEventListener("DOMContentLoaded", function() {
    mostrarMensagem();
});
