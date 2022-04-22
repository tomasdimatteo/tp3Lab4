import { formHandler } from "./formHandler.js"

const metodo = 'POST'
const url = `http://localhost:3001/empleados`

export function agregarUsuario(){
    formHandler(url, metodo)
    }