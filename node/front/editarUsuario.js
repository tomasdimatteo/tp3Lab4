import { formHandler } from "./formHandler.js"

const metodo = 'PUT'
const url = `http://localhost:3001/empleados/`

export function editarUsuario(empleado){
    traerValores(empleado)
    formHandler(url+empleado.legajo, metodo)
}

const traerValores = (empleado) => {
    document.getElementById('tituloForm').textContent = 'EDITAR EMPLEADO'
    const legajo = document.getElementById('legajoInput')
    legajo.value = empleado.legajo
    legajo.readOnly = 'readOnly'
    legajo.style.border = 0
    legajo.style.outline = 'none'
    document.getElementById('nombreInput').value = empleado.nombre
    document.getElementById('apellidoInput').value = empleado.apellido
    document.getElementById('dniInput').value = empleado.dni
    document.getElementById('sectorInput').value = empleado.sector
    document.getElementById('activoSelect').value = empleado.activo
    document.getElementById('formButton').textContent = 'EDITAR EMPLEADO'
}

