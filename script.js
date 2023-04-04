/*------------------------------creamos un arrays con los integrantes-----------------------------------*/
const integrantes = [
    {
        "nombre": "Germán Gustavo Cano",
        "nacimiento": "15/10/1982",
        "lugar_nacimiento": "San Juan",
        "profesion": "Informatico",
        "titulos": "Electrotecnia",
        "url": "./img/german.jgp"
    },
    { 
        "nombre" : "Edgardo Augusto Blanco",
        "nacimiento" : "23/09/1980",
        "lugar_nacimiento" : "Buenos Aires",
        "profesion" : "Administrativo ",
        "titulos" : "Secundario - Perito Mercantil",
        "url" : "https://photos.app.goo.gl/RV3Q8g7WvLCGvBBR7"
    },

    {
        "nombre" : "Nicolás Dondo",
        "nacimiento" : "04/04/1980 ",
        "lugar_nacimiento" : "Buenos Aires",
        "profesion" : "Comerciante",
        "titulos" : "Bachiller, QA Manual y Automation ",
        "url" : "no llenar aca"
    },

    {
        "nombre" : "Mariela Dominguez",
        "nacimiento" : "07/07/1978 ",
        "lugar_nacimiento" : "San Juan",
        "profesion" : " Asistente Técnico de Sistemas",
        "titulos" : "Programador Universitario",
        "url" : "no llenar aca"

    },
    {
        "nombre" : "Marcela Cordoba",
        "nacimiento" : "24/10/1979",
        "lugar_nacimiento" : "Salta",
        "profesion" : "Terapeuta Floral (flores de bach)",
        "titulos" : "Bachiller",
        "url" : "no llenar aca"

    }
]
/*--------------------------empezamos a dar formato a las card de presentacion------------------------------------*/

const contenedorHTML = document.getElementById("contenedor")

for(const integrante of integrantes){
    contenedorHTML.innerHTML += `
    <div class= "cardbox">
        <div class= "card">
            <div class= "card-frente">
                <h2>${integrante.nombre}</h2>
                <img src= ${integrante.url}>
                
            </div>
            <div class = "card-frontal">
                <h5>Lugar de nacimiento: ${integrante.lugar_nacimiento}</h5>
                <h5>Profesión: ${integrante.profesion}</h5>
                <h5>Titulos: ${integrante.titulos}</h5>
            </div>
        </div>    
    </div>
    `
}

const formularioUsuarioHTML = document.getElementById("formularioUsuario")
formularioUsuarioHTML.addEventListener("submit", (event) => {
    event.preventDefault()
    /* console.log(event) */
    console.log(formularioUsuarioHTML.apellido.value)
})
