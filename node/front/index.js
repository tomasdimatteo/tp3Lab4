import {editarUsuario} from './editarUsuario.js'
import { agregarUsuario } from './agregarUsuario.js'

const mostrarEmpleados = async() => {
    const response = await fetch(`http://localhost:3001/empleados`)
    const empleados = await response.json()
    
    const tabla= document.getElementById("cuerpoTabla")
    empleados.forEach((empleado) => {
        
    let newTr = document.createElement('tr');
     
    let tdLegajo = newTr.appendChild(document.createElement('td'))
    let tdNombre = newTr.appendChild(document.createElement('td'))
    let tdApellido = newTr.appendChild(document.createElement('td'))
    let tdDNI = newTr.appendChild(document.createElement('td'))
    let tdSector = newTr.appendChild(document.createElement('td'))
    let tdFechaIngreso = newTr.appendChild(document.createElement('td'))
    let tdActivo = newTr.appendChild(document.createElement('td'))
    BotonesEliminarEditar(newTr, empleado)
       
    tdLegajo.textContent = empleado.legajo
    tdNombre.textContent = empleado.nombre
    tdApellido.textContent = empleado.apellido
    tdDNI.textContent = empleado.dni
    tdSector.textContent = empleado.sector
    tdFechaIngreso.textContent = empleado.fechaIngreso
    tdActivo.textContent = empleado.activo ? 'SI' : 'NO'

    tabla.appendChild(newTr)
    }
    )
}

const BotonesEliminarEditar = (tr, empleado) => {
    let tdEditar = tr.appendChild(document.createElement('td'))
    let tdEliminar = tr.appendChild(document.createElement('td'))
    let imgEditar = tdEditar.appendChild(document.createElement('img'))
    let imgEliminar = tdEliminar.appendChild(document.createElement('img'))

    imgEditar.src = './images/editar.png'
    imgEditar.height = 25
    imgEditar.width = 25
    imgEditar.onclick = () => { 
        editarUsuario(empleado)
    }
    
    imgEliminar.src = './images/eliminar.png'
    imgEliminar.height = 25
    imgEliminar.width = 25
    imgEliminar.onclick = () => {
        eliminarEmpleado(empleado.legajo)
        tr.hidden = true
    }
}

const eliminarEmpleado = (legajo) => {
    fetch(`http://localhost:3001/empleados/${legajo}`, {
        method:'DELETE'
    })
    .then(response => response.json)
    .then(data => console.log(data))
    .catch(e => console.error(e))
}

mostrarEmpleados()
agregarUsuario()