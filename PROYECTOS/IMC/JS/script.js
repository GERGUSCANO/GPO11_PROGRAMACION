// ARMAR LA VALIDACION DEL JS PARA HACER EL CALCULO Y MOSTRAR POR PANTALLA

/*let nombre= document.getElementById(nombre)
alert("HOLA", nombre)
-------------------------------------------------------
let altura= document.getElementById(altura)
let peso= document.getElementById(peso)
let resultado
function calculo() {   
    resultado=peso/(altura*altura)
    alert("tu imc es", resultado)
}
calculo()*/
function actualizarBarra() {
    var valor = document.getElementById("valor").value;
    var barra = document.getElementById("barra");
    var puntero = document.createElement("div");
    var bordo = "#800000";
    puntero.classList.add("puntero");
    puntero.style.left = valor + "%";
    barra.innerHTML = "";
    barra.appendChild(puntero);
  
    
    if (valor >= 18.5 && valor<=24.9) {
      puntero.style.backgroundColor = 'green';
      } else if (valor >= 25 && valor<=29.9) {
      puntero.style.backgroundColor = 'rgb(131, 27, 114)';
      } else if (valor >= 30 && valor<=34.9) {
      puntero.style.backgroundColor = 'orange';
      }else if (valor >= 35 && valor<= 40) {
      puntero.style.backgroundColor = 'red';
      } else if (valor >=41) {
        puntero.style.backgroundColor = 'red';
        puntero.style.backgroundColor = bordo;
       } else {
        puntero.style.backgroundColor = 'blue';
    }
  }
  
  var valorInput = document.getElementById("valor");
  valorInput.addEventListener("input", actualizarBarra);
  
  actualizarBarra();
  function calcularIMC() {

	var peso = parseFloat(document.getElementById("peso").value);
	var altura = parseFloat(document.getElementById("altura").value);


	if (isNaN(peso) || isNaN(altura) || altura <= 0) {
		document.getElementById("resultado").textContent = "Por favor, ingrese valores válidos.";
		return;
	}


	altura = altura / 100;

var altura_cuadrado = altura * altura;

	var imc = peso / (altura * altura);


	imc = Math.round(imc * 100) / 100;

var imc = peso / altura_cuadrado;


imc = imc.toFixed(2);
	document.getElementById("resultado").textContent = "Tu IMC es: " + imc;
}
