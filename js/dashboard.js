const aside = document.getElementById("aside");
const iconoOcultar = document.getElementById("iconoOcultar");

iconoOcultar.addEventListener("click", () => {
    aside.classList.toggle("oculto");
})

const hospital = document.getElementById("hospital");   

hospital.addEventListener("click", () => {
    window.location.href = "../pages/hospital.html";
})