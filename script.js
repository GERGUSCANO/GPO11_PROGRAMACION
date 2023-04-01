const contenedorHTML = document.getElementById("contenedor-json")

fetch('./js/integrantes.json')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => consele.error(error))
    /*.then(data => {
        for(const persona of data){
            
            contenedorHTML.innerHTML+=`
            <div class="card">
                <h2>${persona.nombre}</h2>
                <img src=${persona.url}>
               
            </div>
            `
        }
        
    })*/