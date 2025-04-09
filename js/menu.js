const listElements = document.querySelectorAll(".list_button--click");

listElements.forEach(listElement => {
    listElement.addEventListener("click", () => {
        listElement.classList.toggle("arrow");

        let height = 0;
        let texto = listElement.nextElementSibling;
        if (texto.clientHeight == "0") {
            height = texto.scrollHeight;
        }

        texto.style.height = `${height}px`;
    })
})