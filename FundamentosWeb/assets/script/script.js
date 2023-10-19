let nome = document.getElementById('name-input')
let email = document.getElementById('email-input')
let telefone = document.querySelector('#telefone-input')

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