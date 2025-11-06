const titulo = document.getElementById("titulo");

let estadoInicial = true;

titulo.addEventListener("click", () => {
    if(estadoInicial === true) {
        titulo.innerText = "Bienvenidos"
    } else {
        titulo.innerText = "Hola soy Aladinn"
    }
    estadoInicial = !estadoInicial;
})
