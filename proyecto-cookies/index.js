const nombre = "Javier"
const apellido = "Lavandier"

const objeto = [
    nombre,
    apellido
]

// sessionStorage.setItem("NombreApellido", objeto)

// localStorage.setItem("NombreApellido", objeto)

const expiracion = new Date()
expiracion.setTime(expiracion.getTime() + (2 * 60 * 1000));

// document.cookie = "CaducaEn2Minutos=Datos; expires=" + expiracion.toUTCString();

console.log(document.cookie);

