// Script principal do projeto Tarefa-Gerencia

// Mensagem exibida no console ao carregar o projeto
console.log("Projeto carregado com sucesso!");

// Exibe mensagem de boas-vindas no console
function mostrarMensagem() {
    console.log("Bem-vindo ao projeto de Gerência e Configuração de Serviços para Internet.");
}

// Valida se o caminho da imagem foi informado corretamente
function validarImagem(src) {
    try {
        if (!src) {
            console.error("Caminho da imagem não informado.");
            return false;
        }
        return true;
    } catch (erro) {
        console.error("Erro ao validar imagem:", erro);
        return false;
    }
}

// Executa funções de inicialização quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", function() {
    mostrarMensagem();
});
