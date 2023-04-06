
function calcularIMC() {
	
	var peso = parseFloat(document.getElementById("peso").value);
	var altura = parseFloat(document.getElementById("altura").value);
	
	
	if (isNaN(peso) || isNaN(altura) || altura <= 0) {
		document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
		return;
	}
	
	
	altura = altura / 100;

	
	var imc = peso / (altura * altura);

	
	imc = Math.round(imc * 100) / 100;


	document.getElementById("resultado").textContent = "Tu IMC es: " + imc;
}

const contenido = document.querySelector("#contenido");

fetch("../../JS/archivos.json")
  .then(response => response.json())
  .then(data => {
    contenido.innerHTML = `
      <div class="box-1",>
        <h2>${data.titulo}</h2>
        <p id="descripcion">${data.descripcion}</p>
      </div>
    `;
  });
  

  
