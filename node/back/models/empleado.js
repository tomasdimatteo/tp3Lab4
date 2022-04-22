const {DataTypes} = require('sequelize')
const db = require('../db/connection')

const Empleado = db.define('Empleado',{
    legajo: {
        type: DataTypes.BIGINT,
        primaryKey: true
    },
    nombre: {
        type: DataTypes.STRING
    },
    apellido: {
        type: DataTypes.STRING
    },
    dni: {
        type: DataTypes.BIGINT
    },
    sector: {
        type: DataTypes.STRING
    },
    fechaIngreso: {
        type: DataTypes.DATE
    },
    activo: {
        type: DataTypes.BOOLEAN
    }
}, {
    timestamps: false
}) 

module.exports = Empleado