let nome = document.getElementById('name-input')
let email = document.getElementById('email-input')
let telefone = document.querySelector('#telefone-input')
let mapa = document.querySelector('#mapa')



const form = document.getElementById("form")

form.addEventListener("submit", function(e) {
    e.preventDefault();
}
)

function validacaoForms() {

    if(nome.value == '' || email.value == '' || telefone.value == ''){
        alert("Todos os campos tem que ser preenchidos!")
    }else{
        alert("Dados cadastrados!!")
    }
}

function validaNome() {
    const txtNome = document.querySelector('#txtNome')
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }else {
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
    }
}

function validaEmail(){
    const txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
    }
}

function validaTelefone(){
    const txtTelefone = document.querySelector('#txtTelefone')
    if(telefone.value.length == 11) {
        txtTelefone.innerHTML = 'Numero válido'
        txtTelefone.style.color = 'green'
    }else {
        txtTelefone.innerHTML = 'Numero inválido'
        txtTelefone.style.color = 'red'
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '500px'
    mapa.style.height = '350px'
}