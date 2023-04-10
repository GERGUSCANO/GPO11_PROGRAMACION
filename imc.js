function relojActualizable() {
	const currentTime = () => {
	  const idTime = document.querySelector(`#reloj`);
	  const date = new Date();
	  let hh = date.getHours();
	  let mm = date.getMinutes();
	  let ss = date.getSeconds();
  
	  // Operadores avanzados
  
	  hh = hh < 10 ? `0${hh}` : hh;
	  mm = mm < 10 ? `0${mm}` : mm;
	  ss = ss < 10 ? `0${ss}` : ss;
  
	  let time = `${hh}:${mm}:${ss}`;
  
	  idTime.innerText = time;
	}
	currentTime();
	setInterval(currentTime, 1000);
  };
  
  relojActualizable();

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


	document.getElementById("resultado").textContent = "Hola"+  +"Tu IMC es: " + imc;
}