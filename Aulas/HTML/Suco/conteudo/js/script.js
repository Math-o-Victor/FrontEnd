//criando as variaveis para uso no js

let nome = window.document.getElementById("nome")
let email = document.querySelector('#email')
let suco = document.querySelector("#suco")

//largura das caixas de formulário

nome.style.width = '100%'
email.style.width = '100%'
suco.style.width = '100%'

//funções de validação

function validNome(){
    let txt = document.querySelector('#txtNome')
    if (nome.value == ""|| nome.value.length<=3){
        txt.innerHTML='Eu preciso saber quem você é! Por favor digite um nome com mais de 3 letras'
        txt.style.color= 'red'
    }
    else{
        txt.innerHTML="Tudo certo. Sabemos como te reconhecer agora."
        txt.style.color= 'green'
    }
}

function validEmail(){
    let txt = document.querySelector('#txtEmail')
    if (email.value.indexOf('@'== -1) || email.value.indexOf('.' == -1)) {
        txt.innerHTML = 'Email Inválido'
        txt.style.color = 'red'
    }else{
        txt.innerHTML = 'Email válido'
        txt.style.color = 'green'
    }
}

function validaSuco(){
    let txt = document.querySelector('#txtSuco')
        if(txt.value.length <= 100){
            txt.innerHTML = 'Por favor, resuma em até 100 caracteres.'
            txt.style.color = 'red'
            txt.style.display = 'block'
        }else{
            txt.style.display = 'none'
            sucoOk = true
        }
}