const titulo = document.getElementById("titulo");
const textoInicial = document.getElementById("textoInicial");
let estadoInicial = true;
let posicionTexto= 0;
const textos = ["Holis", "bienvenidos", "a", "esta", "pagina"];

textoInicial.innerText = textos[0];

textoInicial.addEventListener("click", () => {
    if(posicionTexto <textos.lenght - 1) {
        posicionTexto = posicionTexto + 1;
        textoInicial.innerText = textos [posicionTexto]
       
    } else {
        posicionTexto = 0
        textoInicial.innerText =textos[posicionTexto]
       
    }
  
})

titulo.addEventListener("click", () => {
    if(estadoInicial === true) {
        titulo.innerText = "Bienvenidos";
    } else {
        titulo.innerText = "Hola soy Aladinn";
    }
    estadoInicial = !estadoInicial;
})
