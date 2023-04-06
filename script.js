/*------------------------------creamos un arrays con los integrantes-----------------------------------*/
const integrantes = [
    {
        "nombre": "Germán Cano",
        "nacimiento": "15/10/1982",
        "lugar_nacimiento": "San Juan",
        "profesion": "Informatico",
        "titulos": "Electrotecnia",
        "url": "./img/german1.jpg"
    },
    { 
        "nombre" : "Edgardo Blanco",
        "nacimiento" : "23/09/1980",
        "lugar_nacimiento" : "Buenos Aires",
        "profesion" : "Administrativo ",
        "titulos" : "Secundario - Perito Mercantil",
        "url" : "./img/edgardo.jpg"
    },

    {
        "nombre" : "Nicolás Dondo",
        "nacimiento" : "04/04/1980 ",
        "lugar_nacimiento" : "Buenos Aires",
        "profesion" : "Comerciante",
        "titulos" : "Bachiller, QA Manual y Automation ",
        "url" : "./img/nico.jpg"
    },

    {
        "nombre" : "Mariela Dominguez",
        "nacimiento" : "07/07/1978 ",
        "lugar_nacimiento" : "San Juan",
        "profesion" : " Asistente Técnico de Sistemas",
        "titulos" : "Programador Universitario",
        "url" : "./img/marce.jpg"

    },
    {
        "nombre" : "Marcela Cordoba",
        "nacimiento" : "24/10/1979",
        "lugar_nacimiento" : "Salta",
        "profesion" : "Terapeuta Floral (flores de bach)",
        "titulos" : "Bachiller",
        "url" : "./img/mariela.jpg"

    }
]
/*--------------------------empezamos a dar formato a las card de presentacion------------------------------------*/

const contenedorHTML = document.getElementById("contenedor")


for(const integrante of integrantes){
    contenedorHTML.innerHTML += `
    <div class= "cardbox">
        <div class= "card">
            <div class= "card-frente">
                <h2 id="name">${integrante.nombre}</h2>
                <img src=${integrante.url} id="foto">
                
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
