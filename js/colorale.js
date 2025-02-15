const boton = document.querySelector("button");
const color = document.getElementById("color");

function generarColorHexadecimal() {
    let digitos = "123456789ABCDEF";
    let colorHex = "#";

    for (let i = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }
    return colorHex;
}

boton.addEventListener("click",function () {
    let colorAleatorio = generarColorHexadecimal();
    // actualizar el texto
    color.textContent = colorAleatorio;
    // actualizar el color del fondo
    document.body.style.backgroundColor = colorAleatorio;
})
