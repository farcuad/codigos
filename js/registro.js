const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (usuario.value.length < 6) {
        warnings += "El usuario no es valido <br>"
        entrar = true
    }
    if (!regexemail.test(email.value)) {
        warnings += "El email no es valido <br>"
        entrar = true
    }
    if (password.value.length < 8) {
        warnings += "La contraseña no es valida <br>"
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
})