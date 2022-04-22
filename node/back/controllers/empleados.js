const empleadosRouter = require('express').Router()
const Empleado = require('../models/empleado')


empleadosRouter.get('/', (req, res) => { 
    Empleado.findAll()
    .then(empleados => res.json(empleados))
    .catch(e => res.json({error: e}))
})

empleadosRouter.get('/:legajo', (req, res) => {
    const {legajo} = req.params
    Empleado.findByPk(legajo)
    .then(empleado => {
          empleado ? res.send(empleado)
          : res.status(404).end()
    })
    .catch(e => res.json({error: e}))
})


empleadosRouter.post('/', async(req, res) => {
const {body} = req
const {legajo, nombre, apellido, dni, sector, activo} = body

if(!legajo || !nombre || !apellido) {
    return res.status(400).json({
        error : 'a require field is missing',
    })
}
const newEmpleado = new Empleado({
    legajo,
    nombre,
    apellido,
    dni,
    sector,
    fechaIngreso: new Date(),
    activo: activo ?? false
})

newEmpleado.save()
.then(savedEmpleado => res.status(201).json(savedEmpleado))
.catch(e => res.json({error: e}))

})

empleadosRouter.put('/:legajo', (req, res) => {
    const {legajo} = req.params
    const {body} = req
    const {nombre, apellido, dni, sector, activo} = body
    const updateEmpleado = { 
        nombre,
        apellido,
        dni,
        sector,
        activo
    }

    Empleado.update(updateEmpleado, {where: {legajo}})
    .then(result => {
        res.send(result)
    }).catch(e => res.json({error: e}))
})

empleadosRouter.delete('/:legajo', (req, res) => {
    const {legajo} = req.params
    Empleado.destroy({where : {legajo: legajo}})
    .then(result => {
    result ? res.status(204).json({eliminado: `el empleado con legajo ${legajo} fue eliminado de la base de datos`})
    : res.status(404).end()
    }).catch(e => res.json({error: e}))
  
})

module.exports = empleadosRouter