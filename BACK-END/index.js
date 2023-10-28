const express = require('express')
const app = express(); 
const morgan = require('morgan') // Importa el módulo morgan (para el registro de solicitudes
const cors = require('cors') // Importa el módulo cors (para permitir solicitudes cruzadas entre dominios
const cookieParser = require('cookie-parser')

app.use(cors()) // Habilita el middleware CORS para permitir solicitudes desde otros dominios
app.use(express.json()) // Habilita el middleware para analizar datos JSON en las solicitudes
app.use(morgan('dev')) // Habilita el middleware morgan con el formato 'dev' para registrar las solicitudes entrantes en la consola
app.use(cookieParser())

// Importamos rutas desde diferentes archivos
const auth_Routes = require('./src/router/auth.routes')
const conferences_Routes = require('./src/router/conferences.routes')
const document_type_Routes = require('./src/router/document_type.routes')
const event_type_Routes = require('./src/router/event_type.routes')
const faculties_Routes = require('./src/router/faculties.routes')
const headquarters_Routes = require('./src/router/headquarters.routes')
const other_events_Routes = require('./src/router/other_events.routes')
const programs_Routes = require('./src/router/programs.routes')
const project_type_Routes = require('./src/router/project_type.routes')
const project_role_Routes = require('./src/router/project_role.routes')
const projects_Routes = require('./src/router/projects.routes')
const user_type_Routes = require('./src/router/user_type.routes')


// Utilizamos las rutas importadas en la aplicación
app.use('/api',auth_Routes)
app.use(conferences_Routes)
app.use(document_type_Routes)
app.use(event_type_Routes)
app.use(faculties_Routes)
app.use(headquarters_Routes)
app.use(other_events_Routes)
app.use(programs_Routes)
app.use(project_type_Routes)
app.use(project_role_Routes)
app.use(projects_Routes)
app.use(user_type_Routes)


app.listen(3000, () => {
    console.log('El servidor esta escuchando en el puerto :', 'http://localhost:3000/')
})
