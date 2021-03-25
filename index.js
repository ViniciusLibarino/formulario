void function mudar(){
    const abas = document.querySelectorAll('[data-aba]');

    function esconderConteudos(){
        const conteudos = document.querySelectorAll('[data-conteudo]');
        conteudos.forEach(conteudo => conteudo.classList.add('hide'));
    }

    function inativarAbas(){
        abas.forEach(aba => aba.classList.remove('ativa'));
    }

    function ativarConteudo(valor){
        const conteudo = document.querySelector(`[data-conteudo="${valor}"]`);

        conteudo.classList.remove('hide');
    }

    function ativarAba(aba){
        aba.classList.add('ativa');
    }
    
    abas.forEach(aba => aba.addEventListener('click', function mudar(){
        const valor = aba.dataset.aba;

        return(esconderConteudos(), inativarAbas(), ativarConteudo(valor), ativarAba(aba))
    }))
}()