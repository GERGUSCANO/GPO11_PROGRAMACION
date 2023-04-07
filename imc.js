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
const cardboxhtml=document.getElementById("carbox")
cardboxhtml.innerHTML=+`
<div class="container" , id="container">
    <div class="box-1" id="contenido">
    
    <div class="box-2" , id="valores">
        <h4>INGRESE LOS VALORES</h4>

        <form action="" class="formulario" , id="formulario">
            <label for="nombre" name="nombre" id="nombre">Ingrese su nombre</label>
            <input type="text" name="nombre" id="nombre" placeholder="Nombre Completo">
            <label for="number_edad" name="number_edad" id="number_edad">Ingresa tu edad</label>
            <input type="number_edad" name="number_edad" id="number_edad" placeholder="Edad">
            <label for="sexo">Selecciona tu sexo</label>
            <select name="sexo" id="sexo">
                <option value="Masculino" id="option">Masculino</option>
                <option value="Femenino" id="option">Femenino</option>
                <option value="Otros" id="option">Otros</option>
            </select>
            <label for="peso">Peso en kg:</label>
            <input type="number" id="peso" name="peso" required>
            <label for="altura">Altura en cm:</label>
            <input type="number" id="altura" name="altura" required><br>
            <button type="button" onclick="calcularIMC()">Calcular IMC</button>
        </form>
    <p id="resultado"></p>
    
</div>
`
onclick

/*<div class="container" , id="container">
            <div class="box-1" id="contenido">
            </div>
            <div class="box-2" , id="valores">
                <h4>INGRESE LOS VALORES</h4>

                <form action="" class="formulario" , id="formulario">
                    <label for="nombre" name="nombre" id="nombre">Ingrese su nombre</label>
                    <input type="text" name="nombre" id="nombre" placeholder="Nombre Completo">
                    <label for="number_edad" name="number_edad" id="number_edad">Ingresa tu edad</label>
                    <input type="number_edad" name="number_edad" id="number_edad" placeholder="Edad">
                    <label for="sexo">Selecciona tu sexo</label>
                    <select name="sexo" id="sexo">
                        <option value="Masculino" id="option">Masculino</option>
                        <option value="Femenino" id="option">Femenino</option>
                        <option value="Otros" id="option">Otros</option>
                    </select>
                    <label for="peso">Peso en kg:</label>
                    <input type="number" id="peso" name="peso" required>
                    <label for="altura">Altura en cm:</label>
                    <input type="number" id="altura" name="altura" required><br>
                    <button type="button" onclick="calcularIMC()">Calcular IMC</button>
                </form>
                <p id="resultado"></p>
                <script src="../IMC/JS/script.js"></script> */