/* 
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
    -passo 1 - dar um jeito de pegar o elemento HTML ds bbotões
    -passo 2 - dar um jeito de indetificar o clique do usuário no botão 
    -passo 3 - desmarcar o botão selecionado anterior
    -passo 4 - marcar o botão clicando como se estivesse selecionado
    -passo 5 - esconder a imagem anteriormente selecionada
    -passo 6 - fazer aparecer a imagem correspondente ao botão clicando
    -passo 7 - esconder a informação do dragão anteriormente selecionado
    -passo 8 - mostrar a informação do dragão referente ao botão clicado
*/

//-passo 1 - dar um jeito de pegar o elemento HTML ds botões
const botoesCarossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem")
const informacoes = document.querySelectorAll(".informacoes")
//  -passo 2 - dar um jeito de indetificar o clique do usuário no botão
botoesCarossel.forEach((botao, indice)=> {
    botao.addEventListener("click", () => {
        //  -passo 3 - desmarcar o botão selecionado anterior
        desativarBotaoSelecionado();

        // -passo 4 - marcar o botão clicando como se estivesse selecionado 

        marcarBotaoSelecionado(botao);
        // -passo 5 - esconder a imagem anteriormente selecionada

        esconderImagemAtiva();
        // -passo 6 - fazer aparecer a imagem correspondente ao botão clicando

        mostrarImagemDeFundo(indice);   
        // -passo 7 - esconder a informação do dragão anteriormente selecionado 
        
        esconderInformacoesAtiva();

        // -passo 8 - mostrar a informação do dragão referente ao botão clicado
        mostrarInformacoes(indice);

    });
});

function marcarBotaoSelecionado(botao) {
    botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
    informacoes[indice].classList.add("ativa");
}

function esconderInformacoesAtiva() {
    const informacoesAtiva = document.querySelector(".informacoes.ativa");
    informacoesAtiva.classList.remove("ativa");
}

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove("ativa");
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector(".selecionado");

    botaoSelecionado.classList.remove("selecionado");
}

