/*
OBJETIVO 1 :- Quando passar o mouse em cima do personagem, temos que:

    - Adicionar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele;

    - Remover a classe selecionado do personagem que está selecionado.

OBJETIVO 2 :- Trocar a imagem e nome do personagem grande.

    - Trocar a imagem do personagem grande;

    - Trocar o nome do personagem grande.

*/

/* OBJETIVO 1 :- Quando passar o mouse em cima do personagem, temos que:

    - Adicionar a classe selecionado no personagem que passamos o mouse em cima para adicionar a animação nele;

    - Remover a classe selecionado do personagem que está selecionado.*/

const personagens = document.querySelectorAll('.personagem');

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        const idSelecionado = personagem.attributes.id.value;
        if(idSelecionado === 'ultron') return;

        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');


        /* OBJETIVO 2 :- Trocar a imagem e nome do personagem grande.
        
            - Trocar a imagem do personagem grande;
        
            - Trocar o nome do personagem grande.*/


        const imagemJogador1 = document.getElementById('personagem-jogador-1');
        imagemJogador1.src = `./src/imagens/${idSelecionado}.png`;

        const nomeJogador1 = document.getElementById('nome-jogador-1');
        const nomeSelecionado = personagem.getAttribute('data-name');
        nomeJogador1.innerHTML = nomeSelecionado;
    });
});
