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

const email = document.querySelector("#email")
const email2 = document.querySelector("#email2")
const senha = document.querySelector("#password")
const senha2 = document.querySelector("#password2")
const nome = document.querySelector("#name")

email.addEventListener('focus', () =>{
    email.style.borderColor = '#8880fe';
    email.style.backgroundColor = '#ede6ff'
})
email.addEventListener('blur', () =>{
    email.style.borderColor = '#fff';
    email.style.backgroundColor = '#fff'
})
email2.addEventListener('focus', () =>{
    email2.style.borderColor = '#8880fe';
    email2.style.backgroundColor = '#ede6ff'
})
email2.addEventListener('blur', () =>{
    email2.style.borderColor = '#fff';
    email2.style.backgroundColor = '#fff'
})
senha.addEventListener('focus', () =>{
    senha.style.borderColor = '#8880fe';
    senha.style.backgroundColor = '#ede6ff'
})
senha.addEventListener('blur', () =>{
    senha.style.borderColor = '#fff';
    senha.style.backgroundColor = '#fff'
})
senha2.addEventListener('focus', () =>{
    senha2.style.borderColor = '#8880fe';
    senha2.style.backgroundColor = '#ede6ff'
})
senha2.addEventListener('blur', () =>{
    senha2.style.borderColor = '#fff';
    senha2.style.backgroundColor = '#fff'
})
nome.addEventListener('focus', () =>{
    nome.style.borderColor = '#8880fe';
    nome.style.backgroundColor = '#ede6ff'
})
nome.addEventListener('blur', () =>{
    nome.style.borderColor = '#fff';
    nome.style.backgroundColor = '#fff'
})