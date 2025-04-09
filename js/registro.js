const usuario = document.getElementById("usuario");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password-confirmation");
const form = document.getElementById("form");
const span = document.getElementById("span");
const span2 = document.getElementById("span-2");
const parrafo = document.getElementById("warnings");
const span3 = document.getElementById("warnings-2");
const toggle = document.getElementById("toggle");
const toggle2 = document.getElementById("toggle2");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let formulario = true;
    let regexemail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (usuario.value.length < 6) {
        span.innerHTML = "El usuario no es valido <br>"
        formulario = false
    }else{
        span.innerHTML = "El usuario es valido"
    }
    if (!regexemail.test(email.value)) {
        span2.innerHTML = "El correo no es valido"
        formulario = false
    }else{
        span2.innerHTML = "El correo es valido"
    }
    if (password.value.length < 8) {
        parrafo.innerHTML = "La contraseña no es valida <br>"
        formulario = false
    }else{
        parrafo.innerHTML = "La contraseña es valida <br>"
    }
    if (password.value.length  !== password2.value.length || password2.value.length === 0) {
        span3.innerHTML = "Las contrasenas no coinciden <br>"
        formulario = false
    }else{
        span3.innerHTML = "Las contrasenas coinciden <br>"
    }
    if (formulario) {
        window.location.href = "../pages/loggin.html";
    }
})

toggle.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    toggle.classList.toggle("fa-eye-slash");
})

toggle2.addEventListener("click", () => {
    const type = password2.getAttribute("type") === "password" ? "text" : "password";
    password2.setAttribute("type", type);
    toggle.classList.toggle("fa-eye-slash");
})