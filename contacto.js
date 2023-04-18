const form = document.querySelector('form');
form.addEventListener('submit', enviarFormulario);

function enviarFormulario(evento) {
	evento.preventDefault();

	const nombre = document.getElementById('nombre').value;
	const correo = document.getElementById('correo').value;
	const asunto = document.getElementById('asunto').value;
	const mensaje = document.getElementById('mensaje').value;

	const data = {
		nombre,
		correo,
		asunto,
		mensaje
	};

    Swal.fire('Gracias, a la brevedad responderemos.');
	form.reset();
}