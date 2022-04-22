const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

app.use(express.json())

const empleadosRouter = require('./controllers/empleados')

app.use('/empleados', empleadosRouter)

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})