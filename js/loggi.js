const usuario = document.getElementById("usuario");
const password = document.getElementById("password");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");
const span = document.getElementById("span");
const toggle = document.getElementById("toggle");

form.addEventListener("submit" , e => {
    e.preventDefault();
    let formulario = true;
    if (usuario.value.length < 6) {
        span.innerText = "El usuario no es valido";
        formulario = false;
    }else{
        span.innerText = "El usuario es valido";
    }
    if (password.value.length < 8) {
        parrafo.innerText = "La contraseña no es valida";
        formulario = false;
    }else{
        parrafo.innerText = "La contraseña es valida";
    }if (formulario) {
        window.location.href = "../pages/fitness.html";
    }
})

toggle.addEventListener("click", () => {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    toggle.classList.toggle("fa-eye-slash");
})



