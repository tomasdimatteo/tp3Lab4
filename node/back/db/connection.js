const {Sequelize} = require('sequelize')

const db = new Sequelize('tp3-lab4', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

db.authenticate()
.then(console.log('Database Connected'))
.catch(e => console.error('ERROR: ' + e))

module.exports = db