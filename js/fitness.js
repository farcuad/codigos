const contacto = document.getElementById("contacto");
const telefono = document.getElementById("telefono");


contacto.addEventListener("click", () => {
    if (telefono.style.display === "none") {
        telefono.style.display = "block";
        
    }else{
        telefono.style.display = "none";
    }
});