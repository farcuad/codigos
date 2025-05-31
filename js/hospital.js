const aside = document.getElementById("aside");
const iconoOcultar = document.getElementById("iconoOcultar");

iconoOcultar.addEventListener("click", () => {
    aside.classList.toggle("oculto");
})

const hospital = document.getElementById("hospital");

hospital.addEventListener("click", () => {
    window.location.href = "../pages/hospital.html";
})

const tabla = document.getElementById("tbody");
const agregar = document.getElementById("agregar");
const guardar = document.getElementById("guardar");
const eliminar = document.getElementById("mostrar");

agregar.addEventListener("click", () => {
    inputs();
})

guardar.addEventListener("click", () => {
    guardarDatos();
})

eliminar.addEventListener("click", () => {
    mostrar();
})

function inputs() {
    var fila = tabla.insertRow();

    for (let i = 0; i < 5; i++) {
        var celdas = fila.insertCell();
        var input = document.createElement("input");
        input.type = "text";
        input.classList.add("input");
        celdas.appendChild(input);
        
    }
}

function guardarDatos() {
    var tablas = document.querySelectorAll("tr");
    var datos = []

    tablas.forEach(tablas => {
        var celdas = tablas.querySelectorAll("td");
        if (celdas.length > 0) {
            var filaData = [];
            celdas.forEach(celdas => {
                var input = celdas.querySelector("input");    
                filaData.push(input.value);
            });
            datos.push(filaData);
        }
    });

    localStorage.setItem("datosTabla", JSON.stringify(datos));
    alert("Datos guardados exitosamente");
}

function mostrar() {
    var datosGuardados = localStorage.getItem("datosTabla");

    if(datosGuardados){
        var datos = JSON.parse(datosGuardados);

        datos.forEach(filaData => {
            var fila = tabla.insertRow();
            filaData.forEach(valor => {
                var celda = fila.insertCell();
                celda.textContent = valor;  
            })
        })
        alert("Datos cargados exitosamente");
    }else{
        alert("No hay datos guardados");
    }
}





